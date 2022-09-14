import React, { Component } from 'react';
import Navigation from '../components/navigation'
import Footer from '../components/footer'

class ruleinvestigationsupportpage extends Component {
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
                  <span class="block xl:inline">Rule 11/337 <br />
                    <span class="block text-white xl:inline">Investigation Support</span> </span> 
                
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
				
                              The team at Effectual Services has been supporting various US law firms in pre-filing investigations required before filing a patent infringement lawsuit, specifically Rule 11 and ITC 337 Investigations. We provide support in conducting reasonable infringement analysis prior to filing the lawsuit. The pre-filing infringement analysis is performed as a two-step process and involves both a legal and a technical part. The legal part of the analysis is claim construction. The technical part is a comparison of the alleged infringing products with the interpreted claims. We deliver claim construction charts which include both intrinsic and extrinsic evidence to support the correct interpretation.
				<br /><br />

                The infringement charts include mapping of the claimed elements with the product features. For preparing infringement charts we rely on the publically available documentation as well as do physical testing / code analysis wherever required.The US International Trade Commission (ITC or Commission) is an independent, quasi-judicial Federal agency that administers certain US trade laws which provide US industries with a means to prevent unfair competition from imported goods, including Section 337 violations. To prove a violation of Section 337, the complaining party must establish (1) unfair competition or an unfair act, e.g., patent infringement, (2) importation, sale for importation, or sale after importation into the United States of the accused products, and (3) the existence of a domestic industry relating to the products or IP in question. Section 337 investigations are complex and require a unique blend of litigation, administrative law, patent laws and technical skills and proceed at a very fast pace. We at Effectual Services can help in proving unfair act, e.g, patent infringement and the have required technical skills to do so.
</p>
							
                            </div>
                        
                          </div>
                        </section>
                      
                        


                <Footer />
            </div>
        );
    }
}

export default ruleinvestigationsupportpage;