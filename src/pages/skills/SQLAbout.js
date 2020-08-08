import React from "react";
import { Link } from "react-scroll";

const SQLAbout = () => {
  return (
    <div className="about" id="sql">
      <h2 className="title">
        <div>
          <i className="fas fa-database"></i>
          <a className="sql-title"> Databases</a>
        </div>
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
        Coming in at a close second to Java, SQL is another language in which
        I'm very proficient. Interestingly enough, before I had taken a course
        or learned what a Relational Database Management System was, my summer
        internship at Willis Towers Watson had me writing queries in C# to pull
        data for an application they planned to build. As fun as that was, I've
        come miles from where I stood that summer in terms of understanding and
        working with RDBMSs. In college the following semester, I worked on a
        team as part of a term-long project to design, build and populate a
        database for a real-world company in Louisville. For the project we used
        a LAMP stack (Linux, Apache, MySQL, PHP) to build an application to
        present at the final. It was a bit rocky, but I learned a lot about
        connecting a front facing application to a database, as well as how to
        protect against injection attacks (Little Bobby Tables, anyone?).
      </p>
      <p className="content">
        Flash forward to today, and querying our database is usually part of my
        day-to-day activities here, where we use both SQuirrel and DBeaver
        RDBMSs. Whether I need to look up a certain promotion, find a loyalty
        customer or hunt down a geography code, I'm making sure my SQL skills
        don't get too rusty. On top of that, I've gained experience with the
        document-oriented database program, MongoDB. With it I built a weekly
        report generator for Trader Joes so that managers could select a date
        and see figures such as categorized sales totals, gift card numbers and
        overall profits. The majority of this was, of course, done in Java but
        it served as a great tool in further understanding that pipeline between
        database and application.
      </p>
      <p className="content">
        <a className="tags">Skills: </a>
        <a>SQL, MongoDB, SQuirrel SQL Client, DBeaver, Apache</a>
      </p>
    </div>
  );
};

export default SQLAbout;
