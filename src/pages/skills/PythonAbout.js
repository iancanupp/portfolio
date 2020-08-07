import React from "react";
import { Link } from "react-scroll";

const PythonAbout = () => {
  return (
    <div className="python-about" id="python">
      <h2 className="title">
        Python / Golang
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

export default PythonAbout;
