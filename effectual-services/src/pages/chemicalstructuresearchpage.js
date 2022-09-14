import React, { Component } from 'react';
import Navigation from '../components/navigation'
import Footer from '../components/footer'

class chemicalstructuresearchpage extends Component {
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
                  <span class="block xl:inline">Chemical Structure Search </span> 
                
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
				
				Chemical structure search includes finding a specific spatial arrangement of molecules in a given patent or non patent document. Chemical structure search helps the inventors or companies in a number of aspects. For example, whenever a novel chemical structure is developed which can be highly useful in the industry, it is a must that the inventor/company obtains a patent for the same. However, first it needs to be ensured that the chemical structure is not already patented using a Chemical Structure Search.
				<br /><br />

Some of the key tools used for structure searching are – STN (Scientific Technical Networks), which is a network of more than 200 databases, Chemspider etc. Chemical structure searches require deep domain expertise as the databases such as STN are very expensive. There are Connect hour charges – for total time spent on the search, Searching costs – for executing each search query, and Display charges – for displaying each result charges need to be incurred. Therefore, one needs to be careful in designing the query as well as time spent in searching so that the relevant chemical structures are identified within minimal costs.We at Effectual Services, have a team of Pharma experts, Chemistry experts, and Chemical engineers who specialize in Chemical structure searching. Over the years we have developed in depth understanding of the working of these databases and have developed strategies to derive the expected output within minimal budget.
	<br /><br />

Depending on the type of the structure being searched and the database being used, structure searching is supplemented by other strategies such as – IUPAC/Common name search, CAS number search, in order to overcome the inherent limitations of the database and/or the structure to ensure best quality results in the search.
							  </p>
							
                            </div>
                        
                          </div>
                        </section>
                        
                      


                <Footer />
            </div>
        );
    }
}

export default chemicalstructuresearchpage;