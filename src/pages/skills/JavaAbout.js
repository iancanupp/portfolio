import React from "react";
import { Link } from "react-scroll";

const JavaAbout = () => {
  return (
    <div className="about" id="java">
      <h2 className="title">
        <i className="fab fa-java"> Java</i>
        <Link
          className="to-top"
          activeClass="active"
          to="contents"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <p className="return-text">
            <i className="arrow up"></i>
          </p>
        </Link>
      </h2>
      <p className="content">
        I've been working with Java since Computer Science 101 my freshman year
        of college, although more recently I've had the ongoing opportunity to
        apply my skills as a software engineer at Flooid. This has allowed me to
        work on brand new software features for their Vision Commerce Suite
        (VCS), a retail commerce system designed specifically for large
        retailers. Development for VCS has included work on retail point of sale
        systems as well as headless self checkout software. Alongside product
        development, I work on a small team to maintain innovative
        implementations for various clients, including Trader Joes and Phillip
        van Heusen.
      </p>
      <p className="content">
        Working in a product environment has been illuminating for numerous
        reasons, and one of the most valuable lessons I've learned so far has
        been how to design solutions with scaling in mind. In school, there was
        nothing I ever built that required anything near the level of
        abstraction I've learned to expect in my career. When working with such
        vast, complex and interfacing code, it's as vital to insure you don't
        break anything now as it is to make sure you won't break anything later.
      </p>
      <p className="content">
        Another skill I never knew I would lean so heavily on is the ability to
        read code that I hadn't written. As I type this, I realize it isn't a
        revolutionary revelation, nor one specific to Java, but it's one that
        has become absolutely invaluable when debugging or parsing through call
        heirarchies -- two things any good developer should be experienced at.
      </p>
      <p className="content">
        <a className="tags">Skills: </a>
        <a>
          Java, Object-oriented Programming, Debugging, Eclipse, IntelliJ,
          Maven, Tortoise, git
        </a>
      </p>
    </div>
  );
};

export default JavaAbout;
