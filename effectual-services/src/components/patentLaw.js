import React from "react";
import Navigation from "./navigation";
import Footer from "./footer";
import Locatinproject from "./locatinproject";

const PatentLaw = () => {
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
                style={{ width: "100%" }}
              >
                <div className="md:mt-3 " style={{ padding: "8px" }}>
                  <p className=" text-gray-700 lg:text-4xl text-3xl font-extrabold leading-6  ">
                    Patent law: Transforming the telecommunications industry
                  </p>
                </div>
                <div style={{ marginTop: "30px", color: "black" }} className="text-justify">
                  <p>
                    The telecommunications industry is perhaps the largest
                    driving force behind almost all other industries that
                    benefit from it – it is the epicenter for a variety of other
                    industries that depend on it. Remember how online payments
                    of electricity bills, and online bank transactions 10 years
                    back have now moved to apps sitting in our smartphone.
                    Today, a smartphone is anything but a cell phone used for
                    calling – the users depend on smartphones for many other
                    things such as – remote working, ordering groceries and
                    entertainment. Off late, the mobile phone has also become a
                    wallet for many – perhaps, the demonetization provided the
                    necessary impetus!
                  </p>
                  <p className="mt-2">
                    The largest and most widely used services by users currently
                    are– video streaming, Internet of Things (IoT), and mobile
                    payments. We took a deeper dive into each of these areas
                    from a patenting activity standpoint and identified over
                    10,000 patent applications that are filed in India for these
                    three technologies. Of these patent publications, almost 60%
                    have been published in the past 5 years indicating an
                    increased focus on innovation. The largest chunk of
                    publications studied was accounted for by the mobile
                    payments segment (~70% share) followed by the Video
                    Streaming and IoT, roughly accounting for 15% each.
                  </p>
                  <p className="mt-2">
                    Interesting trends emerge upon looking at the owners of
                    these patents – the overall top assignees in the patent
                    dataset studied are – Qualcomm, Samsung and MasterCard.
                    Collectively, these three players account for roughly 12%
                    patents studied, thereby indicating that many other players
                    are active in these areas and there is no single player that
                    holds sizeable chunks of IP for now.
                  </p>
                </div>
              </div>
            </div>
            <div className="mx-auto container w-full flex xl:flex-col flex-col justify-between items-start mt-12 px-6 lg:px-0">
              <div className="flex flex-col justify-start items-start xl:w-3/4">
                <div>
                  <h5 className="text-gray-600  font-bold text-2xl  leading-7">
                    Digging deeper into the individual domains, the following
                    trends emerge:
                  </h5>
                </div>
                <div className="mt-8 text-gray-700">
                  <p className="font-bold text-gray-600">Mobile payments:</p>
                  <p className="mt-2">
                    Top Players: Qualcomm, Mastercard and Alibaba group
                  </p>
                  <p className="mt-2">
                    Only Indian company making it to the top 10 list in this
                    domain was Tata Consultancy Services
                  </p>
                </div>
                <div className="mt-8 text-gray-700">
                  <p className="font-bold text-gray-600">Video streaming:</p>
                  <p className="mt-2">Top Players: Qualcomm, Sony, Philips</p>
                </div>
                <div className="mt-8 text-gray-800 text-justify">
                  <p className="font-bold text-gray-600">IoT:</p>
                  <p className="mt-2">
                    Top Players: Samsung, Qualcomm, Lovely Professional
                    University (LPU)
                  </p>
                  <p className="mt-2">
                    Notably, Academia also seems to have active interest in
                    pursuing patent filings in this domain
                  </p>
                  <p className="mt-2">
                    The telecom value chain comprises of multiple segments –
                    Device manufacturers, Infrastructure and platform vendors,
                    Operators, etc. The patent activity from the operators seems
                    to be on the lower side – our research was able to locate
                    only 71 Indian patent publications from Reliance
                    JioInfocomm, 32 from Vodafone and 7 from Bharti Airtel. The
                    main reason for low patent activity may be due to the fact
                    that these Operators put in very little or no research
                    efforts, and they implement the technology developed by the
                    Infrastructure and platform vendors.
                  </p>
                  <p className="mt-2">
                    Undoubtedly, the next big phenomenon in the telecom industry
                    will be the 5G revolution. According to a report from
                    Qualcomm, 5G is predicted to have US$13.2 Trillion dollars
                    of global economic output by the year 2035. Perhaps, the
                    Infrastructure and platform vendors have realized this since
                    long and have been amassing 5G related patents at a
                    phenomenal rate. The following are the approximate counts of
                    patent families (global data) declared as relating to the 5G
                    standards:
                  </p>
                  <p className="mt-8">Huawei– 3000+ patents</p>
                  <p className="mt-2">Ericsson – 1400+ patents</p>
                  <p className="mt-2">Nokia – 2000+ patents</p>
                  <p className="mt-2">Qualcomm – 1300+ patents</p>
                </div>
              </div>
            </div>
            <p className="text-gray-700 mt-10 text-justify">
              5G did not come into existence overnight, and the research has
              been going on for a while, but the most patents related to 5G were
              published after 2016, and we can see that the % of filing in India
              is on the rise by most companies actively pursuing 5G, noting an
              active interest in India.
            </p>
            <p className="text-gray-700 mt-3 text-justify">
              All in all, it can be safely concluded that patents have thus far
              played a big role in shaping Telecom industry, and are likely to
              play a more crucial role in the coming times, especially in the 5G
              licensing space – though it remains to be seen who, among the
              above giants, wins the race to the 5G patent dominance.
            </p>
            <hr className="mt-8" />
            <p className="text-gray-700 mt-3 text-justify ">
              Patent law: Transforming the telecommunications industry Article
              by Amit Aggarwal Co-Founder and Director of Effectual
              Services.https://www.dqindia.com/patent-law-transforming-telecommunications-industry/
            </p>
          </div>
        </div>
      </>

      <Locatinproject />
      <Footer />
    </div>
  );
};

export default PatentLaw;
