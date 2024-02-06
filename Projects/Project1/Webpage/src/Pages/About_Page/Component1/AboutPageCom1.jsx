import React from 'react';
import './AboutPageCom1.css';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

export default function AboutPageCom1() {
  return (
    <>
      <div className="Com1-main">
          <div className="flex-box">
              <div className="left-box">
                <div>
                  <h1>About</h1>
                </div>
              </div>

            <div className="right-box">
              <div className="des-line"></div>
              <div className="line1">
                <h3>
                  We provide fresh and healthy plants for your space
                </h3>
              </div>
              <div className="line2">
                <p>Tincidunt ut pellentesque arcu molestie dolor, nunc feugiat sit mauris semper platea urna, sapien fermentum venenatis etiam enim ullamcorper phasellus tortor justo sapien faucibus in adipiscing risus adipiscing bibendum nec eget tincidunt sed.</p>
              </div>
              </div>
          </div>
      </div>   
    </>
  );
}
