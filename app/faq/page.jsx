import AnimatedText from "@/components/common/AnimatedText";
import Faq from "@/components/common/Faq";
import Footer6 from "@/components/footers/Footer6";
import Header6 from "@/components/headers/Header6";
import Contact from "@/components/homes/home-6/Contact";

import { nexCyraMultipage } from "@/data/menu";
import Image from "next/image";

const onePage = false;
const dark = false;
export const metadata = {
  title:
    "Fancy Contact || Resonance &mdash; One & Multi Page React Nextjs Creative Template",
  description:
    "Resonance &mdash; One & Multi Page React Nextjs Creative Template",
};
export default function FAQPage() {
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
                        <span className="mark-decoration-3-wrap">
                          <AnimatedText text="FAQ" />
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
                      Got a question? Explore our Frequently Asked Questions
                      or email hello@nexcyra.com to find an answer!
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <>
              {/* FAQ Section */}
              <section className="page-section z-index-1">
                <div className="container position-relative">
                  <div className="row position-relative">
                   
                    <div className="col-12 pt-10 pt-sm-0">
                      <Faq />
                    </div>
                  </div>
                </div>
              </section>
            </>
          </main>
          <footer className="page-section footer bg-dark-1 light-content pb-30">
            <Footer6 />
          </footer>
        </div>{" "}
      </div>
    </>
  );
}
