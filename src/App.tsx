import React from "react";
import logo from "./assets/bluelogo.svg";
import Video from "./components/Video";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <div className="content">
        <div className="video-section">
          <Video />
        </div>
        <div className="main-section">
          <img src={logo} className="App-logo" alt="logo" />
          <p className="Brand-name">parrodigm</p>
          <h1 className="main-heading">
            Perfect customization, <br />
            back to where it all began
          </h1>
          <p className="sub-heading">
            Join and be the <span className="highlight">first</span> to
            experience innovation
          </p>
          <div className="email-input">
            <input type="email" placeholder="Enter your email address" />
            <button>➤</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
