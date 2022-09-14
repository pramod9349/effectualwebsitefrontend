import React, { Component } from 'react';
import Navigation from '../components/navigation'
import Footer from '../components/footer'

class innovationscoutingpage extends Component {
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
                  <span class="block xl:inline">Build  
                    <span class="block text-white xl:inline">Innovation-Driven</span> Product Life Cycles </span> 
 
                </h1>
                
               
              </div>
            </main>
          </div>
        </div>
        <div class="lg:absolute lg:inset-y-0 lg:right-20 lg:w-1/3">
          <img class="h-56 w-full  sm:h-64 md:h-96 lg:w-full lg:h-full object-contain" src="images/rd-banner.png" alt="" />
        </div>
      </div>
            
            <section class="text-gray-600 px-16 body-font">
              <div class="container px-5 py-6 mx-auto">
              <div class="w-full leading-relaxed text-gray-500 font-roboto px-12 text-lg text-justify mb-4">
                  <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
                    <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">INNOVATION SCOUTING</h1>
                    <div class="h-1 w-20 bg-indigo-500 rounded"></div>
                  </div>
                  <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">In the ever-shifting global demand for new products, companies are constantly looking for ways to explore new ideas that go beyond their internal resources. Effectual’s Innovation Scouting team can help you in figuring out novel technological solutions to innovation challenges and back them up with scientific evidence in the form of patent and non-patent literature, and technology insights to test them out in pilot applications.</p>
                </div>
            
              </div>
            </section>
           

           
       


<h2 class="mb-6 py-16 font-sans text-3xl font-bold tracking-tight text-center text-black sm:text-4xl sm:leading-none">
  HOW WE DO IT?     
  </h2> 
<div class="w-full h-1/3 bg-blue-900 text-center" >
  <img alt="content" class="mx-auto" src="images/how-we-do-desktop.png" />
</div>

                <Footer />
            </div>
        );
    }
}

export default innovationscoutingpage;