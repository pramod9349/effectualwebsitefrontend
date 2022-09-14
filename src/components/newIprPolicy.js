import React from "react";
import Navigation from "./navigation";
import Footer from "./footer";
import Locatinproject from "./locatinproject";

const NewIprPolicy = () => {
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
                    All you need to know about the new IPR policy
                  </p>
                </div>
                <div style={{ marginTop: "30px", color: "black" }}>
                  Proofreading a patent is crucial to maintaining its quality
                  and its workability. Errors may be clerical, grammatical or in
                  the claim numbering (among many other forms), and can creep in
                  anywhere in the patent, whether it be in the introductory page
                  (face page), specification, claims or drawing. Since the USPTO
                  does not provide a copy of the final patent before it is
                  printed, errors must be righted in a Certificate of
                  Correction. Professionals carry out the manual task of
                  proofreading patent applications. This involves examining
                  filed or approved and granted patents for any errors that the
                  applicant has overlooked or that the USPTO has printed. While
                  professionals generally spot the smallest of mistakes, the
                  repetitive nature of the work means that errors can often be
                  either missed or introduced inadvertently. With increasing
                  competition in the market, professionals are experiencing
                  growing pressure to reduce costs and must work harder and with
                  a quicker turnaround to ensure that applications are 100%
                  accurate. This is where an automation tool is useful.
                </div>
              </div>
              <div className="flex justify-center items-center lg:w-2/5 mt-10 md:mt-0">
                <img
                  className="w-full"
                  src="/images/Automated-proofreading.png"
                  alt="laptops"
                />
              </div>
            </div>
            <div className="mx-auto container w-full flex xl:flex-col flex-col justify-between items-start mt-12 px-6 lg:px-0">
              <div className="flex flex-col justify-start items-start xl:w-3/4">
                <div>
                  <h5 className="text-gray-600  text-2xl  leading-7">
                    An automated proofreading tool can:
                  </h5>
                </div>
                <div className="mt-8 text-gray-700">
                  <li>
                    ensure the quality of the work delivered – the result is
                    highly accurate and all types of error are found
                  </li>
                  <li>
                    save time, which could be utilised to discuss certain points
                    with the applicant.
                  </li>
                </div>
              </div>
              <div className="flex flex-col justify-start items-start xl:w-3/4 mt-8">
                <div>
                  <h5 className="text-gray-600  text-2xl  leading-7">
                    An automated tool can be used to proofread:
                  </h5>
                </div>
                <div className="mt-8 text-gray-700">
                  <li>the abstract;</li>
                  <li>claims;</li>
                  <li>specifications;;</li>

                  <li>comparisons; and</li>

                  <li>the list of references.</li>
                </div>
              </div>
            </div>
            <p className="text-gray-700 mt-3">
              It will also carry out a general spelling and grammar check.
            </p>
            <div className="flex flex-col justify-start items-start xl:w-3/4 mt-8">
              <div>
                <h5 className="text-gray-600  text-2xl  leading-7 ">
                  The following tools can be used to automate proofreading:
                </h5>
              </div>
              <div className="mt-5 text-gray-700">
                <li>Acrobat Adobe;</li>
                <li>MS Word; and</li>
                <li>Abbyy Fine Reader.</li>
              </div>
            </div>
            <div className="flex flex-col justify-start items-start xl:w-3/4 mt-8">
              <div>
                <h5 className="text-gray-600  text-2xl  leading-7 ">
                  The work that must be completed manually includes checking:
                </h5>
              </div>
              <div className="mt-5 text-gray-700">
                <li>
                  the face page (ie, title, applicants, inventors, assignee,
                  application number, filing date, publication number,
                  publication date, references cited, Cooperative Patent
                  Classification, US classification, examiners, attorney, agent
                  and/or firm); drawings and drawing tags;
                </li>
                <li>drawings and drawing tags;</li>
                <li>
                  formulae or special characters (eg, $, %, ^, #, α, β, γ and
                  &);
                </li>
                <li>
                  characters, such as commas, full stops, semi-colons and
                  colons;
                </li>
                <li>
                  antecedent errors, which are generally an observation for the
                  attorney;
                </li>
                <li>consistency in claims; and</li>
                <li>renumbered claims.</li>
              </div>
            </div>
            <div className="mt-5 text-gray-700">
              Although there are several tools in the market that claim to have
              taken over the manual intervention of proofreading, their quality
              should be questioned.
            </div>
            <div className="mt-5 text-gray-700">
              Automatic software tools can save costs and time, thereby allowing
              professionals to concentrate on more substantive work.
            </div>
            <div className="mt-5 text-gray-700 font-bold">
              For further information contact:
            </div>
            <div className="text-gray-700">
              <p>Reshu Tyagi</p>
              <p>Effectual Knowledge Services Pvt Ltd</p>
              <p>View website</p>
              <p>Tel: +44 207 993 8632</p>
            </div>
          </div>
        </div>
      </>

      <Locatinproject />
      <Footer />
    </div>
  );
};

export default NewIprPolicy;
