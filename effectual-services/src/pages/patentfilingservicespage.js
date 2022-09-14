import React, { Component } from 'react';
import Navigation from '../components/navigation'
import Footer from '../components/footer'

class patentfilingservicespage extends Component {
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
                    <span class="block xl:inline">Patent Filing Services</span>
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
            <div class="flex flex-wrap w-full mb-12 text-justify">

              <p class=" w-full leading-relaxed text-gray-500 ">
                Patent filing in India is an elaborate and complex process, in which an applicant / inventor may waste a good amount of time if not well assisted by professionals who have expertise in patent filing. Incorrectly filled up forms may lead to loss of the priority right and / or may delay the priority date. Even after filing of the patent, there are other documents that need to be filed within prescribed timelines, such as a request for examination. Missing of deadline for such timely filings may lead to deemed withdrawal of the patent and render the time and money invested as waste.
              </p> <p class=" w-full py-6 leading-relaxed text-gray-500 ">
                Over the years Effectual Services has assisted many companies in filing patents in India. We have worked with all the four patents offices in India in order to file patent applications. We work with both – Indian companies for domestic patent filings and with International companies looking for entering in Indian by filing a National Phase application of an International application. We also assist many of our Indian clients in preparing correct filing forms for filing Indian patents, PCT applications and in obtaining foreign filing licenses (FFL), certified priority documents etc.
              </p> <p class=" w-full py-6 leading-relaxed text-gray-500 ">
                Effectual Services has a team of experienced workforce, consisting of Patent Agents, Lawyers and Paralegals who have deep expertise in preparing accurate filing forms and with our team you will not have to worry about missing any deadlines.

              </p>
            </div>

          </div>
        </section>



        <Footer />
      </div>
    );
  }
}

export default patentfilingservicespage;