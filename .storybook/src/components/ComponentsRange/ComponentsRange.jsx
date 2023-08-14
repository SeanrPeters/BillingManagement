// 8/10/2023
// Sean Peters
// This is the range componenet .jsx which the DefaultSLider uses for its range

import React from "react";
import { ComponentsHandle } from "../ComponentsHandle";
import "./style.css";

export const ComponentsRange = ({ className }) => {
  return (
    <div className={`components-range ${className}`}>
      <div className="components-handle-wrapper">
        <ComponentsHandle
          className="components-handle-instance"
          stateProp="normal"
        />
      </div>
      <div className="components-handle-instance-wrapper">
        <ComponentsHandle
          className="components-handle-instance"
          stateProp="normal"
        />
      </div>
    </div>
  );
};
