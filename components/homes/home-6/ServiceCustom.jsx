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
          <div className="row">
            <div className="col-lg-10">
              <p
                className="section-descr mb-50 mb-sm-30 wow fadeInUp"
                data-wow-delay="0.4s"
              >
                Three Steps to Preserve a Legacy
              </p>
            </div>
          </div>
          <ul
            className="nav nav-tabs services-tabs wow fadeInUp"
            data-wow-delay="0.55s"
            role="tablist"
          >
            <li role="presentation" className="fs-2 mb-3">
              <a
                href="#services-item-1"
                className="active"
                aria-controls="services-item-1"
                role="tab"
                aria-selected="true"
                data-bs-toggle="tab"
              >
                Step 1: Share Their Story <span className="number">01</span>
              </a>
            </li>
            <li role="presentation" className="fs-2 mb-3">
              <a
                href="#services-item-2"
                aria-controls="services-item-2"
                role="tab"
                aria-selected="false"
                data-bs-toggle="tab"
              >
                Step 2: Personalize Their Memory{" "}
                <span className="number">02</span>
              </a>
            </li>
            <li role="presentation" className="fs-2 mb-3">
              <a
                href="#services-item-3"
                aria-controls="services-item-3"
                role="tab"
                aria-selected="false"
                data-bs-toggle="tab"
              >
                Step 3: Reconnect, Whenever You Need{" "}
                <span className="number">03</span>
              </a>
            </li>
          </ul>
        </div>
        <div
          className="col-lg-6 d-flex wow fadeInLeft"
          data-wow-delay="0.55s"
          data-wow-offset={275}
        >
          <div className="tab-content services-content">
            {/* Tab Content */}
            <div
              className="tab-pane services-content-item show fade active"
              id="services-item-1"
              role="tabpanel"
            >
              <div className="services-text">
                <div className="services-text-container">
                  <h4 className="services-title">Step 1: Share Their Story</h4>
                  <p className="text-gray mb-0">
                    Upload voice messages, recordings, stories, and the moments
                    you never want to forget.
                  </p>
                </div>
              </div>
              <Image
                width={945}
                height={1016}
                className="services-image"
                src="/assets/landing/service1.jpg"
                alt="Image Description"
              />
            </div>
            {/* End Tab Content */}
            {/* Tab Content */}
            <div
              className="tab-pane services-content-item fade"
              id="services-item-2"
              role="tabpanel"
            >
              <div className="services-text">
                <div className="services-text-container">
                  <h4 className="services-title">
                    Step 2: Personalize Their Memory
                  </h4>
                  <p className="text-gray mb-0">
                    Eternal crafts an interactive memory space – where you can
                    listen, revisit, and find comfort in their presence.
                  </p>
                </div>
              </div>
              <Image
                width={945}
                height={1016}
                className="services-image"
                src="/assets/landing/service2.jpg"
                alt="Image Description"
              />
            </div>
            {/* End Tab Content */}
            {/* Tab Content */}
            <div
              className="tab-pane services-content-item fade"
              id="services-item-3"
              role="tabpanel"
            >
              <div className="services-text">
                <div className="services-text-container">
                  <h4 className="services-title">
                    Step 3: Reconnect, Whenever You Need
                  </h4>
                  <p className="text-gray mb-0">
                    A place to go when you miss them. A voice to hear when you
                    need their wisdom. A legacy, preserved.
                  </p>
                </div>
              </div>
              <Image
                width={945}
                height={1016}
                className="services-image"
                src="/assets/landing/service3.jpg"
                alt="Image Description"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
