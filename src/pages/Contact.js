import React from "react";

const Contact = () => {
  return (
    <div className="contact">
      <h1 className="email">Email:</h1>
      <p className="email-content">canuppian@gmail.com</p>
      <a
        className="linked"
        href="https://www.linkedin.com/in/ian-canupp-5b79b9141/"
      >
        <i class="fab fa-linkedin-in"></i> LinkedIn Profile
      </a>
      <br></br>
      <a className="github" href="https://github.com/iancanupp">
        <i class="fab fa-github"></i> Github Profile
      </a>
    </div>
  );
};

export default Contact;
