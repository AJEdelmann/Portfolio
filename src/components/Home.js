import React from "react";
import MyPhoto from "../img/totizeke.png";
import { Link, animateScroll as scroll } from "react-scroll";

const Home = () => {
  return (
    <div className="homeWrapper">
      <div className="linha myNav">
        <header className="header">
          <div className="col12">
            <nav>
              <ul>
                <li className="nav-li">
                  <Link
                    activeClass="active"
                    to="homeWrapper"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    HOME
                  </Link>
                </li>
                <li className="nav-li">
                  <Link
                    activeClass="active"
                    to="myabout"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    ABOUT
                  </Link>
                </li>
                <li className="nav-li">
                  <Link
                    activeClass="active"
                    to="mySkills"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    SKILLS
                  </Link>
                </li>
                <li className="nav-li">
                  <Link
                    activeClass="active"
                    to="section-projects"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    PROJECTS
                  </Link>
                </li>
                <li className="nav-li">
                  <Link
                    activeClass="active"
                    to="section-contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    CONTACT
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <hr />
        </header>
      </div>

      <div className="linha home">
        <div className="coluna col4 mytext">
          <h1 id="myname">
            <span>A</span>LB<span>ERT</span> J.
            <br />
            <span className="edel">
              EDE<span className="lm">LM</span>ANN
            </span>
          </h1>
          <h2 className="mywebdev">Web Developer</h2>
          <h3 className="myberlin">based in Berlin, Germany</h3>
        </div>
        <div className="coluna col8 photoDiv">
          <img src={MyPhoto} alt="Albert" className="myphoto"></img>
        </div>
      </div>
    </div>
  );
};

export default Home;
