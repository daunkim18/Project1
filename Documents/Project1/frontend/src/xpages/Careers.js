import React from 'react';
import './Careers.css';
import { useForm, ValidationError } from '@formspree/react';

function Careers() {
  const [state, handleSubmit] = useForm('xnqwgond');

  if (state.succeeded) {
    return (
      <div className="contact">
        <img
          height="100"
          width="100"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Emoji_u263a.svg/1200px-Emoji_u263a.svg.png"
          alt="smiling-emoji"
        />
        <br />
        <p>Thanks for your message! I will be contacting you if necessary</p>
      </div>
    );
  }
  return (
    //  <div className='mainSpace'>
    //   <center>
    //       <h1>Careers</h1>
    //
    //   </center>

    //    <h4>Head Librarian</h4>
    //   The head librarian is in charge of overseeing subordinates and managing the branch store.
    //  </div>
    <div className="contact">
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email : </label>
        <input
          id="email"
          type="email"
          name="email"
          required
          placeholder="@example.com"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <br />
        <textarea
          required
          id="message"
          name="message"
          placeholder="Looking for a job? Consider Revature's Digest today! Enter your message here."
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <br />
        <button type="submit" disabled={state.submitting}>
          Send Message
        </button>
      </form>
      <br />
      <div className="contact_text"></div>
    </div>
  );
}

export default Careers;
