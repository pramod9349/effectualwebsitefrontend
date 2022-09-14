import React, { Component } from 'react';
import Navigation from '../components/navigation'
import Footer from '../components/footer'

class patentduediligence extends Component {
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
                <h1 class="px-20 text-2xl tracking-tight font-extrabold text-white sm:text-5xl md:text-5xl">
                  <span class="block xl:inline">Patent Due Diligence </span> 
                
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
                              Companies having large patent portfolio often struggle with their sheer numbers and this creates a need for an effective IP portfolio management. Segregation of patent portfolio into different technology segments and ranking helps organization to tap the true potential of IP assets owned by them.
<br /><br />
We at Effectual services help these companies in categorizing/bucketing their patents into specific technology area. The bucketing is a two step process involving following two activities –
<br /><br />
Preparation of comprehensive taxonomy
<br />
In-depth analysis of patents to further classify under sub-categories.
<br />
This enables companies to reduce their large portfolio into manageable chucks and provides them a greater insight into patent strength with respect to a particular technology domain.
<br /><br />
Companies IP portfolio will often contain large number of patents of nominal quality, and on one end, a smaller number of exceedingly high quality patents, and on the other end, a smaller number of exceedingly low quality patents.
<br /><br />
To identify promising IP assets for Licensing or Acquisition activities, Effectual Services collaborates closely with their clients to ranking these patent based on our proprietary or client specified ranking models. The output of such a scoring model eventually ranks patents as High, Medium and Low. The ranking methodology can be of two types –
<br /><br />
<b>Semi‐automated solution:</b> We understand the need of optimizing costs for our clients and of delivering maximum value to them. We have developed a scoring system for identifying key patents from a large portfolio, based on certain parameters. This scoring system takes into account both objective and subjective parameters such as forward citation, number of independent claims, claim length, detect ability of overlap, market segment and size, etc.
<br /><br />
<b>Manual solution:</b> Depending on the client’s needs, we can also provide an entirely manual approach for ranking patents analysis, wherein the scoring is based on a completely manual analysis. Such an analysis does include all the parameters used in semi‐automated approach, but also the analysis is extended to more subjective parameters, such as, remaining life, number of foreign family members, availability of alive family member, number of office action responses, etc.        
</p>
							
                            </div>
                        
                          </div>
                        </section>
                      
                       
                <Footer />
            </div>
        );
    }
}

export default patentduediligence;