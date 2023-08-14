// 8/12/2023
// Sean Peters
// This is the dropdown component that the DropdownTrigger component will use

import PropTypes from "prop-types";
import React from "react";
import { IconlyLightArrowDown2 } from "../../icons/IconlyLightArrowDown2";
import "./style.css";

export const Dropdown = ({ className, visible = true }) => {
  return (
    <div className={`dropdown ${className}`}>
      <div className="top">
        <div className="profile">
          <div className="frame">
            <div className="frame-wrapper">
              <div className="div">
                <div className="text-wrapper">@kevan</div>
                <div className="div-wrapper">
                  <div className="text-wrapper-2">Premium</div>
                </div>
              </div>
            </div>
            <div className="icon-chevron-down">
              {visible && <IconlyLightArrowDown2 className="iconly-light-arrow" color="#2E3271" />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Dropdown.propTypes = {
  visible: PropTypes.bool,
};
