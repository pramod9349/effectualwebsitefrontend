import React from "react";
import { Swiper, SwiperSlide  } from 'swiper/react';
import SwiperCore, {Autoplay, Navigation} from 'swiper'

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/navigation';
SwiperCore.use([Navigation, Autoplay])




export default function index() {
  
  
 
  
  const handleMouseEnter = () => {
    // const swiper = useSwiper();
    // swiper.autoplay.start();
  };
  const handleMouseLeave = () => {
    // const swiper = useSwiper();
    // swiper.autoplay.stop();
  };
 
  
  
  return (
    <div className="bg-gray-900 overflow-hidden">
      <div className="flex justify-center items-center flex-col py-12">
        <h1 className="text-2xl md:text-4xl 2xl:text-5xl leading-10 text-gray-200"><span className="font-bold" style={{color:"#0056A1"}}>Loved By Industy</span> <span className="italic" style={{color:"#c4171b"}}>Leaders</span></h1>
        <Swiper
        centeredSlides={true} loop={true} autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
      }} loopFillGroupWithBlank={true} grabCursor={true}
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
            slidesPerView: 2,
            spaceBetween: 16,
            slidesPerGroup: 1,
            },
            // when window width is >= 640px
            640: {
            slidesPerView: 2,
            spaceBetween: 24,
            slidesPerGroup: 1,
            },
            1024: {
            slidesPerView: 4,
            spaceBetween: 32,
            slidesPerGroup: 1,
            },
            1336: {
            slidesPerView: 4,
            spaceBetween: 32,
            slidesPerGroup: 1,
            }
  }}
        
        className="mt-12 md:mt-10 2xl:mt-20 swiper mySwiper" >
            <SwiperSlide className="swiper-slide" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <div className="flex jusitfy-center items-center flex-col">
                <div className="w-12 relative z-20">
                    <img className src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonials_7_svg-1.svg" alt="apple" />
                </div>
                <div className="-mt-6  flex border h-96 rounded text-left border-gray-600 bg-gray-800 justify-between items-start flex-col px-4 md:px-6">
                  <p className="mt-10 text-base leading-normal text-gray-300">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters</p>
                  <div className="flex justify-end pb-6 space-y-11 items-end w-full flex-col h-28">
                    <div className="flex grow-0 w-6 ">
                      <img className src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonials_7_svg-5_quotes.svg" alt="quotes" />
                    </div>
                    <div className="w-full flex jusitfy-start items-center space-x-2">
                      <div>
                        <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonials_7_Ellipse%20113.png" alt="woman avatar" />
                      </div>
                      <div className="flex justify-start items-start flex-col space-y-2">
                        <p className="text-lg font-medium leading-none text-gray-200">Casy Camilari</p>
                        <p className="text-sm leading-none text-gray-200">Digital Marketing Director</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <div className="flex jusitfy-center items-center flex-col">
                <div className="w-12 relative z-20"><img className src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonials_7_svg-2.svg" alt="hand" />
                </div>
                <div className="-mt-6  flex border h-96 rounded text-left border-gray-600 bg-gray-800 justify-between items-start flex-col px-4 md:px-6">
                  <p className="mt-10 text-base leading-normal text-gray-300">I have worked with Effectual Services on several IP projects. I have been impressed by their quality of work, as well as by their responsiveness. Their client orientation, dedication towards work, subject matter knowledge, and prompt communication is something that keeps me assured that I am working with an A-Team.</p>
                  <div className="flex justify-end pb-6 space-y-11 items-end w-full flex-col h-28">
                    <div className="flex grow-0 w-6 ">
                      <img className src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonials_7_svg-5_quotes.svg" alt="quotes" />
                    </div>
                    <div className="w-full flex jusitfy-start items-center space-x-2">
                      {/* <div>
                        <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonials_7_Ellipse%20109.png" alt="girl avatar" />
                      </div> */}
                      <div className="flex justify-start items-start flex-col space-y-2">
                        <p className="text-lg font-medium leading-none text-gray-200">John Harper</p>
                        <p className="text-sm leading-none text-gray-200">CEO, USA Firm</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <div className="flex jusitfy-center items-center flex-col">
                <div className="w-12 relative z-20"><img className src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonials_7_svg-3.svg" alt="be" />
                </div>
                <div className="-mt-6  flex border h-96 rounded text-left border-gray-600 bg-gray-800 justify-between items-start flex-col px-4 md:px-6">
                  <p className="mt-10 text-base leading-normal text-gray-300">I have attended many sales training programs, and I enjoyed this one the most. Both instructors were very knowledgeable and engaging. I found that the models really work and are of value to me. I will be able to use this in the field to increase my ability to engage my customers and grow my business. </p>
                  <div className="flex justify-end pb-6 space-y-11 items-end w-full flex-col h-28">
                    <div className="flex grow-0 w-6 ">
                      <img className src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonials_7_svg-5_quotes.svg" alt="quotes" />
                    </div>
                    <div className="w-full flex jusitfy-start items-center space-x-2">
                      {/* <div>
                        <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonials_7_Ellipse%20111.png" alt="boy avatar" />
                      </div> */}
                      <div className="flex justify-start items-start flex-col space-y-2">
                        <p className="text-lg font-medium leading-none text-gray-200">Patent Attorney</p>
                        <p className="text-sm leading-none text-gray-200">Law Firm, Australia</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <div className="flex jusitfy-center items-center flex-col">
                <div className="w-12 relative z-20"><img className src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonials_7_svg-4.svg" alt="gear" />
                </div>
                <div className="-mt-6  flex border h-96 rounded text-left border-gray-600 bg-gray-800 justify-between items-start flex-col px-4 md:px-6">
                  <p className="mt-10 text-base leading-normal text-gray-300">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                  <div className="flex justify-end pb-6 space-y-11 items-end w-full flex-col h-28">
                    <div className="flex grow-0 w-6 ">
                      <img className src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonials_7_svg-5_quotes.svg" alt="quotes" />
                    </div>
                    <div className="w-full flex jusitfy-start items-center space-x-2">
                      <div>
                        <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonials_7_Ellipse%20112.png" alt="girl avatar" />
                      </div>
                      <div className="flex justify-start items-start flex-col space-y-2">
                        <p className="text-lg font-medium leading-none text-gray-200">Gustavo Workman</p>
                        <p className="text-sm leading-none text-gray-200">Head, Product Design</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
        </Swiper>
        <div className="flex justify-center mt-20  items-center space-x-6 w-full">
          <button aria-label="back" className="rounded-full p-1.5 flex justify-center items-center bg-gray-600  swiper-button-prev w-1.5 h-2.5">
            <img className=" w-6 h-6" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonials_7_svg-6_prev.svg" alt="back" />
          </button>
          <button aria-label="next" className="rounded-full p-1.5 flex justify-center items-center bg-gray-600  swiper-button-next w-1.5 h-2.5">
            <img className=" w-6 h-6" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonials_7_svg-6_next.svg" alt="next" />
          </button>
        </div>
      </div>

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



  )
}
