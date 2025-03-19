import { features3 } from "@/data/features";
import Image from "next/image";
export default function Features() {
  return (
    <div className="container position-relative">
      <div className="row">
        {/* Image */}
        <div className="col-lg-6 col-xl-7 d-flex align-items-center">
          <div className="w-100">
            <div className="video">
              <Image
                width={1710}
                height={972}
                className="services-image"
                src="/assets/landing/demo.png"
                alt="Image Description"
              />
            </div>
          </div>
        </div>
        {/* End Images */}
        {/* Section Text */}
        <div className="col-lg-6 col-xl-5 d-flex align-items-center order-first order-lg-last mb-md-60 mb-sm-40">
          <div className="w-100">
            {/* <h2 className="section-caption-fancy mb-20 mb-xs-10">
              Why Choose Us?
            </h2> */}
            <h3 className="section-title-small mb-30">
              We can’t turn back time, but we can hold onto what truly matters.
            </h3>

            {/* Features List */}
            <div className="row features-list">
              {/* Features List Item */}
              {features3.map((feature, index) => (
                <div key={index} className="col-lg-12 d-flex mb-3">
                  <div className="features-list-icon">
                    <i className="mi-check" />
                  </div>
                  <div className="features-list-text">{feature.text}</div>
                </div>
              ))}
              {/* End Features List Item */}
            </div>
            <p className="section-descr mb-30">
              Nexcyra keeps their voice, their warmth, and their words
              close—whenever you need them. It doesn’t erase grief but walks
              with you, helping you carry love forward.
            </p>
            {/* End Features List */}
          </div>
        </div>
        {/* End Section Text */}
      </div>
    </div>
  );
}
