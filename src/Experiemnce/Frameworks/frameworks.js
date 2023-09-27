import React from "react";
import "./framework.css";

function Frameworks(props) {
  const { frames } = props;
  return (
    <div className="frameBox">
      <h4 className="frameTittle">Frameworks</h4>
      <br />
      <div className="containerFrames">
        {frames.map((val, i) => {
          let Frames = val;
          return <Frames key={i} className="frame" />;
        })}
      </div>
    </div>
  );
}

export default Frameworks;
