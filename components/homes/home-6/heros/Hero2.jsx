"use client";

import ModalVideo from "@/components/common/ModalVideo";
import { useState } from "react";

export default function Hero2() {
  const [isOpen, setOpen] = useState(false);
  return (
    <div>
      <div className="container min-height-100vh overflow-hidden d-flex align-items-center pt-100 pb-100">
        {/* Home Section Content */}
        <div className="home-content">
          <div className="row">
            {/* Home Section Text */}
            <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
              <h2 className="section-caption-fancy large mb-30 mb-xs-20 wow fadeInUp">
                Resonance Web Studio
              </h2>
              <h1
                className="hs-title-9 mb-30 wow fadeRotateIn"
                data-wow-delay="0.2s"
              >
                Eternal – Keep Their Voice. Hold Onto{" "}
                <span className="mark-decoration-5"> Their Love</span>{" "}
              </h1>
              <div className="row">
                <ul className="col-md-10 offset-md-1">
                  <li className="white d-flex" data-wow-delay="0.4s">
                    <div className="text-start">
                      <p className="mb-0">
                        <i className="bi bi-person-circle"></i> - When was the
                        last time you heard their voice?
                      </p>
                      <p>
                        A simple voicemail. A bedtime story. A quiet “I love
                        you” whispered in passing.
                      </p>
                    </div>
                  </li>
                  <li className="white d-flex" data-wow-delay="0.4s">
                    <div className="text-start">
                      <p className="mb-0">
                        <i className="bi bi-person-circle"></i> - One day, we
                        realize we can’t quite remember how they sounded.
                      </p>
                      <p>
                        The laughter. The way they said your name. The words
                        that once felt so close now seem out of reach.
                      </p>
                    </div>
                  </li>
                  <li className="white d-flex" data-wow-delay="0.4s">
                    <div className="text-start">
                      <p className="mb-0">
                        <i className="bi bi-person-circle"></i> - We can’t turn
                        back time – but we can hold onto what truly matters.
                      </p>
                      <p>
                        Not just a recording. Not just a photo. But a space
                        where their voice, their wisdom, and their love remain
                        alive.
                      </p>
                    </div>
                  </li>
                  <li className="white d-flex" data-wow-delay="0.4s">
                    <div className="text-start">
                      <p className="mb-0">
                        <i className="bi bi-person-circle"></i> - Preserve their
                        voice & stories – so you never have to say goodbye.
                      </p>
                      <p>
                        Reconnect with memories – in a way that brings comfort,
                        not pain.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div
                className="local-scroll wow fadeInUp wch-unset"
                data-wow-delay="0.6s"
              >
                <a
                  href="#portfolio"
                  className="btn btn-mod btn-color btn-large btn-round btn-hover-anim mx-1 mb-xs-10"
                >
                  <span>Discover Works</span>
                </a>
                {/* <a
                  onClick={() => setOpen(true)}
                  className="btn btn-mod btn-w-c btn-large btn-round mx-1 mb-xs-10 lightbox mfp-iframe"
                  data-btn-animate="y"
                >
                  <i className="icon-play size-13 me-1" /> How we work?
                </a> */}
              </div>
            </div>
            {/* End Home Section Text */}
          </div>
        </div>
        {/* End Home Section Content */}
        {/* Scroll Down */}
        <div
          className="local-scroll scroll-down-wrap-4 wow fadeInUp"
          data-wow-offset={0}
        >
          <div className="full-wrapper text-center">
            <a href="#about" className="scroll-down-4">
              <i className="mi-arrow-down size-24" />
            </a>
          </div>
        </div>
        {/* End Scroll Down */}
      </div>{" "}
      <ModalVideo
        channel="youtube"
        youtube={{ mute: 0, autoplay: 0 }}
        isOpen={isOpen}
        videoId="jTea_8Fk5Ns"
        setIsOpen={() => setOpen(false)}
      />{" "}
    </div>
  );
}
