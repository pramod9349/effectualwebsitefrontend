import React, { Component } from 'react';
import Navigation from '../components/navigation'
import Footer from '../components/footer'
import Locatinproject from '../components/locatinproject';
class trademarksearchpage extends Component {
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
                    <span class="block xl:inline">Leave No Mark Behind


                    </span>

                  </h1>


                </div>
              </main>
            </div>
          </div>
          <div class="lg:absolute lg:inset-y-0 lg:right-20 lg:w-1/3">
            <img class="h-56 w-full  sm:h-64 md:h-96 lg:w-full lg:h-full object-contain" src="images/trademark-search.jpg" alt="" />
          </div>
        </div>







        <h2 class="mb-6 font-sans text-3xl font-bold tracking-tight text-center text-black sm:text-4xl sm:leading-none">
          Trademark Search
        </h2>


        <section class="text-gray-600 px-16 body-font text-justify">
          <div class="container px-5 py-6 mx-auto">
            <div class="flex flex-wrap w-full mb-20">
              <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
                <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Trademark Availability Search</h1>
                <div class="h-1 w-20 bg-indigo-500 rounded"></div>
              </div>
              <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">Our team diligently searches for word marks, image marks, and phonetically similar marks by leveraging some of industry’s leading databases including Questel, SAEGIS, USPTO-TESS, WIPO Hague Express, that cover ~100+ jurisdictions. Additionally, we search in 70+ free Trademark databases worldwide to ensure a comprehensive search.</p>
            </div>

          </div>
        </section>

        <section class="text-gray-600 px-16 body-font text-justify">
          <div class="container px-5 py-6 mx-auto">
            <div class="flex flex-wrap w-full mb-20">
              <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
                <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Trademark Watch Services</h1>
                <div class="h-1 w-20 bg-indigo-500 rounded"></div>
              </div>
              <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">Safeguard your valuable marks by monitoring unauthorized and potentially damaging use, track competitors’ marks, and get current legal status. Our team stays on the lookout for Trademarks that are confusingly similar to your Trademark, so that you swiftly initiate action.</p>
            </div>

          </div>
        </section>

        <section class="text-gray-600 px-16 body-font text-justify">
          <div class="container px-5 py-6 mx-auto">
            <div class="flex flex-wrap w-full mb-20">
              <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
                <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Infringement Search</h1>
                <div class="h-1 w-20 bg-indigo-500 rounded"></div>
              </div>
              <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">Search for violations of your Trademark rights by monitoring a variety of sources, including product selling websites, marketing channels, and social media, for counterfeit products that can tarnish your brand’s image.</p>
            </div>

          </div>
        </section>



















        <Locatinproject />

        <Footer />
      </div>
    );
  }
}

export default trademarksearchpage;