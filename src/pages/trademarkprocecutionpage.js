import React, { Component } from 'react';
import Navigation from '../components/navigation'
import Footer from '../components/footer'

class trademarkprocecutionpage extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <div class="relative bg-white overflow-hidden ">
          <img className="z-0 w-full h-full absolute inset-0 object-cover" src="images/bg_image_lite.png" alt="bg" />
          <div class=" mx-auto ">
            <div class="relative z-10 pb-8  sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full ">

              <main class="mx-auto max-w-5xl px-4 sm:mt-12 sm:px-6 md:mt-16  lg:px-8 xl:mt-28">
                <div class="sm:text-center lg:text-left">
                  <h1 class="px-12 text-2xl tracking-tight font-extrabold text-white sm:text-5xl md:text-5xl">
                    <span class="block xl:inline">Trademark Procecution</span>

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
                A trademark identifies and distinguishes the goods or products from those of others by means of a unique name, logo, design, color, sound, or device.
                <br></br>
                The trademark prosecution process is basically to ascertain whether an applied trademark is unique to the applicant and is disparate from any other existing trademarks.
                <br></br>
                <br></br>
                A trademark examiner looks majorly at the below-listed points to quantify the same:
                <br></br>
                -	Strength: The strength of a trademark lies in its dissimilarity
                <br></br>
                – the more dissimilar mark leads to the higher chances of registration
                <br></br>
                -	Type: A word mark; a Word- logo mark; a Logo mark is considered to check for the similarity
                <br></br>
                -	Clearance: Again the uniqueness of the mark is justified and check from any other existing mark.
                <br></br>
                <br></br>
                During prosecution, a trademark application is reviewed by a USPTO Examining Attorney (“EA”). The EA issues written communications, called Office Actions, to the applicant or the applicant’s attorney. In it, an examining attorney lists any legal problems with your chosen trademark, as well as with the application itself. It may involve simple revisions such as clarifying goods or services or it may be a notice to refuse the trademark on the basis of the likelihood of confusion. Some may require a written response or a simple call with the examiner to solve the issues and get the mark moving.
                <br></br>
                <br></br>
                Like patents, the applicant may receive a non-final and a final office action before registration. A non-final office action will be raising the issue with the mark for the first time. A satisfactory response to the non-final office action can take the mark towards registration. An unsatisfactory response may lead to another non-final/final office action. A final office action will be the last opportunity to address the concerns raised by the examiner and take the mark forward. Else it would be abandoned; unless a timely appeal is filed with the Trademark Trial and Appeal Board.
                <br></br>
                <br></br>
                It takes about 12 to 18 months to register a trademark that is not rejected by the PTO or opposed by a third party. In case of any rejection or opposition, the registration will be delayed depending upon the time to respond. All the marks and the particulars of the application are made available to the public through publication in the Official Gazette, where the opposition period will begin at publication and lasts for 30 days. During this time, oppositions may be filed by any third party who has a reason to believe that its interests will be harmed by the respective registration.
                <br></br>
                <br></br>
                
                Also, within five years of any registered mark, a third party may petition the PTO to cancel the registration on a variety of grounds, substantially similar to the grounds on which applications may be opposed.
                <br></br>
                <br></br>
                
                Once the mark is through all these phases, the applicant needs to maintain the mark. The initial term of a registration is ten years from the registration date. Periodic statements of use and other mandatory filings are required between the fifth and sixth years after the registration issues. A renewal application must be filed prior to the expiration of the ten-year anniversary date from the issuance of the registration. Failure to file this declaration and pay the required fees will result in the cancellation of the registration.
                <br></br>
                <br></br>
                
                Effectual Services has been helping clients with the entire Trademark Life cycle. From the first Trademark Search to paying the regular maintenance and filing the SOU timely, we do it all. In case there is anything required on your trademark please contact us.
              </p>
            </div>

          </div>
        </section>




        <Footer />
      </div>
    );
  }
}

export default trademarkprocecutionpage;