import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper'

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/navigation';
SwiperCore.use([Navigation])


function activeTab(thistab) {
  document.getElementById("first").style.display = "none";
  document.getElementById("second").style.display = "none";
  document.getElementById("third").style.display = "none";

  document.getElementById(thistab).style.display = "block";

}
export default function index() {

  return (
    <div className="bg-gray-900  py-4 overflow-hidden" >

      <div className="flex justify-center items-center flex-col py-6">
        <h1 className="text-2xl md:text-4xl 2xl:text-5xl leading-10 text-gray-200"><span className="font-bold" >Our</span> <span style={{ color: "#c4171b" }} className="italic">Clients</span></h1>


        <div class="justify-between py-12 w-3/4 flex-wrap hidden sm:block">
          <div class="xl:w-full xl:mx-0 rounded bg-gray-200 dark:bg-gray-800 h-12 shadow">
            <ul class="flex  h-full">
              <li onClick={() => activeTab("first")} tabindex="0" class="focus:outline-none w-1/3 dark:text-white dark:hover:text-white focus:text-white text-sm text-white flex justify-center h-full px-5 bg-indigo-700 py-4   font-normal cursor-pointer">Law Firms</li>
              <li onClick={() => activeTab("second")} tabindex="0" class="focus:outline-none w-1/3 dark:text-white dark:hover:text-white focus:text-white text-sm text-white h-full flex justify-center py-4 px-5 bg-red-700   font-normal hover:text-white cursor-pointer">Start-up's, SME's & Fortune 1000's</li>
              <li onClick={() => activeTab("third")} tabindex="0" class="focus:outline-none w-1/3 dark:text-white dark:hover:text-white focus:text-white text-sm text-white h-full flex justify-center py-4 px-5 bg-indigo-700   font-normal hover:text-white cursor-pointer">Universities & Research Institutes</li>

            </ul>
          </div>
        </div>


        <Swiper id="first"
          centeredSlides={true} autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }} loop={true} loopFillGroupWithBlank={true} grabCursor={true}
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

          className="swiper mySwiper">
          <SwiperSlide className="swiper-slide">
            <div class="px-10 py-6 text-center transition duration-300 transform bg-gray-900 rounded shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl"><img src="images/clients/law-firm1.jpg" alt="client1" /></div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div class="px-10 py-6 text-center transition duration-300 transform bg-gray-900 rounded shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl"><img src="images/clients/law-firm2.jpg" alt="client2" /></div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div class="px-10 py-6 text-center transition duration-300 transform bg-gray-900 rounded shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl"><img src="images/clients/law-firm3.jpg" alt="client3" /></div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div class="px-10 py-6 text-center transition duration-300 transform bg-gray-900 rounded shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl"><img src="images/clients/law-firm4.jpg" alt="client4" /></div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div class="px-10 py-6 text-center transition duration-300 transform bg-gray-900 rounded shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl"><img src="images/clients/law-firm5.jpg" alt="client4" /></div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div class="px-10 py-6 text-center transition duration-300 transform bg-gray-900 rounded shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl"><img src="images/clients/law-firm6.jpg" alt="client4" /></div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div class="px-10 py-6 text-center transition duration-300 transform bg-gray-900 rounded shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl"><img src="images/clients/law-firm7.jpg" alt="client4" /></div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div class="px-10 py-6 text-center transition duration-300 transform bg-gray-900 rounded shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl"><img src="images/clients/law-firm8.jpg" alt="client4" /></div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div class="px-10 py-6 text-center transition duration-300 transform bg-gray-900 rounded shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl"><img src="images/clients/law-firm9.jpg" alt="client4" /></div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div class="px-10 py-6 text-center transition duration-300 transform bg-gray-900 rounded shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl"><img src="images/clients/law-firm10.jpg" alt="client4" /></div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div class="px-10 py-6 text-center transition duration-300 transform bg-gray-900 rounded shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl"><img src="images/clients/law-firm11.jpg" alt="client4" /></div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div class="px-10 py-6 text-center transition duration-300 transform bg-gray-900 rounded shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl"><img src="images/clients/law-firm12.jpg" alt="client4" /></div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div class="px-10 py-6 text-center transition duration-300 transform bg-gray-900 rounded shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl"><img src="images/clients/law-firm13.jpg" alt="client4" /></div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div class="px-10 py-6 text-center transition duration-300 transform bg-gray-900 rounded shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl"><img src="images/clients/law-firm14.jpg" alt="client4" /></div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div class="px-10 py-6 text-center transition duration-300 transform bg-gray-900 rounded shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl"><img src="images/clients/law-firm15.jpg" alt="client4" /></div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div class="px-10 py-6 text-center transition duration-300 transform bg-gray-900 rounded shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl"><img src="images/clients/law-firm16.jpg" alt="client4" /></div>
          </SwiperSlide>
        </Swiper>


        <Swiper id="second"
          centeredSlides={true} autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }} loop={true} loopFillGroupWithBlank={true} grabCursor={true}
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

          className="swiper mySwiper" style={{ display: "none" }}>
          <SwiperSlide className="swiper-slide">
            <div class="px-10 py-6 text-center transition duration-300 transform bg-gray-900 rounded shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl"><img src="images/clients/startup1.jpg" alt="client1" /></div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div class="px-10 py-6 text-center transition duration-300 transform bg-gray-900 rounded shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl"><img src="images/clients/startup2.jpg" alt="client2" /></div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div class="px-10 py-6 text-center transition duration-300 transform bg-gray-900 rounded shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl"><img src="images/clients/startup3.jpg" alt="client3" /></div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div class="px-10 py-6 text-center transition duration-300 transform bg-gray-900 rounded shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl"><img src="images/clients/startup4.jpg" alt="client4" /></div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div class="px-10 py-6 text-center transition duration-300 transform bg-gray-900 rounded shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl"><img src="images/clients/startup5.jpg" alt="client1" /></div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div class="px-10 py-6 text-center transition duration-300 transform bg-gray-900 rounded shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl"><img src="images/clients/startup6.jpg" alt="client2" /></div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div class="px-10 py-6 text-center transition duration-300 transform bg-gray-900 rounded shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl"><img src="images/clients/startup7.jpg" alt="client3" /></div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div class="px-10 py-6 text-center transition duration-300 transform bg-gray-900 rounded shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl"><img src="images/clients/startup8.jpg" alt="client4" /></div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div class="px-10 py-6 text-center transition duration-300 transform bg-gray-900 rounded shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl"><img src="images/clients/startup9.png" alt="client1" /></div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div class="px-10 py-6 text-center transition duration-300 transform bg-gray-900 rounded shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl"><img src="images/clients/startup10.png" alt="client2" /></div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div class="px-10 py-6 text-center transition duration-300 transform bg-gray-900 rounded shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl"><img src="images/clients/startup11.png" alt="client3" /></div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div class="px-10 py-6 text-center transition duration-300 transform bg-gray-900 rounded shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl"><img src="images/clients/startup12.png" alt="client4" /></div>
          </SwiperSlide>

        </Swiper>


        <Swiper id="third"
          centeredSlides={true} autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }} loop={true} loopFillGroupWithBlank={true} grabCursor={true}
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

          className="swiper mySwiper" style={{ display: "none" }}>
          <SwiperSlide className="swiper-slide">
            <div class="px-10 py-6 text-center transition duration-300 transform bg-gray-900 rounded shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl"><img src="images/clients/univ-1.jpg" alt="client1" /></div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div class="px-10 py-6 text-center transition duration-300 transform bg-gray-900 rounded shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl"><img src="images/clients/univ-2.jpg" alt="client2" /></div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div class="px-10 py-6 text-center transition duration-300 transform bg-gray-900 rounded shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl"><img src="images/clients/univ-3.jpg" alt="client3" /></div>
          </SwiperSlide>

        </Swiper>

        <div className="flex justify-center mt-10  items-center space-x-6 w-full">
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
