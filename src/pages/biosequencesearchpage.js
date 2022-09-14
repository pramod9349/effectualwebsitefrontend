import React, { Component } from 'react';
import Navigation from '../components/navigation'
import Footer from '../components/footer'

class biosequencesearchpage extends Component {
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
                  <span class="block xl:inline">Bio-Sequence
                    <span class="block text-white xl:inline">Search</span> </span> 
  
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
				
				Biological Sequences include DNA/RNA nucleotide sequences or amino acids sequences of protein. Searching for Bio-sequences includes finding a specific arrangement of sequences in a given patent or non patent document. Sequence search helps the inventors to ascertain whether the sequence is novel or not. Since the novelty of the sequence lies in the unique combination of nucleotides or amino acids, a keywords based search alone cannot capture the entire data-set including all the relevant results. Even if the desired sequence has a common name, not all patents would include the name and thus a number of such results may be missed during the keyword based search.
				<br />
				<br />

Some of the key tools used for sequence searching are – STN (Scientific Technical Networks), which is a network of more than 200 databases, BLAST searching etc.Sequence searching requires deep domain expertise as the databases such as STN are very expensive. There are Connect hour charges – for total time spent on the search, Searching costs – for executing each search query, and Display charges – for displaying each result charges need to be incurred. Therefore, one needs to be careful in designing the query as well as during the searching so that the relevant results are identified within minimal costs.
<br />
				<br />

We at Effectual Services, have a team of Bio-technology experts who specialize in sequence searching. Over the years we have developed an in depth understanding of the working of these databases and have developed strategies to derive the expected output within minimal budget.
							  </p>
							
                            </div>
                        
                          </div>
                        </section>
                       
                        
                  
                <Footer />
            </div>
        );
    }
}

export default biosequencesearchpage;