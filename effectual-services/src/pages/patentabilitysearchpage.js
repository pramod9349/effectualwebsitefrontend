import React, { Component } from 'react';
import Navigation from '../components/navigation'
import Footer from '../components/footer'

class patentabilitysearchpage extends Component {
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
                  <span class="block xl:inline">Patentability Search</span> 
                 
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
					A Patentability Search or Novelty Search is conducted to evaluate the patentability of an invention based on the statutory requirements of a patent office. The ideal time to conduct a patentability search is before preparing the patent application to determine whether the invention is novel and non-obvious.
					<br />
					<br />

The objective of a Patentability Search is to identify patent and non-patent literature that can potentially render an invention un-patentable. The prior art identified in a patentability search also helps a patent drafter in drafting claims which have a broadest possible scope based on the identified prior art.
<br />
					<br />

We have access to industry’s leading patent and non-patent databases which provide us access to the 100+ jurisdictions worldwide:
<br />
					<br />
Various Patent databases like Thomson Innovations, Orbit (from QuestelTM) and Total Patent (from LexisNexisTM), Google Patents, Espacenet, USPTO and other regional patent databases.
Non patent databases such as IP.com, Google Scholar, IEEE Xplore, CiteSeer, ACM Library, Wiley’s Library, etc.
Our search strategy is comprehensive and covers a variety of strategies including Keywords based searching, Patent classification based searching for example, CPC, IPC, USC, FI, F-Term based searching; Assignee and Inventors based searching; Citation Search / Spider searching. We have completed more than 2000 patentability searches till date.
<br />
					<br />
Commercial Assessment
<br />
					<br />
The invention can also be evaluated for commercial potential. The various factors that we consider in evaluating the commercial viability of an invention include:
<br />
					<br />
Problems solved
<br />
					<br />
Potential applications<br />
Market size<br />
Potential licensing opportunities<br />
Funding/venture opportunities<br />
Challenges to commercialization.
						

							  </p>
							
                            </div>
                        
                          </div>
                        </section>
                        
                       

                <Footer />
            </div>
        );
    }
}

export default patentabilitysearchpage;