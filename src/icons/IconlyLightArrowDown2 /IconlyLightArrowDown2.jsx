// 8/8/2023
// Sean Peters
// This is the down arrow icon
import PropTypes from "prop-types";
import React from "react";

export const IconlyLightArrowDown2 = ({ color = "#2E3271", className }) => {
  return (
    <svg
      className={`iconly-light-arrow-down-2 ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M19 8.5L12 15.5L5 8.5"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
};

IconlyLightArrowDown2.propTypes = {
  color: PropTypes.string,
};
