import React, { Component } from 'react';
import Navigation from '../components/navigation'
import Footer from '../components/footer'

class formalpatentdrawingsillustrationspage extends Component {
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
                    <span class="block xl:inline">Formal Patent Drawings /

                      <span class="block text-white xl:inline"> Illustrations</span> </span>

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
            <div class="w-full leading-relaxed text-gray-500 font-roboto px-12 text-lg text-justify mb-4 ">

              <p class=" w-full leading-relaxed text-gray-500 text-justify">
                For a patent to be well understood, drawings play an important role. Well drafted drawings improve the readability of the patent, which is also a statutory requirement laid down by many PTOs across the world. Especially, Patents in technology fields like Mechanical, Life Sciences, Bio-Medical devices etc., one may not be able to understand the patent without the help of accurately drafted drawings.
                <br /><br />
                Preparing drawings for the patents is, therefore, a very critical task during the drafting of the patent in which we not only have to draw a structural view of the invention, but we also have to show there functional behaviour. Although, most of the Patent offices across world follow PCT guidelines for patent drawings, there are certain differences – for example, Chinese patent office does not allow dashed or dotted lines in patent drawings.
                <br /><br />
                Over the years, Effectual Services has developed deep expertise in drafting drawing for multiple jurisdictions from scratch, and converting drawings of one jurisdiction in another jurisdiction. Effectual Services has a team of seasoned drafters who prepare drawings as per USPTO, Indian, European, Chinese, Korean, Australian, Japanese and various other patent office requirements. The team at Effectual Services has vast experience in preparing illustrations related to a number of domains including Biotech, Pharmaceutical, IT, computers, telecom, electronics, mechanical, automotive, consumer durables and general utility. Using the latest tools, including AutoCAD, TurboCAD, CorelDRAW, and Visio, we have been delivering zero error high quality drawings to law firms and corporate legal departments.

              </p>
            </div>

          </div>
        </section>


        <Footer />
      </div>
    );
  }
}

export default formalpatentdrawingsillustrationspage;