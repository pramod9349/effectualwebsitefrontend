import React, { Component } from "react";
import Navigation from "../components/navigation";
import Footer from "../components/footer";

class patentspage extends Component {
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
                    <span class="block xl:inline">
                      Bring Products To Market,
                      <span class="block text-white xl:inline">
                        {" "}
                        Securly & Efficiently
                      </span>{" "}
                    </span>
                  </h1>
                </div>
              </main>
            </div>
          </div>
          <div class="lg:absolute lg:inset-y-0 lg:right-20 lg:w-1/3">
            <img
              class="h-56 w-full  sm:h-64 md:h-96 lg:w-full lg:h-full object-contain"
              src="images/banner-patent.jpg"
              alt="patentbanner"
            />
          </div>
        </div>

        <section class="text-gray-600 px-16 body-font">
          <div class="container px-5 py-6 mx-auto">
            <div class="flex flex-wrap w-full mb-20">
              <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
                <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                  PROTECT YOUR INNOVATION
                </h1>
                <div class="h-1 w-20 bg-indigo-500 rounded"></div>
              </div>
              <p class="lg:w-1/2 w-full leading-relaxed text-gray-500 text-justify">
                More than 500 large and small corporations, law firms and
                premier research institutions rely on us to manage and protect
                their patent lifecycle. From patent creation and management to
                high-stakes patent searches, we have successfully delivered more
                than 5,000 projects worldwide.
              </p>
            </div>
          </div>
        </section>

        

        <section class="text-gray-600 body-font">
          <div class="pt-4 mb-6 font-sans text-3xl font-bold tracking-tight text-center text-black sm:text-4xl sm:leading-none ">
            Patent Creation
          </div>
          <div class="container px-5 py-16 mx-auto  bg-gray-200 dark:bg-gray-900 rounded-lg ...">
            <div class="flex flex-wrap -m-4">
              <div class="p-4 lg:w-1/4 sm:w-1/2 w-full">
                <nav class="flex flex-col sm:items-start sm:text-left text-center items-left -mb-1 space-y-6">
                  <a
                    href="/patent-drafting "
                    class="focus:outline-none  bg-sky-700 hover:bg-red-700 shadow hover:shadow-xl border border-gray-500 h-8 w-full mb-4 md:mb-0 rounded-full flex items-center justify-center hover:scale-105 "
                  >
                    <h6 class="text-white font-bold ">Patent Drafting</h6>
                  </a>
                </nav>
              </div>
              <div class="p-4 lg:w-1/4 sm:w-1/2 w-full">
                <nav class="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-6">
                  <a
                    href="/office-action-response"
                    class="focus:outline-none  bg-sky-700 hover:bg-red-700 shadow hover:shadow-xl border border-gray-500 h-8 w-full mb-4 md:mb-0 rounded-full flex items-center justify-center hover:scale-105   "
                  >
                    <h6 class="text-white font-bold">
                      {" "}
                      Office Action Response
                    </h6>
                  </a>

                  <a
                    href="/design-patent-application"
                    class="focus:outline-none  bg-sky-700 hover:bg-red-700 shadow hover:shadow-xl border border-gray-500 h-8 w-full mb-4 md:mb-0 rounded-full flex items-center justify-center hover:scale-105 "
                  >
                    <h6 class="text-white font-bold">
                      Patent Drawings & Illustrations
                    </h6>
                  </a>
                </nav>
              </div>
              <div class="p-4 lg:w-1/4 sm:w-1/2 w-full">
                <nav class="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-6">
                  <a
                    href="/patent-filing-services"
                    class="focus:outline-none  bg-sky-700 hover:bg-red-700 shadow hover:shadow-xl border border-gray-500 h-8 w-full mb-4 md:mb-0 rounded-full flex items-center justify-center hover:scale-105  "
                  >
                    <h6 class="text-white font-bold"> Patent Filing</h6>
                  </a>
                  <a
                    href="/design-patent-drawings"
                    class="focus:outline-none  bg-sky-700 hover:bg-red-700 shadow hover:shadow-xl border border-gray-500 h-8 w-full mb-4 md:mb-0 rounded-full flex items-center justify-center hover:scale-105 "
                  >
                    <h6 class="text-white font-bold">
                      {" "}
                      Design Patent Drawings
                    </h6>
                  </a>
                </nav>
              </div>
              <div class="p-4 lg:w-1/4 sm:w-1/2 w-full">
                <nav class="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-6">
                  <a
                    href="/defensive-publication"
                    class="focus:outline-none  bg-sky-700 hover:bg-red-700 shadow hover:shadow-xl border border-gray-500 h-8 w-full mb-4 md:mb-0 rounded-full flex items-center justify-center hover:scale-105  "
                  >
                    <h6 class="text-white font-bold">
                      {" "}
                      Defensive Patents & Disclosure
                    </h6>
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </section>

