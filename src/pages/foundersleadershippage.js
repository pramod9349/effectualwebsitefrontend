import React, { Component } from 'react';
import Navigation from '../components/navigation'
import Footer from '../components/footer'
import Carouselteam from '../components/carouselteam';
import Swal from 'sweetalert2'
import Awardscroll from '../components/awardscroll';

function learnram(){
    Swal.fire({          
        html:
          ' <section class="bg-white dark:bg-gray-800"> ' +
          '<div class="container px-16 pt-8 mx-auto">' +
              '<div class="items-start lg:flex">' +        
                  '<div class="lg:w-3/4">' +
                      '<p class="mt-8 text-gray-500 dark:text-gray-400 text-justify">Ram has 16+ years of experience leading international and multicultural teams of 10-200 people, he has managed 1200+ projects ranging from $500K-$18.5M in budget with 8000+ hours in presenting and training, on a wide variety of subjects including innovation, teamwork and project management. He leads the firm’s strategic initiatives while working to create strategies based on data-driven analysis. ' +
                      '</p><p class="mt-4 text-gray-500 dark:text-gray-400 text-justify">' +
                        'Researching changing market dynamics and consulting companies with analysis and forecast of market opportunities is his forte. He has served over 1700 global fortune enterprises with more than 1400+ premium studies, catering to multitude of clients across 25+ different industrial verticals. He specializes in consulting assignments and business research across high growth markets, cutting edge technologies and newer applications. He believes that business opportunities which drive success are built on a foundation of authentic relationships with and providing value-based service. He strongly believes that offering value to clients comes from listening to understand how to best support them in achieving their business goals, while loving to conduct international business in different cultures.' +
                      '</p><p class="mt-4 text-gray-500 dark:text-gray-400 text-justify">Industry Expertise: Healthcare, Semiconductor, Chemical & Materials, Information Communication and Technology, Power and Energy, Automotive, Food and Beverage, Aerospace and Defence</p>' + 
                  '</div>' +        
                  '<div class="mt-8 lg:mt-0 lg:w-1/4">' +
                  '<div class="flex items-center ml-8"><div class="rounded "><div class="mx-auto w-full container"><div class="grid sm:grid-cols-1 w-full md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-6 pb-12"><div class="w-full flex items-center justify-center flex-col"><div class="w-full px-5 -mb-10  relative z-40"><img src="images/clients/ram-tenneti.png" alt="girl smilling" class="w-full h-full rounded-md"></div><div class="pb-8 pt-14 bg-indigo-700 rounded-md w-full "><p class="text-xl font-semibold leading-5 text-center text-white">Ram Tenneti</p><p class="text-base leading-4 mt-2 text-center text-white">Vice President - Global</p></div></div></div></div></div></div>' +           
                '</div>' +    
                '<a href="https://in.linkedin.com/in/ram-tenneti-6a91976"><img src="images/linkedin-logo-png.png" alt="linkedin" class="w-full h-full rounded-md"></a>'+                 
              '</div>' +
          '</div>' +
        '</section>',
        showCloseButton: true,
        showCancelButton: false,
        showConfirmButton:false,
        focusConfirm: false,
        width: '100%',
      })

}

