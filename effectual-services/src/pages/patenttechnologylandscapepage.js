import React, { Component } from 'react';
import Navigation from '../components/navigation'
import Footer from '../components/footer'

class patenttechnologylandscapepage extends Component {
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
                <h1 class="px-12 text-2xl tracking-tight font-extrabold text-white sm:text-4xl md:text-5xl">
                  <span class="block xl:inline">Know Trends, 
                    <span class="block text-white xl:inline">Analyze </span> Innovation </span> 
                 
                </h1>
                
               
              </div>
            </main>
          </div>
        </div>
        <div class="lg:absolute lg:inset-y-0 lg:right-20 lg:w-1/3">
          <img class="h-56 w-full  sm:h-64 md:h-96 lg:w-full lg:h-full object-contain" src="images/rd-banner-3.jpg" alt="" />
        </div>
      </div>
            
            <section class="text-gray-600 px-16 body-font">



              <div class="container px-5 py-6 mx-auto">
                <div class="flex flex-wrap w-full mb-20 text-justify">
                  <div class="lg:w-full w-full mb-6 lg:mb-0">
                    <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">TECHNOLOGY & BUSINESS LANDSCAPE</h1>
                    <div class="h-1 w-20 bg-indigo-500 rounded"></div>
                    <br></br>
                    <p class=" w-full leading-relaxed text-gray-500">Before going into R&D many companies try to evaluate the current technology trend and assess the need for product development and Innovation. Technology landscape studies play a key role in this process, especially for companies focusing on developing their product because it gives an overall understanding of the technology in question. Every innovator put a lot of effort into product development, so as their competitor. Therefore it is a good practice to know the phonetics of your intellectual property landscape in your field. Effectual’s technology landscape study can help you in figuring out:<li>1.	Gaps in the current portfolio and general innovation trends.</li>
                  <li>2.	Types of technology the current competitors are focusing on or indeed moving away.</li>
                  <li>3.	Shift in technology & Identify available technologies.</li>
                  <li>4.	Technology gaps in the research landscape.</li>
                  <li>5.	Current technology landscape with its pro & cons.</li>
                  <li>6.	Opportunities in a given technology and many more.</li> </p>
                  </div>
                  
                  <br></br>
                  

                </div>
            
              </div>
            </section>
            

           

           
       


<h2 class="mb-6 py-8 font-sans text-3xl font-bold tracking-tight text-center text-black sm:text-4xl sm:leading-none">
  HOW WE DO IT?     
  </h2> 
<div class="w-full h-1/3 bg-blue-100 text-center mb-8" >
  <img alt="content" class="h-1/2 text-center" src="images/how-we-do-desktop-2.png" />
</div>




                <Footer />
            </div>
        );
    }
}

export default patenttechnologylandscapepage;