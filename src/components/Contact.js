import React from "react";

const Contact = () => {
  return (
    <>
      <div className="myContact">
        <div className=" col12">
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
              <span className="contactIcons">✆</span> Phone: +49 174 2087356
            </li>
            <li>
              <span className="contactIcons">✉</span> E-mail:
              albert.edelmann@gmail.com
            </li>
            <li>
              <span className="contactIcons">
                <i className="fab fa-skype"></i>
              </span>
              Skype: albert.edelmann
            </li>
          </ul>
        </div>
      </div>

      <div className="myBrief">
        <div className="briefDiv">
          <div className="col12">
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
                  <option value="no one, really">no one, really</option>
                </select>
                <br />I would love if you could
                <select name="contactme" className="clientEntry">
                  <option value="call me">call me</option>
                  <option value="send me an e-mail">send me an e-mail</option>
                  <option value="come to my office">come to my office</option>
                  <option value="plan a Skype meeting">
                    plan a Skype meeting
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
