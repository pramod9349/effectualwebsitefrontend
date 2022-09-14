import React, { Component } from 'react';
import Navigation from '../components/navigation'
import Footer from '../components/footer'

class patentdraftingpage extends Component {
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
                  <span class="block xl:inline">Patent Drafting </span> 
                  
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
							  Patent Drafting is the first and perhaps the most important step during the entire lifecycle of the patent. No matter how good an invention is, a poorly drafted patent can lead to the loss of rightful return on investment. A poorly drafted patent may have loopholes which a potential infringer may utilize in order to get away with infringement, or worse an assignee may lose the rights at a later stage in case the patent has issues like improper enablement, improper explanation of invention etc. A good patent draft not only includes proper enablement of the invention, but also includes all the possible embodiments of the invention. At times, inventors are not able to envision all the possible embodiments of their invention, a good patent drafter therefore, works closely with the inventors in order to protect the broadest possible scope of the invention using the claims.
</p> <p class="py-6 w-full leading-relaxed text-gray-500">
Good drafting practices also suggest keeping in mind the prosecution of the patent, a good patent drafter drafts the specification so that necessary amendments, which need to be made during the prosecution, are also well supported.
</p> <p class="py -6  w-full leading-relaxed text-gray-500">
At Effectual Services, we have developed in depth expertise in drafting patents, both – provisional and complete patent specifications, customized as per the defined statutory requirements of the specific patent office where the application is to be filed. Our drafters have been trained by leading Patent Attorneys who have drafted hundreds of patent applications, and are well versed with respective PTO procedures.
</p> <p class=" py-6w-full leading-relaxed text-gray-500">
All drafts are reviewed and verified against a client approved quality checklist. We have a proven track record of drafting patent applications in multiple technical fields for filings at the USPTO, EPO, IPO, Australia patent office, and WIPO (PCT applications). Our team consisting of Engineers, Bachelors, Masters and PhDs from varied technical backgrounds, including Computer Science and Information Technology, Electronics and Communications, Electrical, Mechanical, Chemical, Biotechnology, Pharmaceuticals and Life Sciences domain. Many of our team members have a Law degree and relevant Industrial experience in addition to the technical degrees making them ideal for patent drafting.
</p> <p class="py-6 w-full leading-relaxed text-gray-500">
At Effectual Services, while drafting a patent application we emphasize on:
</p> <p class=" w-full leading-relaxed text-gray-500">
Flaw-less understanding of the invention with the help of disclosure provided by the client or by interviewing the client.
Defining the exact novelty based on the information and existing prior art.
Setting up Background and Field of Invention describing the existing art.
Drafting broadest possible Independent claims and including multiple independent claims in the patent targeting all the possible embodiments of the invention.
Drafting comprehensive patent specifications describing all possible embodiments of the invention.
							  </p>
                            </div>
                        
                          </div>
                        </section>
                       
                        
                        
                <Footer />
            </div>
        );
    }
}

export default patentdraftingpage;