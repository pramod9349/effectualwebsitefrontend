import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";

import "swiper/css/navigation";
SwiperCore.use([Navigation]);

export default function Carouselslider() {
  return (
    <div>
      <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        loopFillGroupWithBlank={true}
        grabCursor={true}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 16,
            slidesPerGroup: 1,
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 1,
            spaceBetween: 16,
            slidesPerGroup: 1,
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 1,
            spaceBetween: 24,
            slidesPerGroup: 1,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 32,
            slidesPerGroup: 1,
          },
          1336: {
            slidesPerView: 1,
            spaceBetween: 32,
            slidesPerGroup: 1,
          },
        }}
        className="swiper mySwiper"
      >
        <SwiperSlide className="swiper-slide">
          <div class="flex flex-col md:flex w-full md:flex-row justify-center items-center h-96">
            <div class="w-full">
              <img src="images/bannerOne.jpeg" alt="headphone" />
            </div>
          </div>
        </SwiperSlide>
        {/* <SwiperSlide className="swiper-slide">
          <div class=" dark:bg-gray-800 bg-gray-100 h-full w-full px-4 sm:px-10 md:px-6 lg:px-10 xl:px-20 ">
            <div class="flex flex-col md:flex md:flex-row justify-center items-center h-96">
              <div
                class="w-full bg-center bg-cover "
                style={{ backgroundImage: "url(images/banner.jpg)" }}
              >
                <div class="flex flex-direction:row-reverse; items-center justify-end w-full h-full bg-gray-900 bg-opacity-10">
                  <div class="px-16 items-center">
                    <h2 class="text-lg font-semibold text-white lg:text-lg">
                      Enabling Fortune 500's, R&D Giants, Law <br />
                      firms, Universities & SME’s Around The Globe
                      <br /> Gather Intelligence That Protects and <br />
                      Nurtures Innovation Through a Team of <br />
                      200+ Techno Legal Professionals.
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide> */}

        {/* <SwiperSlide className="swiper-slide">

<div class=" dark:bg-gray-800 bg-gray-100 h-auto w-full px-4 sm:px-10 md:px-6 lg:px-10 xl:px-20 ">
<div class="flex flex-col md:flex md:flex-row justify-center items-center w-auto ">


  <img src="images/SocialBanner.png" alt="image" />

</div>
</div>

</SwiperSlide> */}

        <SwiperSlide className="swiper-slide">
          <div class=" dark:bg-gray-800 bg-gray-100 h-full w-full px-4 sm:px-10 md:px-6 lg:px-10 xl:px-20 ">
            <div class="flex flex-col md:flex md:flex-row justify-center items-center">
              <div class="w-full md:w-1/2 order-1 md:order-none">
                <div class="md:w-96">
                  <h1 class="font-extrabold text-2xl md:text-4xl lg:text-5xl md:leading-9 text-gray-800 dark:text-white mt-6 md:mt-0">
                    Intelligence That Matters{" "}
                  </h1>
                  {/* <h1 class="font-light text-2xl md:text-4xl lg:text-5xl md:leading-9 text-gray-800 dark:text-white mt-2 md:mt-4 lg:mt-6">That Matters</h1> */}
                  <p class="text-sm md:text-base text-gray-800 dark:text-white md:leading-6 mt-4 md:mt-6 md:w-4/5 lg:w-auto">
                    With a clientele spread across 50+ countries, we guide
                    corporations and universities on how to manage and monetize
                    their patent portfolios
                  </p>
                </div>
              </div>
              <div class="w-auto">
                <img src="logo-explained.png" alt="headphone" />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      {/* <div className="flex justify-center mt-10  items-center space-x-6 w-full">
      <button aria-label="back" className="rounded-full p-1.5 flex justify-center items-center bg-gray-600  swiper-button-prev w-1.5 h-2.5">
        <img className=" w-6 h-6" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonials_7_svg-6_prev.svg" alt="back" />
      </button>
      <button aria-label="next" className="rounded-full p-1.5 flex justify-center items-center bg-gray-600  swiper-button-next w-1.5 h-2.5">
        <img className=" w-6 h-6" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonials_7_svg-6_next.svg" alt="next" />
      </button>
    </div> */}
      <style>
        {`
    @media (max-width: 478px) { 
        .swiper {
            padding: 0 14px;
        }
    }
    .swiper {
        width: 100%;
        height: 100%;
    }

    .swiper-button-next::after,
    .swiper-button-prev::after {
        content: "";
    }

    .swiper-button-next,
    .swiper-button-prev {
        position: relative;
        right: 0;
        height: 30px;
        width: 30px;
    }

    .swiper-slide {
        text-align: center;
        font-size: 18px;

        /* Center slide text vertically */
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
    }

    .swiper-slide img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    
    `}
      </style>
    </div>
  );
}