        <h2 class="pt-4 mb-6 font-sans text-3xl font-bold tracking-tight text-center text-black sm:text-4xl sm:leading-none">
          Indian Patent Services
        </h2>

        <section class="text-gray-600 body-font">
          <div class="container px-5 py-16 mx-auto bg-gray-200 dark:bg-gray-900 rounded-lg ...">
            <div class="flex flex-wrap -m-4">
              <div class="p-4 lg:w-1/4 sm:w-1/2 w-full">
                <nav class="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-6">
                  <a
                    href="/indian-patent-application-drafting"
                    class="focus:outline-none  bg-sky-700 hover:bg-red-700 shadow hover:shadow-xl border border-gray-500 h-8 w-full mb-4 md:mb-0 rounded-full flex items-center justify-center hover:scale-105 "
                  >
                    <h6 class="text-white font-bold">
                      {" "}
                      Indian Patent Application Drafting
                    </h6>
                  </a>
                </nav>
              </div>
              <div class="p-4 lg:w-1/4 sm:w-1/2 w-full">
                <nav class="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-6">
                  <a
                    href="/design-patent-application"
                    class="focus:outline-none  bg-sky-700 hover:bg-red-700 shadow hover:shadow-xl border border-gray-500 h-8 w-full mb-4 md:mb-0 rounded-full flex items-center justify-center hover:scale-105 "
                  >
                    <h6 class="text-white font-bold">
                      {" "}
                      Design Patent Drawings
                    </h6>
                  </a>

                  <a
                    href="/opposition-searches"
                    class="focus:outline-none  bg-sky-700 hover:bg-red-700 shadow hover:shadow-xl border border-gray-500 h-8 w-full mb-4 md:mb-0 rounded-full flex items-center justify-center hover:scale-105 "
                  >
                    <h6 class="text-white font-bold"> Opposition Searches</h6>
                  </a>
                </nav>
              </div>
              <div class="p-4 lg:w-1/4 sm:w-1/2 w-full">
                <nav class="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-6">
                  <a
                    href="/patent-filing-services"
                    class="focus:outline-none  bg-sky-700 hover:bg-red-700 shadow hover:shadow-xl border border-gray-500 h-8 w-full mb-4 md:mb-0 rounded-full flex items-center justify-center hover:scale-105 "
                  >
                    <h6 class="text-white font-bold">Patent Filing</h6>
                  </a>
                  <a
                    href="/licensing-litigation-support"
                    class="focus:outline-none  bg-sky-700 hover:bg-red-700 shadow hover:shadow-xl border border-gray-500 h-8 w-full mb-4 md:mb-0 rounded-full flex items-center justify-center hover:scale-105 "
                  >
                    <h6 class="text-white font-bold">
                      {" "}
                      Licensing & Litigation Support
                    </h6>
                  </a>
                </nav>
              </div>
              <div class="p-4 lg:w-1/4 sm:w-1/2 w-full">
                <nav class="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-6">
                  <a
                    href="/india-entry-strategy"
                    class="focus:outline-none  bg-sky-700 hover:bg-red-700 shadow hover:shadow-xl border border-gray-500 h-8 w-full mb-4 md:mb-0 rounded-full flex items-center justify-center hover:scale-105 "
                  >
                    <h6 class="text-white font-bold">India Entry Strategy</h6>
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </section>

        <h2 class="pt-4 mb-6 font-sans text-3xl font-bold tracking-tight text-center text-black sm:text-4xl sm:leading-none">
          Patent Management
        </h2>

