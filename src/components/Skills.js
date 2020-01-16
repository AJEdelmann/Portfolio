import React from "react";
import darthVader from "../img/darth-vader.png";
const Skills = () => {
  return (
    <div className="mySkills">
      <div className="linha">
        <div className="coluna col11 myknowledge">
          <h2 className="myh2skill">My Skills</h2>
          <ul className="skills-ul">
            <li className="myliskill">html&css</li>
            <div id="bar">
              <div id="fill1"></div>
            </div>
            <li className="myliskill">JavaScript</li>
            <div id="bar">
              <div id="fill1"></div>
            </div>
            <li className="myliskill">React</li>
            <div id="bar">
              <div id="fill2"></div>
            </div>
            <li className="myliskill">Node.js</li>
            <div id="bar">
              <div id="fill2"></div>
            </div>
            <li className="myliskill">Express</li>
            <div id="bar">
              <div id="fill3"></div>
            </div>
            <li className="myliskill">BBQ</li>
            <div id="bar">
              <div id="fill"></div>
            </div>
            <li className="myliskill">MongoDB</li>
            <div id="bar">
              <div id="fill3"></div>
            </div>
            <li className="myliskill">SQL</li>
            <div id="bar">
              <div id="fill4"></div>
            </div>
            <div className="graph-qualifications coluna">
              <div className="graphic-level-1">
                <span className="blackSpan">Uh? </span>
                <span>Next question</span>
              </div>
              <div className="graphic-level-2">
                <span className="blackSpan">Basic, </span>
                <span>you can't always win...</span>
              </div>
              <div className="graphic-level-3">
                <span className="blackSpan">Medium, </span>
                <span>I am trying to improve</span>
              </div>
              <div className="graphic-level-4">
                <span className="blackSpan">High, </span>
                <span>I'm pretty good.</span>
              </div>
              <div className="graphic-level-5">
                <span className="blackSpan"></span>
                <span>
                  I'm the <span className="blackSpan">master</span> of the
                  universe
                </span>
                <img
                  src={darthVader}
                  alt=""
                  width="80"
                  className="darth-vader"
                />
              </div>
            </div>
          </ul>
        </div>
      </div>
      <hr className="graphic-bar-1"></hr>
      <hr className="graphic-bar-2"></hr>
      <hr className="graphic-bar-3"></hr>
      <hr className="graphic-bar-4"></hr>
      <hr className="graphic-bar-5"></hr>
    </div>
  );
};

export default Skills;
