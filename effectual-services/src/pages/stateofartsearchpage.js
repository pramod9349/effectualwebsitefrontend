import React, { Component } from 'react';
import Navigation from '../components/navigation';
import Footer from '../components/footer';

class stateofartsearchpage extends Component {
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
                  <span class="block xl:inline">State of Art Search</span> 
                
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
				
				State of the Art Search is a highly targeted search towards a niche technology area, basically designed to enable clients to study a niche technology domain. State of the art search is normally targeted towards latest patents in the specific technology area. This kind of search is preferred by Inventors who are interested in latest developments in the specific technology field of their research or would like to study the latest patents for deciding the future strategy in the area of their research.
<br /><br />
Effectual Services has a team of experienced workforce, consisting of Engineers, Bachelors, Masters and PhDs from varied technical backgrounds, including Computer Science and Information Technology, Electronics and Communications, Electrical, Mechanical, Chemical, Biotechnology, Pharmaceuticals and Life Sciences domain. Many of our team members have a Law degree in addition to the technical degrees making them ideal for Intellectual Property related services.We have access to industry’s leading patent and non-patent databases which provide us access to the 100+ jurisdictions worldwide:
<br /><br />
a. Various Patent databases like Thomson Innovations, Orbit (from QuestelTM) and Total Patents(from LexisNexisTM), Google Patents, Espacenet, USPTO and other regional patent databases.
<br />
b. Non patent databases such as IP.com, Google Scholar, IEEE Xplore, CiteSeer, ACM Library, Wiley’s Library, etc.
<br /><br />
Our search strategy is comprehensive and covers a variety of strategies including Keywords based searching, Patent classification based searching for example, CPC, IPC, USC, FI, F-Term based searching; Assignee and Inventors based searching; Citation Search / Spider searching.

							  </p>
							
                            </div>
                        
                          </div>
                        </section>
                   
                <Footer />
            </div>
        );
    }
}

export default stateofartsearchpage;