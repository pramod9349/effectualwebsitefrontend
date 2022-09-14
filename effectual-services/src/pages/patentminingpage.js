import React, { Component } from 'react';
import Navigation from '../components/navigation'
import Footer from '../components/footer'

class patentminingpage extends Component {
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
                  <span class="block xl:inline">Patent Mining </span> 
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
                            <div class="flex flex-wrap w-full mb-12 ">
                           
                              <p class=" w-full leading-relaxed text-gray-500 text-justify">
				
                              Organizations around the world are investing heavily in developing their patent portfolios and the real value proportion for this IP investment can only be derived through effective portfolio management.
				<br /><br />

                Companies must utilize their patent portfolio to seize upon the market opportunities derived from exploiting the technologies owned by them in the form of patents.

                <br /><br />
                Effectual services help these companies in identifying key patents from their enormous patent portfolios and suggesting ways to monetize these patents through licensing and litigation. In another aspect, we assist companies who are looking forward to identify patents that satisfy particular criteria with the aim of acquiring such patents.

                <br /><br />

                In broadest sense, Patent Mining servers the simple objective of mining specific set of patent that matches the technical and/or business specific restrictions provided by clients.

                <br /><br />
                <h1 class="text-3xl">The Two-fold strategy: Semi-Automated and Manual Analysis</h1> 
                              <br />

                              Semi-automated solution: We understand that needs of optimizing costs for our clients and of delivering maximum value to our clients. We have developed a scoring system for identifying key patents from a large portfolio, based on certain parameters. This scoring system takes into account both objective and subjective parameters such as forward citation, number of independent claims, claim length, detect ability of overlap, market segment and size, etc.

                <br /><br />

               

                Manual solution: Depending on the client's needs, we can also provide an entirely manual approach for portfolio analysis, wherein the scoring is based on a completely manual analysis. Such an analysis does include all the parameters used in semi-automated approach, but also extends the analysis to more subjective parameters, such as, remaining life, number of foreign family members, availability of alive family member, number of office action responses, etc.
               
</p>
							
                            </div>
                        
                          </div>
                        </section>
                      
                        
                     
                <Footer />
            </div>
        );
    }
}

export default patentminingpage;