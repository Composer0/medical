import React, {useEffect} from 'react';
import './LoginRegister.scss'
import { Register } from '../../firebase/connection.jsx'

const RegisterPage = () => {

  useEffect(() => {
    const handleKeyPress = (event) => {
        if (event.keyCode === 13) {
            if (document.activeElement.id === 'password') {
                handleRegister();
            }
        }
    };

    document.addEventListener('keypress', handleKeyPress);

    return () => {
        document.removeEventListener('keypress', handleKeyPress);
    };
}, []);

  const handleRegister = () => {
    Register();
  }

  return (
    <div id="register-container">
      <h1 className="register-heading">Register</h1>
      <div className="input-wrapper">
        <label htmlFor="username" className="input-label">Username</label>
        <input type="text" id="username" className="input-field" />
      </div>
      <div className="input-wrapper">
        <label htmlFor="firstName" className="input-label">First Name</label>
        <input type="text" id="firstName" className="input-field" />
      </div>
      <div className="input-wrapper">
        <label htmlFor="email" className="input-label">Email</label>
        <input type="email" id="email" className="input-field" />
      </div>
      <div className="input-wrapper">
        <label htmlFor="password" className="input-label">Password</label>
        <input type="password" id="password" className="input-field" />
      </div>
      <div className='register-buttons'>
        <button id="sign-in" className="sign-in-button" onClick={handleRegister}>Sign In</button>
        <button id="google-sign-in" className="google-sign-in-button sign-in-button">Sign In with Google</button>
        <button id="apple-sign-in" className="apple-sign-in-button sign-in-button">Sign In with Apple</button>
      </div>
    </div>
  );
}

export default RegisterPage;
