import React from "react";
import Navigation from "./navigation";
import Footer from "./footer";


const performingnovality = () => {
  return (
    <div>
      <Navigation />
      <>
        <div>
          <div className="bg-white px-6 pb-20 text-justify">
            <div
              className=" container w-full flex  md:flex-row flex-col justify-between  lg:px-0 pt-9"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <div
                className="flex flex-col justify-start items-start lg:w-2/5 px-2 lg:px-0 "
                style={{ width: "100%" }}
              >
                <div className="md:mt-3 " style={{ padding: "10px" }}>
                  <p className=" text-gray-700 lg:text-4xl text-3xl font-extrabold leading-9">
                  How to research a patent idea by performing novelty invention search?
                  </p>
                </div>
              </div>
            </div>
            <div className="mx-auto container w-full flex xl:flex-col flex-col justify-between items-start mt-12 px-6 lg:px-0">
              <div className="flex flex-col justify-start items-start xl:w-3/4">
                <p className="text-gray-900  text-2xl  leading-7">
                How to carry out research on patentable idea?
                </p>
                <div className=" text-gray-700">
                  <p className="mt-4">
                  A novelty patent search is performed to analyse whether your idea/ technology / invention is new or not.  The patent search novelty report provided by the patent expert will tell you whether your invention is novel or not. The search report will include list of selected granted patents, published patents and non-patent literature which will become prior art existing for your technology. The patent search report will also contain legal expert opinion on the novelty of your invention. Our patent lawyers and attorneys assist in re-engineering your invention in the light of prior art documents
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-start items-start xl:w-3/4 mt-8">
              <div>
                <h5 className="text-gray-900  text-2xl  leading-7 ">
                How can Patent Search help in determining Patentability of Invention?
                </h5>
              </div>
              <div className="mt-5 text-gray-700">
                <p>
                Before spending time, money and resources for filing a patent application, it is strongly advisable to conduct a patent search . A qualified patent attorney can determine patentability of an invention by analysing relevant prior art references (published patent applications, granted patents and non-patent literature) in accordance with patent laws of relevant jurisdictions.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-start items-start xl:w-3/4 mt-8">
              <div>
                <h5 className="text-gray-900  text-2xl  leading-7 ">
                Patent Search before Filing A Patent Application
                </h5>
              </div>
              <div className="mt-5 text-gray-700">
                <p>
                While conducting a prior art search and performing patentability analysis, patent attorneys ensure that the search is comprehensive and corresponding analysis is thorough to include all possible embodiments of the proposed invention. Generally, the patent search results are compiled in the form of a detailed document known as patent search report. The patent search report further helps in writing a draft specification for patent.
                </p>
              </div>
            </div>
            
              
            
          </div>
        </div>
      </>

      
      <Footer />
    </div>
  );
};

export default performingnovality;
