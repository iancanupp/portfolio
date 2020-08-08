import React from "react";
import { Link } from "react-scroll";

const ReactAbout = () => {
  return (
    <div className="about" id="react">
      <h2 className="title">
        <i className="fab fa-react"> React</i>
        <Link
          className="to-top"
          activeClass="active"
          to="contents"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <p>
            <i className="arrow up"></i>
          </p>
        </Link>
      </h2>
      <p className="content">
        At the moment there is no better testament to my React abilities than
        this very website. In college classes, I was only taught the basics of
        web development; things like HTML and very rudimentary PHP. Now that I
        had some time on my hands I thought it was about time I extended my
        skill set towards the other end of the stack. I am entirely self taught
        on this front, going from a Hello React page to building projects like
        this in about two weeks. In developing these apps (many which will never
        see the light of day) I've become far more comfortable with CSS and a
        number of react libraries.
      </p>
      <p className="content">
        Additionally, I've realized that the principles of web development
        aren't so different from those I was already accustomed to. For example,
        I found myself surpringly within my comfort zone when introduced to
        certain JavaScript syntaxes (arrow functions, mapping, etc) that I had
        struggled with in those afformentioned classes. And although it is not a
        traditional class-based object-oriented language, JavaScript still lends
        itself well to many of the habits I've developed in those more
        'traditional' OOP languages like Java or C++.
      </p>
      <p className="content">
        I can confidently say I've had a lot of fun learning the tools of front
        end development so far. As someone who heard a handful of JS horror
        stories from old classmates or online forums, I'm proud of my progress.
        Sure, when my align-content CSS fails to center for the millionth time,
        it's a bit frustrating, but it's all part of the experience right? I
        mentioned it briefly in the About Me section of this portfolio, but I am
        working on a React App that pulls from a basketball API source and
        allows you to compare players side by side. It's still in progress, but
        it's been an incredible and fun learning experience for me - combining
        two of my hobbies into one. I don't exactly intend for this website to
        blow anyone away. Instead, I've built it to stand as a testiment to my
        ability to
      </p>
      <ul className="content">
        <li>Learn things quickly and hands on, as well as</li>
        <li>
          Effectively communicate ideas in languages and areas I might be new to
        </li>
      </ul>
      <p className="content">
        To both of those points, I believe I've succeeded.
      </p>
      <p className="content">
        <a className="tags">Skills: </a>
        <a>React, JavaScript, CSS, API</a>
      </p>
    </div>
  );
};

export default ReactAbout;
