import React from "react";
import "./Ourstory.css";
import { useNavigate } from "react-router-dom";
import { userAuth } from "../../Pages/Auth/Auth";

function Ourstory() {
  const Navigate = useNavigate();

  let { user } = userAuth();

  function Ourstory() {
    if (!user) {
      Navigate("/alertbox");
    } else {
      Navigate("/about");
    }
  }
  return (
    <>
      <div className="main_plant_blog">
        <div className="main_blog_flex">
          <div className="right_plant_blog">
            <h1>OUR STORY</h1>
            <h3>For People Who Love Plants?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              repudiandae ea ullam quibusdam, similique distinctio!
            </p>
            <button className="our-story-btn" onClick={() => Ourstory()}>
              Read More
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Ourstory;
