import React from "react";
import Navigation from "./navigation";
import Footer from "./footer";
import Locatinproject from "./locatinproject";

const BlockchainAndIntellectual = () => {
  return (
    <div>
      <Navigation />
      <>
        <div >
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
                    Blockchain and Intellectual Property: The decentralized
                    alliance
                  </p>
                </div>
              </div>
            </div>
            <div className="mx-auto container w-full flex xl:flex-col flex-col justify-between items-start mt-12 px-6 lg:px-0">
              <div className="flex flex-col justify-start items-start xl:w-3/4">
                <div className=" text-gray-700">
                  <p>
                    Blockchain, in simple words, is an anonymous online ledger,
                    which keeps a growing list of records, called blocks, linked
                    using cryptography where each block contains a cryptographic
                    hash of the previous block, a timestamp, and transaction
                    data. It was invented back in 2008, as a Peer-to-Peer
                    Electronic Cash System by an inventor with the pseudonym
                    Satoshi Nakamoto.
                  </p>
                  <p className="mt-3">
                    It is a concept, simple yet so complex and diverse in its
                    use-cases, some people already speculate that this is a
                    phenomenon similar to the revolution brought by the
                    Internet. Speaking about the industrial application of the
                    blockchain –Finance is one of the leading areas this
                    technology is traversing its roots into.
                  </p>
                  <p className="mt-4">
                    The early birds to file a patent on blockchain were big
                    financial institutions including Bank of America, Mastercard
                    International, and Goldman Sachs. In India, a few patent
                    applications based on the technology have been filed as
                    well. Other than this, smart contracts, shared economy,
                    governance, file storage, Internet of Things (IoT), identity
                    management, data management, stock trading, healthcare and
                    life sciences sector, e-commerce, pharmaceuticals,
                    automotive, luxury and consumer goods, etc. are the fields
                    in which the technology is gaining pace.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-start items-start xl:w-3/4 mt-8">
              <div>
                <h5 className="text-gray-900  text-2xl  leading-7 ">
                  Blockchain and IPR: A hand-in-hand relationship
                </h5>
              </div>
              <div className="mt-5 text-gray-700">
                <p>
                  IPR and Blockchain go hand in hand –on one side the IPR
                  protects Blockchain and Blockchain can serve to strengthen the
                  existing IP regime on the other. With the world realizing the
                  enormous potential of Blockchain, IPR is going to play a vital
                  role in creating a protected environment for the development
                  of the technology. On the other hand –reliability and security
                  offered by Blockchain can be used to strengthen every step of
                  the life cycle of IP rights such as resolving disputes over
                  ownership, creating licensing agreements via blockchain smart
                  contracts, identification of counterfeit products or simply
                  creating an IP register for registering keeping a record for
                  all form of IP rights.
                </p>
                <p className="mt-2">
                  And this may not really be a thing of the future too distant
                  in time after all –There are some early adopters who seem to
                  have already started offering services to this end.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-start items-start xl:w-3/4 mt-8">
              <div>
                <h5 className="text-gray-900  text-2xl  leading-7 ">
                  Blockchain and Intellectual Property: The decentralized
                  alliance | Effectual Services
                </h5>
              </div>
              <div className="mt-5 text-gray-700">
                <p>
                  A lot of countries around the world have started realising the
                  potential of blockchain and India is no exception – the IPO is
                  keen on staying at par with the technological advancements and
                  expects to be able to foretell timelines for users concerning
                  different actions to be taken by the office. A
                  scientifically-handled workload-based allotment of patent
                  applications to examiners will make optimal use of human
                  resources available. Automated checking against formal
                  requirements such as application formats, attachments, and so
                  on, can reduce the manual intervention required, and speed up
                  the process considerably. Reduced manual interference will
                  also affect transparency and accountability procedures in an
                  optimistic way.
                </p>
                <p className="mt-2">
                  To achieve all of the above, the IPO is setting up a legal
                  framework for a Blockchain-based IP registry to protect and
                  commercialize smart ideas. More information on the same can be
                  obtained here: Redefining and Transforming Patent Services in
                  India.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-start items-start xl:w-3/4 mt-8">
              <div>
                <h5 className="text-gray-900  text-2xl  leading-7 ">
                  Conclusion
                </h5>
              </div>
              <div className="mt-5 text-gray-700">
                <p>
                  There is, without doubt, an enormous potential for the use of
                  blockchain for the benefit of IP industry. But, like any
                  emerging technology, there are a few setbacks. Currently,
                  these include the huge processing power required and
                  limitations on the number of transactions per hour. Regarding
                  the ultimate notion of a method to connect registries across
                  the world through a single distributed ledger, the reality is
                  far from simple. Successful management of IP rights using
                  blockchain requires standardized platform that is
                  internationally adopted.
                </p>
              </div>
            </div>
          </div>
        </div>
      </>

      <Locatinproject />
      <Footer />
    </div>
  );
};

export default BlockchainAndIntellectual;
