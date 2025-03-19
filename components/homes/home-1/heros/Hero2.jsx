"use client";
import TypeWriter from "@/components/common/TypeWriter";
import Image from "next/image";
import { useState } from "react";
import ModalVideo from "@/components/common/ModalVideo";
export default function Hero2() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div className="container min-height-100vh d-flex align-items-center pt-100 pb-100 pt-sm-120 pb-sm-120">
        {/* Home Section Content */}
        <div className="home-content text-start">
          <div className="row">
            {/* Home Section Text */}
            <div className="col-md-10 offset-md-1 col-lg-6 offset-lg-0 d-flex align-items-center mb-md-60 mb-sm-30">
              <div className="w-100 text-center text-lg-start">
                <h1 className="hs-title-8 mb-40 mb-sm-20 wow fadeInUp">
                Nexcyra – Keep Their Voice. Hold Onto
                  <span className="visually-hidden">Their Love.</span>
                  <TypeWriter
                    colorClass=""
                    strings={["Their Love.","Their Wisdom.", "Their Stories.", "Their Presence."]}
                  />
                </h1>
                <p className="" data-wow-delay="0.2s">
                They may be gone, but their words, their wisdom, and their love don’t have to be.
                </p>
                <div
                  className="local-scroll mt-n10 "
                  data-wow-delay="0.4s"
                  data-wow-offset={0}
                >
                  <a
                    href="#portfolio"
                    className="btn btn-mod btn-large btn-round btn-hover-anim align-middle mt-10"
                  >
                    <span>Begin Remembering</span>
                  </a>
                  <a
                    onClick={() => setOpen(true)}
                    className="link-hover-anim align-middle lightbox mfp-iframe ms-3 ms-sm-5 me-3 me-sm-5 mt-10"
                    data-link-animate="y"
                  >
                    <i className="icon-play size-13 me-1" /> How it works?
                  </a>
                </div>
              </div>
            </div>
            {/* End Home Section Text */}
            {/* Images */}
            <div className="col-lg-6 d-flex align-items-center">
              <div
                className="w-100 ps-xl-3 wow fadeInLeft"
                data-wow-delay="0.15s"
              >
                <div className="composition-4">
                  <div className="composition-4-decoration-1 opacity-65">
                    <Image
                      width="148"
                      height="148"
                      className="svg-shape"
                      src="/assets/images/decoration-3.svg"
                      alt=""
                    />
                  </div>
                  <div className="composition-4-image-1">
                    <div className="composition-4-image-1-inner">
                      <Image
                        width={850}
                        height={834}
                        src="/assets/landing/family2.png"
                        alt="Image Description"
                      />
                    </div>
                  </div>
                  <div className="composition-4-image-2">
                    <div className="composition-4-image-2-inner">
                      <Image
                        width={570}
                        height={598}
                        src="/assets/landing/home8.png"
                        alt="Image Description"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End Images */}
          </div>
        </div>
        {/* End Home Section Content */}
        {/* Scroll Down */}
        <div
          className="local-scroll scroll-down-wrap-type-1 wow fadeInUp"
          data-wow-offset={0}
        >
          <div className="container">
            <a href="#about" className="scroll-down-1">
              <div className="scroll-down-1-icon">
                <i className="mi-arrow-down" />
              </div>
              <div className="scroll-down-1-text">Scroll Down</div>
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
    </>
  );
}
