import React from "react";
import "./Popup.css";
function Popup(props) {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <button className="close-btn" onClick={() => props.setTrigger(false)}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/1828/1828666.png"
            alt=""
            className="cross-img"
          />
        </button>
        <h4>languages Used</h4>
        <ul>
          <li>React JS</li>
          <li>AWS (backend)</li>
          <li>Material UI(frontEnd)</li>
        </ul>
        <p style={{ fontSize: "25px" }}>
          Techsellence Project(Brevity-App) This App is designed by Techsellence
          Private Limited company of West Bengal.This app is designed the revive
          the file and and maintain the order deatils under different
          departments and many more.
        </p>
      </div>
    </div>
  ) : (
    ""
  );
}

export default Popup;
