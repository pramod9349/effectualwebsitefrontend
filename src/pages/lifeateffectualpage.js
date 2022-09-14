import React, { Component } from 'react';
import Navigation from '../components/navigation.js'
import Footer from '../components/footer.js'
import Testimonailsnew from '../components/testimonialsnew.js'

class lifeateffectualpage extends Component {
    render() {
        return (
            <div>
                <Navigation />


                <div class="relative h-96 bg-gray-200 overflow-hidden">
                <img className="z-0 w-full h-full absolute inset-0 object-cover" src="images/bg_image_lite.png" alt="bg" />
                
        <div class=" mx-auto ">
          <div class="relative z-10 pb-8  sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full ">            
            <main class="mx-auto max-w-5xl px-4 sm:mt-12 sm:px-6 md:mt-16  lg:px-8 xl:mt-28">
              <div class="sm:text-center lg:text-left">
                <h1 class="px-12 text-2xl tracking-tight font-extrabold text-white sm:text-5xl md:text-5xl font-serif">
                  <span class="block xl:inline">Life @ Effectual </span>                  
                </h1>                 
              </div>
            </main>
          </div>
        </div>
        <div class="lg:absolute lg:inset-y-0 lg:right-20 lg:w-1/3">
          <img class="h-56 w-full py-4 sm:h-64 md:h-96 lg:w-full lg:h-full object-contain" src="images/life_effectual.png" alt="" />
        </div>
      </div>


    <section class="text-gray-600 mt-8 px-16 body-font">
              <div class="container px-5 py-6 mx-auto">
                <div class="flex flex-wrap w-full mb-20">
                  <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
                    <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">THE WAY TO A CUSTOMER’S HEART IS THROUGH
                      THE EMPLOYEES</h1>
                    <div class="h-1 w-20 bg-indigo-500 rounded"></div>
                  </div>
                  <p class="lg:w-1/2 w-full leading-relaxed text-gray-500 text-justify">Our work culture philosophy is centered around the individual and how they grow, which ultimately benefits both the individual and the organization. As an organization we have built a work environment fueled with learning and respect for the individual, all the while upholding our ethical standards and the ultimate aim of serving our clients.</p>
                </div>            
              </div>
    </section>


    <h2 class="mb-6 font-sans text-3xl font-bold tracking-tight text-center text-black sm:text-4xl sm:leading-none">
              Gallery     
            </h2> 

           
            <section class="text-gray-600 body-font">
              <div class="container px-5 mx-auto flex flex-wrap">
                <div class="lg:w-3/4 mx-auto">
                  <div class="flex flex-wrap w-full bg-gray-100 py-32 px-10 relative mb-4">
                    <img alt="gallery" class="w-full object-cover h-full object-center block  absolute inset-0" src="images/Office-interior.jpg" />
                    
                  </div>
                  <div class="flex flex-wrap -mx-2">
                    <div class="px-2 w-1/2">
                      <div class="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
                        <img alt="gallery" class="w-full object-cover h-full object-center block absolute inset-0" src="images/gal-image1.jpg" />
                        
                      </div>
                    </div>
                    <div class="px-2 w-1/2">
                      <div class="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
                        <img alt="gallery" class="w-full object-cover h-full object-center block absolute inset-0" src="images/lifegal3-1.jpg" />
                        
                      </div>
                    </div>
                  </div>
                  <div class="flex flex-wrap w-full bg-gray-100 py-32 px-10 relative mt-4">
                    <img alt="gallery" class="w-full object-cover h-full object-center block  absolute inset-0" src="images/eff-team.jpg" />
                    
                  </div>
                </div>
              </div>
            </section>
       <div class="py-8">
            <Testimonailsnew />
            </div>

            <h2 class="mb-6 py-16 font-sans text-3xl font-bold tracking-tight text-center text-black sm:text-4xl sm:leading-none">
  WHAT IS IT LIKE WORKING AT EFFECTUAL?      
  </h2> 
<div class="w-full bg-blue-900 object-contain h-1/3 flex justify-center py-4" >
  <img alt="content" class="h-1/3 py-4" src="images/life-effectual-1.png" />
</div>






                <Footer />
            </div>
        );
    }
}

export default lifeateffectualpage;