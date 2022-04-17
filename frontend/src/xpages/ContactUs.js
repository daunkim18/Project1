import React, { useState} from "react";
import '../styles/Sell.css';
import img1 from '../assets/bookstore.png';
import axios from 'axios';

function Contact() {

    const [contactSuccess, setSubmit] = useState();

    const handleSubmit = (event) => {

        event.preventDefault();
        
        var { email, phoneNum, inquiryReason, textField } = document.forms[0];
    
        let contactInfo ={
            email: email.value,
            phone: phoneNum.value,
            inquiry: inquiryReason.value,
            text: textField.value
        };

        console.log(contactInfo);
    
            axios.post(`http://localhost:3001/contactus`,contactInfo).then((response)=>{
                setSubmit(true);
            })
            .catch((error) => {
                console.log(error.response.data)
            })
    }

    const contactForm = (
        <>
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
                <form id='contactUs'onSubmit={handleSubmit}>
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
                        <option value="Request">Request a Book</option>
                        <option value="Complaint">File a Complaint</option>
                        <option value="Inquiry">Questions and Concerns</option>
                        <option value="Career">Job Application</option>
                        <option value="Other">Other Reason</option>
                    </select>
                    <br/>

                    <label for='textField'>Enter Message Here...</label>
                    <br/>
                    <textarea name='textField' rows='5' cols='50' required></textarea>

                    
                    <br/><br/>
                    <input type='submit' value='Submit' id='submitBtn'/>
                </form>
            </div>
            <div className='clear-both'/>
        </div>
        </>
        );

    return (
        <>
        <div>
        <center>
        {contactSuccess ? 
                        (<h1>Thank you your inquiry. We will contact you by email as soon as possible!</h1>)  
        : contactForm}
        </center>
        </div>
        </>
    )
}

export default Contact;