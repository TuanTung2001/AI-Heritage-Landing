import AnimatedText from "@/components/common/AnimatedText";
import Footer6 from "@/components/footers/Footer6";
import Header6 from "@/components/headers/Header6";
import Faqs from "@/components/homes/home-1/Faq";
import Contact from "@/components/homes/home-6/Contact";

import { nexCyraMultipage } from "@/data/menu";
import Image from "next/image";

const dark = false;
export const metadata = {
  title: "Contact NexCyra",
  description: "Contact NexCyra",
  keywords: 'Contact NexCyra',
  openGraph: {
    title: 'Home NexCyra',
    description: 'Because Some Voices Deserve to Last Forever.',
    image: '/logo 2.png',
    url: 'https://example.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Twitter NexCyra',
    description: 'Description for Twitter Card',
    image: '/logo 2.png',
  },
};
export default function ContactPage() {
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
                        <AnimatedText text="Contact" />
                        <span className="mark-decoration-3-wrap">
                          <AnimatedText text="Us" />
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
              className={`page-section  scrollSpysection  ${
                dark ? "bg-dark-1 light-content" : ""
              } `}
              id="contact"
            >
              <Contact />
            </section>
            <>
              <hr className="mt-0 mb-0" />
              {/* FAQ Section */}
              <h3 className="section-title-small text-center mb-30 pt-60">FAQ</h3>
              <p
                className="section-descr text-center mb-40 mb-sm-20 wow fadeInUp"
                data-wow-delay="0.06s"
              >
                Got a question? Explore our Frequently Asked Questions or email
                Eternalsupport@gmail.com to find an answer!
              </p>
              <section className="pb-60 d-flex flex-wrap flex-md-nowrap align-items-center container justify-content-between gap-5">
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
