import React from "react";
import Button from "../Button component/Button";
import "./reward.css";

const Reward = ({ reward }) => {
  const { heading, pledge, details, amount, stock, button } = reward;
  return (
    <div className={stock ? "reward" : "reward inactive"}>
      <div className="heading">
        <h3>{heading}</h3>
        <div className="pledge">{pledge}</div>
      </div>
      <p className="text">{details}</p>
      <div className="footer">
        <h2 className="quantity">
          {amount} <span>left</span>
        </h2>
        <Button text={button} type={stock} />
      </div>
    </div>
  );
};

export default Reward;
