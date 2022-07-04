import React, { useState } from "react";
import "./Project.css";
import Popup from "./Popup";
import Popup1 from "./Popup1";
import Popup2 from "./Popup2";
function Project() {
  const [tpop, setTpop] = useState(false);
  const [tpop2, setTpop2] = useState(false);
  const [tpop3, setTpop3] = useState(false);

  return (
    <>
      <h1 className="skill">Projects</h1>
      <div className="one"></div>
      <div className="main-div">
        <div className="inner-div">
          <main>
            <div style={{ textAlign: "center" }} className="div-image">
              <img
                src="https://images.ctfassets.net/gg4ddi543f5b/a1SpK5iekgPkS9a5u7AK1/9f85516296960fb97dac7161b6d37be4/website-project-management-blog.png"
                className="main-img"
                alt=""
              />
            </div>
            <br></br>
            <div className="logo-div">
              <h2 className="logo-h1">Techsellence Project</h2>
              <img
                src="https://cdn-icons-png.flaticon.com/512/1/1176.png"
                onClick={() => setTpop(true)}
                className="logo-img"
                alt=""
              />
            </div>
            {/* <button onClick={() => setTpop(true)}>Know More</button> */}
            <Popup trigger={tpop} setTrigger={setTpop}>
              {/* <h1>thus isb</h1> */}
            </Popup>
          </main>
        </div>
        <div className="inner-div">
          <main>
            <div style={{ textAlign: "center" }} className="div-image">
              <img
                src="https://www.klearstack.com/wp-content/uploads/2022/01/Blog-26.png"
                className="main-img"
                alt=""
              />
            </div>
            <br></br>
            <div className="logo-div">
              <h2 className="logo-h1">Text Recognization</h2>
              <img
                src="https://cdn-icons-png.flaticon.com/512/1/1176.png"
                onClick={() => setTpop2(true)}
                className="logo-img"
                alt=""
              />
            </div>

            {/* <button onClick={() => setTpop2(true)}>Know More</button> */}
            <Popup1 trigger={tpop2} setTrigger={setTpop2}>
              <h1>thus isb</h1>
            </Popup1>
          </main>
        </div>
        <div className="inner-div">
          <main>
            <div style={{ textAlign: "center" }} className="div-image">
              <img
                src="https://www.designbombs.com/wp-content/uploads/2017/01/live-chat-apps-1280x720.jpg"
                className="main-img"
                alt=""
              />
            </div>
            <br></br>
            <div className="logo-div">
              <h2 className="logo-h1">Chat App</h2>
              <img
                src="https://cdn-icons-png.flaticon.com/512/1/1176.png"
                onClick={() => setTpop3(true)}
                className="logo-img"
                alt=""
              />
            </div>

            {/* <button onClick={() => setTpop3(true)}>Know More</button> */}
            <Popup2 trigger={tpop3} setTrigger={setTpop3}>
              <h1>thus isb</h1>
            </Popup2>
          </main>
        </div>
      </div>
    </>
  );
}

export default Project;
