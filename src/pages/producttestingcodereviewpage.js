import React, { Component } from 'react';
import Navigation from '../components/navigation'
import Footer from '../components/footer'

class producttestingcodereviewpage extends Component {
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
                  <span class="block xl:inline">Product Testing &<br />
                    <span class="block text-white xl:inline">Code Review</span> </span> 
                
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
                            <h1 class="text-3xl">Product Testing & Code Review</h1> 
                              <br /><br />
                              <p class=" w-full leading-relaxed text-gray-500">
				
                              The team of technical experts at Effectual Services has been improving litigation outcomes by providing critical evidence mining support through physical product testing, source code review, advanced document review, reverse engineering and tear down report analysis. We have experience of working with a number of litigation law firms, expert witnesses and across a number of technologies for such services. We maintain a good inventory of products, software’s, test set-ups, development and testing kits and are able to prove infringement and prepare claim charts in a short time with the required depth and details in an inexpensive manner.
				<br /><br />

                We have experience of working on telecom products and billing services, software solutions, ERP and CRM products, web based setup's, computer networking products, iOS applications, Android applications and many more areas. We use tools such as packet sniffers, developments kits, dummy applications, etc. for achieving what is not publically stated by the infringing product’s documentation. We have reviewed millions of lines of codes and have extracted the right information which has resulted in favorable outcomes.

                <br /><br />
                We can also work on client sourced tear down reports or reverse engineering reports and prepare detailed claim charts using a mix of evidence from different sources.

                <br /><br />

                <h1 class="text-3xl">Advanced Document Review</h1> 
                              <br />

                Document Review is one of the most important tasks in litigation that can affect the outcome by a great deal. Being a costly affair for corporates and a taxing job for law firms, hot / key documents are often missed or not captured appropriately. With our technical expertise, thorough understanding of issues at hand and commitment to pay attention to detail, we can assist you unearth crucial evidence while saving cost. We have hands-on experience with all major industry practiced tools saving you the hassle of relocating your document production every now and then. We provide tailored document review services to meet your requirements.

                <br /><br />

                <h1 class="text-3xl">Our Services Include:</h1> 
                              <br />

                Preliminary Review: Preliminary review helps you identify key witnesses and documents that are relevant / irrelevant, responsive / non-responsive, privileged, confidential, and/or related to important issues.
                <br /><br />
                Advance Technical Review: With our advance technical review service, we can share your burden and perform in-depth analysis of the key documents while you focus on other critical aspects of the case. We closely work with our clients to dig out important pieces of information that can shift the balance of the case to your side.
</p>
							
                            </div>
                        
                          </div>
                        </section>
                      
                        
                        


                <Footer />
            </div>
        );
    }
}

export default producttestingcodereviewpage;