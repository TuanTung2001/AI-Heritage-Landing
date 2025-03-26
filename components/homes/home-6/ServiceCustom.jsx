import AnimatedText from "@/components/common/AnimatedText";
import Image from "next/image";
import React from "react";

export default function ServiceCustom() {
  return (
    <div className="container position-relative">
      <div className="row">
        <div className="col-lg-6 mb-md-60 mb-sm-30">
          <h2 className="section-caption-fancy mb-20 mb-xs-10">
            How Eternal Works
          </h2>
          <h3 className="section-title mb-30">
            <AnimatedText text="Three Steps to Preserve a Legacy" />
          </h3>
          <ul
            className="nav nav-tabs wow fadeInUp pr-10"
          >
            <li role="presentation" className="fs-3 mb-3">
              Step 1: Share Their Story
            </li>
            <li role="presentation" className="fs-3 mb-3">
              Step 2: Personalize Their Memory
            </li>
            <li role="presentation" className="fs-3 mb-3">
              Step 3: Reconnect, Whenever You Need
            </li>
          </ul>
        </div>
        <div
          className="col-lg-6 d-flex wow fadeInLeft"
          data-wow-delay="0.55s"
          data-wow-offset={275}
        >
          <div className="d-flex align-items-center services-content">
            {/* Tab Content */}
            <div className="video">
              <video loop="" controls="controls" className="rounded-3 h-100">
                <source src="/assets/videos/nexcyra.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