function learnrakesh(){
    Swal.fire({          
        html:
          ' <section class="bg-white dark:bg-gray-800"> ' +
          '<div class="container px-16 pt-8 mx-auto">' +
              '<div class="items-start lg:flex">' +        
                  '<div class="lg:w-3/4">' +
                      '<p class="mt-4 text-gray-500 dark:text-gray-400 text-justify">' +
                        'Rakesh has over 12 years of cross-functional experience in IP strategy, marketing and sales strategy, performance improvement, and business development in patent and legal services. He also works closely with IP Directors, General Counsels or Patent Counsels, Patent Attorneys, Patent Agents and R&D Heads. Prior to Effectual, he was responsible for growing the business and has worked with several Fortune 500 companies in operations and business excellence.He has done his undergraduate studies from Rajasthan Vidyapeeth University.' +
                      '</p>' + 
                  '</div>' +        
                  '<div class="mt-8 lg:mt-0 lg:w-1/4">' +
                  '<div class="flex items-center ml-8"><div class="rounded "><div class="mx-auto w-full container"><div class="grid sm:grid-cols-1 w-full md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-6 pb-12"><div class="w-full flex items-center justify-center flex-col"><div class="w-full px-5 -mb-10  relative z-40"><img src="images/clients/rakesh-pandey.png" alt="girl smilling" class="w-full h-full rounded-md"></div><div class="pb-8 pt-14 bg-indigo-700 rounded-md w-full "><p class="text-xl font-semibold leading-5 text-center text-white">Rakesh Pandey</p><p class="text-base leading-4 mt-2 text-center text-white">Vice President - USA</p></div></div></div></div></div></div>' +           
                '</div>' +    
                 
                
                '<a href="https://in.linkedin.com/in/rakeshpandeyeffectual"><img src="images/linkedin-logo-png.png" alt="linkedin" class="w-full h-full rounded-md"></a>'+                 
              
             
                
              '</div>' +
          '</div>' +
     
        '</section>'
        ,


        
        showCloseButton: true,
        showCancelButton: false,
        showConfirmButton:false,
        focusConfirm: false,
        width: '100%',
      })
}

function learnmanoj(){
    Swal.fire({          
        html:
          ' <section class="bg-white dark:bg-gray-800"> ' +
          '<div class="container px-16 pt-8 mx-auto">' +
              '<div class="items-start lg:flex">' +        
                  '<div class="lg:w-3/4">' +
                      '<p class="mt-8 text-gray-500 dark:text-gray-400 text-justify">Manoj has been delivering Intellectual Property related services in the outsourcing industry for more than fourteen years. He has worked with a number of AmLaw 100 Law firms, Fortune 100 companies, Patent Brokers, and IP Monetization companies. His core expertise lies in delivering searching and analytics services such as invalidity search, patent landscapes, infringement searches, claim charts, etc. He also has experience in working on Trademark searching and patent proofreading projects. He is well versed with US, EP and Indian Laws, and has undergone a number of trainings from US and EP patent attorneys. His technical areas of expertise include petrochemicals, chemicals and materials, polymers, lightweight alloys used in automobiles and aerospace Industry.' +
                      '</p>' + 
                  '</div>' +        
                  '<div class="mt-8 lg:mt-0 lg:w-1/4">' +
                  '<div class="flex items-center ml-8"><div class="rounded "><div class="mx-auto w-full container"><div class="grid sm:grid-cols-1 w-full md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-6 pb-12"><div class="w-full flex items-center justify-center flex-col"><div class="w-full px-5 -mb-10  relative z-40"><img src="images/clients/manoj-poonia.png" alt="girl smilling" class="w-full h-full rounded-md"></div><div class="pb-8 pt-14 bg-indigo-700 rounded-md w-full "><p class="text-xl font-semibold leading-5 text-center text-white">Manoj Poonia</p><p class="text-base leading-4 mt-2 text-center text-white">Vice President - Operations</p></div></div></div></div></div></div>' +           
                '</div>' +   
                
                '<a href="https://in.linkedin.com/in/pooniamanoj"><img src="images/linkedin-logo-png.png" alt="linkedin" class="w-full h-full rounded-md"></a>'+                 
              
              '</div>' +
          '</div>' +
        '</section>',
        
        
        showCloseButton: true,
        showCancelButton: false,
        showConfirmButton:false,
        focusConfirm: false,
        width: '100%',
       
        
      })
}

