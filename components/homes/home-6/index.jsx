import React from "react";
import About from "./About";
import Service from "./Service";
import Features from "./Features";
import Portfolio from "./Portfolio";
import Testimonials from "./Testimonials";
import Blog from "./Blog";
import Newsletter from "./Newsletter";
import Pricing from "./Pricing";
import Contact from "./Contact";
import Link from "next/link";
import TestimonialsDark from "./TestimonialsDark";
import Content from "@/components/homes/home-6/Content";
import Faqs from "@/components/homes/home-1/Faq";
import Image from "next/image";

export default function Home6({ onePage = false, dark = false }) {
  return (
    <>
      <hr className={`mt-0 mb-0 ${dark ? "white" : ""}`} />
      <section
        className={`page-section  scrollSpysection ${
          dark ? "bg-dark-1 light-content" : ""
        } `}
        id="about"
      >
        <div className="container position-relative">
          <div className="row mb-xs-40">
            <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2 text-center">
              <h2 className="section-caption-fancy mb-20 mb-xs-10">
                Why Eternal?
              </h2>
              <h3 className="section-title mb-30 mb-xs-20 wow fadeInUp">
                Because Some Voices Deserve to Last Forever.
              </h3>
              <ul className="text-start list-unstyled">
                <li>
                  <i className="bi bi-check size-24"></i>
                  Memories fade, but love remains – Eternal keeps their words,
                  laughter, and wisdom alive.
                </li>
                <li>
                  <i className="bi bi-check size-24"></i>
                  More than just a recording – interact with their stories,
                  their voice, and their guidance.
                </li>
                <li>
                  <i className="bi bi-check size-24"></i>
                  Not an imitation, but an echo – a way to honor and cherish,
                  not replace.
                </li>
              </ul>
              <p
                className="section-descr mb-40 mb-sm-20 wow fadeInUp"
                data-wow-delay="0.06s"
              >
                A place to hold onto what matters most – to heal through memory,
                to connect through love.
              </p>
              <div className="local-scroll wow fadeInUp" data-wow-delay="0.12s">
                {onePage ? (
                  <>
                    <a
                      href="#services"
                      className="link-hover-anim"
                      data-link-animate="y"
                    >
                      <span className="link-strong link-strong-unhovered">
                        View our services{" "}
                        <i
                          className="mi-arrow-right size-24"
                          aria-hidden="true"
                        ></i>
                      </span>
                      <span
                        className="link-strong link-strong-hovered"
                        aria-hidden="true"
                      >
                        View our services{" "}
                        <i
                          className="mi-arrow-right size-24"
                          aria-hidden="true"
                        ></i>
                      </span>
                    </a>
                  </>
                ) : (
                  <>
                    <Link
                      href={`/fancy-about${dark ? "-dark" : ""}`}
                      className="link-hover-anim"
                      data-link-animate="y"
                    >
                      <span className="link-strong link-strong-unhovered">
                        Learn more about us{" "}
                        <i
                          className="mi-arrow-right size-24"
                          aria-hidden="true"
                        ></i>
                      </span>
                      <span
                        className="link-strong link-strong-hovered"
                        aria-hidden="true"
                      >
                        Learn more about us{" "}
                        <i
                          className="mi-arrow-right size-24"
                          aria-hidden="true"
                        ></i>
                      </span>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
          {/* Images Composition */}
          <About />
          {/* End Images Composition */}
        </div>
      </section>
      <hr className={`mt-0 mb-0 ${dark ? "white" : ""}`} />
      <section
        className={`page-section scrollSpysection  ${
          dark
            ? "bg-dark-1 bg-gradient-gray-dark-1 light-content"
            : "bg-gradient-gray-light-1 "
        } bg-scroll`}
        id="services"
      >
        <div className="container position-relative">
          <div className="row mb-60 mb-sm-40">
            <div className="col-md-8 col-lg-6">
              <h2 className="section-caption-fancy mb-20 mb-xs-10">
                How Eternal Works
              </h2>
              <h3 className="section-title mb-0 mb-sm-20">
                Three Steps to Preserve a Legacy
              </h3>
            </div>
            <div className="col-md-4 col-lg-6 d-flex align-items-end">
              <div className="local-scroll text-md-end w-100">
                {onePage ? (
                  <>
                    {" "}
                    <a
                      href="#portfolio"
                      className="link-hover-anim"
                      data-link-animate="y"
                    >
                      <span className="link-strong link-strong-unhovered">
                        View works{" "}
                        <i
                          className="mi-arrow-right size-24"
                          aria-hidden="true"
                        ></i>
                      </span>
                      <span
                        className="link-strong link-strong-hovered"
                        aria-hidden="true"
                      >
                        View works{" "}
                        <i
                          className="mi-arrow-right size-24"
                          aria-hidden="true"
                        ></i>
                      </span>
                    </a>
                  </>
                ) : (
                  <>
                    {" "}
                    <Link
                      href={`/fancy-services${dark ? "-dark" : ""}`}
                      className="link-hover-anim"
                      data-link-animate="y"
                    >
                      <span className="link-strong link-strong-unhovered">
                        ALl services{" "}
                        <i
                          className="mi-arrow-right size-24"
                          aria-hidden="true"
                        ></i>
                      </span>
                      <span
                        className="link-strong link-strong-hovered"
                        aria-hidden="true"
                      >
                        ALl services{" "}
                        <i
                          className="mi-arrow-right size-24"
                          aria-hidden="true"
                        ></i>
                      </span>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
          {/* Services Grid */}

          <Service />
        </div>
      </section>
      <section
        className={`page-section  ${dark ? "bg-dark-1 light-content" : ""} `}
      >
        {/* <Features /> */}
        <Content />
      </section>
      <h3 className="section-title-small text-center mb-30">FAQ</h3>
      <p
        className="section-descr text-center mb-40 mb-sm-20 wow fadeInUp"
        data-wow-delay="0.06s"
      >
        Got a question? Explore our Frequently Asked Questions or email
        Eternalsupport@gmail.com to find an answer!
      </p>
      <section className=" d-flex align-items-center container justify-content-between gap-5">
        <div className="col-lg-6">
          <Image
            src="/assets/landing/faq.jpg"
            alt="Image Description"
            width={1200}
            height={658}
            className="w-100 h-100"
            style={{ objectFit: "cover" }}
            data-wow-duration="1.2s"
            data-wow-offset={0}
          />
        </div>
        <div className="col-lg-6">
          <Faqs />
        </div>
      </section>
      {/* <section
        className={`page-section  scrollSpysection  ${
          dark ? "bg-dark-1 light-content" : ""
        } `}
        id="portfolio"
      >
        <div className="container position-relative">
          <div className="row mb-60 mb-sm-40">
            <div className="col-md-8 offset-md-2 text-center">
              <h2 className="section-caption-fancy mb-20 mb-xs-10">
                Selected Work
              </h2>
              <h3 className="section-title mb-0">
                We believe in making the best work, and being the best to work
                with.
              </h3>
            </div>
          </div>

          <Portfolio />
        </div>
      </section> */}
      <hr className={`mt-0 mb-0 ${dark ? "white" : ""}`} />
      <section
        className={`page-section  ${dark ? "bg-dark-1 light-content" : ""} `}
      >
        {dark ? <TestimonialsDark /> : <Testimonials />}
      </section>
      <hr className={`mt-0 mb-0 ${dark ? "white" : ""}`} />
      {/* <section
        className={`page-section  scrollSpysection  ${
          dark ? "bg-dark-1 light-content" : ""
        } `}
        id="blog"
      >
        <Blog />
      </section>

      <hr className={`mt-0 mb-0 ${dark ? "white" : ""}`} />

      <section
        className={`page-section ${
          dark
            ? "bg-dark-1 bg-gradient-gray-dark-1 light-content"
            : "bg-gradient-gray-light-1 "
        } bg-scroll`}
      >
        <Newsletter />
      </section> */}
      <section
        className={`page-section  scrollSpysection  ${
          dark ? "bg-dark-1 light-content" : ""
        } `}
        id="pricing"
      >
        <Pricing />
      </section>
      <hr className={`mt-0 mb-0 ${dark ? "white" : ""}`} />
      <section
        className={`page-section  scrollSpysection  ${
          dark ? "bg-dark-1 light-content" : ""
        } `}
        id="contact"
      >
        <Contact />
      </section>
    </>
  );
}
