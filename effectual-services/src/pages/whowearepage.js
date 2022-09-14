import React, { Component } from 'react';
import Navigation from '../components/navigation';
import Footer from '../components/footer';
import Whowearepy from '../components/whowearepy'
import Awardscroll from '../components/awardscroll'
import Carouselsliderwhoweare from '../components/carouselsliderwhoweare'
import Globalfootprints from '../components/globalfootprints'
import Missionvison from '../components/missionvison'
import Corevalues from '../components/corevalues'
import Whoweareroad from '../components/whoweareroad';

class whowearepage extends Component {
    render() {
        return (
            <div>
                <Navigation />
                <Carouselsliderwhoweare />
                <Whowearepy />
                <Missionvison />

                <header class="bg-white dark:bg-gray-800">
       

        <div class="container px-16 py-6 mx-auto">
            {/* <div class="items-center lg:flex">
                <div class="w-full lg:w-1/2">
                    <div class="lg:max-w-lg">
                        
                        <p class="mt-2 text-gray-600 dark:text-gray-400">We are a leading Intellectual Property (IP) management & consulting firm that enables Fortune 500s, law firms, patent owners, inventors, research institutes and universities, and venture capital firms/PE firms, to protect their IP, discover its inherent value and generate revenue.
</p><p class="mt-2 text-gray-600 dark:text-gray-400">
                          Our team consists of multi-disciplinary experts with rich experience of the IP ecosystem and lifecycle and handling complex patent assignments in varied domains including Alternative Energy, Automotive and Aerospace, Biomedical, Biotechnology and Pharmaceuticals, Chemical and Materials, Information Technology, Electrical and Computer, Life Sciences, Telecommunications, etc.
                        </p><p class="mt-2 text-gray-600 dark:text-gray-400">                    
                          With a clientele spread across 22 countries, we guide corporations and universities on how to manage and monetize their patent portfolios through time-tested solutions and cost-efficient services based on their needs and plans.</p>
                       
                    </div>
                </div>
        
                <div class="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                    <img class="w-full h-full lg:max-w-2xl" src="images/explained.png" alt="Catalogue-pana.svg" />
                </div>
            </div> */}
        </div>
    </header>

    <Awardscroll />

    <Corevalues />
    <Whoweareroad />

   

    <div class="relative bg-gray-900">
  <div class="absolute inset-x-0 bottom-0">
    <svg viewBox="0 0 224 12" fill="currentColor" class="w-full -mb-1 text-white" preserveAspectRatio="none">
      <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z"></path>
    </svg>
  </div>
  <div class="py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 8">
    <div class="">
      <h2 class="text-center mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
       Awards Winning IP Management   
      </h2>

      <div class="relative w-full flex">
        <div class="rounded-lg w-full grid grid-flow-row sm:grid-flow-row grid-cols-1 sm:grid-cols-5 py-9 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-gray-100 bg-white-500 z-10">
              <div class="flex items-center justify-start sm:justify-center py-4 sm:py-6 w-8/12 px-4 sm:w-auto mx-auto sm:mx-0"><div class="flex mx-auto w-full sm:w-auto"><div class="flex items-center justify-center bg-orange-100"><img src="images/clients/deloitte.png" alt="deloitte" / ></div></div></div>
              <div class="flex items-center justify-start sm:justify-center py-4 sm:py-6 w-8/12 px-4 sm:w-auto mx-auto sm:mx-0"><div class="flex mx-auto w-full sm:w-auto"><div class="flex items-center justify-center bg-orange-100"><img src="images/clients/questel.png" alt="questel" /></div></div></div>
              <div class="flex items-center justify-start sm:justify-center py-4 sm:py-6 w-8/12 px-4 sm:w-auto mx-auto sm:mx-0"><div class="flex mx-auto w-full sm:w-auto"><div class="flex items-center justify-center bg-orange-100"><img src="images/clients/redHerring.png" alt="redherring" /></div></div></div>
              <div class="flex items-center justify-start sm:justify-center py-4 sm:py-6 w-8/12 px-4 sm:w-auto mx-auto sm:mx-0"><div class="flex mx-auto w-full sm:w-auto"><div class="flex items-center justify-center bg-orange-100"><img src="images/clients/inta.png" alt="inta" /></div></div></div>
              <div class="flex items-center justify-start sm:justify-center py-4 sm:py-6 w-8/12 px-4 sm:w-auto mx-auto sm:mx-0"><div class="flex mx-auto w-full sm:w-auto"><div class="flex items-center justify-center bg-orange-100"><img src="images/clients/bs.png" alt="bs" /></div></div></div> 
                                                     
        </div>
            <div class="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-64 sm:h-48 top-0 mt-8 mx-auto left-0 right-0"></div>
      </div>
     

      



    </div>
  </div>
</div>


{/* <h2 class="mb-6 py-16 font-sans text-3xl font-bold tracking-tight text-center text-black sm:text-4xl sm:leading-none">
  Our Story        
  </h2>  */}
{/* <div class="w-full object-contain py-16 h-96" style={{backgroundImage: "url(images/story.png)"}}>
  
</div> */}
<div className="flex w-full justify-center py-4">
<img class="w-3/4" src="images/story.png" alt="story" />
</div>


<div class="relative bg-gray-900">
        <div class="absolute inset-x-0 bottom-0">
          <svg viewBox="0 0 224 12" fill="currentColor" class="w-full -mb-1 text-white" preserveAspectRatio="none">
            <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z"></path>
          </svg>
        </div>
        <div class="py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 8">
          <div class="">
            <h2 class="text-center mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
             Certifications & Memberships  
            </h2>

            <div class="relative w-full flex">
              <div class="rounded-lg w-full grid grid-flow-row sm:grid-flow-row grid-cols-1 sm:grid-cols-5 py-9 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-gray-100 bg-white-500 z-10">
                    <div class="flex items-center justify-start sm:justify-center py-4 sm:py-6 w-8/12 px-4 sm:w-auto mx-auto sm:mx-0"><div class="flex mx-auto w-full sm:w-auto"><div class="flex items-center justify-center bg-orange-100"><img src="images/clients/ifcci.png" alt="ifcci" /></div></div></div>
                    <div class="flex items-center justify-start sm:justify-center py-4 sm:py-6 w-8/12 px-4 sm:w-auto mx-auto sm:mx-0"><div class="flex mx-auto w-full sm:w-auto"><div class="flex items-center justify-center bg-orange-100"><img src="images/clients/iacc.png" alt="iacc" /></div></div></div>
                    <div class="flex items-center justify-start sm:justify-center py-4 sm:py-6 w-8/12 px-4 sm:w-auto mx-auto sm:mx-0"><div class="flex mx-auto w-full sm:w-auto"><div class="flex items-center justify-center bg-orange-100"><img src="images/clients/ahk.png" alt="ahk" /></div></div></div>
                    <div class="flex items-center justify-start sm:justify-center py-4 sm:py-6 w-8/12 px-4 sm:w-auto mx-auto sm:mx-0"><div class="flex mx-auto w-full sm:w-auto"><div class="flex items-center justify-center bg-orange-100"><img src="images/clients/iso.png" alt="iso" /></div></div></div>
                    <div class="flex items-center justify-start sm:justify-center py-4 sm:py-6 w-8/12 px-4 sm:w-auto mx-auto sm:mx-0"><div class="flex mx-auto w-full sm:w-auto"><div class="flex items-center justify-center bg-orange-100"><img src="images/clients/eu-council.png" alt="eucouncil" /></div></div></div> 
                                                           
              </div>
                  <div class="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-64 sm:h-48 top-0 mt-8 mx-auto left-0 right-0"></div>
            </div>
           
          </div>
        </div>
      </div>


      {/* <div class="relative w-full flex">
  <div class="rounded-lg w-full grid grid-flow-row sm:grid-flow-row grid-cols-1 sm:grid-cols-3 py-9 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-gray-100 bg-white-500 z-10">
        <div class="flex items-center justify-start sm:justify-center py-4 sm:py-6 w-8/12 px-4 sm:w-auto mx-auto sm:mx-0"><div class="flex mx-auto w-full sm:w-auto"><div class="flex items-center justify-center bg-orange-100 py-4 w-12 h-12 mr-6 rounded-full"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
        </svg></div><div class="flex flex-col"><p class="text-xl text-black-600 font-bold">info@effectualservices.com</p></div></div></div>
        
        <div class="flex items-center justify-start sm:justify-center py-4 sm:py-6 w-8/12 px-4 sm:w-auto mx-auto sm:mx-0"><div class="flex mx-auto w-30 sm:w-auto"><div class="flex items-center justify-center bg-orange-100 w-12 h-12 mr-6 rounded-full"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
        </svg></div><div class="flex flex-col"><p class="text-xl text-black-600 font-bold">SDF A-05, NSEZ, Noida–Dadri Road, Noida Phase II -201305</p></div></div></div>

        <div class="flex items-center justify-start sm:justify-center py-4 sm:py-6 w-8/12 px-4 sm:w-auto mx-auto sm:mx-0"><div class="flex mx-auto w-30 sm:w-auto"><div class="flex items-center justify-center bg-orange-100 w-12 h-12 mr-6 rounded-full"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
        </svg></div><div class="flex flex-col"><p class="text-xl text-black-600 font-bold">+91-120-4522210</p></div></div></div>
        
  </div>
      <div class="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-64 sm:h-48 top-0 mt-8 mx-auto left-0 right-0" ></div>
</div> */}

<Globalfootprints />
                <Footer />
            </div>
        );
    }
}

export default whowearepage;