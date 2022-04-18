import React, { useState} from "react";
import '../styles/Sell.css';
import img1 from '../assets/bookstore.png';
import axios from 'axios';

function Sell() {

    const [submitSuccess, setSubmit] = useState();

    const handleSubmit = (event) => {

        event.preventDefault();
        
        var { email, phoneNum, bookTitle, bookAuthor } = document.forms[0];
    
        let bookInfo ={
            email: email.value,
            phone: phoneNum.value,
            title: bookTitle.value,
            author: bookAuthor.value
        };
    
    
            axios.post(`http://localhost:3001/sellbooks`,bookInfo).then((response)=>{
                setSubmit(true);
            })
            .catch((error) => {
                console.log(error.response.data)
            })
    }

    const submitForm = (
        <>
          <div className='marketSection'>
            <center>
                <h1>We buy used books!</h1>
                <p>Whether it's old or new, a classic title or a recent hit, we'll gladly give your beloved books a new home! Please fill out the following form and submit clear pictures of your book! We will contact you after reviewing the condition for a price.</p>
            </center>
            
            <div id='imgArea'>
                <img src={img1} height='400px' width='400px'/>
            </div>

            <div id='formArea'>
                <form id='sellForm'onSubmit={handleSubmit}>
                    <label for='email'>Email</label>
                    <br/>
                    <input type='email' name='email' id='email' placeholder='name@email.com' required/>
                    <br/>

                    <label for='phoneNum'>Phone Number (Optional)</label>
                    <br/>
                    <input type='tel' name='phoneNum' id='phoneNum' placeholder='123-456-7890'/>
                    <br/>

                    <label for='bookTitle'>Title of the book</label>
                    <br/>
                    <input type='text' name='bookTitle' id='bookTitle' required/>
                    <br/>

                    <label for='bookAuthor'>Author of the book</label>
                    <br/>
                    <input type='text' name='bookAuthor' id='bookAuthor' required/>
                    <br/><br/>
                    <input type='submit' value='Submit' id='submitBtn'/>
                </form>
            </div>
            </div>
            <div id='clear-both'></div>
        </>
        );

    return (
        <>
        <div>
        <center>
        {submitSuccess ? 
                        (<h1>Thank you for submitting your purchase request, we will review your book and contact you as soon as possible!</h1>)  
        : submitForm}
        </center>
        </div>
        </>
    )
}

export default Sell;