function learnnishant(){
    Swal.fire({          
        html:
          ' <section class="bg-white dark:bg-gray-800"> ' +
          '<div class="container px-16 pt-8 mx-auto">' +
              '<div class="items-start lg:flex">' +        
                  '<div class="lg:w-3/4">' +
                      '<p class="mt-8 text-gray-500 dark:text-gray-400 text-justify">Nishant is a leading expert in the intellectual property space and has been a strategy advisor to clients around the globe. He has extensive experience in the IP and business research domain and has worked with leading multi-national and regional corporations on patent and R&D strategy, innovation foundation, business planning, operations, patent infringement, prior art searches, patent litigation and enforcement support services.' +
                      '</p><p class="mt-4 text-gray-500 dark:text-gray-400 text-justify">' +
                        'Nishant holds a bachelors degree in computer science engineering from Delhi University. He has worked in offices of leading law firms in the US and UK and has also undergone extensive training in patent law from US and European patent attorneys. He was also working in a strategy consulting role in the UK for two years managing large accounts across European region.' +
                  '</div>' + 
                         
                  '<div>'+
                  '</div>'+
                  '<div class="mt-8 lg:mt-0 lg:w-1/4">' +
                  '<div class="flex items-center ml-8"><div class="rounded "><div class="mx-auto w-full container"><div class="grid sm:grid-cols-1 w-full md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-6 pb-12"><div class="w-full flex items-center justify-center flex-col"><div class="w-full px-5 -mb-10  relative z-40"><img src="images/clients/nishant-singh.png" alt="girl smilling" class="w-full h-full rounded-md"></div><div class="pb-8 pt-14 bg-indigo-700 rounded-md w-full "><p class="text-xl font-semibold leading-5 text-center text-white">Nishant Singh</p><p class="text-base leading-4 mt-2 text-center text-white">Vice President - Strategy</p><div></div></div></div></div></div></div></div>' +           
                '</div>' + 
                '<a href="https://in.linkedin.com/in/nishant-singh-653966?original_referer=https%3A%2F%2Fwww.effectualservices.com%2Fleadership-team%2F"><img src="images/linkedin-logo-png.png" alt="linkedin" class="w-full h-full rounded-md"></a>'+                 
              '</div>' +
          '</div>' +
        '</section>',
        showCloseButton: true,
        showCancelButton: false,
        showConfirmButton:false,
        focusConfirm: false,
        width: '100%',
        
      })
}

class foundersleadershippage extends Component {
    

