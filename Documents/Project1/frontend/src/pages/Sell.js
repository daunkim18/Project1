import React from 'react';
import '../styles/Sell.css';
import img1 from '../assets/bookstore.png';

function Sell() {
    return (
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
                <form id='sellForm'>
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

                    <label for='imageUpload'>Upload image(s)</label>
                    <br/>
                    <input type='file' name='imageUpload' id='imageUpload' required/>
                    <br/><br/>
                    <input type='submit' value='Submit' id='submitBtn'/>
                </form>
            </div>
    </div>

        <div id='clear-both'></div>
        </>
    )
}

export default Sell;