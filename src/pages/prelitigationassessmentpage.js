import React, { Component } from 'react';
import Navigation from '../components/navigation';
import Footer from '../components/footer';

class prelitigationassessmentpage extends Component {
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
                  <span class="block xl:inline">Pre-Litigation Assessment</span> 
                
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
				
				Patent litigation is expensive and takes years to resolve. The decision to enforce or challenge a patent is a vital one and must take into account the companies overall business goals and strategies. The early association with a patent litigation counsel and a support firm is crucial to the outcome. The combination of a law firm that takes care of all high end legal work and a support firm that takes care of all technical work increases the success probability. Most importantly, it reduces the overall cost and allows your attorneys to focus on their case preparation. Our team has been a part of number of cases and have worked with law firms for years on number of patent litigation cases.
				<br /><br />

Pre-litigation analysis or Pre-Filing analysis in patent law suits is critical to the eventual outcome of a law suit. We leave no stone unturned by investigating every angle and create a detailed actionable report of the patent(s) to be litigated. This report helps attorneys and their clients in assessing strengths & weakness of a case. We also assist attorneys in zeroing down on best possible claim construction and prepare charts that include intrinsic and extrinsic evidences. These charts help a lot while preparing for Markman hearing.
<br /><br />

The complete report typically includes:
<br /><br />
Claim construction charts that account for prosecution history, intrinsic and extrinsic evidence and past litigation history, <br />
Patent proofreading report so that any critical errors can be eliminated or are already known, <br />
Infringement analysis along with preliminary claim charts for couple of high value targets,<br />
Validity search and analysis for strength assessment and risk mitigation,<br />
Market research to give an idea about the exposed revenue and<br />
Insights into litigation history of the party being sued.
							  </p>
							
                            </div>
                        
                          </div>
                        </section>
                      
                       
                <Footer />
            </div>
        );
    }
}

export default prelitigationassessmentpage;