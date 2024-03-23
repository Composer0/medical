import React from 'react';
import './LoginRegister.scss'

const LoginPage = () => {
  return (
    <div id="login-container">
      <h1 className="login-heading">Login</h1>
      <div className="input-wrapper">
        <label htmlFor="username" className="input-label">Username</label>
        <input type="text" id="username" className="input-field" />
      </div>
      <div className="input-wrapper">
        <label htmlFor="password" className="input-label">Password</label>
        <input type="password" id="password" className="input-field" />
      </div>
      <div className='login-buttons'>
        <button id="sign-in" className="sign-in-button">Sign In</button>
        <button id="google-sign-in" className="google-sign-in-button sign-in-button">Sign In with Google</button>
        <button id="apple-sign-in" className="apple-sign-in-button sign-in-button">Sign In with Apple</button>
      </div>
    </div>
  );
}

export default LoginPage;
