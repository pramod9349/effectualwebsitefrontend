import React, { Component } from 'react';
import Navigation from '../components/navigation'
import Footer from '../components/footer'

class patentinvalidationsearchpage extends Component {
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
                  <span class="block xl:inline">Patent Invalidation Search </span> 
                 
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
                            <div class="flex flex-wrap w-full mb-20 text-justify">
                              
                              <p class=" w-full leading-relaxed text-gray-500">
				The validity search is performed by assignee/plaintiff after the grant of a patent to ensure that the patent granted is valid and enforceable whereas an invalidity search is conducted by a defendant to invalidate a patent by conducting prior art search. The key objective of the validity and invalidity search is to unearth prior art that was likely missed by the patent examiner during the prosecution stage, which may potentially question the novelty or non-obviousness of the reference. An invalidity/validity search involves conducting a thorough patent and non-patent literature search to identify prior art references predating the earliest filing of the patent.
				<br /><br />

We perform exhaustive prior art searches in subscribed databases and provide references that are relevant to the patent that has to be invalidated. Our comprehensive search strategy includes keywords-based searching, patent classification based searching such as CPC, IPC, USC, FI, F-Terms (for Japanese patents) based searching, assignee and inventors based searching, citation search/spider searching and semantic search. The invalidity search report include the details of potential prior art literature (along with bibliographic details) and mapping of claims to the relevant text of the prior art literature/references.We help you conduct file wrapper analysis and identify references to invalidate a patent. While performing validity and invalidity search we focus on:
<br /><br />

Making an accurate understanding of the technology of patent and claims coverage<br />
Accurately defining the novel aspect of the patent based on specifications and file history<br/>
Validating the prior art under respective regional laws such as 35 USC 102/103 for US and article 54, 56 of EPC<br />
						

							  </p>
							
                            </div>
                        
                          </div>
                        </section>
                     
                        

                <Footer />
            </div>
        );
    }
}

export default patentinvalidationsearchpage;