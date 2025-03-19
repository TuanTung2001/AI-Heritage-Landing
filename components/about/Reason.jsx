import Image from "next/image";
import React from "react";
const dark = false;

const Reason = () => {
  return (
    <div className="row g-0">
      <div className="col-lg-6 mt-n30 mt-md-0 mb-30 mb-md-0">
        <div
          id="paddingRight"
          className={`split-column-right ${
            dark ? "bg-dark-2" : "bg-dark-1"
          } light-content position-relative d-flex align-items-center`}
          data-rellax-y=""
          data-rellax-speed="0.5"
          data-rellax-percentage="0.5"
        >
          {/* Decorative Dots */}
          <div className="position-absolute top-0 start-0 pt-2 ps-2 opacity-02">
            <Image
              width={192}
              height={222}
              src="/assets/images/demo-strong/decoration.svg"
              alt=""
            />
          </div>
          {/* End Decorative Dots */}
          <div>
            <h2 className="section-title mb-30">Why It Matters</h2>
            <p className="mb-50">
              Memories are not just files to be stored; they are experiences
              that shape who we are. Our voices hold stories, emotions, and
              connections that deserve to live on. With Nexcyra, we provide a
              way to keep those voices close, not as a replacement for grief but
              as a way to carry love forward.
            </p>
          </div>
        </div>
      </div>
      <div className="col-lg-6 d-flex align-items-stretch order-lg-first">
        <div className="split-image-left">
          <Image
            width={1100}
            height={930}
            src="/assets/landing/home3.jpg"
            alt="Image Description"
          />
          {/* End Circle Text */}
        </div>
      </div>
    </div>
  );
};

export default Reason;
