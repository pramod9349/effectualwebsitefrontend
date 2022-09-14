import React, { Component } from 'react';
import Navigation from '../components/navigation'
import Footer from '../components/footer'

class patenttranslationspage extends Component {
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
                    <span class="block xl:inline">Patent Translations</span>

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
                Nowadays there are a number of tools available online for machine patent translation of a native language text which is cheap and fast. However, such tools have limited utility when it comes to translation of the technical documents as machine translation is prone to errors. When you are in a lawsuit, machine translation cannot also be relied upon as a single word can make a huge difference. In machine translation, errors are not limited to a single word but it can even alter the understanding of large excerpts.
                <br />
                <br />

                Even in the case of human translators, there is another constraint that the patents are highly technical documents, and a translator without technical background would not be able to produce quality translation. Hence, a translator with both technical and linguist proficiency is the only person you should trust with the translation of technical documents such as a patent.Effectual Services provide technical translation of patents in Japanese, Chinese, and Korean languages to English. Our team consists of native translators who are native speakers; most of them have received education in respective language. They also possess technical degrees making them ideal for translation of technical documents such as patents.
                <br />
                <br />

                In order to cut down costs, Effectual Services provides customized solutions for many of our clients. We give the client a flexibility to selectively translate a portion of the document in order to optimize and take a decision subsequently on whether a complete translation would be beneficial –
                <br />
                <br />

                The client can ask for translation of a specific portion in a single or set of patents (i.e. Summary, Independent claims).
                <br />

                The client can ask for translation of paragraphs in which a specific term occurs (i.e. packet sniffer).
                <br />

                The client can ask for translation of paragraphs in which a specific feature occurs.


              </p>
            </div>

          </div>
        </section>

        <Footer />
      </div>
    );
  }
}

export default patenttranslationspage;