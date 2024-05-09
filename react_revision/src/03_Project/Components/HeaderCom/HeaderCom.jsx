import React, { useContext, useState } from 'react';
import './HeaderCom.css';
import { Link, json, useNavigate } from 'react-router-dom';
import { themeContext } from '../../Context/ThemeContext';

function HeaderCom() {
  const [isDark, setIsDark] = useContext(themeContext);

  return (
    <>
      <header className={`header_section ${isDark ? 'dark' : ''}`}>
        <div className="header_container">
          <div className="logo">
            <h1>
              <Link to={'/'}>Where in the world?</Link>
            </h1>
          </div>
          <div
            className="theme_toggler"
            onClick={() => {
              setIsDark(!isDark);
              localStorage.setItem('darkMode', !isDark);
            }}
          >
            <i className={`fa-regular fa-${isDark ? 'sun' : 'moon'}`}></i>&nbsp;{' '}
            <span>{isDark ? 'Light' : 'Dark'} Mode</span>
          </div>
        </div>
      </header>
    </>
  );
}

export default HeaderCom;
