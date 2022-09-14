import React, { useState } from "react";
import Swal from "sweetalert2";
// import axios from "axios";
// import ReCAPTCHA from "react-google-recaptcha";
// import ModalOverlay from "./ModalOverlay";
// import ActualModal from "./ActualModal";
// import PopoverCasestudy from "./PopoverCasestudy";
import Popover from "@mui/material/Popover";
import ReCAPTCHA from "react-google-recaptcha";

// const Userdetails = () => {
//   // Swal.fire({
//   //   title: "<h3 style='color:white '> Please enter your details </h3>",
//   //   confirmButtonText: "Submit",
//   //   color: "black",
//   //   confirmButtonColor: "red",
//   //   inputValidator: (value) => {
//   //     if (!value) {
//   //       return "You need to write something!";
//   //     }
//   //   },
//   //   html:
//   //     '<div class="container px-8 pt-8 mx-auto">' +
//   //     '<input id="name"   placeholder="Name (required)*"  class="swal2-input" style="width:80% ; color:black ; background:white">' +
//   //     '<input id="company" placeholder="Company" class="swal2-input" style="width:80% ; color:black ; background:white" >' +
//   //     '<input id="email"  placeholder="Email (required)*" class="swal2-input" style="width:80% ; color:black ; background:white">' +
//   //     '<input id="contact" placeholder="Contact No. (required)*" class="swal2-input" style="width:80% ; color:black ; background:white">' +
//   //     '<div class="mt-5">' +
//   //     '<textarea n placeholder="Enter your message here" id="message" name="message" rows="4"  class="swal2-input" style="width:80% ; color:black ; background:white"  aria-describedby="message-max"></textarea>' +
//   //     ' <ReCAPTCHA sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" onChange={handleCaptcha} />' +
//   //     "</div>" +
//   //     "</div>",
//   //   focusConfirm: false,
//   //   disabledButtons: true,
//   //   showCloseButton: true,
//   //   background: "#163b8d",
//   //   preConfirm: () => {
//   // let validate = false;
//   // if (
//   //   document.getElementById("name").value !== "" &&
//   //   document.getElementById("email").value !== "" &&
//   //   document.getElementById("contact").value !== ""
//   // ) {
//   //   validate = true;
//   // }
//   // const name = document.getElementById("name").value;
//   // const company = document.getElementById("company").value;
//   // const email = document.getElementById("email").value;
//   // const contact = document.getElementById("contact").value;
//   // const message = document.getElementById("message").value;
//   // console.log(validate);
//   // let userData = {
//   //   name: name,
//   //   company: company,
//   //   email: email,
//   //   contact: contact,
//   //   message: message,
//   // };
//   // if (!validate) {
//   //   Swal.showValidationMessage("please enter the required feilds");
//   // } else {
//   //   let info = axios({
//   //     url: "http://localhost:5000/casestudies",
//   //     method: "POST",
//   //     headers: {
//   //       "Content-Type": "application/json",
//   //       "Access-Control-Allow-Origin": "*",
//   //     },
//   //     data: JSON.stringify(userData),
//   //   })
//   //     .then((res) => {
//   //       if (validate) info = res.data;
//   //       console.log(info, "info");
//   //     })
//   //     .catch((err) => {
//   //       console.log(err);
//   //     });
//   //   window.location.assign(
//   //     "http://www.effepro.com/effectual_articles_posts/CASE_STUDY.zip"
//   //   );
//   //     }
//   //   },
//   // });
// };
function productlaunchupdate() {
  Swal.fire({
    html:
      ' <section class="bg-white dark:bg-gray-800"> ' +
      '<div class="container px-8 pt-8 mx-auto">' +
      '<div class="items-start lg:flex">' +
      '<div class="w=full">' +
      '<p class=" mt-8 text-gray-500 dark:text-gray-400 text-justify ">One of our client wanted us to perform a clearance search for the product related to electric vehicles. The client wanted to launch the product particularly in Japan and Germany but had a plan to launch the product in multiple countries in the upcoming years.+ <br></br> +After understanding the requirement of the project, we initiated our search and analysis and prepared primary and secondary product features using our domain knowledge and expertise. Our domain experts derived the related technological keywords and classes relevant for an exhaustive patent search. Then after using the third party paid patent databases like Orbit and Patseer, we formulated different search strategies and identified granted patents which were functionally claiming the product feature very closely. Later, we thoroughly analysed each of the identified granted patent and found several of them claiming the product feature closely. After consulting with the client, the client gave us a go-ahead to suggest product improvement for launch but had the fear of infringement even after the improvement. We carefully analysed every embodiment of the identified patents and suggested key changes to the product features in order to overcome the claims of the identified granted references. The client was very much pleased with our effort and congratulated us for assisting them completely in successfully launching their product.<br></br>' +
      "</p>" +
      "</div>" +
      "</div>" +
      "</div>" +
      "</div>" +
      "</section>",

    title: "PRODUCT LAUNCH UPDATES",
    showCloseButton: true,
    showCancelButton: false,
    showConfirmButton: false,
    focusConfirm: false,
    width: "80%",
  });
}


