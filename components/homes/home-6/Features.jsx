import { features3 } from "@/data/features";
import Image from "next/image";
export default function FeaturesAbout() {
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
                className="services-image rounded-3"
                src="/assets/landing/home7.jpg"
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
            <h3 className="section-title-small mb-30">Our Story</h3>

            <p className="section-descr mb-30">
              Time moves forward, but love never fades. At Nexcyra, we believe
              that the voices of those we cherish should never be lost to time.
              We started this journey with a simple yet profound mission: to
              preserve the voices, wisdom, and warmth of loved ones so they can
              continue to be a part of our lives. For many of us, the fear of
              forgetting the way someone sounded—their laughter, the way they
              said our name, the comforting words they once shared—can be
              heartbreaking. Nexcyra was born out of the desire to bridge that
              gap, to offer a space where memories are not just stored but felt,
              heard, and experienced in a deeply personal way.
            </p>
            {/* End Features List */}
          </div>
        </div>
        {/* End Section Text */}
      </div>
    </div>
  );
}
