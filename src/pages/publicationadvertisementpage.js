import React, { Component } from 'react';
import Navigation from '../components/navigation'
import Footer from '../components/footer'
import Locatinproject from '../components/locatinproject';
class publicationadvertisementpage extends Component {
    render() {
        return (
            <div>
                <Navigation />
                <div class="relative bg-white overflow-hidden ">
                <img className="z-0 w-full h-full absolute inset-0 object-cover" src="images/bg_image_lite.png" alt="bg" />
        <div class=" mx-auto ">
          <div class="relative z-10 pb-8  sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full ">
            
            <main class="mx-auto max-w-5xl px-4 sm:mt-12 sm:px-6 md:mt-16  lg:px-8 xl:mt-28">
              <div class="sm:text-center lg:text-left">
                <h1 class="px-12 text-2xl tracking-tight font-extrabold text-white sm:text-5xl md:text-5xl">
                  <span class="block xl:inline">Publication  Advertisement </span> 
                 
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
							 Filing a patent is not enough to get the patent granted. Even after drafting and filing a patent in best possible manner there is a minute chance that the patent will be granted straight away. Once a patent is filed, the patent examiner searches for prior art of a patent and various other irregularities in the patent/filing documents, on the basis of which the Examiner gives a rejection. It is the responsibility of the Applicant to convince the examiner, either with arguments or with necessary amendments in the patent claims during an Office Action Response.
 </p><p class=" w-full py-6 leading-relaxed text-gray-500">
Any amendments made during the Office Action responses may create estoppels against the applicant, which may impact the scope of the claims at a later stage. Preparing a good Office Action Response is an art and a good office action response minimizes such an impact on the scope of claims, by clearly pointing out the distinction between the prior art and the invention. Office Action drafting requires a thorough understanding of the law, the invention, and the cited art. At times it also involves discussing the invention and cited art with the examiner during an examiner interview.
 </p><p class=" w-full py-6 leading-relaxed text-gray-500">
Effectual Services helps the clients in drafting ready to file office action responses for patents filed across various jurisdictions including US, EP, India, and Australia. Our team of highly skilled techno-legal professionals has extensive experience in not only drafting superior responses, but also in assisting attorneys in negotiating the scope with examiners in examiner interviews, in order to ensure that the finally allowed claim set is not too narrow. We also make sure that any unclaimed subject matter is brought to the clients notice, so that timely amendments are made to the claims to capture broadest possible scope of the patents.
 </p><p class=" w-full py-6 leading-relaxed text-gray-500">
For clients who wish to draft responses themselves, we can perform the heavy-lifting tasks including the detailed technical analysis of the references cited by the Examiner and identifying the technical differences between the cited art and the invention, thereby saving Attorney’s time in drafting the Office Action response.

							  </p>
                            </div>
                        
                          </div>
                        </section>
                       
                        
                        
<Locatinproject />


                

                <Footer />
            </div>
        );
    }
}

export default publicationadvertisementpage;