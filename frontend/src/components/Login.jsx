import React from 'react';

function Login() {
    return (
        <div>
            <h1>Login or Sign Up</h1>

            <form id='loginForm'>
                <label for='username' id='username'>Username</label>
                <input type='text' name='username' placeholder='name@email.com'/>

                <label for='password' id='password'>Password</label>
                <input type='password' name='password' />

                <p>Don't have an account? <a href="/">Sign up now!</a></p>

                <input type='submit'>Login</input>
            </form>
        </div>
    )
}

export default Login;