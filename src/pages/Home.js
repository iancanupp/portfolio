import React from "react";
import "./Pages.css";

const Home = () => {
  return (
    <div className="home">
      <h1 className="header">About Me</h1>
      <p className="home-par">
        Hey! Thanks for checking out my portfolio, my name is Ian Canupp and I'm
        a software engineer located in Cincinnati, Ohio. I graduated in May of
        2019 with a B.S. in Computer Science from Centre College and since then,
        have put a whole year of professional experience under my belt at a
        company called Flooid. Throughout my education and early career, I find
        that back end technologies such as Java, SQL and MongoDB have been a
        large focus, and therefore a large strength of mine. However, quarantine
        has given me ample time to jump head first into many different projects,
        the latest of which is actually this very website. I'm constantly trying
        to learn new things, which right now include Golang and more React,
        something I'll talk in more depth about in the Developer Skills tab.
      </p>
      <p className="home-par">
        Outside of computer science I'm a huge basketball fan, specifically the
        New York Knicks. I know that anyone who watches even a little NBA is
        probably questioning my sanity and decision making, and of course it
        should go without saying that I do the same. That said, my passion for
        the sport has opened the way for me to discover the fascinating world of
        analytics that lies beneath. It is my goal in the near future to combine
        my accumulated understanding of these analytics with my front end
        development knowledge to create a kind of player comparison app, so I
        might be able to tell you -- with the data in front of me -- exactly how
        and why the Knicks haven't been near playoffs in over a decade. In fact,
        sports data analytics would be something of a dream job, but for now I'm
        happy to figure it out in my apartment.
      </p>
      <p className="home-par">
        To cap off the at-a-glance version of myself, I did my study abroad in
        the 'Heart of Europe,' Strasbourg, France. At risk of sounding like
        every other student who spend any time outside the US, I had an amazing
        abroad experience and continue to make efforts to maintain and build on
        the French I studied in school.
      </p>
      <p className="home-par">
        With that cursory introduction, I hope you have a better idea of who I
        am than a simple resume could tell you. Of course, if you have questions
        about anything I've said here or anything I'll say in the next tab over,
        I would be more than happy for you to reach out and I can clarify
        anything I might have left overly vague. Again, thank you for taking the
        time to navigate to this site to learn more about me, it is greatly
        appreciated and I hope to hear from you soon.
      </p>
      <p className="sign">- Ian Canupp</p>
    </div>
  );
};

export default Home;
