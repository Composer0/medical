import React, {useEffect} from 'react';
import './LoginRegister.scss';
import { Login } from '../../firebase/connection.jsx';


const LoginPage = () => {

    useEffect(() => {
        const handleKeyPress = (event) => {
            if (event.keyCode === 13) {
                if (document.activeElement.id === 'password') {
                    handleLogin();
                }
            }
        };

        document.addEventListener('keypress', handleKeyPress);

        return () => {
            document.removeEventListener('keypress', handleKeyPress);
        };
    }, []);

    const handleLogin = () => {
        Login();
      }

    return (
        <div id="login-container">
        <h1 className="login-heading">Login</h1>
        <div className="input-wrapper">
            <label htmlFor="email" className="input-label">Email</label>
            <input type="text" id="email" className="input-field" />
        </div>
        <div className="input-wrapper">
            <label htmlFor="password" className="input-label">Password</label>
            <input type="password" id="password" className="input-field" />
        </div>
        <div className='login-buttons'>
            <button id="sign-in" className="sign-in-button" onClick={handleLogin}>Sign In</button>
            <button id="google-sign-in" className="google-sign-in-button sign-in-button">Sign In with Google</button>
            <button id="apple-sign-in" className="apple-sign-in-button sign-in-button">Sign In with Apple</button>
        </div>
        </div>
    );
}

export default LoginPage;
