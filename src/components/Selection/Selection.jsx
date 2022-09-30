import React, { useState } from "react";
import "./selection.css";
import Button from "../Button component/Button";
import { useContext } from "react";
import { ModalContext } from "../context/ModalContext";

const Selection = ({ selection }) => {
  const [toggle, setToggle] = useState(false);
  const { setIsModalOpen, setSuccessModalOpen } = useContext(ModalContext);

  const { heading, pledge, amount, details, donation, accordion } = selection;
  function handleClick() {
    setIsModalOpen(false);
    setSuccessModalOpen(true);
  }
  return (
    <div
      className="selection"
      style={toggle ? { border: "2px solid var(--Moderate-cyan)" } : {}}
    >
      <div className="selection-body">
        <div className=" outer-circle" onClick={() => setToggle(!toggle)}>
          <div className={toggle ? "inner-circle" : ""}></div>
        </div>
        <div className="selection-main">
          <div className="selection-heading">
            <h5>{heading}</h5>
            <p className="pledge">{pledge}</p>
            {accordion && (
              <h4 className="amount">
                {amount} <span>left</span>
              </h4>
            )}
          </div>
          <p className="selection-paragraph">{details}</p>
        </div>
      </div>

      {accordion && toggle && (
        <div className="selection-footer">
          <div className="footer-text">Enter your pledge</div>
          <button className="amount">{donation}</button>
          <div className="btn" onClick={handleClick}>
            <Button text="continue" type={true} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Selection;
