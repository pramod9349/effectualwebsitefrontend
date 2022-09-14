import React, { Component } from 'react';
import Navigation from '../components/navigation'
import Footer from '../components/footer'

class managementdatavarificationpage extends Component {
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
                    <span class="block xl:inline">Certified Copies</span> 

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

              <h5 className="text-gray-600  text-2xl  leading-7 mb-4">Certified Copies of Patent </h5>
              <p class=" w-full leading-relaxed text-gray-500 text-justify">
                A certified copy is a copy of a patent that has been certified by the USPTO. <br></br>
                -	The certified copy includes a front cover sheet with a gold stamp and ink signature.
                <br></br>
                -	Second, the certified copy includes a footer on each page indicating that it was printed by the USPTO.
                <br></br>
                These features self-certify certified copies, such as ribbon copies and duplicate ribbon copies, at the time of testing.

              </p>
              <br></br>  <br></br>
              <h5 className="text-gray-600  text-2xl  leading-7 mb-4 mt-12">How to get a Certified Copy of Patent?</h5>
              <p class=" w-full leading-relaxed text-gray-500 text-justify">
                Copies of official US Patent and U.S. trademark documents can easily be ordered through Certified Copy Center storefront.
              </p>
              <br></br>  <br></br>
              <h5 className="text-gray-600  text-2xl  leading-7 mb-4 mt-12">What is the Certified Copy Center storefront?</h5>
              <p class=" w-full leading-relaxed text-gray-500 text-justify">
                The Certified Copy Center replaces the Online Document Ordering System (OEMS) for ordering certified copies of published patent and trademark documents. Storefronts can also be used to order unpublished patent documents.

                The Certified Copy Centre allows you to get the status of all your orders placed through the storefront and can also provide status information on older orders if you link your OEMS and USPTO.gov accounts.


              </p>

              <h5 className="text-gray-600  text-2xl  leading-7 mb-4 mt-12">Important points to note</h5>
              <p class=" w-full leading-relaxed text-gray-500 text-justify">
                -	Costs start at $25 per copy and up. <br></br>
                -	We can order up to 25 different documents, and can order up to 99 copies of a single document. <br></br>
                -	A reel and frame number is required to order or request a copy of an assignment. <br></br>
                -	We can add as many addresses as we want in our USPTO account address book and can manage the order accordingly <br></br>
                -	Orders can be cancelled by calling customer care but no refunds are possible. Only if USPTO is not able to provide the same they refund the fees.



              </p>




            </div>

          </div>
        </section>




        <Footer />
      </div>
    );
  }
}

export default managementdatavarificationpage;