"use client";

import React from "react";

const BannerBgBorder = () => {
  return (
    <>
      <div className="banner-bg-border">
        <div className="vertical-border-wrapper">
          <div className="vertical-border">
            <div className="border-wrapper _01"></div>
          </div>
          <div className="vertical-border">
            <div className="border-wrapper _02"></div>
          </div>
          <div className="vertical-border">
            <div className="border-wrapper _03"></div>
          </div>
          <div className="vertical-border">
            <div className="border-wrapper _04"></div>
          </div>
          <div className="vertical-border">
            <div className="border-wrapper _05"></div>
          </div>
        </div>
        <div className="horizontal-border-wrapper">
          <div className="horizontal-border"></div>
          <div className="horizontal-border left">
            <div className="border-wrapper _06"></div>
          </div>
          <div className="horizontal-border right">
            <div className="border-wrapper _07"></div>
          </div>
          <div className="horizontal-border"></div>
        </div>
      </div>
    </>
  );
};

export default BannerBgBorder;
