import React, {useState} from 'react';
import '../styles/Login.css';
import {Link} from 'react-router-dom';
import axios from 'axios';
import img1 from '../assets/loginBooks.png';

function Login() {

    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState();
    const [isAdminUser, setIsAdminUser] = useState();
  
    const errors = {
      uname: "Invalid Username",
      pass: "Invalid Password"
    };
  
    const handleSubmit = (event) => {
      
      event.preventDefault();
  
      var { uname, pass } = document.forms[0];
      let userData = null;

      let username = uname.value;
      let password = pass.value;

      sessionStorage.setItem('currentUser', JSON.stringify(username));
    
    const baseURL =`http://localhost:3001/username/${username}`;
  
    axios.get(baseURL).then((response) => {
          userData=response.data[0];
          
      if (userData) {
        if (userData.password !== password) {
          setErrorMessages({ name: "password", message: errors.password });
        } else {
            if(userData.role == "admin"){
              setIsAdminUser(true);
            }
            setIsSubmitted(true);
        }
      } else {
        setErrorMessages({ name: "username", message: errors.username });
      }
      });
    };
  
    const renderErrorMessage = (name) =>
      name === errorMessages.name && (
        <div className="error">{errorMessages.message}</div>
    );
  
    const renderForm = (
      <>
      <div className='loginPage'>
        <div id='loginPic'>
            <img src={img1} alt='a stack of books' width='400px' height='400px'/>
        </div>
        <div id='formField'>
          <h1>Login or Sign Up</h1>
  
            <form id='loginForm' onSubmit={handleSubmit}>
                  <label for='uname'>Username</label>
                  <br/>
                  <input type='email' id='uname' placeholder='name@email.com' required/>
                  {renderErrorMessage("uname")}
                  <br/>
                  <label for='pass'>Password</label>
                  <br/>
                  <input type='password' id='pass' placeholder='Password' required/>
                  {renderErrorMessage("pass")}
                  <br/><br/>
                      Don't have an account? <Link to='/signup'>Sign up today!</Link>
                  <br/><br/>
                  <button className='loginBtn'>Login</button>
            </form>
        </div>
      </div>

    <div id='clear-both'></div>
    </>
    );
  
    return (
      <div className="app">
        <div className="loginResult">
          {isSubmitted ? 
                        (isAdminUser ? <h1>Admin login successful!</h1> : <h1>Login successful!</h1>)  
          : renderForm}
        </div>
      </div>
    );
  }
  
  export default Login;