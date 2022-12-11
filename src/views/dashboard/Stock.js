import React from "react";
import "assets/css/dashboard/stock.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export const Stock = () => {
  const percentage = 66;
  return (
    <div className="container-fluid">
      <div className="row card shadow-sm bg-white p-3">
        <div className="col-12 bg-green-opacity border-radius-10">
          <div className="row p-2">
            <div className="col-12 col-lg-4">
              <img
                src={require("assets/img/dashboard/accept.png")}
                width="30px"
              />
              <p className="bg-green border-radius-10 weight-500 text-white d-inline padding-shariah ml-2">
                Shariah Compliant
              </p>
            </div>
            <div className="col-12 col-lg-4 font-mon text-center">
              <text className="weight-600" style={{ fontSize: "15px" }}>
                JUMIA
              </text>{" "}
            </div>
            <div className="col-12 col-lg-4 text-right">
              <text className="d-block font-10 text-muted line-height-1">
                Updated as of January 1 2022
              </text>
              <text className="d-block font-10 text-muted line-height-1">
                Followinf AAQIFI standard
              </text>
            </div>
          </div>
        </div>
      </div>
      <p className="font-12 text-black mt-2 mb-3">
        Disclaimer: As-salamu alaykum this stock screener is made to the best of
        our ability, there may be errors. Please use this as a source of
        informtion May Allah make it easy for us!
      </p>
      {/* FIRST CARD */}
      <div className="row card shadow pb-2">
        <div className="card-header bg-white shadow-lg">
          <h5 className="font-mon weight-600 d-inline">Qualitative Screeing</h5>{" "}
          <text className="border-radius-10 pills ml-3 px-2">
            <img
              width={"13px"}
              style={{ marginTop: "-1px" }}
              src={require("assets/img/dashboard/plus.png")}
            />{" "}
            Follow
          </text>{" "}
          <text className="border-radius-10  bg-green font-10 float-right mt-2 text-white px-3">
            Pass
          </text>{" "}
        </div>
        <div className="card-body">
          <div className="bg-green-opacity border-radius-5 d-inline p-2">
            <text className="font-mon">
              <img
                className="pr-1"
                style={{ marginTop: "-1px" }}
                src={require("assets/img/dashboard/warning.png")}
              />
              Revenue
            </text>
          </div>
          <div className="progress mt-3">
            <div
              className="progress-bar bg-success w-100"
              role="progressbar"
              aria-valuenow="100"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
        <div className="col-12">
          <div className="row mb-4">
            <div className="col-12 col-lg-4 text-center ">
              <div className="comp-1st-card padding-circle  border-radius-5">
                <CircularProgressbar
                  value={100}
                  text={100 + "%"}
                  strokeWidth={5} 
               
                  styles={buildStyles({
                    rotation: 0.50,
                    textSize: "16px",
                    pathTransitionDuration: 0.5,
                    
                    background: true,
                    backgroundPadding:40,
                    pathColor: `#2dce89`,
                    textColor: "#000000",
                    trailColor: "#fff",
                    backgroundColor: "#3e98c7",
                  })}
                />
                <text>COMPLIANT</text>
              </div>
            </div>
            <div className="col-12 col-lg-4 text-center ">
              <div className="comp-2nd-card padding-circle  border-radius-5">
                <CircularProgressbar
                  value={4}
                  text={4 + "%"}
                  strokeWidth={5} 
                  styles={buildStyles({
                    rotation: 0.50,
                    textSize: "16px",
                    pathTransitionDuration: 0.5,
                    pathColor: `#FFA500`,
                    textColor: "#000000",
                    trailColor: "#fff",
                    backgroundColor: "#3e98c7",
                  })}
                />
                <text>QUESTIONABLE</text>
              </div>
            </div>
            <div className="col-12 col-lg-4 text-center ">
              <div className="comp-3rd-card padding-circle  border-radius-5">
                <CircularProgressbar
                  value={10}
                  text={10 + "%"}
                  strokeWidth={5} 
                  styles={buildStyles({
                    rotation: 0.50,
                    textSize: "16px",
                    pathTransitionDuration: 0.5,
                    pathColor: `#FF0000`,
                    textColor: "#000000",
                    trailColor: "#fff",
                    backgroundColor: "#3e98c7",
                  })}
                />
                <text>NON-COMPLIANT</text>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="row">
            <div className="col-7">
              <text className="font-12 text-muted mt-2 mb-3 font-mon lint-height">
                Organizations are only to be considered compliant for the 
                <b> Qualitative Screening</b> if the cumulative revenue from
                non-compliant activities and non-operating interest income does
                not exceed 5% of their total income. Look into the detaild
                results to detrmine wht non-compliant activities are
              </text>
            </div>
            <div className="col-5 text-center">
              <buttn className="btn btn-secondary w-60 ml-5">
                View detailed results{" "}
                <i class="fa fa-angle-right" aria-hidden="true"></i>
              </buttn>
            </div>
          </div>
        </div>
      </div>
      {/* SECOND CARD */}
      <div className="row card mt-5 shadow pb-2">
        <div className="card-header bg-white shadow-lg">
          <h5 className="font-mon weight-600 d-inline">Qualitative Screeing</h5>{" "}
          <text className="border-radius-10 pills ml-3 px-2">
            <img
              width={"13px"}
              style={{ marginTop: "-1px" }}
              src={require("assets/img/dashboard/plus.png")}
            />{" "}
            Follow
          </text>{" "}
          <text className="border-radius-10  bg-green font-10 float-right mt-2 text-white px-3">
            Pass
          </text>{" "}
        </div>
        <div className="card-body"></div>
        <div className="col-12">
          <div className="row mb-4">
            <div className="col-12 col-lg-4 text-center ">
              <div className="comp-1st-card padding-circle  border-radius-5">
                <CircularProgressbar
                  value={17.09}
                  strokeWidth={5} 
                  text={17.09 + "%"}
                  styles={buildStyles({
                    rotation: 0.50,
                    textSize: "16px",
                    pathTransitionDuration: 0.5,
                    pathColor: `#2dce89`,
                    textColor: "#000000",
                    trailColor: "#fff",
                    backgroundColor: "#3e98c7",
                  })}
                />
                <img
                    src={require("assets/img/dashboard/accept.png")}
                    width="10px"
                  />
                <text>
                  {" "}
                  Interest-bearing Debt Ratio
                </text>
              </div>
            </div>
            <div className="col-12 col-lg-4 text-center ">
              <div className="comp-1st-card padding-circle  border-radius-5">
                <CircularProgressbar
                  value={17.09}
                  text={17.09 + "%"}
                  strokeWidth={5} 
                  styles={buildStyles({
                    rotation: 0.50,
                    textSize: "16px",
                    pathTransitionDuration: 0.5,
                    pathColor: `#2dce89`,
                    textColor: "#000000",
                    trailColor: "#fff",
                    backgroundColor: "#3e98c7",
                  })}
                />
                <img
                    src={require("assets/img/dashboard/accept.png")}
                    width="10px"
                  />
                <text>
                  {" "}
                  Interest-bearing Securities Ratio
                </text>
              </div>
            </div>
            <div className="col-12 col-lg-4 text-center ">
              <div className="comp-1st-card padding-circle  border-radius-5">
                <CircularProgressbar
                  value={17.09}
                  strokeWidth={5} 
                  text={17.09 + "%"}
                  styles={buildStyles({
                    rotation: 0.50,
                    textSize: "16px",
                    pathTransitionDuration: 0.5,
                    pathColor: `#2dce89`,
                    textColor: "#000000",
                    trailColor: "#fff",
                    backgroundColor: "#3e98c7",
                  })}
                />
              <img
                    src={require("assets/img/dashboard/accept.png")}
                    width="10px"
                  />
                <text>
                  {" "}
                  Liquidity Ratio
                </text>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="row">
            <div className="col-4">
              <text className="font-12 text-muted mt-2 mb-3">
                Organizations are only to be considered compliant for the
                Qualitative Screening if the cumulative revenue 
              </text>
            </div>
            <div className="col-4">
              <text className="font-12 text-muted mt-2 mb-3">
                Organizations are only to be considered compliant for the
                Qualitative Screening if the cumulative revenue 
              </text>
            </div>
            <div className="col-4">
              <text className="font-12 text-muted mt-2 mb-3">
                Organizations are only to be considered compliant for the
                Qualitative Screening if the cumulative revenue 
              </text>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};