        <section class="text-gray-600 body-font">
          <div class="container px-5 py-16 mx-auto bg-gray-200 dark:bg-gray-900 rounded-lg ...">
            <div class="flex flex-wrap -m-4">
              <div class="p-4 lg:w-1/4 sm:w-1/2 w-full">
                <nav class="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-6">
                  <a
                    href="/patent-proofreading"
                    class="focus:outline-none  bg-sky-700 hover:bg-red-700 shadow hover:shadow-xl border border-gray-500 h-8 w-full mb-4 md:mb-0 rounded-full flex items-center justify-center hover:scale-105 "
                  >
                    <h6 class="text-white font-bold">Patent Proofreading</h6>
                  </a>
                  <a
                    href="/patent-translations"
                    class="focus:outline-none  bg-sky-700 hover:bg-red-700 shadow hover:shadow-xl border border-gray-500 h-8 w-full mb-4 md:mb-0 rounded-full flex items-center justify-center hover:scale-105 r"
                  >
                    <h6 class="text-white font-bold">Patent Translations</h6>
                  </a>
                </nav>
              </div>
              <div class="p-4 lg:w-1/4 sm:w-1/2 w-full">
                <nav class="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-6">
                  <a
                    href="/remote-patent-docketing"
                    class="focus:outline-none  bg-sky-700 hover:bg-red-700 shadow hover:shadow-xl border border-gray-500 h-8 w-full mb-4 md:mb-0 rounded-full flex items-center justify-center hover:scale-105 "
                  >
                    <h6 class="text-white font-bold">
                      Remote Patent Docketing
                    </h6>
                  </a>
                  <a
                    href="/pta-calculations"
                    class="focus:outline-none  bg-sky-700 hover:bg-red-700 shadow hover:shadow-xl border border-gray-500 h-8 w-full mb-4 md:mb-0 rounded-full flex items-center justify-center hover:scale-105 "
                  >
                    <h6 class="text-white font-bold">PTA Calculations</h6>
                  </a>
                </nav>
              </div>
              <div class="p-4 lg:w-1/4 sm:w-1/2 w-full">
                <nav class="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-6">
                  <a
                    href="/ids-management"
                    class="focus:outline-none  bg-sky-700 hover:bg-red-700 shadow hover:shadow-xl border border-gray-500 h-8 w-full mb-4 md:mb-0 rounded-full flex items-center justify-center hover:scale-105 "
                  >
                    <h6 class="text-white font-bold">IDS Management</h6>
                  </a>
                  <a
                    href="/file-history-analysis"
                    class="focus:outline-none  bg-sky-700 hover:bg-red-700 shadow hover:shadow-xl border border-gray-500 h-8 w-full mb-4 md:mb-0 rounded-full flex items-center justify-center hover:scale-105 "
                  >
                    <h6 class="text-white font-bold">File History Analysis</h6>
                  </a>
                </nav>
              </div>
              <div class="p-4 lg:w-1/4 sm:w-1/2 w-full">
                <nav class="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-6">
                  <a
                    href="/data-verification"
                    class="focus:outline-none  bg-sky-700 hover:bg-red-700 shadow hover:shadow-xl border border-gray-500 h-8 w-full mb-4 md:mb-0 rounded-full flex items-center justify-center hover:scale-105 "
                  >
                    <h6 class="text-white font-bold">Data Verification</h6>
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </section>

        <h2 class="pt-4 mb-6 font-sans text-3xl font-bold tracking-tight text-center text-black sm:text-4xl sm:leading-none">
          Patent Searches
        </h2>

