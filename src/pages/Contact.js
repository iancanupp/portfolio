import React from "react";

const Contact = () => {
  return (
    <div className="contact">
      <div className="trad">
        <h1 className="email">Email</h1>
        <p className="email-content"> canuppian@gmail.com</p>
        <h1 className="phone">Phone</h1>
        <p className="phone-content">(615) 967-7236</p>
      </div>
      <div className="linkedin">
        <p className="linked">
          <a
            href="https://www.linkedin.com/in/ian-canupp-5b79b9141/"
            className="link"
          >
            LinkedIn Profile
          </a>
        </p>
        <p className="github">
          <a href="https://github.com/iancanupp" className="link">
            GitHub Profile
          </a>
        </p>
      </div>
      <div className="socials">
        <h1 className="email">Instagram</h1>
        <a
          className="email-content"
          href="https://www.instagram.com/iancanupp/"
        >
          @iancanupp
        </a>
        <h1 className="phone">Twitter</h1>
        <a className="phone-content" href="https://twitter.com/alwaysplanahe">
          @alwaysplanahe
        </a>
      </div>
    </div>
  );
};

export default Contact;
