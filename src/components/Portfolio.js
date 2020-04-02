import React from "react";
import PianoPlayer from "../img/piano-player.jpeg";
import Ravenous from "../img/ravenous.jpeg";
import Ear from "../img/ear.jpeg";
import Jammming from "../img/jammming.jpeg";
import NewsApp from "../img/news-app.JPG";
import RomanCalculator from "../img/roman-calculator.jpg";

const Portfolio = () => {
  return (
    <div className="section-projects">
      <div className="row my-projects">
        <div className="row w-100 text-left align-items-center">
          <div className="col">
            <h2 className="myProjectsH2 font-weight-bold">Selected projects</h2>
            <br />
          </div>
        </div>
        <div className="card-deck my-cards">
          <a
            href="https://ajedelmann.github.io/piano-player/index.html"
            target="_blank"
            rel="noopener noreferrer"
            className="card"
            id="my-card-space"
          >
            <img
              className="card-img-top"
              src={PianoPlayer}
              height="200vh"
              alt="Card cap"
            />
            <div className="card-body">
              <h5 className="card-title font-weight-bold">Piano Player</h5>
              <div className="card-text">
                <p>
                  <span className="blackSpan">Description: </span>This piano
                  player can be played with computer keyboards, have fun
                  playing!
                </p>
                <p>
                  <span className="blackSpan">Technologies used: </span>Pure
                  JavaScript, html and css
                </p>
              </div>
              <div className="visit-website">
                <p>Visit website</p>
              </div>
            </div>
          </a>

          <a
            href="https://AJEdelmann.github.io/ravenous-app"
            target="_blank"
            rel="noopener noreferrer"
            className="card"
            id="my-card-space"
          >
            <img
              className="card-img-top"
              src={Ravenous}
              height="200vh"
              alt="Card cap"
            />
            <div className="card-body">
              <h5 className="card-title font-weight-bold">React Ravenous</h5>
              <div className="card-text">
                <p>
                  <span className="blackSpan">Description: </span>A platform
                  that fetch APIs data and returns list of business according to
                  search parameters
                </p>
                <p>
                  <span className="blackSpan">Technologies used: </span>React,
                  Node.js and css
                </p>
              </div>
              <div className="visit-website">
                <p>Visit website</p>
              </div>
            </div>
          </a>

          <a
            href="https://AJEdelmann.github.io/react-jammming/"
            target="_blank"
            rel="noopener noreferrer"
            className="card"
            id="my-card-space"
          >
            <img
              className="card-img-top"
              src={Jammming}
              height="200vh"
              alt="Card cap"
            />
            <div className="card-body">
              <h5 className="card-title font-weight-bold">Jammming</h5>
              <div className="card-text">
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
              </div>
              <div className="visit-website">
                <p>Visit website</p>
              </div>
            </div>
          </a>
        </div>
      </div>

      <div className="row my-projects">
        <div className="card-deck my-cards">
          <a
            href="https://ajedelmann.github.io/news-app/"
            target="_blank"
            rel="noopener noreferrer"
            className="card"
            id="my-card-space"
          >
            <img
              className="card-img-top"
              src={NewsApp}
              height="200vh"
              alt="Card cap"
            />
            <div className="card-body">
              <h5 className="card-title font-weight-bold">News app</h5>
              <div className="card-text">
                <p>
                  <span className="blackSpan">Description: </span>A webpack
                  boilerplate fetching data from news api with axios
                </p>
                <p>
                  <span className="blackSpan">Technologies used: </span>
                  JavaScript, Nodejs and Express
                </p>
              </div>
              <div className="visit-website">
                <p>Visit website</p>
              </div>
            </div>
          </a>

          <a
            href="https://ajedelmann.github.io/roman-calculator/"
            target="_blank"
            rel="noopener noreferrer"
            className="card"
            id="my-card-space"
          >
            <img
              className="card-img-top"
              src={RomanCalculator}
              height="200vh"
              alt="Card cap"
            />
            <div className="card-body">
              <h5 className="card-title font-weight-bold">Roman calculator</h5>
              <div className="card-text">
                <p>
                  <span className="blackSpan">Description: </span>A calculator
                  that can add, subtract and multiply Roman numerals
                </p>
                <p>
                  <span className="blackSpan">Technologies used: </span>React
                  Hooks, JavaScript, CSS and Jest
                </p>
              </div>
              <div className="visit-website">
                <p>Visit website</p>
              </div>
            </div>
          </a>

          <a
            href="https://github.com/AJEdelmann/music-chords-api/tree/dev"
            target="_blank"
            rel="noopener noreferrer"
            className="card"
            id="my-card-space"
          >
            <img
              className="card-img-top"
              src={Ear}
              height="200vh"
              alt="Card cap"
            />
            <div className="card-body">
              <h5 className="card-title font-weight-bold">Music-chords-API</h5>
              <div className="card-text">
                <p>
                  <span className="blackSpan">Description: </span>Traditional
                  RESTfull API that crawls entire music chords from websites and
                  store into database
                </p>
                <p>
                  <span className="blackSpan">Technologies used: </span>Node,
                  Express, Puppeteer and Mongoose
                </p>
              </div>
              <div className="visit-website">
                <p>Github repository</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
