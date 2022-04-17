import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about">
      <h1>About Us</h1>
      <p>
        We are a humble little online site for Revature's Project1 made by Daun,
        Matthew, Shabana, and Uyenvy!
      </p>
      <br />
      <p>
        We believe that bookstores are essential to a healthy culture. They’re
        where authors can connect with readers, where we discover new writers,
        where children get hooked on the thrill of reading that can last a
        lifetime. They’re also anchors for our downtowns and communities. As
        more and more people buy their books online, we wanted to create an
        easy, convenient way for you to get your books and support bookstores at
        the same time. If you want to find a specific local bookstore to
        support, find them on our map and they’ll receive the full profit off
        your order. Otherwise, your order will contribute to an earnings pool
        that will be evenly distributed among independent bookstores (even those
        that don’t use Bookshop).
      </p>
      <br />
      <p>
        We also support anyone who advocates for books through our affiliate
        program, which pays a 10% commission on every sale, and gives a matching
        10% to independent bookstores. If you are an author, a website or
        magazine, have a bookclub, an organization that wants to recommend
        books, or even just a book-lover with an Instagram feed, you can sign up
        to be an affiliate, start your own shop, and be rewarded for your
        advocacy of books. Bookshop wants to give back to everyone who promotes
        books, authors, and independent bookstores!
      </p>
      <br />

      <h3>Browse through some of our videos</h3>
      <br />
      <div className="videos">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/-lsA9xnSdBU"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/zc2vANBXJO4"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/qx6xekfelE"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/IeXdpuqmw1g"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}

export default About;
