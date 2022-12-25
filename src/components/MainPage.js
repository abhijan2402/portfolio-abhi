import React from "react";
import "./mainPage.css";
const MainPage = () => {
  return (
    <>
      <div className="mainPage_mainDiv">
        <div className="name">
          <p>I'M</p>
          <h1>Abhishek Jangid</h1>
          <div class="container1">
            <div class="word">I am Web developer</div>
            <div class="word">I am Web Designer</div>
            <div class="word">I am Programmer</div>
            <div class="word">I am Software Engineer</div>
          </div>
        </div>
        <div className="img-div">
          <img
            className="img_back"
            src="https://media.istockphoto.com/id/1305078176/photo/3d-cartoon-man-sitting-in-spherical-chair-with-laptop.jpg?s=612x612&w=0&k=20&c=cTac3S10wLGpJPthpF8mPfvRf9XynbUs85-dH6w2xtg="
            alt="main-img"
          ></img>
        </div>
      </div>
    </>
  );
};

export default MainPage;