    render() {
        return (
            <div>
                <Navigation />
                <Carouselteam />

                {/* <div class="relative bg-white overflow-hidden">
  <div class="max-w-7xl mx-auto">
    <div class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
      
      <main class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        <div class="sm:text-center lg:text-left">
          <h1 class="px-24 text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span class="block xl:inline">Building on  a <br />
              legacy of</span> 
            <span class="block text-red-600 xl:inline">trust & innovation</span>
          </h1>
          
         
        </div>
      </main>
    </div>
  </div>
  <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
    <img class="h-56 w-full  sm:h-64 md:h-96 lg:w-full lg:h-full object-contain" src="images/blub.png" alt="heorimage" />
  </div>
</div> */}



<h1 class="xl:text-4xl text-3xl text-center text-gray-800 font-extrabold  mx-auto"><span style={{color: "rgb(0, 86, 161)"}}>Our </span> <span class="italic" style={{color: "rgb(196, 23, 27)"}}>Founders</span></h1>
<section class="bg-white dark:bg-gray-800">
  <div class="container px-16 py-8 mx-auto">
      <div class="items-start lg:flex">
        <div class="mt-8 lg:mt-0 lg:w-1/4">
          <div class="flex items-center justify-left">
          <div className="rounded " >
                        <div className="mx-auto w-full container">                
                <div className="grid sm:grid-cols-1 w-full md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-6 pb-12">
                    
                    <div className="w-full flex items-center justify-center flex-col">
                        <div className="w-full px-5 -mb-10  relative z-40">
                            <img src="images/clients/amit-agg.jpg" alt="girl smilling" className="w-full h-full rounded-md" />
                        </div>
                        <div className="pb-8 pt-14 bg-indigo-700 rounded-md w-full ">
                            <p className="text-xl font-semibold leading-5 text-center text-white">Amit Aggarwal</p>
                            <p className="text-base leading-4 mt-2 text-center text-white">Co-Founder Sep 1980-Aug 2020</p>
                        </div>
                    </div>
                </div>
            </div>    
                        </div>
              
          </div>
          
      </div>

          <div class="lg:w-3/4 text-justify ml-8">
              {/* <h2 class="text-3xl font-bold text-gray-800 dark:text-gray-100">Mr. AMIT AGGARWAL</h2>
              <h2 class="text-2xl font-bold text-gray-800 dark:text-gray-100">CO FOUNDER Sep 1980 - 4th Aug 2020</h2> */}

              <p class="mt-4 text-gray-500 dark:text-gray-400 ">
                Amit Aggarwal was one of Effectual’s Co-Founder and the driving force behind key initiatives.
              </p>
              <p class="mt-4 text-gray-500 dark:text-gray-400 ">
                Amit had extensive IP experience, having worked with leading MNCs and regional corporations on patent strategy, business planning, operations, patent infringement, prior art searches, patent litigation and enforcement support services, before he went on to found Effectual.
              </p>
              <p class="mt-4 text-gray-500 dark:text-gray-400 "> 
                Amit held a Law Degree, a Masters Degree in management and Bachelor's Degree in Electrical Engineering. He had also undergone extensive training in patent law under US and European patent attorneys and had received certifications from organizations like WIPO, GIIP, IP Central, Lee & Hayes, and Microsoft.
              </p>
              <p class="mt-4 text-gray-500 dark:text-gray-400 "> 
                He is deeply missed at Effectual, and his vision continues to drive the company forward.
              </p>

              
          </div>

          
      </div>
  </div>
</section>

<section class="bg-white dark:bg-gray-800">
  <div class="container px-16 py-8 mx-auto">
      <div class="items-start lg:flex">

          <div class="lg:w-3/4 text-justify mr-8">
              {/* <h2 class="text-3xl font-bold text-gray-800 dark:text-gray-100">DR. AMIT GOEL</h2>
              <h2 class="text-2xl font-bold text-gray-800 dark:text-gray-100">DIRECTOR & CO-FOUNDER</h2> */}

              <p class="mt-4 text-gray-500 dark:text-gray-400 ">
                Dr Amit Goel is Director, Effectual Services, one of the India's fastest-growing patent and trademark consulting firm. Dr Amit manages and supervises different practice groups at the firm and leads a team of 250+ professionals involved in patent/ trademark strategies, IP assets monetization, patent litigation and technology scouting. He has been providing IP asset management, technology research and strategy solutions to Fortune 500 companies in diverse technical domains.
              </p><p class="mt-4 text-gray-500 dark:text-gray-400 ">
                Dr Amit has 18 years of international legal experience across IP services. He has worked with global companies ranging from multinational corporations, universities, start-ups and others. He has advised them on the development of their IP portfolios, acquisition of assets, patent licensing and patent portfolio management. He has also counselled on issues pertaining to M&A’s, valuation of intellectual property, licensing and assessment of technological breakthroughs.
              </p><p class="mt-4 text-gray-500 dark:text-gray-400 ">                
                Dr Amit has provided support to the R&D teams of multinational corporations in competitor intelligence, technology scouting and advisory/consulting. He has managed a number of open innovation programmes to identify potential partners and develop strategic alliances in different technical streams.
              </p><p class="mt-4 text-gray-500 dark:text-gray-400 ">               
                He founded Effectual Services in 2010, after having spent seven years at some of the best-knowledge domain companies / technical universities in India. His specialization areas include IP monetization, IP licensing, technology intelligence, patent drafting and patent litigation. Dr Amit holds a PhD degree in computer science with specialization in mobile communication. He is also an avid speaker on various topics on intellectual property, patent acquisition and patent licensing at a number of leading technical institutes and business schools.
              </p>

              
          </div>

          <div class="mt-8 lg:mt-0 lg:w-1/4">
          <div class="flex items-center justify-left">
          <div className="rounded " >
                        <div className="mx-auto w-full container">                
                <div className="grid sm:grid-cols-1 w-full md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-6 pb-12">
                    
                    <div className="w-full flex items-center justify-center flex-col">
                        <div className="w-full px-5 -mb-10  relative z-40">
                            <img src="images/clients/amit-goel.jpg" alt="girl smilling" className="w-full h-full rounded-md" />
                        </div>
                        <div className="pb-8 pt-14 bg-indigo-700 rounded-md w-full ">
                            <p className="text-xl font-semibold leading-5 text-center text-white">Dr. Amit Goel</p>
                            <p className="text-base leading-4 mt-2 text-center text-white">Director & Co-Founder</p>
                        </div>
                    </div>
                </div>
            </div>    
                        </div>
              
          </div>
            
        </div>
          
      </div>
  </div>
</section>

<section class="bg-white dark:bg-gray-800">
  <div class="container px-16 py-8 mx-auto">
      <div class="items-start lg:flex">
        <div class="mt-8 lg:mt-0 lg:w-1/4">
        <div class="flex items-center justify-left">
          <div className="rounded " >
                        <div className="mx-auto w-full container">                
                <div className="grid sm:grid-cols-1 w-full md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-6 pb-12">
                    
                    <div className="w-full flex items-center justify-center flex-col">
                        <div className="w-full px-5 -mb-10  relative z-40">
                            <img src="images/clients/meetika-agg.jpg" alt="girl smilling" className="w-full h-full rounded-md" />
                        </div>
                        <div className="pb-8 pt-14 bg-indigo-700 rounded-md w-full ">
                            <p className="text-xl font-semibold leading-5 text-center text-white">Meetika Aggarwal</p>
                            <p className="text-base leading-4 mt-2 text-center text-white">Director</p>
                        </div>
                    </div>
                </div>
            </div>    
                        </div>
              
          </div>
          
      </div>

          <div class="lg:w-3/4 text-justify ml-8">
              {/* <h2 class="text-3xl font-bold text-gray-800 dark:text-gray-100">MEETIKA AGGARWAL</h2>
              <h2 class="text-2xl font-bold text-gray-800 dark:text-gray-100">Director</h2> */}

              <p class="mt-4 text-gray-500 dark:text-gray-400 ">
                Meetika has an overall experience of 18+ years in which she has worked with 500 Fortune companies, assisting US Patent Attorneys and agents of IT Major in patent prosecution and infringement analysis. She has been Team Lead and Senior Patent Analyst for some major projects. She has extensive experience in Client Communication and Relationship Development, Project and People management, Infringement and Invalidity Analysis, Quality Check of deliverables, Project Skills Training, mentoring fresh recruits, Staffing & Recruitment. She has also received Expert Certification on Filing and Obtaining Trademark in India, 2014 and World Intellectual Property Organization (WIPO), Geneva Certification Course on Intellectual Property Rights in 2006
</p> <p class="mt-4 text-gray-500 dark:text-gray-400 ">
                She holds a Master's degree in Information Technology in addition to Bachelor's Degree in Computer Science. She is also well versed in Patent and Trademarks laws (US, EP, India) and has trained with professionals from Microsoft, Wipo.
              </p>

              
          </div>

          
      </div>
  </div>
</section>


<section class="container pb-4 pt-4 mx-auto bg-white dark:bg-gray-800 mb-8 rounded-xl" style={{backgroundImage: "url(https://tuk-cdn.s3.amazonaws.com/assets/webapp/common/bg_image_lite.png)",
        height:'96',
        marginTop:'-5px',
        fontSize:'20px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',}}>
<h1 class="xl:text-4xl mb-8 text-3xl text-center text-gray-800 font-extrabold  mx-auto"><span style={{color: "rgb(0, 86, 161)"}}>Leadership </span> <span class="italic" style={{color: "rgb(196, 23, 27)"}}>Team</span></h1>

  <div class="flex items-center justify-center">
      <div class="grid gap-32 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <div class="w-full max-w-xs text-center">
              <img class="object-cover object-center w-full mx-auto rounded-lg" src="images/clients/nishant-singh.png" alt="avatar"/>

              <div class="mt-2">
                  <h3 class="text-xl font-bold medium text-white">Nishant Singh</h3>
                  <span class="mt-1 text-xl text-white font-bold">VP Strategy</span>
                  <div>
          
                  <button onClick={learnnishant} className="mx-2 my-2 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-6 py-2 text-xs">Learn More</button>
                  
                </div>
                <div >
                <button class = "mx-2 my-2  transition duration-150 ease-in-out  rounded text-white px-6 py-2 text-xs hover:scale-105">
                <a href="https://in.linkedin.com/in/nishant-singh-653966?original_referer=https%3A%2F%2Fwww.effectualservices.com%2Fleadership-team%2F"><img src="images/linkedin-logo-png.png" alt="linkedin" class="w-full h-full rounded-md"></img></a>
                </button>
                </div>
              </div>
              
          </div>

          <div class="w-full max-w-xs text-center">
              <img class="object-cover object-center w-full mx-auto rounded-lg" src="images/clients/ram-tenneti.png" alt="avatar"/>

              <div class="mt-2">
                  <h3 class="text-xl font-bold medium text-white">Ram Tenneti</h3>
                  <span class="mt-1 text-xl text-white font-bold">VP Global</span>
                  <div>
                  <button onClick={learnram} className="mx-2 my-2 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-6 py-2 text-xs">Learn More</button>
                </div>
                <div >
                <button class = "mx-2 my-2  transition duration-150 ease-in-out  rounded text-white px-6 py-2 text-xs hover:scale-105">
                <a href="https://in.linkedin.com/in/ram-tenneti-6a91976"><img src="images/linkedin-logo-png.png" alt="linkedin" class="w-full h-full rounded-md"></img></a>
                </button>
                </div>
              </div>
          </div>

          <div class="w-full max-w-xs text-center">
              <img class="object-cover object-center w-full mx-auto rounded-lg" src="images/clients/rakesh-pandey.png" alt="avatar"/>

              <div class="mt-2">
                  <h3 class="text-xl font-bold medium text-white ">Rakesh Pandey</h3>
                  <span class="mt-1 text-xl text-white font-bold">VP USA</span>
                  <div>
                  <button onClick={learnrakesh} className="mx-2 my-2 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-6 py-2 text-xs">Learn More</button>
                </div>
                <div >
                <button class = "mx-2 my-2  transition duration-150 ease-in-out  rounded text-white px-6 py-2 text-xs hover:scale-105">
                <a href="https://in.linkedin.com/in/rakeshpandeyeffectual"><img src="images/linkedin-logo-png.png" alt="linkedin" class="w-full h-full rounded-md"></img></a>
                </button>
                </div>

              </div>
          </div>

          <div class="w-full max-w-xs text-center">
              <img class="object-cover object-center w-full mx-auto rounded-lg" src="images/clients/manoj-poonia.png" alt="avatar"/>

              <div class="mt-2">
                  <h3 class="text-xl font-bold medium text-white ">Manoj Poonia</h3>
                  <span class="mt-1 text-xl text-white font-bold">VP Operations</span>
                  <div>
                  <button onClick={learnmanoj} className="mx-2 my-2 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-6 py-2 text-xs">Learn More</button>
                </div>
                <div >
                <button class = "mx-2 my-2  transition duration-150 ease-in-out  rounded text-white px-6 py-2 text-xs hover:scale-105">
                <a href="https://in.linkedin.com/in/pooniamanoj"><img src="images/linkedin-logo-png.png" alt="linkedin" class="w-full h-full rounded-md"></img></a>
                </button>
                </div>
              </div>
          </div>
          



          
      </div>
  </div>
</section>

<Awardscroll />

                <Footer />
            </div>
        );
    }
}

export default foundersleadershippage;