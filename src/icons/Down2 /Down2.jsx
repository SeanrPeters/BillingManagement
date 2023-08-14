// 8//92023
// Sean Peters
// This is the icon for the drop down unit

import PropTypes from "prop-types";
import React from "react";

export const Down2 = ({ color = "black", opacity = "unset", className }) => {
  return (
    <svg
      className={`down-2 ${className}`}
      fill="none"
      height="10"
      viewBox="0 0 10 10"
      width="10"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M9.15167 2.14294H8.31461C8.25769 2.14294 8.20412 2.17084 8.17064 2.2166L4.99988 6.58714L1.82912 2.2166C1.79564 2.17084 1.74207 2.14294 1.68515 2.14294H0.848094C0.775549 2.14294 0.733139 2.22553 0.775549 2.28468L4.71082 7.70991C4.85367 7.90633 5.14608 7.90633 5.28783 7.70991L9.22309 2.28468C9.26662 2.22553 9.22421 2.14294 9.15167 2.14294Z"
        fill={color}
        fillOpacity={opacity}
      />
    </svg>
  );
};

Down2.propTypes = {
  color: PropTypes.string,
  opacity: PropTypes.string,
};
