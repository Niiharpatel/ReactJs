import React from 'react';
import './HeaderCom.css';
import { Link, useNavigate } from 'react-router-dom';

function HeaderCom() {
  return (
    <>
      <header className="header_section">
        <div className="header_container">
          <div className="logo">
            <h1>
              <Link to={'/'}>Where in the world?</Link>
            </h1>
          </div>
          <div className="mode_section">
            <i className="fa-regular fa-moon"></i>
            <span>Light Mode</span>
          </div>
        </div>
      </header>
    </>
  );
}

export default HeaderCom;