function patentdrafting() {
  Swal.fire({
    html:
      ' <section class="bg-white dark:bg-gray-800"> ' +
      '<div class="container px-8 pt-8 mx-auto">' +
      '<div class="items-start lg:flex">' +
      '<div class="w=full">' +
      '<p class=" mt-8 text-gray-500 dark:text-gray-400 text-justify ">A California-based technology company wanted to protect their innovative software and associated products. Despite the stringent patentability criteria for software and business method arts, we assisted them in building a strong patent portfolio. We adopted a robust approach that included a strategically planned pre-filing search to locate patents in the similar technology domain and helped them to modify and re-draft the patent claims. Through this laborious process, we were able to procure a strong patent portfolio for the company and helped in increasing their revenue.' +
      "</p>" +
      "</div>" +
      "</div>" +
      "</div>" +
      "</div>" +
      "</section>",

    title: "PATENT DRAFTING AND FILING",
    showCloseButton: true,
    showCancelButton: false,
    showConfirmButton: false,
    focusConfirm: false,
    width: "80%",
  });
}

function evaluationserch() {
  Swal.fire({
    html:
      ' <section class="bg-white dark:bg-gray-800"> ' +
      '<div class="container px-8 pt-8 mx-auto">' +
      '<div class="items-start lg:flex">' +
      '<div class="w=full">' +
      '<p class=" mt-8 text-gray-500 dark:text-gray-400 text-justify ">One of our clients, a patent brokerage company, needed assistance in patent ranking and technology tagging. Through our indigenous method of manual screening and ranking, we assisted the client in the evaluation of patent portfolio and identified patents worth monetizing. For the high value patents, we developed Evidence of Use charts that indicated commercial prospects.' +
      "</p>" +
      "</div>" +
      "</div>" +
      "</div>" +
      "</div>" +
      "</section>",

    title: "PATENT EVALUATION",
    showCloseButton: true,
    showCancelButton: false,
    showConfirmButton: false,
    focusConfirm: false,
    width: "80%",
  });
}

function languagesearch() {
  Swal.fire({
    html:
      ' <section class="bg-white dark:bg-gray-800"> ' +
      '<div class="container px-8 pt-8 mx-auto">' +
      '<div class="items-start lg:flex">' +
      '<div class="w=full">' +
      '<p class=" mt-8 text-gray-500 dark:text-gray-400 text-justify ">We assisted a leading law firm in conducting native Chinese language searches. The objective was to uncover prior art references in the Asian languages that do not have an English language counterpart. The results identified were carefully screened in English language as well as native languages.' +
      "</p>" +
      "</div>" +
      "</div>" +
      "</div>" +
      "</div>" +
      "</section>",

    title: "ASIAN LANGUAGE SEARCH",
    showCloseButton: true,
    showCancelButton: false,
    showConfirmButton: false,
    focusConfirm: false,
    width: "80%",
  });
}

