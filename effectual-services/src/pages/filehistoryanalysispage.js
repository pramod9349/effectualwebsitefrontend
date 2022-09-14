import React, { Component } from 'react';
import Navigation from '../components/navigation'
import Footer from '../components/footer'

class filehistoryanalysispage extends Component {
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
                  <span class="block xl:inline">File History 
                    <span class="block text-white xl:inline"> Analysis</span> </span> 
                 
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
						A File history holds a lot of valuable information that is generally overlooked because of the huge time required to completely analyze the file history. During the prosecution, a lot of communication goes on between the applicant and the examiner, during which applicant may provide statements, for example, relating to the novelty of the invention. Such statements may be helpful at a later stage and may be used to strengthen or weaken a litigation based on that patent. Similarly many times the applicant himself mentions a restriction on the enablement of the claim during the prosecution, so that the examiner cited prior art can be circumvented and patent can be granted. These types of limitations create estoppel against the applicant may prove to be useful at the time of litigation.
						<br />
						<br />

A file wrapper may include more than 1000 pages; however, when it comes to litigation we only need those two lines which strengthen our case. In order to locate those two specific lines, a very thorough analysis of the file wrapper is required. It is highly inefficient for an Attorney to perform the analysis of thousands of pages of file wrapper. However, if the Attorney is provided the gist of the entire file wrapper, in a handful of sheets along with relevant citations to the portions of the file wrapper, the inefficiencies may be drastically reduced.
<br />
						<br />
At Effectual Services, we have developed an in depth experience in performing a file wrapper analysis to mine out specific information, or to provide the complete overview of the file wrapper. Our engineers and paralegals have an eye for detail when mining information from the file wrapper, and help our client by performing a variety of analysis on file wrappers, depending on client requirements:
<br />
						<br />
Claim specific analysis: How did a specific claim evolved while office action?<br />
Novelty specific: What is the novel aspect in the invention?<br />
File history estoppel: Many times the applicant puts a limitation to get the patent granted, this can be very useful in litigation.<br />
Concept: If the client wants the arguments on specific concept mentioned in file wrapper.

						

							  </p>
							
                            </div>
                        
                          </div>
                        </section>
                      
                        
                      
                <Footer />
            </div>
        );
    }
}

export default filehistoryanalysispage;