import Reason from "@/components/about/Reason";
import AnimatedText from "@/components/common/AnimatedText";
import Footer6 from "@/components/footers/Footer6";
import Header6 from "@/components/headers/Header6";
import About from "@/components/homes/home-6/About";
import FeaturesAbout from "@/components/homes/home-6/Features";
import Testimonials from "@/components/homes/home-6/Testimonials";
import TestimonialsDark from "@/components/homes/home-6/TestimonialsDark";
import { nexCyraMultipage } from "@/data/menu";
import Image from "next/image";
import Link from "next/link";
const onePage = false;
const dark = false;
export const metadata = {
  title:
    "Fancy About || Resonance &mdash; One & Multi Page React Nextjs Creative Template",
  description:
    "Resonance &mdash; One & Multi Page React Nextjs Creative Template",
};
export default function AboutPage() {
  return (
    <>
      <div className="theme-fancy">
        <div className="page" id="top">
          <nav className="main-nav transparent stick-fixed wow-menubar wch-unset">
            <Header6 links={nexCyraMultipage} />
          </nav>
          <main id="main">
            <section className="page-section bg-gradient-gray-light-1 bg-scroll overflow-hidden">
              {/* <!-- Background Shape --> */}
              <div className="bg-shape-1 wow fadeIn">
                <Image
                  width="1443"
                  height="844"
                  src="/assets/images/demo-fancy/bg-shape-1.svg"
                  alt=""
                />
              </div>
              {/* <!-- End Background Shape --> */}

              <div className="container position-relative pt-10 pt-sm-40 text-center">
                <div className="row">
                  <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                    <h1 className="hs-title-10 mb-10">
                      <span className="wow charsAnimIn" data-splitting="chars">
                        <AnimatedText text="About" />
                        <span className="mark-decoration-3-wrap">
                          <AnimatedText text="Nexcyra" />
                          <b
                            className="mark-decoration-3 wow scalexIn"
                            data-wow-delay="0.5s"
                          ></b>
                        </span>
                      </span>
                    </h1>

                    <p
                      className="section-descr mb-0 wow fadeIn"
                      data-wow-delay="0.2s"
                    >
                      Because Some Voices Deserve to Last Forever.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <section
              className={`page-section  ${
                dark ? "bg-dark-1 light-content" : ""
              } `}
            >
              <FeaturesAbout />
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
                    <h3 className="section-title mb-30 mb-xs-20 wow fadeInUp">
                      What if you could hear them again?
                    </h3>
                    <ul className="text-start list-unstyled">
                      <li>
                        <i className="bi bi-check size-24"></i>A comforting
                        voice calling your name.
                      </li>
                      <li>
                        <i className="bi bi-check size-24"></i>A piece of advice
                        they would have given.
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
                      Nexcyra lets you reconnect with the voice of your loved
                      one—not as an AI replica, but as a living memory, a space
                      where their words remain, just as they were.
                    </p>
                    <div
                      className="local-scroll wow fadeInUp"
                      data-wow-delay="0.12s"
                    >
                      <Link
                        href={`/fancy-services${dark ? "-dark" : ""}`}
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
                      </Link>
                    </div>
                  </div>
                </div>
                {/* Images Composition */}
                <About />
                {/* End Images Composition */}
              </div>
            </section>

            <hr className={`mt-0 mb-0 ${dark ? "white" : ""}`} />
            <section className="page-section ">
              <Reason />
            </section>
          </main>
          <footer className="page-section footer bg-dark-1 light-content pb-30">
            <Footer6 />
          </footer>
        </div>{" "}
      </div>
    </>
  );
}
