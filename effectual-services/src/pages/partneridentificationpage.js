import React, { Component } from 'react';
import Navigation from '../components/navigation'
import Footer from '../components/footer'

class partneridentificationpage extends Component {
    render() {
        return (
            <div>
                <Navigation />
                <div class="relative bg-blue-100 overflow-hidden bg-black">
                <img className="z-0 w-full h-full absolute inset-0 object-cover" src="images/bg_image_lite.png" alt="bg" />
        <div class=" mx-auto ">
          <div class="relative z-10 pb-8  sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full ">
            
            <main class="mx-auto max-w-5xl px-4 sm:mt-12 sm:px-6 md:mt-16  lg:px-8 xl:mt-28">
              <div class="sm:text-center lg:text-left">
                <h1 class="px-12 text-2xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                  <span class="block xl:inline">Initiate And 
                    <span class="block text-white xl:inline"> Nurture </span>Fruitful Partnerships </span> 
 
                </h1>
                
               
              </div>
            </main>
          </div>
        </div>
        <div class="lg:absolute lg:inset-y-0 lg:right-20 lg:w-1/3">
          <img class="h-56 w-full  sm:h-64 md:h-96 lg:w-full lg:h-full object-contain" src="images/banner-rd-4.png" alt="" />
        </div>
      </div>
            
            <section class="text-gray-600 px-16 body-font text-justify">
              <div class="container px-5 py-6 mx-auto">
                <div class="flex flex-wrap w-full mb-20">
                  <div class="w-full mb-6 lg:mb-0">
                    <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">PARTNER IDENTIFICATION</h1>
                    <div class="h-1 w-20 bg-indigo-500 rounded"></div>
                    <br></br>
                  
                  </div>
                  
                  <p class=" w-full leading-relaxed text-gray-500">Sometimes companies outsource their idea and look for partners that they can collaborate with to execute their idea. Effectual’s partner identification team can help in figuring out the best possible collaboration Opportunities that can help R&D and Innovation leaders to achieve their goal. This provides:
                  <li>1.	Information about Universities, startups, SMEs who are actively working in the requested domain.</li>
                  <li>2.	Complete SWOT analysis of each recommendation and ranking framework based on the parameters defined.</li>
                  <li>3.	Suppliers and Production information, etc.</li>
</p>
                </div>
            
              </div>
            </section>
            

<h2 class="mb-6 py-8 font-sans text-3xl font-bold tracking-tight text-center text-black sm:text-4xl sm:leading-none">
  HOW WE DO IT?     
  </h2> 
<div class="w-full h-1/3 bg-blue-100 text-center mb-8" >
  <img alt="content" class="h-1/2 text-center" src="images/rd-text.png" />
</div>

                <Footer />
            </div>
        );
    }
}

export default partneridentificationpage;