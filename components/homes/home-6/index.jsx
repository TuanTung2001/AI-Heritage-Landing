import Slider6 from "@/components/elements/Slider6";
import Faqs from "@/components/homes/home-1/Faq";
import CustomerReview from "@/components/homes/home-6/CustomReview";
import Service from "@/components/homes/home-6/Service";
import ServiceCustom from "@/components/homes/home-6/ServiceCustom";
import Image from "next/image";
import Link from "next/link";
import About from "./About";
import Contact from "./Contact";
import Features from "./Features";

export default function Home6({ onePage = false, dark = false }) {
  return (
    <>
      <section
        className={`page-section  ${dark ? "bg-dark-1 light-content" : ""}`}
      >
        <Features />
      </section>
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
                What if you could hear them again?
              </h3>
              <ul className="text-start list-unstyled">
                <li>
                  <i className="bi bi-check size-24"></i>A comforting voice
                  calling your name.
                </li>
                <li>
                  <i className="bi bi-check size-24"></i>A piece of advice they
                  would have given.
                </li>
                <li>
                  <i className="bi bi-check size-24"></i>
                  The warmth of a bedtime story, a whispered “I love you.”
                </li>
              </ul>
              <p
                className="section-descr mb-40 mb-sm-20 wow fadeInUp"
                data-wow-delay="0.06s"
              >
                Nexcyra lets you reconnect with the voice of your loved one—not
                as an AI replica, but as a living memory, a space where their
                words remain, just as they were.
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
          <ServiceCustom />
        </div>
      </section>
      <section
        className={`page-section scrollSpysection  ${
          dark
            ? "bg-dark-1 bg-gradient-gray-dark-1 light-content"
            : "bg-gradient-gray-light-1 "
        } bg-scroll`}
        id="services"
      >
        <div className="container position-relative">
          <Service />
        </div>
      </section>

      <section
        className={`page-section  scrollSpysection  ${
          dark ? "bg-dark-1 light-content" : ""
        } `}
        id="CustomerReview"
      >
        <CustomerReview />
      </section>
      <h3 className="section-title-small text-center mb-30">FAQ</h3>
      <p
        className="section-descr text-center mb-40 mb-sm-20 wow fadeInUp"
        data-wow-delay="0.06s"
      >
        Got a question? Explore our Frequently Asked Questions or email
        Eternalsupport@gmail.com to find an answer!
      </p>
      <section className="d-flex flex-wrap flex-md-nowrap align-items-center container justify-content-between gap-5">
        <div className="col-12 col-lg-6">
          <Image
            src="/assets/landing/family2.png"
            alt="Image Description"
            width={1200}
            height={658}
            className="w-100 h-100 rounded-3"
            style={{ objectFit: "cover" }}
            data-wow-duration="1.2s"
            data-wow-offset={0}
          />
        </div>
        <div className="col-12 col-lg-6">
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
      {/* <section
        className={`page-section  scrollSpysection  ${
          dark ? "bg-dark-1 light-content" : ""
        } `}
        id="pricing"
      >
        <Pricing />
      </section> */}
      {/* <hr className={`mt-0 mb-0 ${dark ? "white" : ""}`} /> */}
      <section
        className={`page-section  scrollSpysection  ${
          dark ? "bg-dark-1 light-content" : ""
        } `}
        id="contact"
      >
        <Contact />
      </section>
      <hr className={`mt-0 mb-0 ${dark ? "white" : ""}`} />
      <section
        className={`page-section  ${dark ? "bg-dark-1 light-content" : ""} `}
      >
        <Slider6 />
      </section>
      {/* <section
        className={`page-section  ${dark ? "bg-dark-1 light-content" : ""} `}
      >
        <TestimonialsDark />
      </section> */}
    </>
  );
}
