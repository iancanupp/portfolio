import React from "react";
import JavaAbout from "./skills/JavaAbout";
import SQLAbout from "./skills/SQLAbout";
import ReactAbout from "./skills/ReactAbout";
import PythonAbout from "./skills/PythonAbout";
import "./skills/skills.css";
import { Link } from "react-scroll";

const DevSkills = () => {
  return (
    <div className="main-skills">
      <h2 className="table-header" id="contents">
        Table of Contents
      </h2>
      <div className="scroll-links">
        <Link
          className="link"
          activeClass="active"
          to="java"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Java
        </Link>
        <Link
          className="link"
          activeClass="active"
          to="sql"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Databases
        </Link>
        <Link
          className="link"
          activeClass="active"
          to="react"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          React
        </Link>
        <Link
          className="link"
          activeClass="active"
          to="python"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Python / Golang
        </Link>
      </div>
      <JavaAbout />
      <hr className="rounded" />
      <SQLAbout />
      <hr className="rounded" />
      <ReactAbout />
      <hr className="rounded" />
      <PythonAbout />
    </div>
  );
};

export default DevSkills;
