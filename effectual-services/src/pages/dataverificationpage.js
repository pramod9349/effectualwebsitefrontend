import React, { Component } from 'react';
import Navigation from '../components/navigation'
import Footer from '../components/footer'


class dataverificationpage extends Component {
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
                  <span class="block xl:inline">Data 
                    <span class="block text-white xl:inline">Verification</span> </span> 
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
                              
                              <p class=" w-full leading-relaxed text-gray-500 text-justify">
                              The one thing that always is a threat to the attorneys is the accuracy of their IP data. The fear of missing deadlines can keep them awake endless nights and can cause them a huge amount as well. Who can ignore the integral role of high-quality, accurate, and relevant data when it comes to forming an Intellectual Property (IP) asset. Without any second thoughts, the strength of every other IP asset depends highly on the accuracy of data obtained during the process of data verification. The process offers valuable information, which helps in identifying discrepancies in the critical data, prioritizing patents, mitigating potential risks, and enabling the team members and managers to make strategic and well-informed decisions. The process also includes checking on the active due dates and notices to be responded to.
						<br />
						<br />

            Data verification refers to any service or assignment where a given list of data entries is reviewed and cross-verified. For instance, a patent practitioner who has a list of USPTO patents, reviews and cross-checks the data on the USPTO websites during the process of data verification. This step is to determine that all entries are recorded/updated properly.
<br />
<br />

Whenever there is a transfer of patent assets during a merger or acquisition or patent sale etc., it is prudent to validate data for patents being acquired, for example, checking the ownership details and ownership history, the maintenance fees paid, patent family details, the bibliographic details etc. Also, the ownership of the patents needs to be changed, which involves preparing of relevant forms to be filed with PTOs. 

<br />
<br />
In the world of patenting and innovation, the data is a critical asset and thus should be protected. The accuracy of the same is not only important during mergers and acquisitions but also for keeping them alive. A patent with a wrong grant date in the system would miss the maintenance fee dates and this can lapse before its actual due date. Or a provisional with wrong filing date or will miss the deadline to file the next utility or a PCT application.

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
  <p class ="mb-4">One of our client took over a portfolio of 5000 patents and trademarks and created all the matters in the docketing software without any validation. Very soon, the matters started to collapse, we could see wrong filing/priority dates which was resulting in things being missed. Effectual Services helped this client validate the entire portfolio, corrected all the data in the software and docketed all the active due dates for each and every matter. Error rate was around 40 percent in this case. <br></br><br></br>
  Another client transferred the entire portfolio from one docketing software to another. After the transfer it was noted the entries to have no active task or due dates It was also found that the bibliographic information entered in the system was not in sync with the respective PTO. Effectual Services steps in and takes the charge. We not only updated the entire bibliographic data but also made sure all the irrelevant entries are marked. All the upcoming task and due dates are created for not only US but also Non US jurisdictions. Error rate was around 60 percent in this case. 
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

export default dataverificationpage;