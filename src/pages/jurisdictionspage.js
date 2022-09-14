import React, { Component } from 'react';
import Navigation from '../components/navigation'
import Footer from '../components/footer'
import Locatinproject from '../components/locatinproject';
class jurisdictionspage extends Component {
    render() {
        return (
            <div>
                <Navigation />
                <div class="relative bg-white overflow-hidden ">
        
        <div class="lg:absolute lg:inset-y-0 lg:right-20 lg:w-1/3">
          <img class="h-56 w-full  sm:h-64 md:h-96 lg:w-full lg:h-full object-contain" src="images/banner-patent.jpg" alt="" />
        </div>
      </div>
           

                        <section class="text-gray-600 px-16 body-font">
                          <div class="container px-5 py-6 mx-auto">
                            
                          </div>
                        </section>
                       
                        
                        <Locatinproject />
                <Footer />
            </div>
        );
    }
}

export default jurisdictionspage;