function patentserch() {
  Swal.fire({
    html:
      ' <section class="bg-white dark:bg-gray-800"> ' +
      '<div class="container px-8 pt-8 mx-auto">' +
      '<div class="items-start lg:flex">' +
      '<div class="w=full">' +
      '<p class=" mt-8 text-gray-500 dark:text-gray-400 text-justify ">A US-based technology company wanted to develop a patent filing strategy. The objective was to identify white spaces and technology which would enable them to channelize their research and development initiatives. Our team structured a methodical search strategy that comprised of defining apt technology taxonomy, identified and classified patents pertinent to the taxonomy. The search enabled the client to make well-informed decisions and save costs.' +
      "</p>" +
      "</div>" +
      "</div>" +
      "</div>" +
      "</div>" +
      "</section>",

    title: "PATENT SEARCHES SUPPORT",
    showCloseButton: true,
    showCancelButton: false,
    showConfirmButton: false,
    focusConfirm: false,
    width: "80%",
  });
}
function patentlicencing() {
  Swal.fire({
    html:
      ' <section class="bg-white dark:bg-gray-800"> ' +
      '<div class="container px-8 pt-8 mx-auto">' +
      '<div class="items-start lg:flex">' +
      '<div class="w=full">' +
      '<p class=" mt-8 text-gray-500 dark:text-gray-400 text-justify ">Effectual assisted a US-based company in successfully out-licensing more than 50 patents to multiple players, which resulted in maximizing revenue of more than 60 million dollars. We worked closely with the company’s attorney to identify target products and companies and developed Evidence of Use charts and infringement contentions. Our team provided support in preparing claim to specification charts and prepared responses to invalidity contentions.' +
      "</p>" +
      "</div>" +
      "</div>" +
      "</div>" +
      "</div>" +
      "</section>",

    title: "PATENT LICENSING SUPPORT",
    showCloseButton: true,
    showCancelButton: false,
    showConfirmButton: false,
    focusConfirm: false,
    width: "80%",
  });
}

function ipsupportservices() {
  Swal.fire({
    html:
      ' <section class="bg-white dark:bg-gray-800"> ' +
      '<div class="container px-8 pt-8 mx-auto">' +
      '<div class="items-start lg:flex">' +
      '<div class="w=full">' +
      '<p class=" mt-8 text-gray-500 dark:text-gray-400 text-justify ">A Silicon Valley-based IP law firm was facing challenges related to managing its docketing backlog. Effectual supported the firm through a dedicated team of paralegals who maintain and manage patent dockets and coordinate with the concerned attorneys in preparing filing forms, sending reminders, tracking deadlines, assignment documents, and document classification and management.' +
      "</p>" +
      "</div>" +
      "</div>" +
      "</div>" +
      "</div>" +
      "</section>",

    title: "IP SUPPORT SERVICES",
    showCloseButton: true,
    showCancelButton: false,
    showConfirmButton: false,
    focusConfirm: false,
    width: "80%",
  });
}

function informationdiscloser() {
  Swal.fire({
    html:
      ' <section class="bg-white dark:bg-gray-800"> ' +
      '<div class="container px-8 pt-8 mx-auto">' +
      '<div class="items-start lg:flex">' +
      '<div class="w=full">' +
      '<p class=" mt-8 text-gray-500 dark:text-gray-400 text-justify ">A leading corporate filed a significant number of patent applications and faced challenges with the preparation of their IDS forms. The arduous task involved tracking and identifying the IDSs filed globally. We assisted the client in gathering the prior art from various patent databases and tracking the references filed in the IDSs globally. We identified all the references in the patent application and submitted the IDS as per the guidelines defined by PTO.' +
      "</p>" +
      "</div>" +
      "</div>" +
      "</div>" +
      "</div>" +
      "</section>",

    title: "INFORMATION DISCLOSURE STATEMENT (IDS)",
    showCloseButton: true,
    showCancelButton: false,
    showConfirmButton: false,
    focusConfirm: false,
    width: "80%",
  });
}

function profreading() {
  Swal.fire({
    html:
      ' <section class="bg-white dark:bg-gray-800"> ' +
      '<div class="container px-8 pt-8 mx-auto">' +
      '<div class="items-start lg:flex">' +
      '<div class="w=full">' +
      '<p class=" mt-8 text-gray-500 dark:text-gray-400 text-justify ">A US based law firm based was facing challenges in proofreading patent applications. The objective was to highlight clerical errors and check the subject contextually. The client partnered with us to undertake the paralegal task and we greatly increased their efficiency. We identified the clerical errors such as spelling, bibliographic details, consistency in terms, claim dependencies, etc. Our service yielded significant benefits in terms of minimizing work pressure and helped the client to focus on primary areas.' +
      "</p>" +
      "</div>" +
      "</div>" +
      "</div>" +
      "</div>" +
      "</section>",

    title: "PROOFREADING SERVICES",
    showCloseButton: true,
    showCancelButton: false,
    showConfirmButton: false,
    focusConfirm: false,
    width: "80%",
  });
}