        <section class="text-gray-600 body-font">
          <div class="container px-5 py-16 mx-auto bg-gray-200 dark:bg-gray-900 rounded-lg ...">
            <div class="flex flex-wrap -m-4">
              <div class="p-4 lg:w-1/4 sm:w-1/2 w-full">
                <nav class="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-6">
                  <a
                    href="/knockout-search"
                    class="focus:outline-none  bg-sky-700 hover:bg-red-700 shadow hover:shadow-xl border border-gray-500 h-8 w-full mb-4 md:mb-0 rounded-full flex items-center justify-center hover:scale-105  "
                  >
                    <h6 class="text-white font-bold">Knock Out Search</h6>
                  </a>
                  <a
                    href="/design-search"
                    class="focus:outline-none  bg-sky-700 hover:bg-red-700 shadow hover:shadow-xl border border-gray-500 h-8 w-full mb-4 md:mb-0 rounded-full flex items-center justify-center hover:scale-105 "
                  >
                    <h6 class="text-white font-bold">Design Search</h6>
                  </a>
                  <a
                    href="/asian-language-searches"
                    class="focus:outline-none  bg-sky-700 hover:bg-red-700 shadow hover:shadow-xl border border-gray-500 h-8 w-full mb-4 md:mb-0 rounded-full flex items-center justify-center hover:scale-105 "
                  >
                    <h6 class="text-white font-bold">
                      Asian Language Searches
                    </h6>
                  </a>
                </nav>
              </div>
              <div class="p-4 lg:w-1/4 sm:w-1/2 w-full">
                <nav class="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-6">
                  <a
                    href="/patentability-search"
                    class="focus:outline-none  bg-sky-700 hover:bg-red-700 shadow hover:shadow-xl border border-gray-500 h-8 w-full mb-4 md:mb-0 rounded-full flex items-center justify-center hover:scale-105 "
                  >
                    <h6 class="text-white font-bold">Patentability Search</h6>
                  </a>
                  <a
                    href="/state-of-art-search"
                    class="focus:outline-none  bg-sky-700 hover:bg-red-700 shadow hover:shadow-xl border border-gray-500 h-8 w-full mb-4 md:mb-0 rounded-full flex items-center justify-center hover:scale-105 "
                  >
                    <h6 class="text-white font-bold">
                      State Of The Art Search
                    </h6>
                  </a>
                  <a
                    href="/patent-landscape"
                    class="focus:outline-none  bg-sky-700 hover:bg-red-700 shadow hover:shadow-xl border border-gray-500 h-8 w-full mb-4 md:mb-0 rounded-full flex items-center justify-center hover:scale-105 "
                  >
                    <h6 class="text-white font-bold">Patent Landscape</h6>
                  </a>
                </nav>
              </div>
              <div class="p-4 lg:w-1/4 sm:w-1/2 w-full">
                <nav class="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-6">
                  <a
                    href="/accelarated-examination-search"
                    class="focus:outline-none  bg-sky-700 hover:bg-red-700 shadow hover:shadow-xl border border-gray-500 h-8 w-full mb-4 md:mb-0 rounded-full flex items-center justify-center hover:scale-105 "
                  >
                    <h6 class="text-white font-bold">
                      Accelerated Examination Search
                    </h6>
                  </a>
                  <a
                    href="/freedom-to-operate-search"
                    class="focus:outline-none  bg-sky-700 hover:bg-red-700 shadow hover:shadow-xl border border-gray-500 h-8 w-full mb-4 md:mb-0 rounded-full flex items-center justify-center hover:scale-105 "
                  >
                    <h6 class="text-white font-bold">
                      Freedom To Operate Search
                    </h6>
                  </a>
                  <a
                    href="/state-of-art-search"
                    class="focus:outline-none  bg-sky-700 hover:bg-red-700 shadow hover:shadow-xl border border-gray-500 h-8 w-full mb-4 md:mb-0 rounded-full flex items-center justify-center hover:scale-105  "
                  >
                    <h6 class="text-white font-bold">
                      State Of The Art Search
                    </h6>
                  </a>
                </nav>
              </div>
              <div class="p-4 lg:w-1/4 sm:w-1/2 w-full">
                <nav class="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-6">
                  <a
                    href="/patentability-search"
                    class="focus:outline-none  bg-sky-700 hover:bg-red-700 shadow hover:shadow-xl border border-gray-500 h-8 w-full mb-4 md:mb-0 rounded-full flex items-center justify-center hover:scale-105 "
                  >
                    <h6 class="text-white font-bold">
                      Patent Validating Search
                    </h6>
                  </a>
                  <a
                    href="/bio-sequence-search"
                    class="focus:outline-none  bg-sky-700 hover:bg-red-700 shadow hover:shadow-xl border border-gray-500 h-8 w-full mb-4 md:mb-0 rounded-full flex items-center justify-center hover:scale-105  "
                  >
                    <h6 class="text-white font-bold">Bio-Sequence Search</h6>
                  </a>
                  <a
                    href="/chemical-structure-search"
                    class="focus:outline-none  bg-sky-700 hover:bg-red-700 shadow hover:shadow-xl border border-gray-500 h-8 w-full mb-4 md:mb-0 rounded-full flex items-center justify-center hover:scale-105 "
                  >
                    <h6 class="text-white font-bold">
                      Chemical Structure Search
                    </h6>
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </section>

