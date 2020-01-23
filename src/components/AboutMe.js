import React from "react";

const AboutMe = () => {
  return (
    <div className="myabout">
      {/* <div className="linha"> */}
      {/* <div className="linha"> */}
      <div className="coluna col11 whatido">
        <h2 className="myh2">What do I do exactly?</h2>
        <h4 className="myh4">
          For businesses, I create all sorts of artworks: websites, apps, ads,
          identities, documents,…
          <br />
          For web companies I can work as a Web Developer, helping on user
          experiences, user interfaces, code development and production.
        </h4>
      </div>
      {/* </div> */}

      {/* <div className="linha"> */}
      <div className="coluna col11 howdid">
        <h2 className="myh2">How did I get here?</h2>
        <h3 className="myh3">Blood, sweat, tears and lot’s of coffee!</h3>
        <span className="myh4">
          After working for Engineering companies selling planning, management
          and execution for eleven years, <br />I decided to turn my hobby into
          my profession and started to invest time and energy in order to become
          a Full Stack Web Developer. <br />I enjoy bridging the gap between the
          offline and the online worlds, so keep doing just that.
        </span>
      </div>
      {/* </div> */}
    </div>
  );
};

export default AboutMe;
