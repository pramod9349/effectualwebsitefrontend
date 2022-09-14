import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation} from 'swiper'

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/navigation';
SwiperCore.use([Navigation])

export default function index() {
  
  return (
    <div className="bg-gray-900  py-4 overflow-hidden mb-8">
      <div className="flex justify-center items-center flex-col py-6">
        <h1 className="text-2xl py-4 md:text-4xl 2xl:text-5xl leading-10 text-gray-200"><span className="font-bold" style={{color:"#0056A1"}}>Awards &</span> <span style={{color:"#c4171b"}} className="italic">Recognition</span></h1>
        
        
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
            <div class="px-10 py-6 text-center transition duration-300 transform bg-gray-900 rounded shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl"><img src="awards/best-places.jpg" alt="client1" /></div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
            <div class="px-10 py-6 text-center transition duration-300 transform bg-gray-900 rounded shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl"><img src="awards/Leader.png" alt="client1" /></div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
            <div class="px-10 py-6 text-center transition duration-300 transform bg-gray-900 rounded shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl"><img src="awards/certificate-registration.jpg" alt="client2" /></div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
            <div class="px-10 py-6 text-center transition duration-300 transform bg-gray-900 rounded shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl"><img src="awards/deloitte.jpg" alt="client3" /></div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
            <div class="px-10 py-6 text-center transition duration-300 transform bg-gray-900 rounded shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl"><img src="awards/iam300.jpg" alt="client4" /></div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
            <div class="px-10 py-6 text-center transition duration-300 transform bg-gray-900 rounded shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl"><img src="awards/ifcci.jpg" alt="client4" /></div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
            <div class="px-10 py-6 text-center transition duration-300 transform bg-gray-900 rounded shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl"><img src="awards/indo-american.jpg" alt="client4" /></div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
            <div class="px-10 py-6 text-center transition duration-300 transform bg-gray-900 rounded shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl"><img src="awards/indo-german.jpg" alt="client4" /></div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
            <div class="px-10 py-6 text-center transition duration-300 transform bg-gray-900 rounded shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl"><img src="awards/eu-india.jpg" alt="client4" /></div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
            <div class="px-10 py-6 text-center transition duration-300 transform bg-gray-900 rounded shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl"><img src="awards/red-herring-new.jpg" alt="client4" /></div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
            <div class="px-10 py-6 text-center transition duration-300 transform bg-gray-900 rounded shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl"><img src="awards/social-talks-new.jpg" alt="client4" /></div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
            <div class="px-10 py-6 text-center transition duration-300 transform bg-gray-900 rounded shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl"><img src="https://www.effectualservices.com/wp-content/uploads/2020/03/a4-1.jpg" alt="client4" /></div>
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
