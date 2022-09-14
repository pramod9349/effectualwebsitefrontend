import React, { Component } from 'react';
import Navigation from '../components/navigation'
import Footer from '../components/footer'

class designpatentdrawingspage extends Component {
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
                  <span class="block xl:inline">DESIGN PATENT                 
                    <span class="block text-white xl:inline">DRAWINGS</span> </span> 
                 
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
							A design patent protects only the appearance of the article and does not include structural or utility features. It consists of very limited verbal specifications and covers the novel ornamental aspect of a product. Furthermore, it is critical to capture the views of the invention from various angles – front, sides, top, bottom and perspective view. Effectual has a team of established domain experts and draftsmen who prepare drawings as per the US, Indian, European, Chinese, Korean, Australian, Japanese, and various patent office requirements. Using the latest technology including AutoCAD, TurboCAD, CorelDRAW, SolidWorks, and Visio, we ensure that we deliver quality drawings to law firms and corporate legal departments.

							  </p>
                            </div>
                        
                          </div>
                        </section>
                        
                        
                        

                <Footer />
            </div>
        );
    }
}

export default designpatentdrawingspage;