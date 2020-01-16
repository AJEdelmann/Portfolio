import React from "react";
import InstaIcon from "../img/instaicon1.png";

const Footer = () => {
  return (
    <div className="footerSection">
      <div className="footer">
        <footer>
          <div className="coluna col4 mycv">
            <span>
              <a href="albert-edelmann-cv.pdf">Print a resume</a>
            </span>
          </div>
          <div className="coluna col4 copy">
            <p>
              This website was developed by Albert Edelmann with React and css
            </p>
            <div className="socialMediaIcons">
              <a
                href="https://www.instagram.com/albert_toti/"
                rel="external"
                target="_blank"
              >
                <img src={InstaIcon} alt="instagram" className="myinsta" />
              </a>
              <a
                href="https://github.com/AJEdelmann"
                rel="external"
                target="_blank"
              >
                <img
                  src="https://img.icons8.com/ios-filled/50/000000/github.png"
                  alt="github"
                  className="myGithub"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/albert-edelmann-023269199/"
                rel="external"
                target="_blank"
              >
                <img
                  src="https://img.icons8.com/ios-filled/50/000000/linkedin.png"
                  alt="linkedin"
                  className="myLinkedin"
                />
              </a>
            </div>
          </div>
          <div className="coluna col4 myprivacy">
            <span className="myprivacy">
              <a href="privacy.html">Privacy policy</a>
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
