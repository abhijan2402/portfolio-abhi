import React from "react";
import "./Popup.css";
function Popup1(props) {
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
          <li>AWS Textractor</li>
          <li>Node Js(Lambda function)</li>
        </ul>
        <p>
          The Textractor application consist of some amazing feature .this React
          App can scan the image from the local memory and can search for the
          data which we want to search and give back the information in form
          which is automatically filled back after the Amazon Textractor fetches
          the information from it.
        </p>
      </div>
    </div>
  ) : (
    ""
  );
}

export default Popup1;
