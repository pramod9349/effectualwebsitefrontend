import React, { Component } from "react";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import Carerrcomindex from "../components/carerrcomponent";
class careerpage extends Component {
  render() {
    return (
      <div>
        <Navigation />

        <div class="relative bg-red-600 overflow-hidden">
        <img className="z-0 w-full h-full absolute inset-0 object-cover" src="images/bg_image_lite.png" alt="bg" />
          <div class=" mx-auto ">
            <div class="relative z-10 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full  ">
              <main class="mx-auto max-w-5xl px-4 sm:px-6  lg:px-8 mt-16">
                <div class="sm:text-center lg:text-left ">
                  <h1 class="px-20 text-2xl tracking-tight font-semibold text-white sm:text-5xl md:text-5xl ">
                    <span class="text-5xl semibold">
                      {" "}
                      If you don’t feel it, flee from it. Go where you are
                      celebrated, not merely tolerated.
                    </span>
                  </h1>
                </div>
              </main>
            </div>
          </div>
          <div class="lg:absolute lg:inset-y-0 lg:right-20 lg:w-1/3">
            <img
              class="h-56 w-full  sm:h-64 md:h-96 lg:w-full lg:h-full object-contain"
              src="images/banner-career.png"
              alt=""
            />
          </div>
        </div>

        <section class="text-gray-600 body-font">
          <h2 class="py-16 font-sans text-3xl font-bold tracking-tight text-center text-black sm:text-4xl sm:leading-none">
            Exciting Careers, Unlimited Possibilities
          </h2>
          <div class="container px-5 mb-8 mx-auto flex flex-wrap">
            <div class="mx-auto">
              <table class="table-auto">
                <thead>
                  <tr>
                    <th class="px-16 py-2">S.No</th>
                    <th class="px-16 py-2">Job Title</th>
                    <th class="px-16 py-2">Location</th>
                   
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="border items-center px-16 py-2">1.</td>
                    <td class="border items-center px-16 py-2">
                      Patent Analyst
                    </td>
                    <td class="border items-center px-16 py-2">Delhi</td>
                   
                  </tr>
                  <tr class="bg-gray-100">
                    <td class="border px-16 py-2">2.</td>
                    <td class="border px-16 py-2">Patent Analyst</td>
                    <td class="border px-16 py-2">Noida</td>
                    
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
        <Carerrcomindex />
        <section class="text-gray-600  px-32 body-font">
          <div class="container px-5 py-2 mx-auto">
            <div class="flex flex-wrap w-full mb-20">
              <div class="lg:w-1/2 w-full mb-2 lg:mb-0">
                <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                  THE WAY TO A CUSTOMER’S HEART IS THROUGH THE EMPLOYEES
                </h1>
                <div class="h-1 w-20 bg-indigo-500 rounded"></div>
              </div>
              <p class="lg:w-1/2 w-full leading-relaxed text-gray-500 text-justify px-4">
                Our work culture philosophy is centered around the individual
                and how they grow, which ultimately benefits both the individual
                and the organization. As an organization we have built a work
                environment fueled with learning and respect for the individual,
                all the while upholding our ethical standards and the ultimate
                aim of serving our clients.
              </p>
            </div>
          </div>
        </section>

        <h2 class="mb-6 font-sans text-3xl font-bold tracking-tight text-center text-black sm:text-4xl sm:leading-none">
          Gallery
        </h2>

        <section class="text-gray-600 body-font">
          <div class="container px-5 mx-auto flex flex-wrap">
            <div class="lg:w-3/4 mx-auto">
              <div class="flex flex-wrap w-full bg-gray-100 py-32 px-10 relative mb-4">
                <img
                  alt="gallery"
                  class="w-full object-cover h-full object-center block  absolute inset-0"
                  src="images/Office-interior.jpg"
                />
              </div>
              <div class="flex flex-wrap -mx-2">
                <div class="px-2 w-1/2">
                  <div class="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
                    <img
                      alt="gallery"
                      class="w-full object-cover h-full object-center block absolute inset-0"
                      src="images/gal-image1.jpg"
                    />
                  </div>
                </div>
                <div class="px-2 w-1/2">
                  <div class="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
                    <img
                      alt="gallery"
                      class="w-full object-cover h-full object-center block absolute inset-0"
                      src="images/lifegal3-1.jpg"
                    />
                  </div>
                </div>
              </div>
              <div class="flex flex-wrap w-full bg-gray-100 py-32 px-10 mb-4 relative mt-4">
                <img
                  alt="gallery"
                  class="w-full object-cover h-full object-center block  absolute inset-0"
                  src="images/eff-team.jpg"
                />
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    );
  }
}

export default careerpage;
