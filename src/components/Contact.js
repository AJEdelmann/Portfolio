import React from "react";

const Contact = () => {
  return (
    <div className="section-contact">
      <div className="mycontact">
        <div className="linha">
          <div className=" coluna col12 mygetintouch">
            <h1 id="myh1contact">Get in touch</h1>
            <p className="myinterest">
              I’m always interested in new opportunities, freelance work, and
              collaborations.
              <br />
              Message me if you'd like to work with me.
            </p>
          </div>
        </div>

        <div className="linha">
          <div className=" coluna col myicon">
            {/* <i
              className="fas fa-address-card"
              style={{ fontSize: "5em", paddingTop: "10px" }}
            ></i> */}
          </div>
          <div className=" coluna col mylists">
            <ul className="mylists mydetails">
              <li>
                <span className="contactIcons">✆</span> Phone: +49 170 9812225
              </li>
              <li>
                <span className="contactIcons">✉</span> E-mail:
                albert.edelmann@gmail.com
              </li>
              <li>
                <span className="contactIcons">
                  <i className="fab fa-skype"></i>
                </span>{" "}
                Skype: albert.edelmann
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mybrief">
        <div className="linha">
          <div className=" coluna col12">
            <h2 className="myh2contact">Send me a message</h2>
            <form
              method="post"
              action="https://formspree.io/albert.edelmann@gmail.com"
            >
              <p className="mybrief">
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
                    className="botao"
                    value="Submit &raquo;"
                  />
                </div>
                <br />
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
