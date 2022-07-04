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
            src="https://cosmosthrace.com/_nuxt/img/Coding.84a81b2.png"
            alt="main-img"
          ></img>
        </div>
      </div>
    </>
  );
};

export default MainPage;
