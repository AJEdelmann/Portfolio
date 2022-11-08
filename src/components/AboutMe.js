import React from "react";

const AboutMe = () => {
  return (
    <div className="myAbout">
      <div className="col11 whatIDo">
        <h2 className="myAboutH2">What do I do exactly?</h2>
        <h4 className="myAboutH4">
          For businesses, I create all sorts of artworks: websites, apps, ads,
          identities, documents,…
          <br />
          For web companies I can work as a Software and Web Developer, helping on user
          experiences, user interfaces, code development and production.
        </h4>
      </div>

      <div className="col11 howDid">
        <h2 className="myAboutH2">How did I get here?</h2>
        <h3 className="myAboutH3">Blood, sweat, tears and lot’s of coffee!</h3>
        <div className="myAboutH4">
          After working for Engineering companies selling planning, management
          and execution for eleven years, <br />I decided to turn my hobby into
          my profession and since three years I've been working fulltime as a Frontend Engineer<br />building Softwares and Websites for Real State industry.<br />I enjoy bridging the gap between the
          offline and the online worlds, so keep doing just that.
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
