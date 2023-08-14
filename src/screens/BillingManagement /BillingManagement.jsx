// 8/13/2023
// Sean Peters
// This is the BillingManagement main screen where the components are implimented accordingly

import React, { useState } from "react";
import { Down } from "../../components/Down";
import { Dropdown } from "../../components/Dropdown";
import { DropdownTrigger } from "../../components/DropdownTrigger";
import { SliderDefault } from "../../components/SliderDefault";

import "./style.css";

export const BillingManagement = () => {
  const [sliderValue, setSliderValue] = useState(1000);
  const [isDragging, setIsDragging] = useState(false);
  return (
    <div className="billing-management">
      <div className="div-2">
        <div className="sidebar">
          <img
            className="group"
            alt="Group"
            src="https://generation-sessions.s3.amazonaws.com/635eb239e12ca685c30b75be1059d9e7/img/group-449@2x.png"
          />
          <p className="legal-terms-of">
            <span className="span">
              Legal <br />
              Terms of Service ⁃ Privacy ⁃ DMCA - <br />
              Creator Terms
              <br />
              <br />
            </span>
            <span className="text-wrapper-3">UI: </span>
            <span className="text-wrapper-4">
              4.2023.15
              <br />
            </span>
            <span className="text-wrapper-3">App:</span>
            <span className="span">
              {" "}
              4.2023.15
              <br />
            </span>
            <span className="text-wrapper-3">Language</span>
            <span className="span">
              : English (US)
              <br />
            </span>
          </p>
        </div>
        <div className="frame-2">
          <Dropdown className="dropdown-variant" visible={false} />
          <div className="frame-3">
            <div className="frame-4">
              <p className="text-wrapper-5">How much data will you store?</p>
            </div>
            <div className="frame-5">
         

              <DropdownTrigger
                className="dropdown-trigger-instance"
                colored="on"
                icon={<Down />}
                text=""
              />
            </div>
            <div className="frame-6">
              <div className="frame-7">
                <p className="text-wrapper-5">
                  What percentage of your data will you transfer or download
                  (data transfer - egress)?
                </p>
                <div className="frame-8">
                  <SliderDefault
                   className="slider-default-instance"
                   componentsRangeComponentsRangeClassName="design-component-instance-node"
                   sliderValue={sliderValue} // Pass sliderValue prop
                   isDragging={isDragging}
                   updateSliderValue={setSliderValue}
                  />
                  <div className="slider-unit"> TB</div>
                  <div className="percentage-value left">0%</div>
                  <div className="percentage-value middle">100%</div>
                  <div className="percentage-value right">500%</div>
                </div>
                <p className="by-using-AFILENAME">
                  <span className="text-wrapper-7">
                    By using AFILENAME you could save:{" "}
                  </span>
                  <span className="text-wrapper-8">
                    $
                    {(sliderValue * 55).toLocaleString(undefined, {
                      maximumFractionDigits: 2
                    })}{" "}
                    a month!
                  </span>
                </p>
              </div>
            </div>
            <div className="button">
              <div className="text-wrapper-9">Get Started</div>
            </div>
            <div className="frame-9">
              <div className="frame-10">
                <div className="text-wrapper-10">month</div>
                <div className="text-wrapper-5">| year</div>
              </div>
              <div className="overlap-wrapper">
                <div className="overlap">
                  <div className="overlap-group">
                    <div className="group-2">
                      <img
                        className="shape-with-text"
                        alt="Shape with text"
                        src="https://generation-sessions.s3.amazonaws.com/635eb239e12ca685c30b75be1059d9e7/img/shape-with-text.svg"
                      />
                      <img
                        className="img"
                        alt="Shape with text"
                        src="https://generation-sessions.s3.amazonaws.com/635eb239e12ca685c30b75be1059d9e7/img/shape-with-text-1.svg"
                      />
                      <img
                        className="shape-with-text-2"
                        alt="Shape with text"
                        src="https://generation-sessions.s3.amazonaws.com/635eb239e12ca685c30b75be1059d9e7/img/shape-with-text-2.svg"
                      />
                      <img
                        className="shape-with-text-3"
                        alt="Shape with text"
                        src="https://generation-sessions.s3.amazonaws.com/635eb239e12ca685c30b75be1059d9e7/img/shape-with-text-3.svg"
                      />
                      <img
                        className="shape-with-text-4"
                        alt="Shape with text"
                        src="https://generation-sessions.s3.amazonaws.com/635eb239e12ca685c30b75be1059d9e7/img/shape-with-text-4.svg"
                      />
                      <img
                        className="google"
                        alt="Google"
                        src="https://generation-sessions.s3.amazonaws.com/635eb239e12ca685c30b75be1059d9e7/img/google.svg"
                      />
                      <img
                        className="AFILENAME"
                        alt="Afilename"
                        src="https://generation-sessions.s3.amazonaws.com/635eb239e12ca685c30b75be1059d9e7/img/afilename.svg"
                      />
                      <img
                        className="azure"
                        alt="Azure"
                        src="https://generation-sessions.s3.amazonaws.com/635eb239e12ca685c30b75be1059d9e7/img/azure.svg"
                      />
                      <img
                        className="backblaze"
                        alt="Backblaze"
                        src="https://generation-sessions.s3.amazonaws.com/635eb239e12ca685c30b75be1059d9e7/img/backblaze.svg"
                      />
                      <img
                        className="AWS"
                        alt="Aws"
                        src="https://generation-sessions.s3.amazonaws.com/635eb239e12ca685c30b75be1059d9e7/img/aws.svg"
                      />
                      <img
                        className="connector-line"
                        alt="Connector line"
                        src="https://generation-sessions.s3.amazonaws.com/635eb239e12ca685c30b75be1059d9e7/img/connector-line.png"
                      />
                      <div className="text-wrapper-11">
                        {" "}
                        $
                        {sliderValue.toLocaleString(undefined, {
                          maximumFractionDigits: 2
                        })}
                      </div>
                      <div className="text-wrapper-12">
                        {" "}
                        $
                        {(sliderValue * 8.0).toLocaleString(undefined, {
                          maximumFractionDigits: 2
                        })}
                      </div>
                      <div className="text-wrapper-13">
                        {" "}
                        $
                        {(sliderValue * 44.8).toLocaleString(undefined, {
                          maximumFractionDigits: 2
                        })}
                      </div>
                    </div>
                    <div className="text-wrapper-14">
                      $
                      {(sliderValue * 56.0).toLocaleString(undefined, {
                        maximumFractionDigits: 2
                      })}
                    </div>
                  </div>
                  <div className="text-wrapper-15">
                    {" "}
                    $
                    {(sliderValue * 53.0).toLocaleString(undefined, {
                      maximumFractionDigits: 2
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="frame-11">
            <img
              className="mingcute-back-line"
              alt="Mingcute back line"
              src="https://generation-sessions.s3.amazonaws.com/635eb239e12ca685c30b75be1059d9e7/img/mingcute-back-2-line.svg"
            />
            <div className="text-wrapper-16">Go Back</div>
          </div>
        </div>
      </div>
    </div>
  );
};
