import React, { Component } from 'react';
import Navigation from '../components/navigation';
import Footer from '../components/footer';

class indiaentrystrategypage extends Component {
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
                  <span class="block xl:inline">India Entry Strategy </span> 
                 
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
							Whenever a company wants to establish an industry in any country, going forward without proper research can be lethal. There are various laws governing various compliance requirements relating to – Intellectual Property, Tax laws, Environmental Laws, etc. to name a few. There are other State laws and National laws which prescribe various approvals which need to be taken from a number of authorities for successfully establishing a business in India. A company, before deciding upon setting up the business needs to perform an exhaustive research, on regulatory aspects as well as on the competitors in order to establish a successful business. Non-compliance with any of the above may result in an eventual litigation which is time and resource intensive.
							
							<br />
							<br />

We, in collaboration with our partner firms, enable companies across the Globe to establish a foothold or expand their operations in India by assisting them in research on the laws which need to be complied with, and with necessary approvals which are required in setting up a business from scratch in India. In the past, we have assisted some of our client in performing due-diligence analysis for some niche Indian technology based start-up companies who were potential targets for Merger and Acquisition activity.

							  </p>
							
                            </div>
                        
                          </div>
                        </section>
                       
                        
                      
                <Footer />
            </div>
        );
    }
}

export default indiaentrystrategypage;