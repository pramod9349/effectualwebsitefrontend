import React, { Component } from 'react';
import Navigation from '../components/navigation'
import Footer from '../components/footer'

class freedomtooperatesearchpage extends Component {
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
                  <span class="block xl:inline">Freedom to Operate
                    <span class="block text-white xl:inline">Search</span> </span> 
                 
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
				Before launching a product or service in market, it is important to conduct a Freedom to Operate (FTO) or Clearance Search in respective jurisdictions. Also, in order to assess the risk of potential infringement and to avoid subsequent litigation the companies proactively perform a FTO search to identify any alive patents that may potentially map on to the features of the product or service to be launched.
				<br />
				<br />

Typically, the FTO search is restricted to a particular jurisdiction, however, it prudent to search for International applications which can potentially enter the target jurisdictions in order to be absolutely sure. A FTO search involves a claim specific search, to locate claims that read on to the features of the product or service to be launched in the market. Specifically, following aspects should be focused upon during the FTO search:
<br />
<br />
Capturing the enforceable patents and patent publications having features similar to those of the product or service.<br/>
Providing legal status of the patents identified so that the clients know about the expired patents which are now in public domain.<br />
Whether the patents identified, which are expired at this point, can be revived at a later stage.<br />
Providing a mapping between features of the product to be launched vis-a-vis claimed elements of the patent references found, in order to indicate the extent of mapping.<br /><br />
We at Effectual Services have assisted clients in a number of FTO searches for various jurisdictions worldwide on a variety of technology domains including Computer Science and Information Technology, Electronics and Communications, Electrical, Mechanical, Chemical, Biotechnology, Pharmaceuticals and Life Sciences domain. Effectual Services has an experienced team, consisting of Engineers, Bachelors, Masters and PhDs and many of our team members have a Law degree in addition to the technical degrees making them ideal for Intellectual Property related services.
						

							  </p>
							
                            </div>
                        
                          </div>
                        </section>
                      
                        
                      


                <Footer />
            </div>
        );
    }
}

export default freedomtooperatesearchpage;