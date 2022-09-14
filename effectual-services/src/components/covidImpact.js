import React from "react";
import Navigation from "./navigation";
import Footer from "./footer";


const CovidImpact = () => {
  return (
    <div>
      <Navigation />
      <>
        <div>
          <div className="bg-white px-6 pb-20">
            <div
              className=" container w-full flex  md:flex-row flex-col justify-between  lg:px-0 pt-9"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <div
                className="flex flex-col justify-start items-start lg:w-2/5 px-2 lg:px-0 "
                style={{ width: "70%" }}
              >
                <div className="md:mt-3 " style={{ padding: "10px" }}>
                  <p className=" text-gray-700 lg:text-4xl text-3xl font-extrabold leading-9">
                    Covid19- Impact on Patent Filings in India
                  </p>
                </div>
                <div style={{ marginTop: "30px", color: "black" }} className="text-justify">
                  The coronaviruses that registered their first presence on the
                  planet more than 50 years ago, recently became the hot topic
                  of every conversation when the 7th known coronavirus,
                  popularly known as Covid-19, took the entire world under its
                  blanket and since then, every passing day adds to the horror
                  of it as the tally of worldwide infected people increases with
                  little to no promise of the development of a successful
                  vaccine the next day. Covid-19 has brought an economical,
                  health, financial as well as asocial crisis on every
                  continent, country, state that none of them was prepared for
                  and the only known counter-action to the governments, the
                  “Lockdown,” has been cataclysmic for every business sector,
                  from agriculture to IT, leaving them counting the costs.
                  Although the world of intellectual property has successfully
                  avoided a complete halt, the innovational pool has not been
                  completely immune to the pandemic.
                </div>
              </div>
              <div className="flex justify-center items-center lg:w-2/5 mt-10 md:mt-0 ml-4">
                <img
                  className="w-full"
                  src="/images/covid_impact.jpg"
                  alt="laptops"
                />
              </div>
            </div>
            <div className="mx-auto container w-full flex xl:flex-col flex-col justify-between items-start mt-12 px-6 lg:px-0">
              <div className="flex flex-col justify-start items-start xl:w-3/4">
                <div>
                  <h3 className="text-gray-600  text-2xl font-bold leading-7">
                    Covid-19 and Intellectual property: The after-effects
                  </h3>
                </div>
                <div className="text-gray-800 mt-8 text-justify">
                  <p>
                    As stated above, the IP sector has so far managed to
                    maintain the curve amidst the pandemic, but prolonged
                    existence of the outbreak can nudge the IP and legal
                    services domain to plummet as companies holding big IP
                    portfolios are among the ones greatly affected by the virus
                    and as a counter-act to tackle the declining economy, have
                    started cost-cutting by minimizing the expenditure on
                    maintenance of patents as well as prosecution. To further
                    mitigate the expenditure, IP holders are even considering
                    reducing the research costs as well as abandoning the
                    holding of patents or the acquisition of new IP ideas.
                  </p>
                  <p className="mt-2">
                    Another after-effect of the pandemic can be an alarming
                    reduction in the number of PCT applications filing as
                    companies would refrain from spending extra bucks on
                    patenting their innovation in every nation and would
                    cleverly limit their filings to selective countries
                    depending on their interests.
                  </p>
                  <p className="mt-2">
                    Further, the pandemic has affected the working of every
                    patent and Trademark office from worldwide administrators
                    like WIPO to every national PTO office.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-start items-start xl:w-3/4 mt-8 ">
                <div>
                  <h5 className="text-gray-600 font-bold text-2xl  leading-7">
                    The counterattack by IPO
                  </h5>
                </div>
                <div className="mt-8 text-gray-800 text-justify">
                  <p>
                    As the virus continues to spread to more and more countries,
                    IP offices throughout the world are taking countermeasures
                    depending on their local landscape, to counter the effect of
                    the pandemic on their working, operation procedures as well
                    as the IP service practitioners. The Indian Patent and
                    Trademark Office (IPO) along with other major PTOs like the
                    European Patent Office (EPO), United Kingdom, and USPTO took
                    the approach of extending the deadlines.
                  </p>
                  <p className="mt-2">
                    The Supreme court on March 23, took Suo Motucognizance over
                    the concerns raised by the pandemic to debar them while
                    keeping in mind the Social distancing norms issued by the
                    Central Government and following that IPO has issued several
                    notices to ensure the smooth dealing of IP related concerns.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-start items-start xl:w-3/4 mt-8">
              <div>
                <h5 className="text-gray-600  text-2xl  leading-7 ">
                  Stimulating the Innovation curve amidst the pandemic
                </h5>
              </div>
              <div className="mt-5 text-gray-700 text-justify">
                <p>
                  As the pandemic progresses towards more critical stages, the
                  Indian IP office is expected to introduce policies to counter
                  the impact and to provide relief as well as a ray of hope
                  amidst the darkness to the IP holding companies and
                  practitioners. Also, IP owners, holders, professionals, and
                  practitioners are advised to manage their IP portfolio
                  assiduously to identify and differentiate between their
                  performing and non-performing assets and devise clever
                  strategies to gain an upper foot in the post-pandemic
                  environment. Further, it is important to seize and secure any
                  essential IP concerning mass manufacturing of Crisis Critical
                  (CC) Products.
                </p>
                <p className="mt-2">
                  Further, the likelihood of a surge in the growth of the
                  intellectual property domain Post-COVID cannot be ignored as
                  it will certainly push tech companies to go after
                  incentivization of their portfolio via the licensing of their
                  existing IP to refill their financial reserves.
                </p>
                <p className="mt-2">
                  To conclude, it can be said that the current scenario poses
                  the potential threat of a downfall in the domain, but the
                  perennial introduction of countermeasures by IPO as well as
                  holding on to and investing in critical IP assets by the IP
                  holders can prove as a potential opportunity of growth of the
                  domain in the post-pandemic world.
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

export default CovidImpact;