        <h2 class="pt-4 mb-6 font-sans text-3xl font-bold tracking-tight text-center text-black sm:text-4xl sm:leading-none">
          Patent Litigation
        </h2>

        <section class="text-gray-600 body-font">
          <div class="container px-5 py-16 mx-auto bg-gray-200 dark:bg-gray-900 rounded-lg ...">
            <div class="flex flex-wrap -m-4">
              <div class="p-4 lg:w-1/4 sm:w-1/2 w-full">
                <nav class="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-6">
                  <a
                    href="/pre-litigation-assessment"
                    class="focus:outline-none  bg-sky-700 hover:bg-red-700 shadow hover:shadow-xl border border-gray-500 h-8 w-full mb-4 md:mb-0 rounded-full flex items-center justify-center hover:scale-105 "
                  >
                    <h6 class="text-white font-bold">
                      Pre-Litigation Assessment
                    </h6>
                  </a>
                </nav>
              </div>
              <div class="p-4 lg:w-1/4 sm:w-1/2 w-full">
                <nav class="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-6">
                  <a
                    href="/infringement-contentions"
                    class="focus:outline-none  bg-sky-700 hover:bg-red-700 shadow hover:shadow-xl border border-gray-500 h-8 w-full mb-4 md:mb-0 rounded-full flex items-center justify-center hover:scale-105 "
                  >
                    <h6 class="text-white font-bold">
                      Infringement Contentions
                    </h6>
                  </a>

                  <a
                    href="/deposition-summary"
                    class="focus:outline-none  bg-sky-700 hover:bg-red-700 shadow hover:shadow-xl border border-gray-500 h-8 w-full mb-4 md:mb-0 rounded-full flex items-center justify-center hover:scale-105 "
                  >
                    <h6 class="text-white font-bold">Deposition Summary</h6>
                  </a>
                </nav>
              </div>
              <div class="p-4 lg:w-1/4 sm:w-1/2 w-full">
                <nav class="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-6">
                  <a
                    href="/product-testing-code-review"
                    class="focus:outline-none  bg-sky-700 hover:bg-red-700 shadow hover:shadow-xl border border-gray-500 h-8 w-full mb-4 md:mb-0 rounded-full flex items-center justify-center hover:scale-105 "
                  >
                    <h6 class="text-white font-bold">
                      Product Testing And Code Review
                    </h6>
                  </a>

                  <a
                    href="/rule-11-337-investigation-support"
                    class="focus:outline-none  bg-sky-700 hover:bg-red-700 shadow hover:shadow-xl border border-gray-500 h-8 w-full mb-4 md:mb-0 rounded-full flex items-center justify-center hover:scale-105 "
                  >
                    <h6 class="text-white font-bold">
                      Rule 11/337 Investigation Support
                    </h6>
                  </a>
                </nav>
              </div>
              <div class="p-4 lg:w-1/4 sm:w-1/2 w-full">
                <nav class="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-6">
                  <a
                    href="/prior-art-search"
                    class="focus:outline-none  bg-sky-700 hover:bg-red-700 shadow hover:shadow-xl border border-gray-500 h-8 w-full mb-4 md:mb-0 rounded-full flex items-center justify-center hover:scale-105 "
                  >
                    <h6 class="text-white font-bold">Prior Art Search</h6>
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </section>

        <h2 class="pt-4 mb-6 font-sans text-3xl font-bold tracking-tight text-center text-black sm:text-4xl sm:leading-none">
          Patent Licensing
        </h2>

