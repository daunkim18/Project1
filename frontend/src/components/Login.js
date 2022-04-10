import React from 'react';
import '../styles/Login.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Signup from './SignUp';

function Login() {
    return (
        <div>
            <h1>Login or Sign Up</h1>

            <form id='loginForm'>
                <label for='username'>Username</label>
                <br/>
                <input type='email' id='username' placeholder='name@email.com' required/>
                <br/>
                <label for='password'>Password</label>
                <br/>
                <input type='password' id='password' placeholder='Password' required/>
                <br/><br/>
                    Don't have an account? <Link to='/signup'>Sign up today!</Link>
                <br/><br/>
                <button>Login</button>
            </form>
        </div>
    )
}

export default Login;