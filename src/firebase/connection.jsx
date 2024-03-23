// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import { createStore, applyMiddleware } from 'redux';
// import { Dispatch } from 'redux';

// Your web app's Firebase configuration
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
const auth = getAuth(app);
const database = getDatabase(app);

function Register() {
    // Get all input fields
    const username = document.getElementById('username').value;
    const firstName = document.getElementById('firstName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!validate_email(email) || !validate_password(password)) {
        alert('Email or Password do not match the registered account');
        return;
    }
    if (!validate_field(username) || !validate_field(firstName)) {
        alert('Please fill out all fields');
        return;
    }

    console.log(auth, email, password);
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;

        // Add user to the database
        const databaseRef = ref(database, 'users/' + user.uid);

        const userData = {
            firstName: firstName,
            username: username,
            email: email,
            password: password,
            last_login: Date.now()
        };

        set(databaseRef, userData)
        .then(() => {
            alert('User Created');
            Login(email, password)
        })
        .catch((error) => {
            console.log("database error", error)
            alert('An error occurred while saving user data. Please try again later.');
        });
    })
    .catch((error) => {
        // Handle specific error cases
        if (error.code === 'auth/email-already-in-use') {
            alert('Email address is already in use. Please use a different email or log in.');
        } else {
            // Handle other errors
            console.error('creation error', error);
            alert('An error occurred during registration. Please try again later.');
        }
    });
}

//dispatch was in argument
function Login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Assuming `auth` is defined outside the function scope
    // If not, you need to pass `auth` as a parameter to the Login function

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log('Logged in user:', user);
        alert('Logged in successfully');
        // Redirect or perform any other action here
        // dispatch({ type: 'SET_USER', payload: user })
    })
    .catch((error) => {
        console.error('Login error:', error);
        alert('Failed to log in. Please check your credentials and try again.');
    });
}


function validate_email(email) {
    const expression = /^[^@]+@\w+(\.\w+)+\w$/;
    return expression.test(email);
}

function validate_password(password) {
    return password.length >= 6;
}

function validate_field(field) {
    return field.trim().length > 0;
}

export { Register, Login };
