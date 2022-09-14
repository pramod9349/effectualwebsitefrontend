import React from "react";
import Navigation from "./navigation";
import Footer from "./footer";


const IntellectualPropertyRights = () => {
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
                    The Role of Intellectual Property Rights in Technology
                    Innovation
                  </p>
                </div>
                <div style={{ marginTop: "30px", color: "black" }} className="text-justify">
                  Intellectual Property (IP) is a term which refers to
                  intangible creations that arise from human intellect. There
                  are many types of IP recognized by law, and each type provides
                  some form of protection to a person who has made the creation.
                  The basic idea behind various types of IP is to provide an
                  incentive to the owners to disclose the idea to public, so
                  that others can further develop the technology, and therefore,
                  it leads to an overall growth of science and technology. As
                  logical as this may be, it has been criticized by many –
                  people who follow an opposing school of thought propose that
                  IP rights serve as a tool to provide monopoly to large
                  corporations, and it’s difficult for smaller players to invest
                  in R&D as much as bigger companies, eventually, strict
                  implementations of IP laws kill the innovation and thus it
                  defeats the sole purpose. Let’s examine this with help of
                  history –
                </div>
              </div>
              <div className="flex justify-center items-center lg:w-2/5 mt-10 md:mt-0 ml-4">
                <img
                  className="w-full"
                  src="/images/intellectual_property.png"
                  alt="laptops"
                />
              </div>
            </div>
            <div className="mx-auto container w-full flex xl:flex-col flex-col justify-between items-start mt-12 px-6 lg:px-0">
              <div className="flex flex-col justify-start items-start xl:w-3/4">
                <div>
                  <h5 className="text-gray-600  text-2xl  leading-7">
                    The Indian Pharma sector –
                  </h5>
                </div>
                <div className="mt-8 text-gray-700 text-justify" >
                  <p>
                    The Indian Patent Act was enacted in 1970, at that time, the
                    lawmakers did not allow protection to pharmaceutical
                    products (i.e. medicines) under the act, but only afforded
                    protection to “methods” of making pharmaceutical products.
                    This allowed the Indian pharma industry to reverse engineer
                    the drugs made by international companies, and manufacture
                    them using alternate methods, i.e. they could make same API
                    (Active Pharmaceutical Ingredient) using different methods.
                    Needless to say, that the exercise of researching an API is
                    more capital intensive, than researching for an alternate
                    method to produce the same API – and thus, came the rise of
                    Indian generic drugs.
                  </p>
                  <p className="mt-2">
                    Looking back, it seems like the lawmakers might have done
                    this intentionally, to preserve and promote the domestic
                    pharma industry, as they knew that the domestic pharma
                    industry probably did not have the necessary means to
                    innovate back then. The result – India became the world’s
                    largest provider of generic drugs, and we primarily became
                    “imitators”and not “creators”.
                  </p>
                  <p className="mt-2">
                    The laws have since then been amended multiple to be TRIPS
                    compliant, and since year 2005, India allows patenting of
                    Pharma products. The industry reacted to this positively and
                    domestic firms, since then and even prior to that, have
                    slowly been investing more money into their R&D programs or
                    have formed alliances to tap into these opportunities. Back
                    then, when the patent law was enacted, the Indian pharma
                    companies might not have been very capable of innovating and
                    competing against international pharma giants, but today, we
                    have companies like Biocon and Dr. Reddy’s – who rely
                    heavily on R&D and have filed numerous patents across the
                    globe, and are already competing against international
                    pharma giants.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-start items-start xl:w-3/4 mt-8">
                <div>
                  <h5 className="text-gray-600  text-2xl  leading-7 text-justify">
                    The Chinese example –
                  </h5>
                </div>
                <div className="mt-8 text-gray-700 text-justify">
                  <p>
                    China is without doubt the manufacturing base of the globe,
                    and Chinese products are synonyms for counterfeit for many.
                    However, like India, Chinese patent laws are evolving and
                    are moving towards a stricter IPR regimen – a brief review
                    of the history of IP laws in China reveals this fact.
                    Chinese patents act was enacted back in 1984 and thereafter,
                    there have been three main amendments – the 1992 amendment,
                    the 2000 amendment and the 2008 amendment. The 1992
                    amendment was made in accordance with “Memorandum of
                    Understanding between the Government of the United States
                    and the Government of the People’s Republic of China on the
                    Protection of Intellectual Property.”. The 2000 amendment
                    was made in anticipation of China becoming a member of World
                    Trade Organization (WTO). Both these amendments aimed to
                    create a stricter IP regime, which was more in compliance
                    with the developed countries across the globe. However, the
                    2008 amendment, which was also directed to creating a
                    stricter IPR regimen and to promote patent filings, was
                    purely voluntary and was done without any external pressure.
                  </p>
                  <p className="mt-2">
                    The result – China overtook US in 2011 in terms of patent
                    filing, which was the leading country in patent filings till
                    then. Since then, the China patent filings have remained
                    more than double of US (Source: WIPO IP Statistics Data
                    Center).
                  </p>
                  <p className="mt-2">
                    By encouraging the patent filings, and imposing a stricter
                    IP regime, China aims to move from being a manufacturing hub
                    to more of a research hub. It is not surprising to note
                    Huawei among the top companies conducting active research
                    and filing patents in 5G space.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-start items-start xl:w-3/4 mt-8">
              <div>
                <h5 className="text-gray-600  text-2xl  leading-7">
                  The case of Robert Kearns –
                </h5>
              </div>
              <div className="mt-8 text-gray-700 text-justify">
                <p>
                  Innovation not only stems from R&D labs of big companies but
                  also from companies that start from a garage –key examples
                  being companies like Apple and individuals like Robert Kearns.
                  Robert Kearns was an inventor made famous by his patent war
                  against automobile companies in US during 1978-1992. He was an
                  inventor of intermittent windshield wiper, which was useful in
                  light rain or mist, and held a patent for the technology. He
                  tried to license his technology to General Motors, Ford, and
                  Chrysler but each rejected his proposal. Even though the
                  proposal was rejected, Ford and Chrysler went on to implement
                  his technology in the cars they manufactured. Thus ensued the
                  most interesting patent infringement cases that ran years, and
                  finally the courts decided in favor of Robert, and the auto
                  giants had to pay damages to Robert.
                </p>
              </div>
              <div className="mt-8 text-gray-700">
                <div>
                  <h5 className="text-gray-600  text-2xl  leading-7 ">
                    Conclusion –
                  </h5>
                </div>
                <p className="mt-8 text-justify">
                  From the standpoint of IP, the countries across the globe can
                  be divided into two broad segments – Developed & Innovating
                  and Developing & Imitating. The Developed and Innovating have
                  well defined and well understood IP laws that impose a
                  stricter IP regimen, which leads to innovation. Then comes the
                  second segment – of which countries like India and China are a
                  part, which are gradually moving to an ever stricter IP
                  regimen, albeit with some temporary intentional delays
                  recorded in India.
                </p>
                <p className="mt-2 text-justify">
                  Stricter IP laws do seem to have a positive impact on driving
                  innovation, at least in a longer run, and in the countries in
                  which the industry has potential, and is capable of
                  innovation. It seems that the hypothesis – “strict
                  implementations of IP laws kill the innovation” might not be
                  correct after all, and is more focused in short sighted goals.
                  In fact, if it were not for a solid IPR regimen, it become
                  easier for bigger companies to steal the idea from a genuine
                  individual inventor – as we see from the case of Robert
                  Kearns.
                </p>
                <p className="mt-2 text-justify">
                  It is safe to assume that India does have a lot of potential
                  of innovation, and with initiatives like “Make in India” every
                  industry in India will react to become more and more
                  innovating, and eventually, the legislation and the courts
                  will enforce a stricter IP regimen in India as well.
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

export default IntellectualPropertyRights;
