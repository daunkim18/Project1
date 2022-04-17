import React from 'react';
import './Styles.css';
import img1 from '../assets/contactForm.png';

function Contact() {
    return(
        <div className='mainSpace'>
            <center>
                <h1>Contact Us</h1>
                Questions or concerns? Want a book that we don't have? Go ahead and fill out the following form and we will get back to you within 1-3 business days!
            </center>
            <br/>

            <div id='sideImg'>
                <img src={img1} width='400px' height='400px'/>
            </div>

            <div className='contactForm'>
                <form id='contactUs'>
                <label for='email'>Email</label>
                    <br/>
                    <input type='email' name='email' id='email' placeholder='name@email.com' required/>
                    <br/>

                    <label for='phoneNum'>Phone Number (Optional)</label>
                    <br/>
                    <input type='tel' name='phoneNum' id='phoneNum' placeholder='123-456-7890'/>
                    <br/>

                    <label for='inquiryReason'>Reason for Inquiry</label>
                    <br/>
                    <select name="inquiryReason" id="inquiryReason" required>
                        <option value="request">Request a book</option>
                        <option value="complaint">File a complaint</option>
                        <option value="inquiry">Questions and Concerns</option>
                        <option value='career'>Job application</option>
                        <option value="other">Other reason</option>
                    </select>
                    <br/>

                    <label for='textField'>Enter message here...</label>
                    <br/>
                    <textarea name='textField' rows='5' cols='50' required></textarea>

                    
                    <br/><br/>
                    <input type='submit' value='Submit' id='submitBtn'/>
                </form>
            </div>
            <div className='clear-both'/>
        </div>
    )
}

export default Contact;