import React, { Component } from 'react';
import Navigation from '../components/navigation'
import Footer from '../components/footer'

class managementdatavarificationpage extends Component {
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
                  <span class="block xl:inline">Data  Verification</span> 
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
                          <div class="container px-5 py-6 ">
                          <div class="w-full leading-relaxed text-gray-500 font-roboto px-12 text-lg text-justify mb-4">
                              
                              <p class=" w-full leading-relaxed text-gray-500">
                              The one thing that always is a threat to the attorneys is the accuracy of their IP data. The fear of missing deadlines can keep them awake endless nights and can cause them a huge amount as well. Who can ignore the integral role of high-quality, accurate, and relevant data when it comes to forming an Intellectual Property (IP) asset. Without any second thoughts, the strength of every other IP asset depends highly on the accuracy of data obtained during the process of data verification. The process offers valuable information, which helps in identifying discrepancies in the critical data, prioritizing patents, mitigating potential risks, and enabling the team members and managers to make strategic and well-informed decisions. The process also includes checking on the active due dates and notices to be responded to
 
 <h4 className='mt-6 mb-2 font-bold'>ROLE OF ‘DATA VERIFICATION’ FOR CREATING AN IP STRATEGY</h4>
</p><p class=" w-full py-6 leading-relaxed text-gray-500">
Data verification refers to any service or assignment where a given list of data entries is reviewed and cross-verified. For instance, a patent practitioner who has a list of USPTO patents, reviews and cross-checks the data on the USPTO websites during the process of data verification. This step is to determine that all entries are recorded/updated properly.

Whenever there is a transfer of patent assets during a merger or acquisition or patent sale etc., it is prudent to validate data for patents being acquired, for example, checking the ownership details and ownership history, the maintenance fees paid, patent family details, the bibliographic details etc. Also, the ownership of the patents needs to be changed, which involves preparing of relevant forms to be filed with PTOs. 
 </p><p class=" w-full py-6 leading-relaxed text-gray-500">
 Whenever there is a transfer of patent assets during a merger or acquisition or patent sale etc., it is prudent to validate data for patents being acquired, for example, checking the ownership details and ownership history, the maintenance fees paid, patent family details, the bibliographic details etc. Also, the ownership of the patents needs to be changed, which involves preparing of relevant forms to be filed with PTOs. 
 </p><p class=" w-full py-6 leading-relaxed text-gray-500">
 In the world of patenting and innovation, the data is a critical asset and thus should be protected. The accuracy of the same is not only important during mergers and acquisitions but also for keeping them alive. A patent with a wrong grant date in the system would miss the maintenance fee dates and this can lapse before its actual due date. Or a provisional with wrong filing date or will miss the deadline to file the next utility or a PCT application.

							  </p>
                            </div>
                        
                          </div>
                        </section>
                <Footer />
            </div>
        );
    }
}

export default managementdatavarificationpage;