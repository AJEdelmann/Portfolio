import React from "react";
import darthVader from "../img/darth-vader.png";
const Skills = () => {
  return (
    <div className="mySkills">
      <div className="col11">
        <h2 className="myh2skill">My Skills</h2>
        <ul className="skills-ul">
          <li className="skill-li">Html<span>&</span>CSS&nbsp;/&nbsp;SCSS</li>
          <div className="bar">
            <div className="fill1"></div>
          </div>
          <li className="skill-li">JavaScript</li>
          <div className="bar">
            <div className="fill1"></div>
          </div>
          <li className="skill-li">Vue.js&nbsp;(Vue2&nbsp;&&nbsp;Vue3)</li>
          <div className="bar">
            <div className="fill1"></div>
          </div>
          <li className="skill-li">React</li>
          <div className="bar">
            <div className="fill2"></div>
          </div>
          <li className="skill-li">PHP</li>
          <div className="bar">
            <div className="fill3"></div>
          </div>
          <li className="skill-li">Wordpress</li>
          <div className="bar">
            <div className="fill1"></div>
          </div>
          <li className="skill-li">BBQ</li>
          <div className="bar">
            <div className="fill"></div>
          </div>
          <li className="skill-li">Node.js<span>&</span>Express</li>
          <div className="bar">
            <div className="fill4"></div>
          </div>
          <li className="skill-li">MongoDB</li>
          <div className="bar">
            <div className="fill5"></div>
          </div>
          <div className="graph-qualifications">
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
              <img src={darthVader} alt="" width="80" className="darth-vader" />
            </div>
          </div>
        </ul>
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