function docketsystem() {
  Swal.fire({
    html:
      ' <section class="bg-white dark:bg-gray-800"> ' +
      '<div class="container px-8 pt-8 mx-auto">' +
      '<div class="items-start lg:flex">' +
      '<div class="w=full">' +
      '<p class=" mt-8 text-gray-500 dark:text-gray-400 text-justify "> Our client is a well-known US law firm, and had concerns about the integrity of the data in their IP docket system. The records included US and non-US cases for patents and trademarks. The causes of their concern were migration to a new docket platform, a significant number of new client intakes and multiple hands entering data in docket system. A customized solution was developed, wherein we agreed on a list of fields for each record in their system that would be compared to source data. The client provided their data by record and fields within the record via Excel which was extracted from their docket system. We ran a script to pull data that is available electronically and through paid databases.We populated mirror fields from source data and highlighted discrepancies. Where no electronic data was available, we utilized their foreign agent network to manually retrieve data. We found an overall error rate of about 35%,15% of which were deemed critical. We engaged on this project in late 2018 and completed it in around 6 weeks. The client was very pleased at how cost effective this important exercise was, the turn-around time and most importantly, the ability to address errors or omissions head-on, reducing risk to the firm and their clients.' +
      "</p>" +
      "</div>" +
      "</div>" +
      "</div>" +
      "</div>" +
      "</section>",

    title: "DATA INTEGRITY IN IP",
    showCloseButton: true,
    showCancelButton: false,
    showConfirmButton: false,
    focusConfirm: false,
    width: "80%",
  });
}

function datavarificationfun() {
  Swal.fire({
    html:
      ' <section class="bg-white dark:bg-gray-800"> ' +
      '<div class="container px-8 pt-8 mx-auto">' +
      '<div class="items-start lg:flex">' +
      '<div class="w=full">' +
      '<p class=" mt-8 text-gray-500 dark:text-gray-400 text-justify ">1. One of our client took over a portfolio of 5000 patents and trademarks and created all the matters in the docketing software without any validation. Very soon, the matters started to collapse, we could see wrong filing/priority dates which was resulting in things being missed. Effectual Services helped this client validate the entire portfolio, corrected all the data in the software and docketed all the active due dates for each and every matter. Error rate was around 40 percent in this case.2. Another client transferred the entire portfolio from one docketing software to another. After the transfer it was noted the entries to have no active task or due dates It was also found that the bibliographic information entered in the system was not in sync with the respective PTO. Effectual Services steps in and takes the charge. We not only updated the entire bibliographic data but also made sure all the irrelevant entries are marked. All the upcoming task and due dates are created for not only US but also Non US jurisdictions. Error rate was around 60 percent in this case.+</p>' +
      "</div>" +
      "</div>" +
      "</div>" +
      "</div>" +
      "</section>",

    title: "DATA VERIFICATION",
    showCloseButton: true,
    showCancelButton: false,
    showConfirmButton: false,
    focusConfirm: false,
    width: "80%",
  });
}

