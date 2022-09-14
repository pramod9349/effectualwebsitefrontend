import React, { Component } from 'react';
import Navigation from '../components/navigation'
import Footer from '../components/footer'

class patentproofreadingpage extends Component {
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
                  <span class="block xl:inline">Patent Proofreading</span> 
                 
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
							According to a recent study, almost 90% of the patents issued have errors. The errors in issued patents may be a result of incomplete quality check at the drafting stage, or may creep in during prosecution stage. Some errors, for example, incorrect dependencies in claims, might significantly limit the scope of the patent or lead to its revocation post grant. Sometimes extra fees, delays, denial of patents, or invalidation of awarded patents results due to errors in patents. Therefore, although a laborious task, it is very crucial to proofread patent applications to identify discrepancies in patents, such as missing antecedent references, incorrect status indicators, or inconsistent numbering of the claims.
							<br />
							<br />

Errors in a patent are diverse and are of varying nature depending on the stage they are crept in. Also, the impact of the errors in the different parts of a patent is different.Beginning with the Face Page, which constitutes the bibliographical information, errors in this segment are critical in nature, such as incorrect names of inventors, attorneys or assignees (generally spelling mistake), or missing any amendments during the prosecution, such as change of the names of the above or insertion or deletion of the same. Errors in the priority information might lead to serious repercussions, which may even result in abandonment of a patent. Similarly, errors in the names of inventor, attorney, assignee are also very crucial which might cause confusion if found incorrect. Similar is the nature of errors in case of specification, drawings and especially claims.Errors in patent might prove fatal and bring uninvited trouble to the Assignee of the patent. So, in order to avoid such unpleasant circumstances proofreading of a granted patent or a patent application becomes crucial.
<br />
							<br />

Effectual Services patent proofreading process follows an extremely detailed analysis of a patent’s prosecution history to identify any PTO or applicant errors. Our team members run thorough manual as well as automated checks simultaneously to ensure that a patent is free of any errors. Our proofreaders have in-depth knowledge of Patent laws and are also trained in Patent drafting best practices for various jurisdictions, including US, EP, Australia etc. We also prepare ready to file Correction request (For example, a Certificate of Correction in USPTO prescribed format) that can be filed with the PTOs saving our client precious time.

							  </p>
							
                            </div>
                        
                          </div>
                        </section>
                        
                      
                <Footer />
            </div>
        );
    }
}

export default patentproofreadingpage;