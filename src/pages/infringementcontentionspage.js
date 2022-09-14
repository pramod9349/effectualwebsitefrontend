import React, { Component } from 'react';
import Navigation from '../components/navigation'
import Footer from '../components/footer'

class infringementcontentionspage extends Component {
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
                  <span class="block xl:inline">Infringement &nbsp;
                    <span class="block text-white xl:inline">Contentions</span> </span> 
                
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
				
                              We have experience in supporting law firms in drafting and reviewing Infringement Contentions. As required by the local court rules a party claiming patent infringement has to serve on all parties a Disclosure of Infringement Contentions aat the time specified in the local court rules and such disclosure should contain a claim chart. We provide court ready claim charts identifying specifically where each element of each asserted claim is found within each of the Accused Instrumentality.
				<br /><br />

                In a multi-party suit or if multiple suits have to be filed within a small span of time, we work closely with the law firm on the first claim chart, finalize the construction and mapping and then replicate the same across multiple products and multiple companies. This saves attorneys valuable time which can be utilized for higher value work.
<br /><br />

We can also ascertain that each limitation of each asserted claim is alleged to be literally present or present under the doctrine of equivalents in the Accused Instrumentality. When it comes to reviewing contentions, we review both infringement and invalidity contentions to bring out technical differences that form the basis for strong legal arguments and rebuttals. These technical differences also form the basis for non-infringement theories.
							  </p>
							
                            </div>
                        
                          </div>
                        </section>
                      
                     
                <Footer />
            </div>
        );
    }
}

export default infringementcontentionspage;