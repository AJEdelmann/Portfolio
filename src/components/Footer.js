import React from "react";
import InstaIcon from "../img/instaicon1.png";

const Footer = () => {
  return (
    <div className="footerSection">
      <div className="footer">
        <footer>
          <div>
            <p>This website was developed by Albert Edelmann with React</p>
            <div className="socialMediaIcons">
              <a
                href="https://www.instagram.com/albert_toti/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img src={InstaIcon} alt="instagram" className="myInsta" />
              </a>
              <a
                href="https://github.com/AJEdelmann"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://img.icons8.com/ios-filled/50/000000/github.png"
                  alt="github"
                  className="myGithub"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/albert-edelmann-023269199/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://img.icons8.com/ios-filled/50/000000/linkedin.png"
                  alt="linkedin"
                  className="myLinkedin"
                />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
