import React from "react";
import './div5.css';
import circum from "./div5pic/circum.png"
import feature from "./div5pic/feature.png"
import rhombus from "./div5pic/rhombus.png"

function solution() {
  return (
    <div className='solute'>
      <div className="sol">
        <img className="rhom" src={rhombus} alt="Rhombus"/>
        <p>SOLUTION</p>
      </div>
      <div className="content-holder">
        <div className="info">
          <div className="more">
            <p className="need">NEED MORE INFORMATION?</p>
            <p className="ask">Ask Our Community</p>
          </div>
          <hr className="vertical"/>
          <div className="user">
            <p>01. App User Experience & Interface</p>
            <p>02. Apps Performance</p>
            <p>03. Best Color Visions & Combination</p>
          </div>
        </div>
        <div className="cirfeat">
          <img className="cir" src={circum} alt="circle"/>
          <img className="feat" src={feature} alt="feature"/>
        </div>
      </div>
      <div>
        <button className="visit">Visit Community</button>
      </div>
    </div>
  );
}

export default solution;
