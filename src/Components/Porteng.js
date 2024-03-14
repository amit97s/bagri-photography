import React from "react";
import engage from "./Engagement.css";

const Porteng = () => {
  return (
    <div className="Porteng">
      <div className="engagement">
        <div
          className="engagement-head"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p style={{ fontSize: "37px", textShadow: "2px 2px 3px grey" }}>
            Engagement
          </p>
        </div>
        <div className="engagement-background"></div>
      </div>
    </div>
  );
};

export default Porteng;
