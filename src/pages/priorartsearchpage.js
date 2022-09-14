import React, { Component } from 'react';
import Navigation from '../components/navigation'
import Footer from '../components/footer'

class priorartsearchpage extends Component {
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
                    <span class="block xl:inline">Prior Art Search </span>

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
            <div class="flex flex-wrap w-full mb-20 text-justify">

              <p class=" w-full leading-relaxed text-gray-500">

                An invalidity search or a prior art search involves conducting a thorough, no stone unturned, patent and non-patent literature search and analysis to identify prior art references or literature that might invalidate the patent claims in contention.
                <br /><br />

                We at Effectual Services have access to leading commercial patent and non-patent literature databases. We use all standard searching methodologies such as IPC / CPC / US / F-term class based searching, Keyword based searching, Key inventor and assignee analysis, Citation analysis, Semantic search etc. We also conduct literature searches in IEEE or other Industry standards, trade journals, PhD thesis and news archives. The invalidity or prior art search report that we deliver includes the details of potential prior art literature (along with bibliographic details) and a mapping of the claims to the relevant text of the prior art literature / references. The reports can be delivered in any of MS Excel, Word or Power Point.We also analyze other legal aspects and issues which may render a patent invalid. Some of these are issues related to proper antecedent basis in claims, claim enablement issues, non compliance to duty of disclosure, incorrect entity status for renewal fees payments etc.

                <br /><br />
                Other than English language we have capabilities of searching in native Chinese, Japanese, and Korean languages. For these languages the search and the analysis is conducted in native language and the relevant text from the results is human translated to English. Thereafter, we can also translate the entire patent and such translations are done by technical professionals to ensure a good quality. A native language patent and non-patent literature search is very useful in high stakes cases where English language search did not yield good results.

                <br /><br />

                These invalidity search or prior art search reports form a part of our client’s invalidity contentions or assertions. The claim charts that we deliver are ready for court filing.

              </p>

            </div>

          </div>
        </section>


        <Footer />
      </div>
    );
  }
}

export default priorartsearchpage;