import React from 'react'
import Typical from 'react-typical'

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <a href="www.facebook.com">
              <i className="fa fa-facebook-square"></i>
            </a>
            <a href="www.google.com">
              <i className="fa fa-google-plus-square"></i>
            </a>
            <a href="www.instagram.com">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="www.youtube.com">
              <i className="fa fa-youtube-square"></i>
            </a>
            <a href="www.twitter.com">
              <i className="fa fa-twitter"></i>
            </a>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M <span className="highlighted-text">Anıl</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                loop = {Infinity}
                steps={[
                  "Safa Anıl Atasoy 🔴",
                  1000,
                  "Software Dev 🟢",
                  1000,
                  "HTML/CSS, Javascript, Bootstrap 🟡",
                  1000,
                  "React, GIT, MySQL, NodeJs, Python 🟠",
                  1000,
                  "Rest API, Google Cloud 🟣",
                  1000,

                ]}
                />
              </h1>
                <span className="profile-role-tagline">
                  Front and back website development. building applications
                  with front and back end operations.
                </span>
              </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn">
              {" "}
              Hire Me{" "}
            </button>
            <a href="resume.png" download="SafaAtasoy resume.png">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
