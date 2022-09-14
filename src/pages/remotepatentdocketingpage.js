import React, { Component } from 'react';
import Navigation from '../components/navigation'
import Footer from '../components/footer'


class remotepatentdocketingpage extends Component {
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
                  <span class="block xl:inline">Remote Patent Docketing</span> 
                 
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
						Patent Docketing is a clerical, repetitive, time consuming and yet high risk task. Worse, it is prone to human error. Although, the reliability of the docketing can be improved when performed by people who are specialized and dedicatedly work on the docketing only, but with increasing pressure on the law firms and in-house counsels and legal departments to cut the costs, it is difficult for to maintain full time paralegals focusing on the docketing. Companies who are looking forward to save the paralegal time and also cut costs can benefit from outsourcing of docketing function. Outsourcing of docketing leads to improved quality and reduction in cost spent on paralegal time. All important correspondence from the patent office including dates regarding patent application are properly docketed in advance, and timely reminders are provided to clients so that not a single deadline is missed.
						<br />
						<br />
The benefit of having a dedicated team working on docketing are immense – it saves extra cost of having a full time paralegals on-shore, the clients do not have to maintain and update the tool. Moreover, having a dedicated team having full time focus on docketing is less likely to be prone to human errors.
<br />
<br />
At Effectual Services, we have a team of paralegals who is specialized in providing docketing services to various clients worldwide. The team has expertise at all leading tools used for docketing such as Patricia, IP Manager, Memotech, Anaqua, Foundation IP, CPI, PATTSY, etc. Some of our clients have developed docketing tools in-house, which are being managed by Effectual Services team on a day-to-day basis. Our team maintains the dockets, and intimates the client of all the upcoming important dates and timelines in a timely manner so that last minute rush is always avoided.

							  </p>
							
                            </div>
                        
                          </div>
                        </section>
                      
                        
                        



                <Footer />
            </div>
        );
    }
}

export default remotepatentdocketingpage;