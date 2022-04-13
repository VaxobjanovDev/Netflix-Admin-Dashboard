import React from "react";
import {IoNotificationsSharp} from 'react-icons/io5'
import {FiSettings} from 'react-icons/fi'
import {GrLanguage} from 'react-icons/gr'
import "./Topbar.css";

const Topbar = () => {
  return (
    <>
      <div className="topbar">
        <div className="topbar__wrapper">
          <div className="top-left">
            <span className="logo">DevAdmin</span>
          </div>
          <div className="top-right">
            <div className="topbar__icon-container">
              <div className="topbar__icons">
                <IoNotificationsSharp />
                <span className="icon-badge">2</span>
              </div>
              <div className="topbar__icons">
                <FiSettings />
              </div>
              <div className="topbar__icons">
                <GrLanguage />
              </div>
              <img
                src="https://picsum.photos/50/50"
                alt="for-account"
                className="account__image"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Topbar;
