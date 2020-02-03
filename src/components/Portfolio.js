import React from "react";
import PianoPlayer from "../img/piano-player.jpeg";
import Ravenous from "../img/ravenous.jpeg";
import Ear from "../img/ear.jpeg";
import Jammming from "../img/jammming.jpeg";
import NewsApp from "../img/news-app.JPG";
import RhymeGenerator from "../img/rhyme-generator.JPG";

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
                  <span className="blackSpan">Description: </span>A Yelp-like
                  clone fetching data from Yelp API
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
            href="https://AJEdelmann.github.io/rhyme-generator/"
            target="_blank"
            rel="noopener noreferrer"
            className="card"
            id="my-card-space"
          >
            <img
              className="card-img-top"
              src={RhymeGenerator}
              height="200vh"
              alt="Card cap"
            />
            <div className="card-body">
              <h5 className="card-title font-weight-bold">Rhyme generator</h5>
              <div className="card-text">
                <p>
                  <span className="blackSpan">Description: </span>In this
                  project I use the boilerplate code for an AJAX request using
                  an XHR object to the Datamuse API to search for words that
                  rhyme. For poets and musicians delight!
                </p>
                <p>
                  <span className="blackSpan">Technologies used: </span>
                  JavaScript, JQuery, Nodejs and Express
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