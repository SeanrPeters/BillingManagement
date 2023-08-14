// 8/8/2023
// Sean Peters
// This is the SliderDefault componenet .jsx which the user will be able to use when plugging in their desiered amount of data to be stored

import React, { useState, useEffect } from "react";
import { ComponentsRange } from "../ComponentsRange";
import "./style.css";

export const SliderDefault = ({
  className,
  componentsRangeComponentsRangeClassName,
  sliderValue,
  updateSliderValue
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [sliderPosition, setSliderPosition] = useState(0);
  const [isEditing, setIsEditing] = useState(false);
  const [editedValue, setEditedValue] = useState(sliderValue);

  useEffect(() => {
    setEditedValue(sliderValue); // Sync the edited value with the sliderValue prop
  }, [sliderValue]);

  const handleValueClick = () => {
    setIsEditing(true);
  };

  const handleValueChange = (event) => {
    setEditedValue(event.target.value);
  };

  const handleValueBlur = () => {
    setIsEditing(false);
    updateSliderValue(parseInt(editedValue));
  };

  const handleSliderMouseDown = (e) => {
    e.preventDefault();
    setIsDragging(true);
    updateSliderPosition(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      updateSliderPosition(e.clientX);
    }
  };

  const updateSliderPosition = (clientX) => {
    const sliderRect = sliderRef.current.getBoundingClientRect();
    const newPosition = (clientX - sliderRect.left) / sliderRect.width;
    setSliderPosition(Math.max(0, Math.min(1, newPosition)));
    updateSliderValue(Math.round(newPosition * 1000));
  };

  const sliderRef = React.createRef();

  return (
    <div
      className={`slider-default ${className}`}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      ref={sliderRef}
      onClick={handleValueClick}
      style={{ cursor: "pointer" }}
    >
      <ComponentsRange className={componentsRangeComponentsRangeClassName} />
      <div
        className={`slider-fill`}
        style={{
          width: `${sliderPosition * 100}%`
        }}
      ></div>
      <div
        className={`slider-handle ${isDragging ? "dragging" : ""}`} // change the value when dragging the handle
        style={{
          left: `${sliderPosition * 100}%`
        }}
        onMouseDown={handleSliderMouseDown}
      ></div>
       <div className="slider-input-container">
      {isEditing ? (
        <input
          type="number"
          value={editedValue}
          onChange={handleValueChange}
          onBlur={handleValueBlur}
          autoFocus
        
        />
      ) : (
        <span>{sliderValue}</span>
      )}
    </div>
    </div>
  );
};
