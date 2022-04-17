import React from 'react';

import questions from './faq.json';
import Banner from './faqbanner';

function FAQ() {
  return (
    // <div className='mainSpace'>
    //   <center><h1>Frequently Asked Questions</h1></center>

    // <h4>What is Revature's Digest?</h4>
    //  Revature's Digest is an online bookstore where you can buy and sell books without having to leave the comfort of your home! Of course, we also have real life locations for those who love the atmosphere of a bookstore.
    //
    //  </div>
    <Banner>
      <Banner.Header>Frequently Asked Questions</Banner.Header>
      {questions.map((question) => (
        <Banner.Entity key={question.id}>
          <Banner.Question>{question.question}</Banner.Question>
          <Banner.Text>{question.answers}</Banner.Text>
        </Banner.Entity>
      ))}
      <br />
      <h6>
        Question not on the list? Please Contact out help desk for further
        enquiries!
      </h6>
    </Banner>
  );
}

export default FAQ;
