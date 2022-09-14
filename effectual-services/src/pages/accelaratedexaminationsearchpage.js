import React, { Component } from 'react';
import Navigation from '../components/navigation'
import Footer from '../components/footer'

class accelaratedexaminationsearchpage extends Component {
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
                  <h1 class="px-20 text-2xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                    <span class="block xl:inline">Accelerated Examination Search</span>
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
            <div class="flex flex-wrap w-full mb-8 text-justify">

              <p class=" w-full leading-relaxed text-gray-500 font-roboto px-12 text-lg ">
                USPTO has procedures under which the examination of a patent application may be accelerated under certain circumstances. USPTO may advance the examination of an application out of turn for examination if the applicant files a petition to make the case special under the accelerated examination program. An applicant going though the accelerated route receives the examiner’s final decision within 12 months, but has to provide additional information with their petition. The petition to be made special should include pre-examination search report that includes the search log with details like specific class, sub-class combination searched and a discussion on closest art with a focus on differentiating factors. We offer comprehensive searches in conformity with the USPTO accelerated examination guidelines.
                <br />
                <br />
                We at Effectual services have successfully assisted our clients in preparing Accelerated Examination Support Documents (AESDs) for filing with USPTO, which has helped them getting an early patent grant in the past. Effectual Services has a team of experienced workforce, consisting of Engineers, Bachelors, Masters and PhDs from varied technical backgrounds, including Computer Science and Information Technology, Electronics and Communications, Electrical, Mechanical, Chemical, Biotechnology, Pharmaceuticals and Life Sciences domain. Many of our team members have a Law degree in addition to the technical degrees making them ideal for Intellectual Property related services.


              </p>

            </div>

          </div>
        </section>

        



        <Footer />
      </div>
    );
  }
}

export default accelaratedexaminationsearchpage;