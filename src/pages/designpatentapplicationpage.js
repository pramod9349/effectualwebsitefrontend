import React, { Component } from 'react';
import Navigation from '../components/navigation'
import Footer from '../components/footer'

class designpatentapplicationpage extends Component {
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
                  <span class="block xl:inline">Design Patent               
                    <span class="block text-white xl:inline"> Application</span> </span> 
                  
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
							Industrial Designs grants a protection to a specific design for its ornamental view or aesthetic appearance of an article, a product etc. An Industrial Design is a very specific kind of Intellectual Property which includes very limited verbal specifications. Hence, the drafter has a responsibility of explaining the whole design based on drawings alone and that is why the design patent includes not only the structural view but also view from different dimensions (front view, side view, top view) and even the perspective view. In some special cases, design applications also include three dimensional view, consisting of visible line (solid lines) and invisible lines (dotted lines). Because of these requirements the drawings in design patent require an architectural skill set which comes only after one has drafted a number of design cases.
<br />
<br />
Effectual Services provides design application preparation as per Indian patent office requirements. The team has vast experience in preparing design applications related to a number of domains including Biotech, Pharmaceutical, IT, computers, Telecom, Electronics, Mechanical, Automotive, Consumer durables. Using the latest in tools such as AutoCAD, CoralDRAW, SolidWorks, etc., we have been delivering zero error high quality design applications for law firms and corporate legal departments.

							  </p>
							
                            </div>
                        
                          </div>
                        </section>
                       
                        
                     



               <Footer /> 
            </div>
        );
    }
}

export default designpatentapplicationpage;