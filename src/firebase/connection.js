// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth } from "firebase/auth";
import { initializeDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5RE_8NpYOt98KStUn6sv9qprucGaDBvY",
  authDomain: "medical-46e8f.firebaseapp.com",
  projectId: "medical-46e8f",
  storageBucket: "medical-46e8f.appspot.com",
  messagingSenderId: "75933386452",
  appId: "1:75933386452:web:09fed232df70bfe9cedd41",
  measurementId: "G-0ZYJHNYQZJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(firebaseConfig);
const database = initializeDatabase(firebaseConfig);

function Register() {
    // Get all input fields
    username = document.getElementById('username').value;
    firstName = document.getElementById('firstName').value;
    email = document.getElementById('email').value;
    password = document.getElementById('password').value;

    if (validate_email(email) == false || validate_password(password) == false) {
        alert('Email or Password do not match the registered account');
        return;
    }
    if (validate_field(username) == false || validate_field(firstName) == false) {
        alert('please fill out all fields');
        return;
    }

    auth.createUserWithEmailAndPassword(email, password)
    .then(function() {
        var user = auth.currentUser;

        //Add user to the database
        var database_ref = database.ref();

        var user_data = {
            firstName : firstName,
            username : username,
            email : email,
            password : password,
            last_login : Date.now()
        }

        database_ref.child('users/' + user.uid).set(user_data);

        alert('User Created')
    })
    .catch(function(error) {

    })
}

function validate_email(email) {
    expression = /^[^@]+@\w+(\.\w+)+\w$/
    if (expression.test(email) == true) {
        return true;
    } else {
        // Email don't work
        return false;
    }
}

function validate_password(password) {
    if (password < 6) {
        return false;
    } else {
        return true;
    }
}

function validate_field(field) {
    if (field.length < 0) {
        return false;
    } else {
        return true;
    }
}

export default Register;