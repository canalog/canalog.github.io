import React from "react";
import { greeting } from "../../portfolio";
import "./Greeting.scss";
const Greeting = () => {
  return (
    <div className="greeting-main">
      <div className="greeting-box">
        <div className="greeting-text">
          <h1 className="greeting-text-title">{greeting.title}</h1>
          <span className="greeting-text-desc">{greeting.subTitle}</span>
        </div>
        <div className="greeting-image">
          <img
            alt="penguin"
            src={require("../../assets/images/dreamer_re_9tua.png")}
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Greeting;
