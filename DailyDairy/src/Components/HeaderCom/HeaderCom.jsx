import React from 'react';
import './HeaderCom.css';

function HeaderCom() {
  return (
    <>
      <header>
        <div className="header_container">
          <div className="header_raw">
            <div className="header_content">
              <div className="header_logo">
                <figure>
                  {' '}
                  <img
                    src="https://img.freepik.com/free-vector/cow-with-fresh-milk-label_1308-91357.jpg?w=740&t=st=1713599043~exp=1713599643~hmac=0b1e00473e2bab86c61587d4df615bc4dbe2c67262fee68bdd57b2dc4b7c98ee"
                    alt=""
                  />
                  {/* <img src="/Images/logo.svg" alt="" /> */}
                </figure>
              </div>
              <div className="header_menu">
                <nav>
                  <ul>
                    <li>
                      <a href="">Home</a>
                    </li>
                    <li>
                      <a href="">Contact</a>
                    </li>
                    <li>
                      <a href="">AboutUs</a>
                    </li>
                    <li>
                      <a href="">Product</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default HeaderCom;
