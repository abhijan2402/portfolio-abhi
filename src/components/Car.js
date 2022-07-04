import React from "react";
import "./car.css";
const Car = () => {
  return (
    <>
      <div>
        <h1 className="skill">Skills</h1>
        <div className="one"></div>
        <div className="container">
          <div className="card">
            <img
              className="img"
              src="https://media.istockphoto.com/photos/laptop-45-degree-open-picture-id185291412?k=20&m=185291412&s=612x612&w=0&h=-SL_phahWYxIdQYumiC2ULS1eGblk4uIA9uUQtWI9Bw="
              alt=""
            />
            <div className="intro">
              <h2 className="h2">Web Development</h2>
              <p className="p">
                HTML
                <br />
                CSS
                <br />
                JavaScript
                <br />
                React JS
                <br />
                BootStrap
                <br />
                Material UI
              </p>
            </div>
          </div>
          <div className="card">
            <img
              className="img"
              src="https://previews.123rf.com/images/alexeyboldin/alexeyboldin1802/alexeyboldin180200029/97410209-perspective-view-new-apple-iphone-x-smartphone-isolated-on-white-background.jpg"
              alt=""
            />
            <div className="intro">
              <h2 className="h2">Android Development</h2>
              <p className="p">
                Android Studio
                <br />
                React native
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Car;
