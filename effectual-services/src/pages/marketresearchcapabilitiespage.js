import React, { Component } from 'react';
import Navigation from '../components/navigation'
import Footer from '../components/footer'

class marketresearchcapabilitiespage extends Component {
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
              <span class="block xl:inline">Market Research<br />
                <span class="block text-white xl:inline">Capabilities</span> </span> 
            
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
                          We are a 360 degree research and consulting firm tracking more than 55 industries. We produce high level syndicated & customized research studies with a focus on emerging and disruptive markets.<br /><br />We liaise with subject matter experts, industry veterans and analysts, who constantly track changing market dynamics. 
Along with global analysis, we also track country wise changes in all industry verticals. <br /><br />Our business intelligence framework is based on 5 level segmentation to ensure data authenticity through the use of credible data sources.<br /><br />Our mission is to provide high quality research that enables our clients to take strategic decisions that helps empower their businesses with actionable insights.<br /><br />Our multi disciplinary research team offers MR across a broad range of end use industries including chemicals, healthcare, food & beverage, automotive, electronics, ICT & energy. We cover markets in both developed and developing regions with special focus on GCC, ASEAN & BRICS – the new frontiers of growth.   

                         
</p>
                        
                        </div>
                    
                      </div>
                    </section>
                  
                    
                    
            <Footer />
        </div>
        );
    }
}

export default marketresearchcapabilitiespage;