import React, { Component } from 'react';
import Navigation from '../components/navigation'
import Footer from '../components/footer'

class ptacalculationspage extends Component {
    render() {
        return (
            <div>
                <Navigation />
                <div class="relative bg-white overflow-hidden bg-black">
                <img className="z-0 w-full h-full absolute inset-0 object-cover" src="images/bg_image_lite.png" alt="bg" />
        <div class=" mx-auto ">
          <div class="relative z-10 pb-8  sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full ">
            
            <main class="mx-auto max-w-5xl px-4 sm:mt-12 sm:px-6 md:mt-16  lg:px-8 xl:mt-28">
              <div class="sm:text-center lg:text-left">
                <h1 class="px-12 text-2xl tracking-tight font-extrabold text-white sm:text-5xl md:text-5xl">
                  <span class="block xl:inline">PTA Calculations</span> 
                 
                </h1>
                
               
              </div>
            </main>
          </div>
        </div>
        <div class="lg:absolute lg:inset-y-0 lg:right-20 lg:w-1/3">
          <img class="h-56 w-full  sm:h-64 md:h-96 lg:w-full lg:h-full object-contain" src="images/banner-patent.jpg" alt="" />
        </div>
      </div>
           
                        <section class="text-gray-600 px-16 body-font">
                          <div class="container px-5 py-6 mx-auto">
                          <div class="w-full leading-relaxed text-gray-500 font-roboto px-12 text-lg text-justify mb-4">
                              
                              <p class=" w-full leading-relaxed text-gray-500">
						The “patent term guarantee” included in the American Invents Act (AIA) Technical Corrections Act is a welfare legislation which seeks to protect term of the patent, and provides provisions for adjustment of patent term for compensating the delay during the prosecution. The Corrections Act includes corrections to the Patent Term Adjustment (PTA) provisions. The final rules were publicized by USPTO on May 15, 2014
						<br />
						<br />

The provision establishes three key grounds for adjusting the term of a patent (utility or plant patent) – (1) if the USPTO fails to take certain actions within specified time frames. Mainly, the first office action must be issued within 14 months from the filing date; (2) if the USPTO fails to issue a patent within three years of the actual filing date of the application; or (3) for delays due to interference, secrecy order, or successful appellate review. Based on calculation of the three kinds of delays, the actual number of days with which the patent term needs to be adjusted is calculated.Although, there are automated tools available on USPTO website and on other sources for calculating the patent term adjustments for US patents, such tools are more for educational purposes and more often than not a delay calculated by such tools may not be correct. In order to ascertain that the adjustment calculated by the PTO is correct, the adjustments should be verified by performing manual calculations. However, the manual calculation is laborious and time intensive task and involves detailed study of file history of the patent.
<br />
						<br />

At Effectual Services we help our clients in validating the Patent Term Adjustments calculated by USPTO. We have a team of immensely talented paralegals who are specifically trained in US patent laws, and help our clients realize a full term of their patent. They also assist in preparing a ready to file request for reconsideration of the patent term adjustment in case the patent term adjustment is found to be incorrect.

						

							  </p>
							
                            </div>
                        
                          </div>
                        </section>
                       
                      
                        


                <Footer />
            </div>
        );
    }
}

export default ptacalculationspage;