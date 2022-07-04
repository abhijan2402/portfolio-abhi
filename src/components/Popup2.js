import React from "react";
import "./Popup.css";
function Popup2(props) {
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
          <li>React Native</li>
          <li>AWS (backend)</li>
          <li>Lambda function</li>
        </ul>
        <p>
          This Chat App consist two maintain the chat between two users.In this
          application,User can share the files to maintain the infromation
          related to the order.
        </p>
      </div>
    </div>
  ) : (
    ""
  );
}

export default Popup2;
