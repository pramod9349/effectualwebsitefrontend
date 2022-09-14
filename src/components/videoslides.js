import React, { Component } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation} from 'swiper'

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/navigation';
SwiperCore.use([Navigation])

class videoslides extends Component {
    render() {
        return (
            <div>
                 <Swiper 
        centeredSlides={true} autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
      }} loop={true} loopFillGroupWithBlank={true} grabCursor={true}
        navigation ={{
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
            }
  }}
        
        className="swiper mySwiper">

<SwiperSlide className="swiper-slide">
<div className="relative overflow-hidden" style={{backgroundColor:"#0056A1"}}>
    <div className="relative" data-todo-x-data="Components.popover({ open: false, focus: true })" data-todo-x-init="init()" data-todo-at-keydown-escape="onEscape" data-todo-at-close-popover-group-window="onClosePopoverGroup">
     <main className="mx-auto ml-8 max-w-7xl mt-12 mb-12 px-12 sm:px-6">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <p className="mt-3 text-white sm:mt-5 sm:text-xl lg:text-lg xl:text-xl" >
            Enabling Fortune 500's, R&D Giants, Law firms, Universities & SME’s Around The Globe Gather Intelligence That Protects and Nurtures Innovation Through a Team of 200+ Techno Legal Professionals.
            </p>            
          </div>
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <svg className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 scale-75 origin-top sm:scale-100 lg:hidden" width="640" height="784" fill="none" viewBox="0 0 640 784" aria-hidden="true">
              <defs>
                <pattern id="4f4f415c-a0e9-44c2-9601-6ded5a34a13e" x="118" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor"></rect>
                </pattern>
              </defs>
              <rect y="72" width="640" height="640" className="text-gray-50" fill="currentColor"></rect>
              <rect x="118" width="404" height="784" fill="url(#4f4f415c-a0e9-44c2-9601-6ded5a34a13e)"></rect>
            </svg>
            <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
              <button type="button" className="relative block w-full bg-white rounded-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <span className="sr-only">Watch our video to learn more</span>
                <div class="aspect-w-16 aspect-h-9">
                <iframe src="https://www.youtube.com/embed/B6PNmNdXD24" title="iframe4tis" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullscreen></iframe>
  {/* <iframe src="https://www.youtube.com/embed/g6__CiJXTtI" title="iframe2tis" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullscreen></iframe> */}
</div>
                
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
<div className="relative overflow-hidden" style={{backgroundColor:"#c4171b"}}>
    <div className="relative" data-todo-x-data="Components.popover({ open: false, focus: true })" data-todo-x-init="init()" data-todo-at-keydown-escape="onEscape" data-todo-at-close-popover-group-window="onClosePopoverGroup">
     <main className="mx-auto ml-8 max-w-7xl mt-12 mb-12 px-12 sm:px-6">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <p className="mt-3 text-white sm:mt-5 sm:text-xl lg:text-lg xl:text-xl" >
            Enabling Fortune 500's, R&D Giants, Law firms, Universities & SME’s Around The Globe Gather Intelligence That Protects and Nurtures Innovation Through a Team of 200+ Techno Legal Professionals.
            </p>            
          </div>
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <svg className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 scale-75 origin-top sm:scale-100 lg:hidden" width="640" height="784" fill="none" viewBox="0 0 640 784" aria-hidden="true">
              <defs>
                <pattern id="4f4f415c-a0e9-44c2-9601-6ded5a34a13e" x="118" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor"></rect>
                </pattern>
              </defs>
              <rect y="72" width="640" height="640" className="text-gray-50" fill="currentColor"></rect>
              <rect x="118" width="404" height="784" fill="url(#4f4f415c-a0e9-44c2-9601-6ded5a34a13e)"></rect>
            </svg>
            <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
              <button type="button" className="relative block w-full bg-white rounded-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <span className="sr-only">Watch our video to learn more</span>
                <div class="aspect-w-16 aspect-h-9">
                <iframe src="https://www.youtube.com/embed/g6__CiJXTtI" title="iframe4tis" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullscreen></iframe>
  {/* <iframe src="https://www.youtube.com/embed/g6__CiJXTtI" title="iframe2tis" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullscreen></iframe> */}
</div>
                
              </button>
            </div>
          </div>
        </div>
      </main>
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
}

export default videoslides;