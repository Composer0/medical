import React from 'react';
import './LoginRegister.scss'
import '../../firebase/connection.js'
import { validatePassword } from 'firebase/auth';

const RegisterPage = () => {

  const handleRegister = () => {
    register();
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
