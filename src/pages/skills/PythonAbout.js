import React from "react";
import { Link } from "react-scroll";

const PythonAbout = () => {
  return (
    <div className="about" id="python">
      <h2 className="title">
        <i className="fab fa-python"> Python / Golang</i>
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
        Since Python was the first language I ever learned, something about
        coming back to that dynamically typed syntax - from something as rigid
        as Java - just feels like putting the training wheels back on. Wanting a
        bit of a challenge, I decided to pick up a langauge I had seen brought
        up as a more powerful alternative to Python: Golang. After getting Hello
        World down, I moved on to build a couple of programs to test my
        knowledge. One I will link{" "}
        <a href="https://github.com/iancanupp/sudoku">here</a> is a sudoku
        solver I wrote in Go which uses a backtracking algorithm to pass through
        and solve any given (legal) sudoku board.{" "}
      </p>{" "}
      <p className="content">
        This was a twofold learning experience, the first of course being that
        it was in Go, but then also understanding this new algorithm to utilize
        it in my solution. For those unfamiliar, a backtracking algorithm is a
        recursive algorithm which incrementally solves a puzzle one piece at a
        time, abandoning a solution once that solution fails to satisfy the
        constraints of the problem. For a sudoku, this means backtracking every
        time you are put in a position where two of the same number occupy the
        same row, column or box. The largest challenge I faced during this
        exercise was determining when that crucial rule was broken. When my
        input came in the form of a 2 dimensional text array, it was difficult
        at first to figure out how to describe to the program what constituted a
        'box.' Fortunately, I was able to overcome this by making a drawing in
        my notes and tracing the code line by line to see how it should behave.
        Eventually, a solution presented itself in the form of nested loops with
        slightly different counters to consider the bounds of the sudoku board.
      </p>
      <p className="content">
        While I haven't delved deeper into Go to explore some of the things it
        claims to be superior at, I enjoy doing small projects like this to
        expand my skills and be able to communicate technically to others. For
        me right now, nothing tops the comfort I feel in the simplicity of
        Python, but I would not be surprised if that changed in the future as I
        continue to push myself into new languages and areas of development.
      </p>
      <p className="content">
        <a className="tags">Skills: </a>
        <a>Python, Golang, Algorithms, Recursion</a>
      </p>
    </div>
  );
};

export default PythonAbout;
