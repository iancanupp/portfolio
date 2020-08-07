import React from "react";
import { Link } from "react-scroll";

const SQLAbout = () => {
  return (
    <div className="sql-about" id="sql">
      <h2 className="title">
        SQL
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
    </div>
  );
};

export default SQLAbout;
