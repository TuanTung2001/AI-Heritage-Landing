import { services3 } from "@/data/services";
import React from "react";
import Image from "next/image";
const ServiceItem = ({ src, title, text }) => (
  <div className="col-md-4 pt-30">
    <div className="">
      <div className="text-center w-100 py-4">
        <Image
          src={src}
          width={150}
          height={150}
          alt="Image Description"
          className=""
          style={{ objectFit: "cover", height: "100px", width: "100px" }}
        />
      </div>
      <div className="d-flex align-items-center text-center">
        <div className="w-100">
          <h4 className="services-5-title">{title}</h4>
          <p className="services-5-text mb-0 px-4">{text}</p>
        </div>
      </div>
    </div>
  </div>
);
export default function Service() {
  return (
    <>
      <div className="row services-5-grid">
        <div className="col-lg-12 mb-md-60 mb-sm-30">
          <h2 className="section-title mb-40 mb-sm-30 text-center">
            Why Nexcyra?
          </h2>
        </div>
        <div className="d-flex flex-wrap justify-content-center">
          {services3.map((service, index) => (
            <ServiceItem key={index} {...service} />
          ))}
        </div>
      </div>
      {/* End Services Grid */}
    </>
  );
}
