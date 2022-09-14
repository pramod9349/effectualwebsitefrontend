import React, { Component } from 'react';
import Navigation from '../components/navigation'
import Footer from '../components/footer'

class productlaunchupdatepage extends Component {
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
                    <span class="block xl:inline">Product Launch Updates</span>
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
                With rapid globalization, companies are focussing to expand their reach across the globe by developing and launching a new product but a major risk, particularly in technology sectors where there are extensive patenting activities. Is that commercialization may be blocked by a competitor who holds a patent for a technology incorporated within the new launching product. Sometimes, the patent assignee does not develop the product due to lack of resource or by some other reasons. There can be many other reasons for getting the new product into infringement lawsuits.
                Our team at Effectual services provided a FTO (Freedom to Operate) or Clearance Analysis for avoiding these types of infringement lawsuits or unfavorable licensing agreements. We provide many services to the clients during our FTO analysis like:

              </p><p class=" w-full py-6 leading-relaxed text-gray-500">
                (i)	Searching Patent documents: After extracting the product features provided by client, we search patent literature for issued or pending patents claiming similar to the product features using multiple paid databases like Orbit or Patseer. Patent protection is territorial and sometimes the client’s product technology is only protected in competitor’s main markets or may be in the public domain in other countries. In such cases, we provide consultancy to commercialize the product in risk-free countries.
              </p><p class=" w-full py-6 leading-relaxed text-gray-500">
                (ii)	Protecting technology: If no patent found claiming the client’s product features then we provide consultancy to seek patent protection for the new technology to ensure a greater degree of freedom to operate and will block other competitors to commercialize it.
              </p><p class=" w-full py-6 leading-relaxed text-gray-500">
                (iii)	Modifying Product features: If similar technology patent finds in the jurisdiction where the client wants to commercialize the product, then we provide consultancy to modify the product features to avoid Infringement
                <br></br>
                <p class=" w-full py-6 leading-relaxed text-gray-500">The minimum estimated time for an FTO or clearance analysis search ranges from 24-30 hours and may go up to 64 hours depending upon the Geographic coverage of product / services and key features.</p>

              </p>
            </div>

          </div>
        </section>



        <h2 class="mt-4 mb-4 font-sans text-3xl font-bold tracking-tight text-center text-sky-600 sm:text-4xl sm:leading-none">
          Case Studies
        </h2>
        <section class="px-36 text-white body-font ">
          <div class="px-12 pt-8 text-justify border-2 border-rose-600 ... bg-sky-700 mb-4">
            <p class="mb-4">One of our client wanted us to perform a clearance search for the product related to electric vehicles. The client wanted to launch the product particularly in Japan and Germany but had a plan to launch the product in multiple countries in the upcoming years.

              <br></br><br></br>
              After understanding the requirement of the project, we initiated our search and analysis and prepared primary and secondary product features using our domain knowledge and expertise. Our domain experts derived the related technological keywords and classes relevant for an exhaustive patent search. Then after using the third party paid patent databases like Orbit and Patseer, we formulated different search strategies and identified granted patents which were functionally claiming the product feature very closely. Later, we thoroughly analysed each of the identified granted patent and found several of them claiming the product feature closely. After consulting with the client, the client gave us a go-ahead to suggest product improvement for launch but had the fear of infringement even after the improvement. We carefully analysed every embodiment of the identified patents and suggested key changes to the product features in order to overcome the claims of the identified granted references. The client was very much pleased with our effort and congratulated us for assisting them completely in successfully launching their product.
              <div class="text-right">
                <a class="focus:outline-none  underline text-white text-s font-bold text-white cursor-pointer hover:scale-105 hover:text-red-700 ... justify-end" href="/case-studies"> Click For More </a>
              </div>

            </p>

          </div>

        </section>




        <Footer />
      </div>
    );
  }
}

export default productlaunchupdatepage;