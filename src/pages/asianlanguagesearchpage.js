import React, { Component } from 'react';
import Navigation from '../components/navigation'
import Footer from '../components/footer'

class asianlanguagesearchpage extends Component {
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
                    <span class="block xl:inline">Asian Language
                      <span class="block text-white xl:inline"> Searches</span> </span>

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
                It is widely known to the searching community that Asian jurisdictions like Japan, China, Korea and Taiwan are home to a number of technology companies who are leaders in various technology domains such as Electronics, Semiconductors, Telecom, etc. The availability of patent and non patent literature from such countries in English language is very limited. Typically, only abstracts for such patents are available in English language. Although some of the patent databases do provide access to machine translated full text of such patents, however, the reliability and utility of such machine translated text depends highly on the type of tools used and therefore, remains limited during the search and review process.
                <br />
                <br />

                Various studies also suggest that Korea, Japan and China are also among the top five patent filing countries and therefore, ignoring these patents may leave a big gap in a search which may prove detrimental during a high stake patent litigation. When you are in a lawsuit, machine translation cannot be relied upon to capture such prior art which is not available in English language. Even in case of machine translation the databases do not cover patents granted before the 1990’s.Also, the Chinese, Japanese and Korean languages are picture languages which do not have alphabets which can be used to form words, one cannot append a suffix (*ing, *es) after keywords in these languages, as noun and verb may be totally different expressions which cannot be grouped using wildcard characters (*/+).
                <br />
                <br />

                In order to search reliably in such languages, one needs experts in these languages (preferably native speakers) who can perform the searching in native language databases using respective native language queries. Effectual Services provides native language search services in Japanese, Korean, and Chinese language. We have a team of native speakers who also have technical degrees and perform searches in native languages, and have assisted many clients in finding out relevant art published in non English language in the past.


              </p>

            </div>

          </div>
        </section>






        <Footer />
      </div>
    );
  }
}

export default asianlanguagesearchpage;