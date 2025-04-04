"use client";
import React from "react";
import Image from "next/image";
import FooterSocials from "./FooterSocials";
import { footerLinks, navigationLinks } from "@/data/footer";

export default function Footer6() {
  const scrollToTop = (event) => {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Linear easing replacement
    });
  };

  return (
    <div className="container">
      <div className="row pb-60 pb-sm-80 pb-xs-50">
        <div className="col-lg-3 text-gray mb-md-50">
          <div className="mb-30">
            <Image
              src="/logo 1.png"
              alt="Your Company Logo"
              width={154}
              height={35}
            />
          </div>
          <p>Keep Their Voice. Hold Onto Their Love</p>
          <div className="clearlinks">
            <strong>Tel: </strong>
            <a href="tel:+1 (315) 544 - 0192">+1 (315) 544 - 0192</a>
          </div>
          <div className="clearlinks">
            <strong>Email: </strong>
            <a href="mailto:hello@nexcyra.com">hello@nexcyra.com</a>
          </div>
        </div>
        <div className="col-lg-7 offset-lg-2">
          <div className="row mt-n30">
            {/* Footer Widget */}
            <div className="col-sm-4 mt-30">
              <h3 className="fw-title">Company</h3>
              <ul className="fw-menu clearlist local-scroll">
                {navigationLinks.map((elm, i) => (
                  <li key={i}>
                    <a href={elm.href}>{elm.text}</a>
                  </li>
                ))}
              </ul>
            </div>
            {/* End Footer Widget */}
            {/* Footer Widget */}
            <div className="col-sm-4 mt-30">
              <h3 className="fw-title">Social Media</h3>
              <ul className="fw-menu clearlist">
                <FooterSocials />
              </ul>
            </div>
            {/* End Footer Widget */}
            {/* Footer Widget */}
            <div className="col-sm-4 mt-30">
              <h3 className="fw-title">Legal &amp; Press</h3>
              <ul className="fw-menu clearlist">
                {footerLinks.map((elm, i) => (
                  <li key={i}>
                    <a href={elm.path}>{elm.name}</a>
                  </li>
                ))}
              </ul>
            </div>
            {/* End Footer Widget */}
          </div>
        </div>
      </div>
      {/* Footer Text */}
      <div className="row text-gray justify-content-end">
        <a href="#top" className="link-to-top">
          <i className="mi-arrow-up size-24" />
          <span className="visually-hidden">Scroll to top</span>
        </a>
      </div>
      {/* End Footer Text */}
    </div>
  );
}
