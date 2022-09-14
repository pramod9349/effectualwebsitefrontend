import React, { Component } from "react";
import Navigation from "../components/navigation.js";
import Contactform from "../components/contactform";
import ContactFooter from "../components/contactFooter.js";

class contactuspage extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <div class="relative bg-gray-200 overflow-hidden">
        <img className="z-0 w-full h-full absolute inset-0 object-cover" src="https://tuk-cdn.s3.amazonaws.com/assets/webapp/common/bg_image_lite.png" alt="bg" />
          <div class=" mx-auto ">
            <div class="relative z-10 pb-8  sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full ">
              <main class="mx-auto max-w-5xl px-4 sm:mt-12 sm:px-6 md:mt-16  lg:px-8 xl:mt-28">
                <div class="sm:text-center lg:text-left">
                  <h1 class="px-12 text-2xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl font-serif">
                    <span class="block xl:inline ">
                      Innovation is global, <br />
                      <span class="block text-red-600 xl:inline">
                        So are we!!
                      </span>
                    </span>
                  </h1>
                </div>
              </main>
            </div>
          </div>
          <div class="lg:absolute py-12 lg:inset-y-0 lg:right-20 lg:w-1/3">
            <img
              class="h-24 w-full  sm:h-64 md:h-96 lg:w-full lg:h-full object-contain"
              src="images/banner-contact.png"
              alt=""
            />
          </div>
        </div>

        <section class="text-gray-600 body-font overflow-hidden px-16">
          <div class="container px-5 py-24 mx-auto">
            <div class="-my-8 divide-y-2 divide-gray-100">
              <div class="py-8 flex flex-wrap md:flex-nowrap">
                <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                  <span class="font-extrabold text-4xl text-gray-700 font-serif">
                    Global
                  </span>
                </div>
                <div class="md:flex-grow">
                  <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">
                  <div className="flex items-center">
                                <img className="border-2 shadow border-gray-600 rounded-full mr-3" src="images/clients/amit-goel-min.jpg" alt="logo" />
                                </div>
                    Dr. Amit Goel
                  </h2>
                  <p class="leading-relaxed">amit.goel@effectualservices.com</p>
                  <p class="leading-relaxed">+91-981-068-8705</p>
                </div>
                <div class="md:flex-grow">
                  <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">
                  <div className="flex items-center">
                                <img className="border-2 shadow border-gray-600 rounded-full mr-3" src="images/clients/ram-tenneti-min.jpg" alt="logo" />
                                </div>
                    Ram Tenneti
                  </h2>
                  <p class="leading-relaxed">
                  
                    ram.tenneti@effectualservices.com
                  </p>
                  <p class="leading-relaxed">+91-887-919-3964</p>
                </div>
              </div>
              <div class="py-8 flex flex-wrap md:flex-nowrap">
                <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                  <span class="font-extrabold text-4xl text-gray-700 font-serif">USA</span>
                  <br />
                  <span class="mt-1 text-gray-500 text-sm">
                    Suite-427,425 Broadhollow Road
                  </span>
                  <span class="mt-1 text-gray-500 text-sm">
                    Melville | NY-11747
                  </span>
                </div>
                <div class="md:flex-grow">
                  <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">
                  <div className="flex items-center">
                                <img className="border-2 shadow border-gray-600 rounded-full mr-3" src="images/clients/nishant-singh-min.jpg" alt="logo" />
                                </div>
                    Nishant Singh
                  </h2>
                  <p class="leading-relaxed">
                    nishant.singh@effectualservices.com
                  </p>
                  <p class="leading-relaxed">+1-469-666-1181</p>
                  <p class="leading-relaxed">+91-772-888-0256</p>
                </div>
                <div class="md:flex-grow">
                  <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">
                  <div className="flex items-center">
                                <img className="border-2 shadow border-gray-600 rounded-full mr-3" src="images/clients/rakesh-pandey-min.jpg" alt="logo" />
                                </div>
                    Rakesh Pandey
                  </h2>
                  <p class="leading-relaxed">
                    rakesh.pandey@effectualservices.com
                  </p>
                  <p class="leading-relaxed">+1-972-256-8133</p>
                </div>
              </div>
              <div class="py-8 flex flex-wrap md:flex-nowrap">
                <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                  <span class="font-extrabold text-4xl text-gray-700 font-serif">
                    Europe & <br />
                    Indo Pacific
                  </span>
                  <br />
                  <span class="text-sm text-gray-500">
                    <b>India:</b> SDF A-05, NSEZ, Noida–Dadri Road, Noida Phase
                    II -201305
                  </span>
                  <br />
                  <span class="text-sm text-gray-500">
                    <b>Singapore:</b> 531A, Upper Cross Street, Singapore-
                    051531
                  </span>
                </div>
                <div class="md:flex-grow">
                  <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">
                  <div className="flex items-center">
                                <img className="border-2 shadow border-gray-600 rounded-full mr-3" src="images/clients/ram-tenneti-min.jpg" alt="logo" />
                                </div>
                    Ram Tenneti
                  </h2>
                  <p class="leading-relaxed">
                    ram.tenneti@effectualservices.com
                  </p>
                  <p class="leading-relaxed">+91-887-919-3964</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Contactform />

        <ContactFooter />
      </div>
    );
  }
}

export default contactuspage;
