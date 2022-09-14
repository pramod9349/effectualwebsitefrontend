import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation} from 'swiper'

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/navigation';
SwiperCore.use([Navigation])

export default function Carouselteam() {

  
    return (
        <div>
             <Swiper 
    centeredSlides={true} autoplay={{
      delay: 5000,
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

{/* <SwiperSlide className="swiper-slide">
<div class="w-full bg-center bg-cover h-96" style={{backgroundImage: "url(images/banner.jpg)"}}>
            <div class="flex flex-direction:row-reverse; items-center justify-end w-full h-full bg-gray-900 bg-opacity-10">
                <div class="px-16 items-center">
                    <h2 class="text-lg font-semibold text-white lg:text-lg">Enabling Fortune 500's, R&D Giants, Law <br />firms, Universities & SME’s Around The Globe<br/> Gather Intelligence That Protects and <br />Nurtures Innovation Through a Team of <br/>200+ Techno Legal Professionals.</h2>
                    
                </div>
            </div>
        </div>
</SwiperSlide> */}
        

        <SwiperSlide>
        <div className="container pt-6">
                <div className="flex flex-wrap">
                    <div className="md:w-3/4 w-full pb-6 md:pb-0 md:pr-6">
                        {/* Remove class [ h-24 ] when adding a card block */}
                        {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                        <div className="rounded ml-8" >

                            <div class="w-full py-12 px-4"><ul class="list-disc"><div class="bg-gray-100 rounded flex p-4 h-full"><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-red-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path><path d="M22 4L12 14.01l-3-3"></path></svg>
                            <span class="title-font font-medium">Over 18 Years of Industry Experience with technology companies and IP law firms.</span>
                            </div><div class="bg-gray-100 rounded flex p-4 h-full items-center"><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-red-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path><path d="M22 4L12 14.01l-3-3"></path></svg>
                            <span class="title-font font-medium">Authored 30+ research publications in International Journals & Conferences.</span>
                            </div><div class="bg-gray-100 rounded flex p-4 h-full items-center"><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-red-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path><path d="M22 4L12 14.01l-3-3"></path></svg>
                            <span class="title-font font-medium">Awarded 'The World’s Leading IP Strategists 2019' by IAM Strategy 300.</span>
                            </div><div class="bg-gray-100 rounded flex p-4 h-full items-center"><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-red-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path><path d="M22 4L12 14.01l-3-3"></path></svg>
                            <span class="title-font font-medium">Awarded 'Entrepreneur of the year 2022' by Business Connect Magazine</span></div><div class="bg-gray-100 rounded flex p-4 h-full items-center"></div></ul></div>

                        </div>
                    </div>
                    <div className="md:w-1/4 w-full">
                        {/* Remove class [ h-24 ] when adding a card block */}
                        {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                        <div className="rounded " >
                        <div className="mx-auto w-full container">                
                <div className="grid sm:grid-cols-1 w-full md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-6 pb-12">
                    
                    <div className="w-full flex items-center justify-center flex-col">
                        <div className="w-full px-5 -mb-10  relative z-40">
                            <img src="images/clients/amit-goel.jpg" alt="girl smilling" className="w-full h-full rounded-md" />
                        </div>
                        <div className="pb-8 pt-14 bg-indigo-700 rounded-md w-full ">
                            <p className="text-xl font-semibold leading-5 text-center text-white">Dr Amit Goel</p>
                            <p className="text-base leading-4 mt-2 text-center text-white">Director & Co-founder</p>
                        </div>
                    </div>
                </div>
            </div>    
                        </div>
                    </div>
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className="container pt-6">
                <div className="flex flex-wrap">
                    <div className="md:w-3/4 w-full pb-6 md:pb-0 md:pr-6">
                        {/* Remove class [ h-24 ] when adding a card block */}
                        {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                        <div className="rounded ml-8" >

                            <div class="w-full py-12 px-4"><ul class="list-disc"><div class="bg-gray-100 rounded flex p-4 h-full"><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-red-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path><path d="M22 4L12 14.01l-3-3"></path></svg>
                            <span class="title-font font-medium">Strategy advisor to clients around the globe</span>
                            </div><div class="bg-gray-100 rounded flex p-4 h-full items-center"><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-red-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path><path d="M22 4L12 14.01l-3-3"></path></svg>
                            <span class="title-font font-medium">Extensive experience in the IP and business research domain
</span>
                            </div><div class="bg-gray-100 rounded flex p-4 h-full items-center"><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-red-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path><path d="M22 4L12 14.01l-3-3"></path></svg>
                            <span class="title-font font-medium">Bachelors degree in computer science engineering</span>
                            </div><div class="bg-gray-100 rounded flex p-4 h-full items-center"><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-red-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path><path d="M22 4L12 14.01l-3-3"></path></svg>
                            <span class="title-font font-medium">Trained in patent law from US and European patent attorneys</span></div><div class="bg-gray-100 rounded flex p-4 h-full items-center"></div></ul></div>

                        </div>
                    </div>
                    <div className="md:w-1/4 w-full">
                        {/* Remove class [ h-24 ] when adding a card block */}
                        {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                        <div className="rounded " >
                        <div className="mx-auto w-full container">                
                <div className="grid sm:grid-cols-1 w-full md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-6 pb-12">
                    
                    <div className="w-full flex items-center justify-center flex-col">
                        <div className="w-full px-5 -mb-10  relative z-40">
                            <img src="images/clients/nishant-singh.png" alt="girl smilling" className="w-full h-full rounded-md" />
                        </div>
                        <div className="pb-8 pt-14 bg-indigo-700 rounded-md w-full ">
                            <p className="text-xl font-semibold leading-5 text-center text-white">Nishant Singh</p>
                            <p className="text-base leading-4 mt-2 text-center text-white">VP Strategy</p>
                        </div>
                    </div>
                </div>
            </div>    
                        </div>
                    </div>
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className="container pt-6">
                <div className="flex flex-wrap">
                    <div className="md:w-3/4 w-full pb-6 md:pb-0 md:pr-6">
                        {/* Remove class [ h-24 ] when adding a card block */}
                        {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                        <div className="rounded ml-8" >

                            <div class="w-full py-12 px-4"><ul class="list-disc"><div class="bg-gray-100 rounded flex p-4 h-full"><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-red-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path><path d="M22 4L12 14.01l-3-3"></path></svg>
                            <span class="title-font font-medium">16+ years of experience leading international and multicultural teams</span>
                            </div><div class="bg-gray-100 rounded flex p-4 h-full items-center"><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-red-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path><path d="M22 4L12 14.01l-3-3"></path></svg>
                            <span class="title-font font-medium">Served over 1700 global fortune enterprises</span>
                            </div><div class="bg-gray-100 rounded flex p-4 h-full items-center"><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-red-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path><path d="M22 4L12 14.01l-3-3"></path></svg>
                            <span class="title-font font-medium">Specializes in consulting assignments and business research</span>
                            </div><div class="bg-gray-100 rounded flex p-4 h-full items-center"><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-red-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path><path d="M22 4L12 14.01l-3-3"></path></svg>
                            <span class="title-font font-medium">Develops strategies based on data-driven analysis</span></div><div class="bg-gray-100 rounded flex p-4 h-full items-center"></div></ul></div>

                        </div>
                    </div>
                    <div className="md:w-1/4 w-full">
                        {/* Remove class [ h-24 ] when adding a card block */}
                        {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                        <div className="rounded " >
                        <div className="mx-auto w-full container">                
                <div className="grid sm:grid-cols-1 w-full md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-6 pb-12">
                    
                    <div className="w-full flex items-center justify-center flex-col">
                        <div className="w-full px-5 -mb-10  relative z-40">
                            <img src="images/clients/ram-tenneti.png" alt="girl smilling" className="w-full h-full rounded-md" />
                        </div>
                        <div className="pb-8 pt-14 bg-indigo-700 rounded-md w-full ">
                            <p className="text-xl font-semibold leading-5 text-center text-white">Ram Tenneti</p>
                            <p className="text-base leading-4 mt-2 text-center text-white">VP Global</p>
                        </div>
                    </div>
                </div>
            </div>    
                        </div>
                    </div>
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className="container pt-6">
                <div className="flex flex-wrap">
                    <div className="md:w-3/4 w-full pb-6 md:pb-0 md:pr-6">
                        {/* Remove class [ h-24 ] when adding a card block */}
                        {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                        <div className="rounded ml-8" >

                            <div class="w-full py-12 px-4"><ul class="list-disc"><div class="bg-gray-100 rounded flex p-4 h-full"><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-red-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path><path d="M22 4L12 14.01l-3-3"></path></svg>
                            <span class="title-font font-medium">Cross-functional experience in IP strategy, marketing and sales.</span>
                            </div><div class="bg-gray-100 rounded flex p-4 h-full items-center"><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-red-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path><path d="M22 4L12 14.01l-3-3"></path></svg>
                            <span class="title-font font-medium">Worked with several Fortune 500 companies</span>
                            </div><div class="bg-gray-100 rounded flex p-4 h-full items-center"><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-red-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path><path d="M22 4L12 14.01l-3-3"></path></svg>
                            <span class="title-font font-medium">Expert in performance improvement & business development in patent & legal services</span>
                            </div><div class="bg-gray-100 rounded flex p-4 h-full items-center"><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-red-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path><path d="M22 4L12 14.01l-3-3"></path></svg>
                            <span class="title-font font-medium">Works Closely with IP Directors, Patent Counsels, Attorneys, Agents and R&D Heads.</span></div><div class="bg-gray-100 rounded flex p-4 h-full items-center"></div></ul></div>

                        </div>
                    </div>
                    <div className="md:w-1/4 w-full">
                        {/* Remove class [ h-24 ] when adding a card block */}
                        {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                        <div className="rounded " >
                        <div className="mx-auto w-full container">                
                <div className="grid sm:grid-cols-1 w-full md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-6 pb-12">
                    
                    <div className="w-full flex items-center justify-center flex-col">
                        <div className="w-full px-5 -mb-10  relative z-40">
                            <img src="images/clients/rakesh-pandey.png" alt="girl smilling" className="w-full h-full rounded-md" />
                        </div>
                        <div className="pb-8 pt-14 bg-indigo-700 rounded-md w-full ">
                            <p className="text-xl font-semibold leading-5 text-center text-white">Rakesh Pandey</p>
                            <p className="text-base leading-4 mt-2 text-center text-white">VP USA</p>
                        </div>
                    </div>
                </div>
            </div>    
                        </div>
                    </div>
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className="container pt-6">
                <div className="flex flex-wrap">
                    <div className="md:w-3/4 w-full pb-6 md:pb-0 md:pr-6">
                        {/* Remove class [ h-24 ] when adding a card block */}
                        {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                        <div className="rounded ml-8" >

                            <div class="w-full py-12 px-4"><ul class="list-disc"><div class="bg-gray-100 rounded flex p-4 h-full"><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-red-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path><path d="M22 4L12 14.01l-3-3"></path></svg>
                            <span class="title-font font-medium">14 years of experience delivering patent related services.</span>
                            </div><div class="bg-gray-100 rounded flex p-4 h-full items-center"><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-red-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path><path d="M22 4L12 14.01l-3-3"></path></svg>
                            <span class="title-font font-medium">Technical expertise in petrochemicals, chemicals, polymers, lightweight alloys & aerospace</span>
                            </div><div class="bg-gray-100 rounded flex p-4 h-full items-center"><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-red-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path><path d="M22 4L12 14.01l-3-3"></path></svg>
                            <span class="title-font font-medium">Specialize in invalidity searches, landscapes, infringement, claim charts etc.</span>
                            </div><div class="bg-gray-100 rounded flex p-4 h-full items-center"><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-red-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path><path d="M22 4L12 14.01l-3-3"></path></svg>
                            <span class="title-font font-medium">Worked with AmLaw 100 Law firms & Fortune 100 companies</span></div><div class="bg-gray-100 rounded flex p-4 h-full items-center"></div></ul></div>

                        </div>
                    </div>
                    <div className="md:w-1/4 w-full">
                        {/* Remove class [ h-24 ] when adding a card block */}
                        {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                        <div className="rounded " >
                        <div className="mx-auto w-full container">                
                <div className="grid sm:grid-cols-1 w-full md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-6 pb-12">
                    
                    <div className="w-full flex items-center justify-center flex-col">
                        <div className="w-full px-5 -mb-10  relative z-40">
                            <img src="images/clients/manoj-poonia.png" alt="girl smilling" className="w-full h-full rounded-md" />
                        </div>
                        <div className="pb-8 pt-14 bg-indigo-700 rounded-md w-full ">
                            <p className="text-xl font-semibold leading-5 text-center text-white">Manoj Poonia</p>
                            <p className="text-base leading-4 mt-2 text-center text-white">VP Operations</p>
                        </div>
                    </div>
                </div>
            </div>    
                        </div>
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
    