function Indexcasestudy() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [formErrors, setFormErrors] = useState({});
  const [captcha, setCaptcha] = useState(false);

  const handleClick = async (event) => {
    await setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const errors = {};
  const validate = () => {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const company = document.getElementById("company").value;
    const contact = document.getElementById("contact").value;

    const regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (name === "") {
      errors.name = <p className="font-red-700">Name is required</p>
    }
    if (email === "") {
      errors.email = "Email is required";
    }
    if (!email.match(regex) && email !== "") {
      errors.email = "Email is invalid";
    }
    if (contact === "") {
      errors.contact = "phone number  is required";
    }
    if (company === "") {
      errors.company = "company  is required";
    }
    console.log(name, email, contact, company);

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate());
    console.log(formErrors, "formErrors");
    console.log(errors, "errors");
    if (Object.keys(errors).length === 0) {
      console.log("no errors")
      handleClose();
    }
  };

  const collectdata = async () => {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const company = document.getElementById("company").value;
    const contact = document.getElementById("contact").value;
    const message = document.getElementById("message").value;
    if (
      name !== "" &&
      email !== "" &&
      company !== "" &&
      contact !== "" &&
      email.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      window.open(
        "http://www.effepro.com/effectual_articles_posts/Effectual_Services_Case_Studies.zip"
      );
    }
    if (
      name !== "" &&
      email !== "" &&
      company !== "" &&
      contact !== "" &&
      email.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      let info = await fetch("http://localhost:5000/casestudies", {
        method: "post",
        body: JSON.stringify({
          name,
          company,
          contact,
          email,
          message,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      handleClose();
      info = await info.json();
      console.log(info);
    }
  };
  const handleCaptcha = () => {
    setCaptcha(true);
  };

  // const handleOnclick = async () => {
  //   if (Object.keys(errors).length === 0) {
  //     handleClose();
  //   }
  // };

  return (
    <>
      {/* <ModalOverlay><ActualModal /></ModalOverlay> */}
      <div className="px-24  2xl:w-4/5 w-full items-center ">
        <div className="px-4 md:px-10 py-4 md:py-7">
          <div className="sm:flex items-center justify-between">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">
              Files
            </p>
            <div className="mt-4 sm:mt-0">
              <button
                onClick={handleClick}
                className="inline-flex sm:ml-3 items-start justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded"
              >
                {/* href="http://www.effepro.com/Effectual_Services_Case_Studies.pdf" */}
                <p className="text-sm font-medium leading-none text-white">
                  Download All
                </p>
              </button>
            </div>
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorReference="anchorPosition"
              anchorPosition={{ top: 120, left: 300 }}
              anchorOrigin={{
                vertical: "center",
                horizontal: "center",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              PaperProps={{
                style: { width: "60%" },
              }}
            >
              <div
                style={{
                  position: "absolute",
                  color: "white",
                  top: "10px",
                  right: "10px",
                  width: "25px",
                  cursor: "pointer",
                }}
                onClick={handleClose}
              >
                <img src="images/cross.png" alt="close"></img>
              </div>
              <div
                class="  sm:px-10 lg:col-span-2 formbackground"
                style={{ backgroundColor: "#0056A1" }}
              >
                <div
                  style={{
                    paddingTop: "20px",
                    fontSize: "30px",
                    textAlign: "center",
                    color: "white",
                  }}
                >
                  Please enter your details
                </div>
                <form
                  // action="#"
                  // method="POST"
                  class=" grid mt-3 pb-2 grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-8"
                  onSubmit={handleSubmit}
                  style={{ width: "100%" }}
                >
                  <div>
                    {" "}
                    <label
                      for="name"
                      class="block text-sm font-medium text-white"
                    >
                      Name *
                    </label>
                    <div class="mt-1">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        autocomplete="given-name"
                        class="py-2 px-4 block w-full shadow-sm text-gray-900 focus:ring-red-500 focus:border-red-500 border-gray-300 rounded-md"
                      />
                      <p
                        style={{
                          color: "red",
                          fontSize: "12px",
                          marginTop: "5px",
                          fontWeight:700

                        }}
                      >
                        {formErrors.name}
                      </p>
                    </div>
                  </div>
                  <div>
                    <label
                      for="email"
                      class="block text-sm font-medium text-white"
                    >
                      Email *
                    </label>
                    <div class="mt-1">
                      <input
                        type="text"
                        name="email"
                        id="email"
                        autocomplete="family-name"
                        class="py-2 px-4 block w-full shadow-sm text-gray-900 focus:ring-red-500 focus:border-red-500 border-gray-300 rounded-md"
                      />
                      <p
                        style={{
                          color: "red",
                          fontSize: "12px",
                          marginTop: "5px",
                          fontWeight:700

                        }}
                      >
                        {formErrors.email}
                      </p>
                    </div>
                  </div>
                  <div>
                    <label
                      for="email"
                      class="block text-sm font-medium text-white"
                    >
                      Company *
                    </label>
                    <div class="mt-1">
                      <input
                        type="text"
                        name="company"
                        id="company"
                        autocomplete="family-name"
                        class="py-2 px-4 block w-full shadow-sm text-gray-900 focus:ring-red-500 focus:border-red-500 border-gray-300 rounded-md"
                      />
                      <p
                        style={{
                          color: "red",
                          fontSize: "12px",
                          marginTop: "5px",
                          fontWeight:700

                        }}
                      >
                        {formErrors.company}
                      </p>
                    </div>
                  </div>
                  <div>
                    <div class="flex justify-between">
                      <label
                        for="contact"
                        class="block text-sm font-medium text-white"
                      >
                        Phone *
                      </label>
                    </div>
                    <div class="mt-1">
                      <input
                        type="text"
                        name="contact"
                        id="contact"
                        autocomplete="tel"
                        class="py-2 px-4 block w-full shadow-sm text-gray-900 focus:ring-red-500 focus:border-red-500 border-gray-300 rounded-md"
                        aria-describedby="phone-optional"
                      />
                      <p
                        style={{
                          color: "red",
                          fontSize: "12px",
                          marginTop: "5px",
                          fontWeight:700
                        }}
                      >
                        {formErrors.contact}
                      </p>
                    </div>
                  </div>

                  <div class="sm:col-span-2">
                    <div class="flex justify-between">
                      <label
                        for="message"
                        class="block text-sm font-medium text-white"
                      >
                        Message
                      </label>
                      <span id="message-max" class="text-sm text-white">
                        Max. 500 characters
                      </span>
                    </div>
                    <div class="mt-1">
                      <textarea
                        id="message"
                        name="message"
                        rows="2"
                        class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-red-500 focus:border-red-500 border-gray-300 rounded-md"
                        aria-describedby="message-max"
                      ></textarea>
                    </div>
                    <p class="text-sm pt-4 text-white">
                      By clicking the submit button, you give Effectual Services
                      consent to store and process the personal information
                      submitted above. Effectual is committed to protecting and
                      respecting your privacy, we\'ll only use your information
                      to provide the products and services you requested from
                      us.
                    </p>
                  </div>
                  <ReCAPTCHA
                    sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                    onChange={handleCaptcha}
                  />

                  <div class="sm:col-span-2 sm:flex sm:justify-end">
                    {captcha && (
                      <button
                        type="submit"
                        class=" w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:w-auto"
                        onClick={collectdata}
                        onSubmit={handleSubmit}
                      >
                        Submit
                      </button>
                    )}
                  </div>
                </form>
              </div>
            </Popover>
          </div>
        </div>
        <div className="bg-white px-4 md:px-10 pb-5">
          <div className="overflow-x-auto">
            <table className="w-full whitespace-nowrap">
              <tbody>
                <tr className="w-full h-16 border-gray-300 dark:border-gray-200 border-b py-8 bg-indigo-100">
                  <th className="pl-8 text-gray-600 font-normal pr-6 text-left text-sm tracking-normal leading-4 text-center">
                    Category
                  </th>

                  <th className="text-gray-600 font-normal pr-6 text-left text-sm tracking-normal leading-4 text-center"></th>

                  <th className="text-gray-600 font-normal pr-6 text-left text-sm tracking-normal leading-4 text-center">
                    Time
                  </th>

                  <th className="text-gray-600 font-normal pr-6 text-left text-sm tracking-normal leading-4 text-center">
                    Action
                  </th>
                </tr>

                <tr className="text-sm leading-none text-gray-600 h-16">
                  <td className="w-1/2">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-blue-400 rounded-sm flex items-center justify-center">
                        <p className="text-xs font-bold leading-3 text-white">
                          1.
                        </p>
                      </div>
                      <div className="pl-2">
                        <p className="text-sm font-medium leading-none text-gray-800">
                          {" "}
                          PATENT EVALUATION
                        </p>
                      </div>
                    </div>
                  </td>

                  <td>
                    <p className="pl-16"></p>
                  </td>

                  <td>
                    <p className="pl-16">Shared on 21 Februray 2020</p>
                  </td>
                  <td>
                    <button
                      onClick={evaluationserch}
                      className="mx-2 my-2 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-5 py-1 text-xs"
                    >
                      View
                    </button>
                  </td>
                </tr>

                <tr className="text-sm leading-none text-gray-600 h-16">
                  <td className="w-1/2">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-blue-400 rounded-sm flex items-center justify-center">
                        <p className="text-xs font-bold leading-3 text-white">
                          2.
                        </p>
                      </div>
                      <div className="pl-2">
                        <p className="text-sm font-medium leading-none text-gray-800">
                          ASIAN LANGUAGE SEARCH
                        </p>
                      </div>
                    </div>
                  </td>

                  <td>
                    <p className="pl-16"></p>
                  </td>

                  <td>
                    <p className="pl-16">Shared on 21 Februray 2020</p>
                  </td>
                  <td>
                    <button
                      onClick={languagesearch}
                      className="mx-2 my-2 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-5 py-1 text-xs"
                    >
                      View
                    </button>
                  </td>
                </tr>

                <tr className="text-sm leading-none text-gray-600 h-16">
                  <td className="w-1/2">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-blue-400 rounded-sm flex items-center justify-center">
                        <p className="text-xs font-bold leading-3 text-white">
                          3.
                        </p>
                      </div>
                      <div className="pl-2">
                        <p className="text-sm font-medium leading-none text-gray-800">
                          PATENT DRAFTING AND FILING
                        </p>
                      </div>
                    </div>
                  </td>

                  <td>
                    <p className="pl-16"></p>
                  </td>

                  <td>
                    <p className="pl-16">Shared on 21 Februray 2020</p>
                  </td>
                  <td>
                    <button
                      onClick={patentdrafting}
                      className="mx-2 my-2 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-5 py-1 text-xs"
                    >
                      View
                    </button>
                  </td>
                </tr>

                <tr className="text-sm leading-none text-gray-600 h-16">
                  <td className="w-1/2">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-blue-400 rounded-sm flex items-center justify-center">
                        <p className="text-xs font-bold leading-3 text-white">
                          4.
                        </p>
                      </div>
                      <div className="pl-2">
                        <p className="text-sm font-medium leading-none text-gray-800">
                          {" "}
                          PATENT SEARCHES
                        </p>
                      </div>
                    </div>
                  </td>

                  <td>
                    <p className="pl-16"></p>
                  </td>

                  <td>
                    <p className="pl-16">Shared on 21 Februray 2020</p>
                  </td>
                  <td>
                    <button
                      onClick={patentserch}
                      className="mx-2 my-2 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-5 py-1 text-xs"
                    >
                      View
                    </button>
                  </td>
                </tr>

                <tr className="text-sm leading-none text-gray-600 h-16">
                  <td className="w-1/2">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-blue-400 rounded-sm flex items-center justify-center">
                        <p className="text-xs font-bold leading-3 text-white">
                          5.
                        </p>
                      </div>
                      <div className="pl-2">
                        <p className="text-sm font-medium leading-none text-gray-800">
                          {" "}
                          PATENT LICENSING SUPPORT
                        </p>
                      </div>
                    </div>
                  </td>

                  <td>
                    <p className="pl-16"></p>
                  </td>

                  <td>
                    <p className="pl-16">Shared on 21 Februray 2020</p>
                  </td>
                  <td>
                    <button
                      onClick={patentlicencing}
                      className="mx-2 my-2 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-5 py-1 text-xs"
                    >
                      View
                    </button>
                  </td>
                </tr>

                <tr className="text-sm leading-none text-gray-600 h-16">
                  <td className="w-1/2">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-blue-400 rounded-sm flex items-center justify-center">
                        <p className="text-xs font-bold leading-3 text-white">
                          6.
                        </p>
                      </div>
                      <div className="pl-2">
                        <p className="text-sm font-medium leading-none text-gray-800">
                          IP SUPPORT SERVICES
                        </p>
                      </div>
                    </div>
                  </td>

                  <td>
                    <p className="pl-16"></p>
                  </td>

                  <td>
                    <p className="pl-16">Shared on 21 Februray 2020</p>
                  </td>
                  <td>
                    <button
                      onClick={ipsupportservices}
                      className="mx-2 my-2 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-5 py-1 text-xs"
                    >
                      View
                    </button>
                  </td>
                </tr>

                <tr className="text-sm leading-none text-gray-600 h-16">
                  <td className="w-1/2">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-blue-400 rounded-sm flex items-center justify-center">
                        <p className="text-xs font-bold leading-3 text-white">
                          7.
                        </p>
                      </div>
                      <div className="pl-2">
                        <p className="text-sm font-medium leading-none text-gray-800">
                          INFORMATION DISCLOSURE STATEMENT (IDS)
                        </p>
                      </div>
                    </div>
                  </td>

                  <td>
                    <p className="pl-16"></p>
                  </td>

                  <td>
                    <p className="pl-16">Shared on 21 Februray 2020</p>
                  </td>
                  <td>
                    <button
                      onClick={informationdiscloser}
                      className="mx-2 my-2 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-5 py-1 text-xs"
                    >
                      View
                    </button>
                  </td>
                </tr>

                <tr className="text-sm leading-none text-gray-600 h-16">
                  <td className="w-1/2">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-blue-400 rounded-sm flex items-center justify-center">
                        <p className="text-xs font-bold leading-3 text-white">
                          8.
                        </p>
                      </div>
                      <div className="pl-2">
                        <p className="text-sm font-medium leading-none text-gray-800">
                          {" "}
                          PROOFREADING SERVICES
                        </p>
                      </div>
                    </div>
                  </td>

                  <td>
                    <p className="pl-16"></p>
                  </td>

                  <td>
                    <p className="pl-16">Shared on 21 Februray 2020</p>
                  </td>

                  <td>
                    <button
                      onClick={profreading}
                      className="mx-2 my-2 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-5 py-1 text-xs"
                    >
                      View
                    </button>
                  </td>
                </tr>

                <tr className="text-sm leading-none text-gray-600 h-16">
                  <td className="w-1/2">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-blue-400 rounded-sm flex items-center justify-center">
                        <p className="text-xs font-bold leading-3 text-white">
                          9.
                        </p>
                      </div>
                      <div className="pl-2">
                        <p className="text-sm font-medium leading-none text-gray-800">
                          {" "}
                          DATA INTEGRITY IN IP DOCKET SYSTEM
                        </p>
                      </div>
                    </div>
                  </td>

                  <td>
                    <p className="pl-16"></p>
                  </td>

                  <td>
                    <p className="pl-16">Shared on 21 Februray 2020</p>
                  </td>

                  <td>
                    <button
                      onClick={docketsystem}
                      className="mx-2 my-2 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-5 py-1 text-xs"
                    >
                      View
                    </button>
                  </td>

                  <td></td>
                </tr>

                <tr className="text-sm leading-none text-gray-600 h-16">
                  <td className="w-1/2">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-blue-400 rounded-sm flex items-center justify-center">
                        <p className="text-xs font-bold leading-3 text-white">
                          10.
                        </p>
                      </div>
                      <div className="pl-2">
                        <p className="text-sm font-medium leading-none text-gray-800">
                          {" "}
                          DATA VERIFICATION
                        </p>
                      </div>
                    </div>
                  </td>

                  <td>
                    <p className="pl-16"></p>
                  </td>

                  <td>
                    <p className="pl-16">Shared on 21 Februray 2020</p>
                  </td>

                  <td>
                    <button
                      onClick={datavarificationfun}
                      className="mx-2 my-2 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-5 py-1 text-xs"
                    >
                      View
                    </button>
                  </td>

                  <td></td>
                </tr>


                <tr className="text-sm leading-none text-gray-600 h-16">
                  <td className="w-1/2">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-blue-400 rounded-sm flex items-center justify-center">
                        <p className="text-xs font-bold leading-3 text-white">
                          11.
                        </p>
                      </div>
                      <div className="pl-2">
                        <p className="text-sm font-medium leading-none text-gray-800">
                          {" "}
                          PRODUCT LAUNCH UPDATES
                        </p>
                      </div>
                    </div>
                  </td>

                  <td>
                    <p className="pl-16"></p>
                  </td>

                  <td>
                    <p className="pl-16">Shared on 21 Februray 2020</p>
                  </td>

                  <td>
                    <button
                      onClick={productlaunchupdate}
                      className="mx-2 my-2 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-5 py-1 text-xs"
                    >
                      View
                    </button>
                  </td>

                  <td></td>
                </tr>



              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Indexcasestudy;
