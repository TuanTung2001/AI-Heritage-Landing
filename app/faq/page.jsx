import ParallaxContainer from "@/components/common/ParallaxContainer";
import Link from "next/link";

import AnimatedText from "@/components/common/AnimatedText";
import Image from "next/image";

import Faq from "@/components/common/Faq";
import Footer6 from "@/components/footers/Footer6";
import Header6 from "@/components/headers/Header6";
import { nexCyraMultipage } from "@/data/menu";

export const metadata = {
  title: "FAQ NexCyra",
  description: "FAQ NexCyra",
  keywords: 'FAQ NexCyra',
  openGraph: {
    title: 'Home NexCyra',
    description: 'We understand that preserving a loved one’s voice is a deeply personal decision. If you’d like to learn more or discuss how Nexcyra can help, we’re here to listen.',
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
export default function FAQPage() {
  return (
    <>
      <div className="theme-fancy">
        <div className="page" id="top">
          <nav className="main-nav transparent stick-fixed wow-menubar">
            <Header6 links={nexCyraMultipage} />
          </nav>
          <main id="main">
            <section className="page-section pt-0 pb-0" id="home">
              <ParallaxContainer
                className="page-section bg-gray-light-1 bg-light-alpha-90 parallax-5"
                style={{
                  backgroundImage: "url(/assets/landing/home6.jpg)",
                }}
              >
                <>
                  <div className="position-absolute top-0 bottom-0 start-0 end-0 bg-gradient-white" />
                  <div className="container position-relative pt-50">
                    {/* Section Content */}
                    <div className="text-center">
                      <div className="row">
                        {/* Page Title */}
                        <div className="col-md-8 offset-md-2">
                          <h2
                            className="section-caption-border mb-30 mb-xs-20 wow fadeInUp"
                            data-wow-duration="1.2s"
                          >
                            FAQ
                          </h2>
                          <h1 className="hs-title-1 mb-0">
                            <span
                              className="wow charsAnimIn"
                              data-splitting="chars"
                            >
                              <AnimatedText text="Frequently Asked Questions" />
                            </span>
                          </h1>
                        </div>
                        {/* End Page Title */}
                      </div>
                    </div>
                    {/* End Section Content */}
                  </div>
                </>
              </ParallaxContainer>
            </section>
            <>
              <section className="page-section pt-0">
                <div className="container relative wow fadeInUp">
                  <div className="row mb-30">
                    <div className="col-md-8 offset-md-2">
                      {/* Search */}
                      <Faq />
                      {/* End Search */}
                    </div>
                  </div>
                </div>
              </section>
              {/* End Section */}
              {/* Divider */}
              <hr className="mt-0 mb-0" />
              <section className="page-section">
                <div className="container position-relative">
                  {/* Decorative Waves */}
                  <div className="position-relative">
                    <div
                      className="decoration-21 d-none d-lg-block"
                      data-rellax-y=""
                      data-rellax-speed="0.7"
                      data-rellax-percentage="0.5"
                    >
                      <Image
                        src="/assets/images/decoration-3.svg"
                        className="svg-shape"
                        width={148}
                        height={148}
                        alt=""
                      />
                    </div>
                  </div>
                  {/* End Decorative Waves */}
                  <div className="row wow fadeInUp">
                    <div className="col-md-6 offset-md-1 col-lg-5 offset-lg-2 text-md-start mb-sm-30">
                      <p className="section-descr mb-0">
                        We understand that preserving a loved one’s voice is a
                        deeply personal decision. If you’d like to learn more or
                        discuss how Nexcyra can help, we’re here to listen.
                      </p>
                    </div>
                    <div className="col-md-4 col-lg-3 text-md-end">
                      <div className="local-scroll">
                        <Link
                          href={`/contact`}
                          className="btn btn-mod btn-large btn-round btn-hover-anim"
                        >
                          <span>Contact us</span>
                        </Link>
                      </div>
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
