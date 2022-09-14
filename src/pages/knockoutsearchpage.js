import React, { Component } from 'react';
import Navigation from '../components/navigation'
import Footer from '../components/footer'

class knockoutsearchpage extends Component {
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
                  <span class="block xl:inline">Knockout Search</span> 
                 
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
						Knockout Search, as the name suggest, is the quick and cost effective way to perform a confirmatory search before making any investment in drafting and filing for a patent. Knockout search is an efficient way to distinguish inventions that are novel and worth the investment.
						<br />
						<br />

Knockout searches are preferred for both the individual inventors as well as for corporations looking to save costs on assessing the patentability of inventions. The corporations can leverage Knockout searches as a quick turnaround and low cost option to reduce the volume of invention disclosures reaching to the next level by almost 60-70%. In the past, this has helped many of our clients save significant amount time and money.We, at Effectual Services, have in depth experience in performing Knockout searches targeting specifically the novelty aspect of the invention, and provide our clients with a quick and easy way to access the patentability of their inventions. The search is conducted using commercial patent databases and is restricted to three major filing jurisdictions, i.e., US, EP and WIPO. Our report formats are extremely structured, easy to understand, and tailored to suit the needs of our clients.
<br />
						<br />

Effectual Services has a team of experienced workforce, consisting of Engineers, Bachelors, Masters and PhDs from varied technical backgrounds, including Computer Science and Information Technology, Electronics and Communications, Electrical, Mechanical, Chemical, Biotechnology, Pharmaceuticals and Life Sciences domain. Many of our team members have a Law degree in addition to the technical degrees making them ideal for Intellectual Property related services.

						

							  </p>
							
                            </div>
                        
                          </div>
                        </section>
                        
                    


                <Footer />
            </div>
        );
    }
}

export default knockoutsearchpage;