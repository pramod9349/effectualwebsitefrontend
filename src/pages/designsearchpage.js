import React, { Component } from 'react';
import Navigation from '../components/navigation'
import Footer from '../components/footer'

class designsearchpage extends Component {
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
                  <span class="block xl:inline">Design Search </span> 
                 
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
				Designs cover novel ornamental aspects of a design, for example of a product. The prime focus is on the overall appearance of the new design. Since the design is apparent in appearance, the subject patent may relate to shape, structure, outline or configuration of an article. A design protects only the appearance of the article and not structural or utility features.
<br />
<br />
In the United States, the industrial design rights are protected by a design patent which is a form of legal protection granted to the ornamental design of an item. The design protected in the patent needs to be non-obvious with respect to the existing prior-art for the patent to be granted. A design patent should not be confused with utility patent as the design patent only covers the ornamental aspect of a product and not the utility of it.
<br />
<br />
Searching for Designs is different from Utility patent searching for obvious reasons, as the target designs may not be accurately captured by mere use of keywords. At Effectual Services, we have gained expertise in searching for designs for various jurisdictions by working with various clients across the globe. While searching for designs, we do not rely merely on keywords in order to search for a target design. Instead, we use a variety of other strategies like different classifications, in addition to keyword searching, in order to ensure comprehensive coverage during the search. In addition to utility patents that may disclose the same or similar design we search the following sources for design prior art:
<br />
<br />
USPTO Design Database<br />
RCD-Online maintained by The trademarks and designs registration office of the European Union<br />
Hague Express Structured Search for WIPO<br />
Canadian Industrial Designs Database<br />
IP Australia Database<br />
Chinese Design Database<br />
Google and Google Images<br />
						

							  </p>
							
                            </div>
                        
                          </div>
                        </section>
                        
                        
                       

                <Footer />
            </div>
        );
    }
}

export default designsearchpage;