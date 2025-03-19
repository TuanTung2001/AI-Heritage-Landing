"use client";

import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
const projects = [
  {
    type: "image",
    src: "/assets/landing/img1.jpg",
    title: "George Eliot",
    description:
      "Our dead are never truly dead to us until we have forgotten them.",
    buttonText: "View Project 1",
    buttonLink: "#",
  },
  {
    type: "image",
    src: "/assets/landing/family.jpg",
    title: "Coco (2017)",
    description: "You only truly die when no one remembers your name.",
    buttonText: "View Project 2",
    buttonLink: "#",
  },
  {
    type: "image",
    src: "/assets/landing/service1.jpg",
    title: "Helen Keller",
    description:
      "What we have once enjoyed we can never lose. All that we love deeply becomes a part of us.",
    buttonText: "View Project 3",
    buttonLink: "#",
  },

  {
    type: "image",
    src: "/assets/landing/service2.jpg",
    title: "Irving Berlin",
    description: "The song is ended, but the melody lingers on.",
    buttonText: "View Project 3",
    buttonLink: "#",
  },
  {
    type: "image",
    src: "/assets/landing/service3.jpg",
    title: "Thomas Campbell",
    description: "To live in hearts we leave behind is not to die.",
    buttonText: "View Project 3",
    buttonLink: "#",
  },
  {
    type: "image",
    src: "/assets/landing/service4.jpg",
    title: "Jamie Anderson",
    description: "Grief is just love with no place to go.",
    buttonText: "View Project 3",
    buttonLink: "#",
  },
];

export default function Slider6() {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      modules={[Navigation, Pagination]}
      navigation={{
        prevEl: ".snbp3",
        nextEl: ".snbn3",
      }}
      watchSlidesProgress
      resizeObserver
      className="fullwidth-slider owl-carousel bg-gray owl-theme overflow-hidden"
      style={{
        opacity: 1,
        display: "block",
      }}
      pagination={{
        el: ".sp3",
        clickable: true,
        bulletActiveClass: "active",
        renderBullet: (index, className) => {
          return `<div class=" owl-page ${className}">
                   <span></span>
                  </div>`;
        },
      }}
    >
      {projects.map((elm, i) => (
        <SwiperSlide
          key={i}
          className="page-section bg-gray-lighter"
          style={{ padding: "3rem 0" }}
        >
          <div className="container relative">
            <div className="d-flex flex-wrap align-items-center justify-content-center">
              <div className="w-100 d-flex justify-content-center">
                <i className="bi bi-quote fs-2 d-flex" ></i>
                <h2 className="section-title-small mb-md-4 d-inline text-center">
                  {elm.description}
                </h2>
                <i className="bi bi-quote fs-2 d-flex align-items-end" style={{transform: "rotate(180deg)"}}></i>
              </div>
              <p className="text-gray mb-3">{elm.title}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
      <div className="owl-controls clickable">
        <div className="owl-pagination sp3"></div>
        <div className="owl-buttons">
          <div className="owl-prev snbp3 " role="button" tabIndex="0">
            <span className="visually-hidden">Previous Slide</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="27px"
              height="57px"
              viewBox="0 0 27 57"
              fill="currentColor"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M5.005,28.500 L27.000,54.494 L24.000,56.994 L0.005,28.500 L24.000,0.006 L27.000,2.506 L5.005,28.500 Z"></path>
            </svg>
          </div>
          <div className="owl-next snbn3" role="button" tabIndex="0">
            <span className="visually-hidden">Next Slide</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="27px"
              height="57px"
              viewBox="0 0 27 57"
              fill="currentColor"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M21.995,28.500 L-0.000,54.494 L3.000,56.994 L26.995,28.500 L3.000,0.006 L-0.000,2.506 L21.995,28.500 Z"></path>
            </svg>
          </div>
        </div>
      </div>
    </Swiper>
  );
}
