import React, { Component } from 'react';
import Navigation from '../components/navigation'
import Footer from '../components/footer'

class competitormappingpage extends Component {
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
                  <span class="block xl:inline">Competitor 
                   
                    <span class="block text-white xl:inline"> Mapping</span> </span> 
                 
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
                            <div class="flex flex-wrap w-full mb-4">
                              
                              <p class=" w-full leading-relaxed text-gray-500 text-justify">
							 Filing a patent is not enough to get the patent granted. Even after drafting and filing a patent in best possible manner there is a minute chance that the patent will be granted straight away. Once a patent is filed, the patent examiner searches for prior art of a patent and various other irregularities in the patent/filing documents, on the basis of which the Examiner gives a rejection. It is the responsibility of the Applicant to convince the examiner, either with arguments or with necessary amendments in the patent claims during an Office Action Response.
               <br />
						<br />
Any amendments made during the Office Action responses may create estoppels against the applicant, which may impact the scope of the claims at a later stage. Preparing a good Office Action Response is an art and a good office action response minimizes such an impact on the scope of claims, by clearly pointing out the distinction between the prior art and the invention. Office Action drafting requires a thorough understanding of the law, the invention, and the cited art. At times it also involves discussing the invention and cited art with the examiner during an examiner interview.
<br />
						<br />
Effectual Services helps the clients in drafting ready to file office action responses for patents filed across various jurisdictions including US, EP, India, and Australia. Our team of highly skilled techno-legal professionals has extensive experience in not only drafting superior responses, but also in assisting attorneys in negotiating the scope with examiners in examiner interviews, in order to ensure that the finally allowed claim set is not too narrow. We also make sure that any unclaimed subject matter is brought to the clients notice, so that timely amendments are made to the claims to capture broadest possible scope of the patents.
<br />
						<br />
For clients who wish to draft responses themselves, we can perform the heavy-lifting tasks including the detailed technical analysis of the references cited by the Examiner and identifying the technical differences between the cited art and the invention, thereby saving Attorney’s time in drafting the Office Action response.

							  </p>
                            </div>
                        
                          </div>
                        </section>
                       
                        <hr></hr>
                        <h2 class="mt-8 mb-4 font-sans text-3xl font-bold tracking-tight text-center text-sky-600 sm:text-4xl sm:leading-none">
  Case Studies     
  </h2> 
<section class="px-36 text-white body-font ">
<div class="px-12 pt-8 text-justify border-2 border-rose-600 ... bg-sky-700">
  <p class ="mb-4">How would you learn about a new company about whom there is little to no online information? Neither Crunchbase nor Bloomberg will list it. Furthermore, the fact that they haven't yet appeared in the press does not excuse you from including it in your market research report <br></br><br></br>
  Let's use a recent case study example where we were researching technologies and rivals for one of the largest reusable battery companies. Our goal was to support them in figuring out how to polycarbonate parts from their e-vehicle sector. So, our goal was to identify a start-up or newly established business operating in this field that may be a good fit for acquisition. But neither a website nor a major news outlet has reported it. 
  <br></br><br></br>
  To get to the good stuff quickly, we discovered a company that was Ford, an American global conglomerate, as a strategic partner. If we hadn't added patent analytics and competition mapping to our market research, it would have been difficult to locate the fledgling company. We turned to this company's patent portfolio and discovered that all of its patents were submitted after 2019.As a result, we discovered a rival with a product domain comparable to that of our client that was operating successfully and for which more than 50 patents had been granted. It was beneficial for our client to be aware of a potential rival 
<div class="text-right">
<a class="focus:outline-none  underline text-white text-s font-bold text-white cursor-pointer hover:scale-105 hover:text-red-700 ... justify-end" href ="/case-studies"> Click For More </a>
</div>
  
  </p>

  </div> 
      
</section> 
                     
                

                <Footer />
            </div>
        );
    }
}

export default competitormappingpage;