import React from "react";
import { Link } from "react-scroll";

const Navigation = () => {
  return (
    <div className="myNav">
      <nav>
        <ul>
          <li className="nav-li">
            <Link
              activeClass="active"
              to="home"
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
              to="myAbout"
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
              to="myContact"
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
  );
};

export default Navigation;
