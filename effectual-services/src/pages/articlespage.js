import React from "react";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import { Link } from "react-router-dom";
import Articlepdf from "./articlepdflink";
const Articlespage = () => {
  return (
    <div>
      <Navigation />

      <div class="relative bg-blue-600 overflow-hidden ">


      <img className="z-0 w-full h-96 absolute inset-0 object-cover" src="images/bg_image_lite.png" alt="bg" />
        <div class=" mx-auto ">
          <div class="relative z-10 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full  ">
            <main class="mx-auto max-w-5xl py-16 px-4 sm:mt-12 sm:px-6 md:mt-16  lg:px-8 xl:mt-28">
              <div class="sm:text-center lg:text-left ">
                <h1 class="px-12 text-2xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                  <span class="block xl:inline"> Published Articles</span>
                </h1>
              </div>
            </main>
          </div>
        </div>
        <div class="lg:absolute py-16 lg:inset-y-0 lg:right-20 lg:w-1/3">
          <img
            class="h-56 w-full  sm:h-64 md:h-96 lg:w-full lg:h-full object-contain"
            src="images/article.png"
            alt=""
          />
        </div>
      </div>

      <section>
        <div className="mx-auto bg-white container px-4 md:px-6  flex flex-col items-center justify-center">
          <p className="text-4xl font-semibold leading-9 text-gray-800 text-center pt-4 pb-4">
            Articles
          </p>
          <div className="px-24 w-full ">
      <section >
      <Articlepdf />
      </section>
      </div>
          <div className="grid justify-items-center grid-cols-1  md:grid-cols-2 xl:grid-cols-3 gap-x-6 lg:gap-x-8 mt-16 pb-18 2xl:w-5/6 w-11/12">
            <Link to="/articles-automated-proof-reading-tools">
              <div
                className="text-white bg-blue-700 hover:bg-red-700 rounded-md cursor-pointer hover:shadow w-full flex items-center border border-gray-600 md:mt-6 lg:mt-0 sm:mt-6 mt-6 mr-0 border-opacity-20 p-4 m-10"
                // onClick={setPage()}
                style={{ height: "100px" }}
              >
                <div className="pl-6 pb-4">
                  <p className="text-base font-semibold leading-5 ">
                    Automated proofreading tools are the key to submitting the
                    perfect application
                     </p>
                     
                     <h4 className="text-xs pt-2">- October 29, 2020 by  admin in Articles, Industry News, Intellectual Property, IP industry, Tips</h4>
                
                </div>
              </div>
            </Link>
            <Link to="/articles-role-of-intellectual-property">
              <div
                className="text-white  bg-blue-700 hover:bg-red-700  rounded-md cursor-pointer hover:shadow w-full flex items-center border border-gray-600 md:mt-6 lg:mt-0 sm:mt-6 mt-6 mr-0 border-opacity-20 p-4 m-10"
                // onClick={setPage()}
                style={{ height: "100px" }}
              >
                <div className="pl-6 pb-4">
                  <p className="text-base font-semibold leading-5  ">
                    The Role of Intellectual Property Rights in Technology
                    Innovation
                  </p>

                  <h4 className="text-xs pt-2">- July 28, 2020 by  admin in Articles, Industry News, Intellectual Property, IP industry, Patent, Tips</h4>
                
                </div>
              </div>
            </Link>
            <Link to="/articles-covid-impact-on-patent">
              <div
                className="text-white  bg-blue-700 hover:bg-red-700 rounded-md cursor-pointer hover:shadow w-full flex items-center border border-gray-600 md:mt-6 lg:mt-0 sm:mt-6 mt-6 mr-0 border-opacity-20 p-4 m-10 "
                // onClick={setPage()}
                style={{ height: "100px", width: "100%" }}
              >
                <div className="pl-6 pb-4">
                  <p className="text-base font-semibold leading-5  ">
                    Covid19- Impact on Patent Filings in India
                  </p>
                  <h4 className="text-xs pt-2">- July 8, 2020 by  admin in Articles, India, Industry News, Intellectual Property, IP industry</h4>
                </div>
              </div>
            </Link>
            <Link to="/articles-patent-law-tranforming-telecommunication-industry">
              <div
                className="text-white  bg-blue-700 hover:bg-red-700 rounded-md cursor-pointer hover:shadow w-full flex items-center border border-gray-600 md:mt-6 lg:mt-0 sm:mt-6 mt-6 mr-0 border-opacity-20 p-4 m-10"
                // onClick={setPage()}
                style={{ height: "100px" }}
              >
                <div className="pl-6 pb-4">
                  <p className="text-base font-semibold leading-5  ">
                    Patent law: Transforming the telecommunications industry
                  </p>
                  <h4 className="text-xs pt-2">- June 15, 2020 by  admin in Articles, India, Intellectual Property, IP industry, Patent</h4>
                </div>
              </div>
            </Link>
            <Link to="/articles-best-ways-to-motivate-employees">
              <div
                className="bg-blue-700 text-white hover:bg-red-700 rounded-md cursor-pointer hover:shadow w-full flex items-center border border-gray-600 md:mt-6 lg:mt-0 sm:mt-6 mt-6 mr-0 border-opacity-20 p-4 m-10"
                style={{ height: "100px" }}
              >
                <div className="pl-6 ">
                  <p className="text-base font-semibold leading-5  ">
                    5 best ways to motivate and help increase productivity of
                    employees during lockdown
                  </p>
                  <h4 className="text-xs pt-2">- May 15, 2020 by  admin in Articles, India, Intellectual Property, IP industry</h4>
                </div>
              </div>
            </Link>

            <Link to="/articles-trade-mark-oppostion-in-india">
              <div
                className="text-white  bg-blue-700 hover:bg-red-700 rounded-md cursor-pointer hover:shadow w-full flex items-center border border-gray-600 md:mt-6 lg:mt-0 sm:mt-6 mt-6 mr-0 border-opacity-20 p-4 m-10"
                style={{ height: "100px" }}
              >
                <div className="pl-6 ">
                  <p className="text-base font-semibold leading-5  ">
                    Trademark Opposition System in India: Grounds, Provisions
                    and Procedure at Indian Patent Office (IPO)
                  </p>
                  <h4 className="text-xs pt-2">- April 29, 2020 by  admin in Articles, Brand Valuation, India, Intellectual Property</h4>
                </div>
              </div>
            </Link>
            <Link to="/articles-blockchain-and-intellectual-property">
              <div
                className="text-white  bg-blue-700 hover:bg-red-700 rounded-md cursor-pointer hover:shadow w-full flex items-center border border-gray-600 md:mt-6 lg:mt-0 sm:mt-6 mt-6 mr-0 border-opacity-20 p-4 m-10"
                style={{ height: "100px" }}
              >
                <div className="pl-6 pb-4">
                  <p className="text-base font-semibold leading-5  ">
                    Blockchain and Intellectual Property: The decentralized
                    alliance
                  </p>
                  <h4 className="text-xs pt-2">- March 17, 2020 by  admin in Articles, India, Intellectual Property, IP industry, Patent</h4>
                </div>
              </div>
            </Link>
            <Link to="/how-to-research-a-patent-idea-by-performing-novelty-invention-search">
              <div
                className="text-white  bg-blue-700 hover:bg-red-700 rounded-md cursor-pointer hover:shadow w-full flex items-center border border-gray-600 md:mt-6 lg:mt-0 sm:mt-6 mt-6 mr-0 border-opacity-20 p-4 m-10"
                style={{ height: "100px" }}
              >
                <div className="pl-6 pb-4">
                  <p className="text-base font-semibold leading-5  ">
                    How to research a patent idea by performing novelty
                    invention search?
                  </p>
                  <h4 className="text-xs pt-2">- September 11, 2019 by  admin in Articles, Blog, Brand Valuation</h4>
                </div>
              </div>
            </Link>
            <Link to="/articles-significance-and-importance-of-statement-of-working">
              <div
                className="text-white  bg-blue-700 hover:bg-red-700 rounded-md cursor-pointer hover:shadow w-full flex items-center border border-gray-600 md:mt-6 lg:mt-0 sm:mt-6 mt-6 mr-0 border-opacity-20 p-4 m-10"
                style={{ height: "100px" }}
              >
                <div className="pl-6 ">
                  <p className="text-base font-semibold leading-5  ">
                    Significance & Importance of ‘Statement of Working’ for
                    Patenting System in India
                  </p>
                  <h4 className="text-xs pt-2">- March 27, 2018 by  admin in Articles</h4>
                </div>
              </div>
            </Link>
            
            
          
          </div>
        </div>
      </section>
      
      
      
      <Footer />
    </div>
  );
};

export default Articlespage;
