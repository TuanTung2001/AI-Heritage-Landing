import Footer6 from "@/components/footers/Footer6";
import Header6 from "@/components/headers/Header6";
import Home6 from "@/components/homes/home-6";
import Hero1 from "@/components/homes/home-6/heros/Hero1";
import Hero2 from "@/components/homes/home-1/heros/Hero2";
import Image from "next/image";
import dynamic from "next/dynamic";
import { fancyMultipage } from "@/data/menu";
import ParallaxContainer from "@/components/common/ParallaxContainer";
import Header1Multipage from "@/components/headers/Header1Multipage";
import { menuItems } from "@/data/menu";

export const metadata = {
  title:
    "Home 6 Image Parallax MultiPage || Resonance &mdash; One & Multi Page React Nextjs Creative Template",
  description:
    "Resonance &mdash; One & Multi Page React Nextjs Creative Template",
};
export default function Home6ImageParallaxMultiPage() {
  return (
    <>
      <div className="theme-fancy">
        <div className="page" id="top">
          <div className="dark-mode">
            <nav className="main-nav transparent stick-fixed wow-menubar ">
              <Header1Multipage links={menuItems} />
            </nav>
          </div>
          <main id="main">
            <section
              className="home-section bg-gradient-gray-light-1 bg-scroll scrollSpysection"
              id="home"
            >
              <div className="bg-shape-1 wow fadeIn">
                <Image
                  width="1443"
                  height="844"
                  src="/assets/images/bg-shape-1.svg"
                  alt=""
                  className="opacity-05"
                />
              </div>
              <Hero2 />
            </section>

            <Home6 />
          </main>
          <footer className="page-section footer bg-dark-1 light-content pb-30">
            <Footer6 />
          </footer>
        </div>{" "}
      </div>
    </>
  );
}
