import React, { Component } from 'react';
import Navigation from '../components/navigation'
import Footer from '../components/footer'

class idsmanagementpage extends Component {
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
                  <span class="block xl:inline">IDS Management </span> 
               
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
						Most of the patent offices around the world obligate the applicant to disclose the prior art (patent as well as non-patent/product) known to the inventor/applicant, that would be pertinent to determining the patentability of an application. In the United States, there is a duty imposed on the applicant to disclose any known prior art that is material to the patentability of claim(s) of a pending US patent application. The duty to disclose is continuing and obligates the disclosure of known prior art not only at the time of filing an application, but also during the prosecution of the patent application. Failure to comply with the obligation may amount to inequitable conduct, thereby invalidating the patent that might issue on the application. Specifically, the USPTO requires the applicants to file an Information Disclosure Statement (IDS).
						<br />
						<br />

There are multiple sources for such prior art, such as – a search report on a patent family member (e.g. International Search Report by WIPO); references cited by Examiner in an Office Action of a family member, etc. Such references are deemed to be known to the applicants. The duty of disclosure is continuing and obligates the disclosure of known art not only at the time of filing the application, but also during the prosecution. After a certain stage, it becomes cumbersome and expensive for the inventors / applicants to track such prior art.Effectual Services assists clients in complying with this obligation by timely and accurate tracking of such prior art references at minimal costs. We prepare accurate and easy to follow citation matrix allowing easy tracking of all family members and references cited across all the family members from all possible sources. We also prepare ready to file IDS which complies with the format prescribed by the USPTO, saving your precious time.

						

							  </p>
							
                            </div>
                        
                          </div>
                        </section>
                        
                        
                        
                <Footer />
            </div>
        );
    }
}

export default idsmanagementpage;