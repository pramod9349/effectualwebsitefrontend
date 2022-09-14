import React, { Component } from 'react';
import Navigation from '../components/navigation'
import Footer from '../components/footer'

class eouchartpage extends Component {
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
                  <span class="block xl:inline">EOU<br />
                    <span class="block text-white xl:inline">Chart</span> </span> 
                
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
				
                              EoU Chart or Evidence of Use chart involves a detailed mapping of every element of patent claim(s) with the infringing (accused) product or a standard. EoU chart helps attorneys, lawyers and counsels in determining the infringement of the patent. Detailed Evidence of Use charts are helpful for licensing negotiations, pre-litigation research, and in patent transaction opportunities by establishing the value of the patent.
				<br /><br />

                <h1 class="text-3xl">Broadly speaking there are two types of EoU charts:</h1> 
                              <br />

                1. EoU charts including Patent-to-Product Mapping

                <br />
                2. EoU charts including Patent-to-Standard Mapping.

                <br /><br />

                As the name suggests, Patent-to-product mapping chart includes a mapping of elements of to the product and is used to ascertain the extent that the product reads on to the claim. Another type includes Patent-to-Standard mapping which includes a patent mapped on to the relevant sections of a standard, which in turn establishes infringement of the patent by products that are compliant to the standard mapped.

                <br /><br />
                

                We at Effectual Services have in depth expertise in preparing detailed EoU charts. In the past we have assisted our clients in successful licensing negotiations. We also have in depth experience of working on different standards like IEEE 802, 3GPP, LTE, etc.

                <br /><br />

               

<h1 class="text-3xl"> While preparing an EoU chart we strongly emphasize on:</h1>
<br />
1. Clear understanding of target patent and its claim(s) in the light of patent specifications and file history to derive a broadest possible interpretation of the independent claims, supported by specifications and file history.
<br />
2. Analyzing and creating an exhaustive list of potential infringers.
<br />
3. Performing a thorough search on the identified companies and analyzing there product portfolios in order to find the best infringing product.
<br />
4. Granular mapping the target claim elements to clearly indicate the presence of the each element in the products/standards
<br />
Effectual Services has a team of experienced workforce, consisting of Engineers, Bachelors, Masters and PhDs from varied technical backgrounds, including Computer Science and Information Technology, Electronics and Communications, Electrical, Mechanical, Chemical, Biotechnology, Pharmaceuticals and Life Sciences domain. Many of our team members have a Law degree in addition to the technical degrees making them ideal for Intellectual Property related services.
<br />           
</p>
							
                            </div>
                        
                          </div>
                        </section>
                      
                    
                <Footer />
            </div>
        );
    }
}

export default eouchartpage;