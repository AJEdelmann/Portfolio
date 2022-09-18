import React from "react";

const Contact = () => {
  return (
    <>
      <div className="myCode">
        <div className="contactWrap">
          <h1 id="myH1Code">Check out my code</h1>
          <div class="code-repositories-grid">
            <div className="myGitlab">
                <a
                  href="https://gitlab.com/AJEdelmann"
                  rel="noopener noreferrer"
                  target="_blank"
                  class="gitlab-footer-bg"
                >
                  <svg width="300" height="300" class="tanuki-logo" viewBox="0 0 36 36">
                    <path class="tanuki-shape tanuki-left-ear" fill="#e24329" d="M2 14l9.38 9v-9l-4-12.28c-.205-.632-1.176-.632-1.38 0z"></path>
                    <path class="tanuki-shape tanuki-right-ear" fill="#e24329" d="M34 14l-9.38 9v-9l4-12.28c.205-.632 1.176-.632 1.38 0z"></path>
                    <path class="tanuki-shape tanuki-nose" fill="#e24329" d="M18,34.38 3,14 33,14 Z"></path>
                    <path class="tanuki-shape tanuki-left-eye" fill="#fc6d26" d="M18,34.38 11.38,14 2,14 6,25Z"></path>
                    <path class="tanuki-shape tanuki-right-eye" fill="#fc6d26" d="M18,34.38 24.62,14 34,14 30,25Z"></path>
                    <path class="tanuki-shape tanuki-left-cheek" fill="#fca326" d="M2 14L.1 20.16c-.18.565 0 1.2.5 1.56l17.42 12.66z"></path>
                    <path class="tanuki-shape tanuki-right-cheek" fill="#fca326" d="M34 14l1.9 6.16c.18.565 0 1.2-.5 1.56L18 34.38z"></path>
                  </svg>
                </a>
            </div>
            <div className="myGithub">
                <a
                  href="https://github.com/AJEdelmann"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="github-footer-bg"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" fill="#171515" viewBox="0 0 496 512">
                    <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>
                  </svg>
                </a>
            </div>
          </div>
        </div> 
      </div>

      <div className="myContact">
        <div className="contactWrap">
          <h1 id="myH1Contact">Get in touch</h1>
          <div className="myInterest">
            I’m always interested in new opportunities, freelance work, and
            collaborations.
          </div>
          <div className="myInterest">
            Message me if you'd like to work with me.
          </div>
        </div>

        <div className=" col myLists">
          <ul className="myLists myDetails">
            <li>
              <span className="contactIcons">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </span> Phone: +49 174 2087356
            </li>
            <li>
              <span className="contactIcons">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </span> E-mail:
              albert.edelmann@gmail.com
            </li>
            <li>
              <a href="https://www.linkedin.com/in/albert-edelmann/" rel="noopener noreferrer" target="_blank">
              <span className="contactIcons">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </span>
              &nbsp;linkedin.com/albert-edelmann/
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="myBrief">
        <div className="briefDiv">
          <div className="contactWrap">
            <h2 className="myH2Contact">Send me a message</h2>
            <form
              method="post"
              action="https://formspree.io/albert.edelmann@gmail.com"
            >
              <div className="myBrief">
                Dear Albert,
                <br />
                My name is{" "}
                <input
                  type="text"
                  name="firstname"
                  className="clientEntry"
                  placeholder="type your name"
                />
                <br />
                and I’m contacting you regarding a job
                <br />
                for my
                <select name="employer" className="clientEntry">
                  <option value="company">company</option>
                  <option value="project">project</option>
                  <option value="brand">brand</option>
                  <option value="thing...">thing...</option>
                </select>
                <br />I would love if you could
                <select name="contactme" className="clientEntry">
                  <option value="call me">call me</option>
                  <option value="send me an e-mail">send me an e-mail</option>
                  <option value="come to my office">come to my office</option>
                  <option value="plan a video call">
                    plan a video call
                  </option>
                  <option value="send me a smoke sign">
                    send me a smoke sign
                  </option>
                </select>
                <br />
                to discuss this further. <br />
                A few more things you should know: <br />
                <br />
                <textarea name="msg" id="msg" rows="5"></textarea>
                <br />
                <div className="buttonSendMessage">
                  <input
                    type="submit"
                    className="submitButton"
                    value="Submit &raquo;"
                  />
                </div>
                <br />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
