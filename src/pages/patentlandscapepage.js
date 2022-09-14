import React, { Component } from 'react';
import Navigation from '../components/navigation'
import Footer from '../components/footer'

class patentlandscapepage extends Component {
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
                  <span class="block xl:inline">Patent Landscape </span> 
               
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
                            <div class="flex flex-wrap w-full mb-20">
                              
                              <p class=" w-full leading-relaxed text-gray-500">
				
				Patent landscape is an analysis of patents in a specific technology area. A patent landscape can provide valuable insights on potential areas of research, current strengths, gaps or white space, top competitors, top inventors etc. The patent landscape is performed with specific objectives in mind, at times, these objectives manifest in terms of a variety of questions from clients, such as – Whether the client should enter the market, if yes, what should be the entry strategy? Is there any scope of filing patents in the domain? Are there any patents that the client can license or buy?
<br /><br />
Patent landscapes can also be targeted to specific competitors companies in order to gain insights in the corporate strategy, i.e. about the upcoming product launches etc. It can also help in tracking competitor’s technology, developing licensing strategies and plan for merger & acquisitions.
<br /><br />
At Effectual Services, patent landscape team performs in-depth analysis of patents to support clients in their decision making at various stages. The process starts with understanding the exact questions that need to be answered by the patent landscape. Thereafter, broad queries are formulated in order to capture the relevant patents. A detailed Taxonomy is also prepared which includes broad technical areas and respective sub-technology areas, which is used to classify the patents.
<br /><br />
After categorizations, the results are analyzed and the various trends from the data are observed. The information is presented in visual format (Power Point/Word file including the charts and graphs) enabling both high-level overviews, and detailed analyses of specific patent documents.
						

							  </p>
							
                            </div>
                        
                          </div>
                        </section>
                        
                   
               <Footer /> 
            </div>
        );
    }
}

export default patentlandscapepage;