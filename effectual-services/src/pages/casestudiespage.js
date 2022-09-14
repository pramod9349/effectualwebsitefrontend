import React, { Component } from "react";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import IndexPage from "../components/casestudylist";

class Indexcasestudy extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <div class="relative bg-blue-600 overflow-hidden ">
        <img className="z-0 w-full h-full absolute inset-0 object-cover" src="images/bg_image_lite.png" alt="bg" />
          <div class=" mx-auto ">
            <div class="relative z-10 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full  ">
              <main class="mx-auto max-w-5xl py-16 px-4 sm:mt-12 sm:px-6 md:mt-16  lg:px-8 xl:mt-28">
                <div class="sm:text-center lg:text-left ">
                  <h1 class="px-12 text-2xl tracking-tight font-extrabold text-white sm:text-5xl md:text-5xl">
                    <span class="block xl:inline">Case Studies</span>
                  </h1>
                </div>
              </main>
            </div>
          </div>
          <div class="lg:absolute py-16 lg:inset-y-0 lg:right-20 lg:w-1/3">
            <img
              class="h-56 w-full  sm:h-64 md:h-96 lg:w-full lg:h-full object-contain"
              src="images/banner-case-study.png"
              alt=""
            />
          </div>
        </div>

        <section class="text-gray-600 body-font">
          <IndexPage />
        </section>

        <Footer />
      </div>
    );
  }
}

export default Indexcasestudy;
