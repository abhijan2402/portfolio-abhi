import React from "react";
import "./Progress.css";
const Progress = () => {
  return (
    <>
      <h1 className="skill">Progress</h1>
      <div className="one"></div>
      <div style={{ display: "block", width: "100%", color: "white" }}>
        <div className="hey">
          <h3 className="hey-h3" >FrontEnd development</h3>
          <div className="hey-1">
            <div style={{ width: "90%" }} className="hey-1-1">
              HTML-90%
            </div>
          </div>
          <div className="hey-1">
            <div className="hey-1-1" style={{ width: "90%" }}>
              CSS-90%
            </div>
          </div>
          <div className="hey-1">
            <div className="hey-1-1" style={{ width: "80%" }}>
              Javascript-80%
            </div>
          </div>
          <div className="hey-1">
            <div className="hey-1-1" style={{ width: "65%" }}>
              ReactJS-65%
            </div>
          </div>
        </div>
        <div className="hey">
          <h3 className="hey-h3">BackEnd development</h3>
          <div className="hey-1" style={{ marginTop: "5%" }}>
            <div style={{ width: "60%" }} className="hey-1-1">
              PHP-60%
            </div>
          </div>
          <div className="hey-1" style={{ marginTop: "5%" }}>
            <div className="hey-1-1" style={{ width: "90%" }}>
              AWS-70%
            </div>
          </div>
          <div className="hey-1" style={{ marginTop: "5%" }}>
            <div className="hey-1-1" style={{ width: "70%" }}>
              SQL-40%
            </div>
          </div>
          {/* <div className="hey-1">
            <div className="hey-1-1" style={{ width: "65%" }}>
              
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};
export default Progress;
