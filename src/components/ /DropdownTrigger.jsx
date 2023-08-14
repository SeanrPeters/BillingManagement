import PropTypes from "prop-types";
import React from "react";
import { Down2 } from "../../icons/Down2";
import "./style.css";

export const DropdownTrigger = ({
  colored,
  className,
  text = "Hover me",
  icon = <Down2 className="down-1" color="#1890FF" />,
}) => {
  return (
    <div className={`dropdown-trigger ${className}`}>
      <div className={`title-4 ${colored}`}>{text}</div>
      <div className="icon-wrapper">{icon}</div>
    </div>
  );
};

DropdownTrigger.propTypes = {
  colored: PropTypes.oneOf(["off", "on"]),
  text: PropTypes.string,
};
