import React from "react";
import PianoPlayer from "../img/piano-player.jpeg";
import Ravenous from "../img/ravenous.jpeg";
import Ear from "../img/ear.jpeg";
import Jammming from "../img/jammming.jpeg";

const Portfolio = () => {
  return (
    <div className="section-projects">
      <div className="row my-projects">
        <div className="row w-100 text-left align-items-center">
          <div className="col">
            <h2 className="myProjectsH2 text-black font-weight-bold mt-4">
              Selected projects
            </h2>
            <br />
          </div>
        </div>
        <div className="card-deck my-cards">
          <div className="card" id="my-card-space">
            <img
              className="card-img-top"
              src={PianoPlayer}
              height="200vh"
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title font-weight-bold">Piano Player</h5>
              <p className="card-text">
                <p>
                  <span className="blackSpan">Description: </span>This piano
                  player can be played with computer keyboards, have fun
                  playing!
                </p>
                <p>
                  <span className="blackSpan">Technologies used: </span>Pure
                  JavaScript, html and css
                </p>
              </p>
              <div className="visit-website">
                <a
                  href="https://ajedelmann.github.io/piano-player/index.html"
                  rel="external"
                  target="_blank"
                >
                  Visit website
                </a>
              </div>
            </div>
          </div>
          <div className="card" id="my-card-space">
            <img
              className="card-img-top"
              src={Ravenous}
              height="200vh"
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title font-weight-bold">React Ravenous</h5>
              <p className="card-text">
                <p>
                  <span className="blackSpan">Description: </span>A Yelp-like
                  clone fetching data from Yelp API
                </p>
                <p>
                  <span className="blackSpan">Technologies used: </span>React,
                  Node.js and css
                </p>
              </p>
              <div className="visit-website">
                <a
                  href="https://AJEdelmann.github.io/ravenous-app"
                  rel="external"
                  target="_blank"
                >
                  Visit website
                </a>
              </div>
            </div>
          </div>
          <div className="card" id="my-card-space">
            <img
              className="card-img-top"
              src={Jammming}
              height="200vh"
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title font-weight-bold">Jammming</h5>
              <p className="card-text">
                <p>
                  <span className="blackSpan">Description: </span>A website that
                  fetches data from Spotify API to allow users to search the
                  Spotify library, create a custom playlist, then save it to
                  their Spotify account.
                </p>
                <p>
                  <span className="blackSpan">Technologies used: </span>React,
                  Node.js and css
                </p>
              </p>
              <div className="visit-website">
                <a href="#">Visit website</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row my-projects">
        <div className="card-deck my-cards">
          <div className="card" id="my-card-space">
            <img
              className="card-img-top"
              src={PianoPlayer}
              height="200vh"
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title font-weight-bold">Todo app</h5>
              <p className="card-text">
                <p>
                  <span className="blackSpan">Description: </span>Full Stack
                  application fetching data from my own API
                </p>
                <p>
                  <span className="blackSpan">Technologies used: </span>React,
                  Node.js, MongoDB, Zeit
                </p>
              </p>
              <div className="visit-website">
                <a href="#">Github repository</a>
              </div>
            </div>
          </div>
          <div className="card" id="my-card-space">
            <img
              className="card-img-top"
              src={PianoPlayer}
              height="200vh"
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title font-weight-bold">
                Data-server-record-store
              </h5>
              <p className="card-text">
                <p>
                  <span className="blackSpan">Description: </span>A traditional
                  RESTfull API
                </p>
                <p>
                  <span className="blackSpan">Technologies used: </span>Node,
                  Express and Mongoose
                </p>
              </p>
              <div className="visit-website">
                <a href="#">Visit website</a>
              </div>
            </div>
          </div>
          <div className="card" id="my-card-space">
            <img
              className="card-img-top"
              src={Ear}
              height="200vh"
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title font-weight-bold">Music-chords-API</h5>
              <p className="card-text">
                <p>
                  <span className="blackSpan">Description: </span>Traditional
                  RESTfull API that crawls entire music chords from websites and
                  store into database
                </p>
                <p>
                  <span className="blackSpan">Technologies used: </span>Node,
                  Express, Puppeteer and Mongoose
                </p>
              </p>
              <div className="visit-website">
                <a href="#">Github repository</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
