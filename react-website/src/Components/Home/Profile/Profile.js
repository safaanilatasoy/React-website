import React from 'react'
import Typical from 'react-typical'
import './Profile.css'

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">

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
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'm <span className="higlighted-text">Safa Anıl Atasoy</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h2>
                {" "}
                <Typical
                loop = {Infinity}
                steps={[
                  "Software Dev. 💻",
                  1000,
                
                ]}
                />
              </h2>
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
        <div className="profile-picture">
          <div className="profile-picture-background">

          </div>
        </div>
      </div>
    </div>
  )
}
