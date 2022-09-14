import React, { Component } from 'react';
import Navigation from '../components/navigation'
import Footer from '../components/footer'

class competitiveintelligenceipwatchpage extends Component {
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
                <h1 class="px-12 text-2xl tracking-tight font-extrabold text-white sm:text-5xl md:text-5xl">
                  <span class="block xl:inline">Track <span class="block text-white xl:inline">Competition & Create</span> Innovation Pipelines
                    </span> 
                 
                </h1>
                
               
              </div>
            </main>
          </div>
        </div>
        <div class="lg:absolute lg:inset-y-0 lg:right-20 lg:w-1/3">
          <img class="h-56 w-full  sm:h-64 md:h-96 lg:w-full lg:h-full object-contain" src="images/banner-comp.jpg" alt="" />
        </div>
      </div>

            <section class="text-gray-600 px-16 body-font text-justify">
              <div class="container px-5 py-6 mx-auto">
                <div class="flex flex-wrap w-full mb-20">
                  <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
                    <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">COMPETITIVE INTELLIGENCE & IP WATCH</h1>
                    <div class="h-1 w-20 bg-indigo-500 rounded"></div>
                  </div>
                  <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">Innovation is driven by intelligence. Track your competitors, not just for gaining an edge, but also to keep your fingers on the pulse of your business’s technology landscape. Analyze competitions’ IP trends and R&D strategy to plan future product development and create your own innovation pipeline.</p>
                </div>
            
              </div>
            </section>
           
<h2 class="mb-6 py-16 font-sans text-3xl font-bold tracking-tight text-center text-black sm:text-4xl sm:leading-none">
  HOW WE DO IT?     
  </h2> 

 <section class="text-gray-600 px-16 body-font text-justify">
  <div class="container px-5 py-6 mx-auto">
    <div class="flex flex-wrap w-full mb-20">
      <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Portfolio Analysis</h1>
        <div class="h-1 w-20 bg-indigo-500 rounded"></div>
      </div>
      <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">Deep-dive into your competitor’s patent portfolio to get insights on R&D activity, recent trends and new product/technology development.</p>
    </div>

  </div>
</section>

 <section class="text-gray-600 px-16 body-font text-justify">
  <div class="container px-5 py-6 mx-auto">
    <div class="flex flex-wrap w-full mb-20">
      <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
          Partner Scouting</h1>
        <div class="h-1 w-20 bg-indigo-500 rounded"></div>
      </div>
      <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">Discover the right partner for acquisition or collaboration for expanding your business or solving a challenge.</p>
    </div>

  </div>
</section>

 <section class="text-gray-600 px-16 body-font text-justify">
  <div class="container px-5 py-6 mx-auto">
    <div class="flex flex-wrap w-full mb-20">
      <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Technology Scouting</h1>
        <div class="h-1 w-20 bg-indigo-500 rounded"></div>
      </div>
      <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">Discover new technologies for solving a challenge or fulfilling a business need. Acquire it, license it or collaborate with the owner based on your goals.

      </p>
    </div>

  </div>
</section>

 <section class="text-gray-600 px-16 body-font text-justify">
  <div class="container px-5 py-6 mx-auto">
    <div class="flex flex-wrap w-full mb-20">
      <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Newsletters</h1>
        <div class="h-1 w-20 bg-indigo-500 rounded"></div>
      </div>
      <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">Regular newsletters containing trend analysis, new patent grants, acquisitions, and more. Everything you need to stay abreast of how your business landscape is shifting</p>
    </div>

  </div>
</section>









                <Footer />
            </div>
        );
    }
}

export default competitiveintelligenceipwatchpage;