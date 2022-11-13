import React from "react";
import "./ExpandableButton.css";

const ExpandableButton = ({ text }) => {
  return (
    <button className="learn-more">
      <span className="circle" aria-hidden="true">
        <span className="icon arrow"></span>
      </span>
      <span className="button-text">{text}</span>
    </button>
  );
};

export default ExpandableButton;
