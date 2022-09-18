import React from "react";
import MyPhoto from "../img/totizeke.png";

const Home = () => {
  return (
    <div className="home">
      <div className="col4 myText">
        <h1 id="myName">
          <span className="aert">A</span>
          <span className="lbj">LB</span>
          <span className="aert">ERT </span>
          <span className="lbj">J.</span>
          <br />
          <span className="edelann">
            EDE<span className="lm">LM</span>ANN
          </span>
        </h1>
        <h2 className="myWebDev">Software Engineer</h2>
        <h3 className="myBerlin">based in Berlin, Germany</h3>
      </div>
      <div className="col8 photoDiv">
        <img src={MyPhoto} alt="Albert" className="myPhoto" loading="lazy"></img>
      </div>
    </div>
  );
};

export default Home;
