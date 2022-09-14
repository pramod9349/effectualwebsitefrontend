import React, { Component } from 'react';
import Navigation from '../components/navigation'
import Footer from '../components/footer'

class ipriskassessmentpage extends Component {
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
                  <span class="block xl:inline">IP Risk Assessment </span> 
                 
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
                              
                              <p class=" w-full leading-relaxed text-gray-500 ">
                              Companies spend years in research and development to develop a groundbreaking product and then they get caught up in infringement lawsuits or unfavorable licensing agreements during or after the launch of their products. This happens since even though a similar product might not exist in the market, however the product technology might exist and be patented. There can be many reasons for this condition to occur. The patent assignee, known as non-practicing entity, did not have the resources to develop the idea into a product. Or else the technology at the time was not advanced for product development. 
                              <br></br> <br></br>
 We at Effectual Services provide a Free To Operate (FTO) solutions to mitigate the risk associated with product launches. We access the product features of the client's yet-to-be-launched product under a Non-disclosure Agreement (NDA). We use multiple paid patent databases, such as Orbit, and Patseer, to search for the patents claiming features similar to the product(s)/ service(s) of our client. 
 <br></br> <br></br>
 Since patent rights have jurisdictions, it may happen that patent claiming similar to the client's product/ service features may only exist in one country. In such cases, we provide consultancy for launching the product or services in risk-free countries
 <br></br> <br></br>
 It may also happen that the client only wants to launch their product or services in one specific country, however the product may already be infringing on a granted patent issued in that country. In such scenarios, we provide consultancy for modifying the product features to avoid patent infringement.<br></br>
The minimum estimated time for an FTO report ranges from 24-30 hours and may go up to 64 hours depending upon the coverage of product or services key features.


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
  <p class ="mb-4">One of our client wanted us to perform a risk assessment of a primary feature of their product in AI related technology. The client wanted to launch the product in multiple countries with a significant focus on the US and Chinese markets because of the dire need of their product feature in these markets. <br></br><br></br>
  We initiated the analysis by understanding the product literature under the NDA. Using our domain knowledge and expertise, we identified the underlying technologies behind various features of the product. Our domain experts derived the related technological keywords and classes relevant for an exhaustive patent search. Then after using the subscribed commercial third party patent databases, we formulated different search strategies and identified granted patents which were functionally claiming the product feature very closely. Later, we thoroughly analyzed each of the identified granted patent and found several of them claiming the product feature closely. After consulting with the client, the client gave us a go-ahead to suggest product improvement for launch. We carefully analyzed every embodiment of the identified patents and suggested key changes to the product features in order to overcome the claims of the identified granted references. The client was very much pleased with the effort and congratulated us for assisting them in successfully launching their product. 
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

export default ipriskassessmentpage;