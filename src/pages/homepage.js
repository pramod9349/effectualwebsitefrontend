
import Whychooseus from '../components/whychooseus.js'

// import Contactus from '../components/contactus.js'
import Navigation from '../components/navigation.js'
import Footer from '../components/footer.js'
import Testimonailsnew from '../components/testimonialsnew.js'
import Clientscroll from '../components/clientscroll.js'
import Awardscroll from '../components/awardscroll';
import Videoslides from '../components/videoslides.js'
import Carouselslider from '../components/carouselslider.js'
import Oursolutions from '../components/oursolutions'
import Globalfootprints from '../components/globalfootprints.js'
import Whowearepy from '../components/whowearepy.js'


function HomePage() {
  return (
    <div className="App">   
     <Navigation />
     <Carouselslider />
     
     {/* <div class="w-full bg-center bg-cover h-96" style={{backgroundImage: "url(images/banner.jpg)"}}>
            <div class="flex flex-direction:row-reverse; items-center justify-end w-full h-full bg-gray-900 bg-opacity-10">
                <div class="px-16 items-center">
                    <h2 class="text-lg font-semibold text-white lg:text-lg">Enabling Fortune 500's, R&D Giants, Law <br />firms, Universities & SME’s Around The Globe<br/> Gather Intelligence That Protects and <br />Nurtures Innovation Through a Team of <br/>200+ Techno Legal Professionals.</h2>
                    
                </div>
            </div>
        </div> */}


     
    {/* <MainHero /> */}
     {/* <AboutEffectual /> */}

     <Whowearepy />
     
     
     {/* <OurClients /> */}
     <Clientscroll />
     <Oursolutions />
     <Awardscroll />
     {/* <Servicessection /> */}
     <Whychooseus />
     <Videoslides />
     <Testimonailsnew />
     {/* <Testimonials /> */}
     {/* <Contactus /> */}

     <Globalfootprints />
    
     <Footer />
   
    </div>
  );
}

export default HomePage;