        <section class="text-gray-600 body-font">
          <div class="container px-5 py-16 mx-auto bg-gray-200 dark:bg-gray-900 rounded-lg ...">
            <div class="flex flex-wrap -m-4">
              <div class="p-4 lg:w-1/4 sm:w-1/2 w-full">
                <nav class="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-6">
                  <a
                    href="/eou-chart"
                    class="focus:outline-none  bg-sky-700 hover:bg-red-700 shadow hover:shadow-xl border border-gray-500 h-8 w-full mb-4 md:mb-0 rounded-full flex items-center justify-center hover:scale-105  "
                  >
                    <h6 class="text-white font-bold">EoU Chart</h6>
                  </a>
                  <a
                    href="/bucketing-and-ranking"
                    class="focus:outline-none  bg-sky-700 hover:bg-red-700 shadow hover:shadow-xl border border-gray-500 h-8 w-full mb-4 md:mb-0 rounded-full flex items-center justify-center hover:scale-105 "
                  >
                    <h6 class="text-white font-bold">Bucketing And Ranking</h6>
                  </a>
                </nav>
              </div>
              <div class="p-4 lg:w-1/4 sm:w-1/2 w-full">
                <nav class="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-6">
                  <a
                    href="/infringement-search"
                    class="focus:outline-none  bg-sky-700 hover:bg-red-700 shadow hover:shadow-xl border border-gray-500 h-8 w-full mb-4 md:mb-0 rounded-full flex items-center justify-center hover:scale-105 "
                  >
                    <h6 class="text-white font-bold">Infringement Search</h6>
                  </a>
                  <a
                    href="/patent-due-diligence"
                    class="focus:outline-none  bg-sky-700 hover:bg-red-700 shadow hover:shadow-xl border border-gray-500 h-8 w-full mb-4 md:mb-0 rounded-full flex items-center justify-center hover:scale-105 "
                  >
                    <h6 class="text-white font-bold">IP Due Diligence</h6>
                  </a>
                  <a
                    href="/buyer-identification"
                    class="focus:outline-none  bg-sky-700 hover:bg-red-700 shadow hover:shadow-xl border border-gray-500 h-8 w-full mb-4 md:mb-0 rounded-full flex items-center justify-center hover:scale-105 "
                  >
                    <h6 class="text-white font-bold">Buyer Identification</h6>
                  </a>
                </nav>
              </div>
              <div class="p-4 lg:w-1/4 sm:w-1/2 w-full">
                <nav class="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-6">
                  <a
                    href="/patent-mining"
                    class="focus:outline-none  bg-sky-700 hover:bg-red-700 shadow hover:shadow-xl border border-gray-500 h-8 w-full mb-4 md:mb-0 rounded-full flex items-center justify-center hover:scale-105  "
                  >
                    <h6 class="text-white font-bold">Patent Mining</h6>
                  </a>
                  <a
                    href="/market-research"
                    class="focus:outline-none  bg-sky-700 hover:bg-red-700 shadow hover:shadow-xl border border-gray-500 h-8 w-full mb-4 md:mb-0 rounded-full flex items-center justify-center hover:scale-105 "
                  >
                    <h6 class="text-white font-bold">Market Research</h6>
                  </a>
                  <a
                    href="/patent-valueation"
                    class="focus:outline-none  bg-sky-700 hover:bg-red-700 shadow hover:shadow-xl border border-gray-500 h-8 w-full mb-4 md:mb-0 rounded-full flex items-center justify-center hover:scale-105 "
                  >
                    <h6 class="text-white font-bold">Patent Valuation</h6>
                  </a>
                </nav>
              </div>
              <div class="p-4 lg:w-1/4 sm:w-1/2 w-full">
                <nav class="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-6">
                  <a
                    href="/portfolio-analysis"
                    class="focus:outline-none  bg-sky-700 hover:bg-red-700 shadow hover:shadow-xl border border-gray-500 h-8 w-full mb-4 md:mb-0 rounded-full flex items-center justify-center hover:scale-105 "
                  >
                    <h6 class="text-white font-bold">Portfolio Vetting</h6>
                  </a>
                  <a
                    href="/product-testing-code-review"
                    class="focus:outline-none  bg-sky-700 hover:bg-red-700 shadow hover:shadow-xl border border-gray-500 h-8 w-full mb-4 md:mb-0 rounded-full flex items-center justify-center hover:scale-105  "
                  >
                    <h6 class="text-white font-bold">
                      Product Testing And Code Review
                    </h6>
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </section>

   

        <Footer />
      </div>
    );
  }
}

export default patentspage;
