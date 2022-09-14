import React, { useState } from "react";
import Popover from "@mui/material/Popover";
import { ImCross } from "react-icons/im";
import ReCAPTCHA from "react-google-recaptcha";

const Footer = () => {
  // function opencontactmodal() {
  //   Swal.fire({
  //     html:
  // ' <section class="text-gray-600 body-font transition duration-150 ease-in-out z-500 bg-gray-200 rounded-lg" >' +
  // '<div class="container  ">' +
  // '<div class="max-w-7xl mx-aut ">' +
  // '<div class="relative bg-white shadow-xl">' +
  // '<div class="grid grid-cols-1 lg:grid-cols-3">' +
  // '<div class="relative overflow-hidden  bg-red-700 xl:p-5">' +
  // '<div class="absolute inset-0 pointer-events-none sm:hidden" aria-hidden="true">' +
  // '<svg class="absolute inset-0 w-full h-full" width="343" height="388" viewBox="0 0 343 388" fill="none" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">' +
  // '<path d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z" fill="url(#linear1)" fill-opacity=".1"></path>' +
  // "<defs>" +
  // ' <linearGradient id="linear1" x1="254.553" y1="107.554" x2="961.66" y2="814.66" gradientUnits="userSpaceOnUse">' +
  // ' <stop stop-color="#fff"></stop> ' +
  // '<stop offset="1" stop-color="#fff" stop-opacity="0"></stop>' +
  // "</linearGradient>" +
  // "</defs>" +
  // " </svg>" +
  // " </div>" +
  // '<div class="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none sm:block lg:hidden" aria-hidden="true">' +
  // '<svg class="absolute inset-0 w-full h-full" width="359" height="339" viewBox="0 0 359 339" fill="none" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">' +
  // '<path d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z" fill="url(#linear2)" fill-opacity=".1"></path>' +
  // "<defs>" +
  // '<linearGradient id="linear2" x1="192.553" y1="28.553" x2="899.66" y2="735.66" gradientUnits="userSpaceOnUse">' +
  // '<stop stop-color="#fff"></stop>' +
  // '<stop offset="1" stop-color="#fff" stop-opacity="0"></stop>' +
  // "</linearGradient>" +
  // "</defs>" +
  // "</svg>" +
  // "</div>" +
  // '<div class="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none lg:block" aria-hidden="true">' +
  // '<svg class="absolute inset-0 w-full h-full" width="160" height="678" viewBox="0 0 160 678" fill="none" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">' +
  // '<path d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z" fill="url(#linear3)" fill-opacity=".1"></path>' +
  // "<defs>" +
  // '<linearGradient id="linear3" x1="192.553" y1="325.553" x2="899.66" y2="1032.66" gradientUnits="userSpaceOnUse">' +
  // '<stop stop-color="#fff"></stop>' +
  // '<stop offset="1" stop-color="#fff" stop-opacity="0"></stop>' +
  // "</linearGradient>" +
  // "</defs>" +
  // "</svg>" +
  // "</div>" +
  // '<h1 class="text-2xl md:text-4xl 2xl:text-5xl leading-10 text-gray-200"><span class="font-bold">Contact</span> <span class="italic">Us</span></h1>' +
  // '<p class="mt-3 text-base text-red-50 max-w-3xl">USA: Suite-427,425 Broadhollow Road Melville | NY-11747</p> ' +
  // '<p class="mt-3 text-base text-red-50 max-w-3xl">    India: SDF A-05, NSEZ, Noida–Dadri Road, Noida Phase II -201305 ' +
  // '</p><p class="mt-3 text-base text-red-50 max-w-3xl"> Singapore: 531A, Upper Cross Street, Singapore- 051531</p>' +
  // '<dl class="mt-3 space-y-6">' +
  // '<dt><span class="sr-only">Phone number</span></dt>' +
  // '<dd class="flex text-base text-red-50">' +
  // '<svg class="flex-shrink-0 w-6 h-6 text-red-200" x-description="Heroicon name: outline/phone" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">' +
  // '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>' +
  // '<span class="ml-3">  +1-469-666-1181, +1-972-256-8133 </span>' +
  // '</dd><dt><span class="sr-only">Phone number</span></dt> <dd class="flex text-base text-red-50"><svg class="flex-shrink-0 w-6 h-6 text-red-200" x-description="Heroicon name: outline/phone" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">' +
  // '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>' +
  // "</svg>" +
  // '<span class="ml-2">' +
  // "+91-981-068-8705 <br /> +91-887-919-3964 <br /> +91-772-888-0256" +
  // '</span>                 </dd>    <dt><span class="sr-only">Email</span></dt>' +
  // '<dd class="flex text-base text-red-50">      <svg class="flex-shrink-0 w-6 h-6 text-red-200" x-description="Heroicon name: outline/mail" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">' +
  // '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>' +
  // '</svg>                    <span class="ml-3">info@effectualservices.com</span>                  </dd>                </dl>                <ul class="mt-6 flex space-x-12">' +
  // '<li><button class="text-red-200 hover:text-red-100" href="#">' +
  // '<span class="sr-only">Facebook</span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" aria-hidden="true">' +
  // '<path d="M22.258 1H2.242C1.556 1 1 1.556 1 2.242v20.016c0 .686.556 1.242 1.242 1.242h10.776v-8.713h-2.932V11.39h2.932V8.887c0-2.906 1.775-4.489 4.367-4.489 1.242 0 2.31.093 2.62.134v3.037l-1.797.001c-1.41 0-1.683.67-1.683 1.653v2.168h3.362l-.438 3.396h-2.924V23.5h5.733c.686 0 1.242-.556 1.242-1.242V2.242C23.5 1.556 22.944 1 22.258 1" fill="currentColor"></path>' +
  // "</svg>  </button>  </li>          <li>" +
  // '<button class="text-red-200 hover:text-red-100" href="#">' +
  // '<span class="sr-only">GitHub</span> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" aria-hidden="true">' +
  // '<path d="M11.999 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.386.6.11.819-.26.819-.578 0-.284-.01-1.04-.017-2.04-3.337.724-4.042-1.61-4.042-1.61-.545-1.386-1.332-1.755-1.332-1.755-1.09-.744.082-.73.082-.73 1.205.086 1.838 1.238 1.838 1.238 1.07 1.833 2.81 1.304 3.493.996.109-.775.419-1.303.762-1.603C7.145 17 4.343 15.97 4.343 11.373c0-1.31.468-2.382 1.236-3.22-.124-.304-.536-1.524.118-3.176 0 0 1.007-.323 3.3 1.23.956-.266 1.983-.4 3.003-.404 1.02.005 2.046.138 3.005.404 2.29-1.553 3.296-1.23 3.296-1.23.655 1.652.243 2.872.12 3.176.77.838 1.233 1.91 1.233 3.22 0 4.61-2.806 5.624-5.478 5.921.43.37.814 1.103.814 2.223 0 1.603-.015 2.898-.015 3.291 0 .321.217.695.825.578C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12.001-12" fill="currentColor"></path>' +
  // '</svg></button></li><li><button class="text-red-200 hover:text-red-100" href="#">' +
  // '<span class="sr-only">Twitter</span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" aria-hidden="true">' +
  // '<path d="M7.548 22.501c9.056 0 14.01-7.503 14.01-14.01 0-.213 0-.425-.015-.636A10.02 10.02 0 0024 5.305a9.828 9.828 0 01-2.828.776 4.94 4.94 0 002.165-2.724 9.867 9.867 0 01-3.127 1.195 4.929 4.929 0 00-8.391 4.491A13.98 13.98 0 011.67 3.9a4.928 4.928 0 001.525 6.573A4.887 4.887 0 01.96 9.855v.063a4.926 4.926 0 003.95 4.827 4.917 4.917 0 01-2.223.084 4.93 4.93 0 004.6 3.42A9.88 9.88 0 010 20.289a13.941 13.941 0 007.548 2.209" fill="currentColor"></path>' +
  // "</svg></button> </li>  </ul> </div>" +
  // '<div class=" px-6 pt-4 sm:px-10 lg:col-span-2 formbackground" style="background-color:#0056A1"}}>' +
  // '<p class="text-white text-base">Thank you for your interest in Effectual Services. Please fill out the form below and we will contact you shortly. For careers/recruitments related queries, please visit our Careers page.</p>' +
  // '<p class="text-white mt-5 text-xs">Required fields are marked with an asterisk</p>' +
  // '<form action="#" method="POST" class=" grid mt-4 grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">' +
  // '<div>  <label for="first_name" class="block text-sm font-medium text-white">Name *</label><div class="mt-1"><input type="text" id="name" name="name" id="name" autocomplete="given-name" class="py-2 px-4 block w-full shadow-sm text-gray-900 focus:ring-red-500 focus:border-red-500 border-gray-300 rounded-md" />' +
  // "</div>" +
  // "</div>" +
  // "<div>" +
  // '<label for="last_name" class="block text-sm font-medium text-white">Email *</label>' +
  // '<div class="mt-1">' +
  // '<input type="text" name="email" id="email" autocomplete="family-name" class="py-2 px-4 block w-full shadow-sm text-gray-900 focus:ring-red-500 focus:border-red-500 border-gray-300 rounded-md" />' +
  // "</div>" +
  // "</div>" +
  // "<div>" +
  // '<label for="email" " class="block text-sm font-medium text-white">Service for Enquiry *</label>' +
  // '<div class="mt-1">' +
  // '<select id="service_for_enquiry" class="form-select appearance-none block w-full px-3 py-1.5 text-base  font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example"> ' +
  // "<option selected value='select'>Click here to select Service" +
  // '<svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">' +
  // '<path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />' +
  // "</svg>" +
  // '</option><option value="Patents">Patents</option>' +
  // '<option value="Trademarks">Trademarks</option><option value="Market Research">Market Research</option> <option value="Research & Development">Research & Development</option> </select>' +
  // "</div>" +
  // "</div>" +
  // "<div>" +
  // '<div class="flex justify-between">' +
  // '<label for="phone" class="block text-sm font-medium text-white">Phone *</label>' +
  // "</div>" +
  // '<div class="mt-1">' +
  // '<input type="text" name="phone" id="phone" autocomplete="tel" class="py-2 px-4 block w-full shadow-sm text-gray-900 focus:ring-red-500 focus:border-red-500 border-gray-300 rounded-md" aria-describedby="phone-optional" />' +
  // "</div>" +
  // "</div>" +
  // '<div class="sm:col-span-2">' +
  // '<div class="flex justify-between">' +
  // '<label for="message" class="block text-sm font-medium text-white">Message</label>' +
  // '<span id="message-max" class="text-sm text-white">Max. 500 characters</span>' +
  // "</div>" +
  // '<div class="mt-1">' +
  // '<textarea id="message" name="message" rows="4" class=" px-4 block w-full shadow-sm text-gray-900 focus:ring-red-500 focus:border-red-500 border-gray-300 rounded-md" aria-describedby="message-max"></textarea>' +
  // "</div>" +
  // '<p class="text-sm pt-2 text-white">By clicking the submit button, you give Effectual Services consent to store and process the personal information submitted above. Effectual is committed to protecting and respecting your privacy, we\'ll only use your information to provide the products and services you requested from us.</p>' +
  // "</div>" +
  // '<div class="sm:col-span-2 sm:flex sm:justify-end">' +
  // "</div>" +
  // "</form>" +
  // "</div>" +
  // "</div>" +
  // "</div>" +
  // "</div>" +
  // "</div>" +
  // "</div>" +
  // "</section> ",
  //     showCloseButton: true,
  //     showCancelButton: false,
  //     showConfirmButton: true,
  //     confirmButtonText: "Submit",
  //     width: "75%",
  //     confirmButtonColor: "#b91c1c",
  //     background: "#0056A1",

  //     // preConfirm: () => {
  //     //   let validate = false;
  //     //   const name = document.getElementById("name").value;
  //     //   const email = document.getElementById("email").value;
  //     //   const service_for_enquiry = document.getElementById(
  //     //     "service_for_enquiry"
  //     //   ).value;
  //     //   const phone = document.getElementById("phone").value;
  //     //   const message = document.getElementById("message").value;
  //     //   console.log({ name, email, service_for_enquiry, phone, message });
  //     //   if (
  //     //     document.getElementById("name").value !== "" &&
  //     //     document.getElementById("email").value !== "" &&
  //     //     document.getElementById("phone").value !== "" &&
  //     //     document.getElementById("service_for_enquiry").value !== "select"
  //     //   ) {
  //     //     validate = true;
  //     //   }
  //     //   console.log(validate, "validate");
  //     //   if (!validate) {
  //     //     Swal.showValidationMessage("please enter the required feilds");
  //     //   } else {
  //     //     let info = axios({
  //     //       url: "http://localhost:5000/",
  //     //       method: "POST",
  //     //       headers: {
  //     //         "Content-Type": "application/json",
  //     //         "Access-Control-Allow-Origin": "*",
  //     //       },
  //     //       data: JSON.stringify({
  //     //         name,
  //     //         email,
  //     //         service_for_enquiry,
  //     //         phone,
  //     //         message,
  //     //       }),
  //     //     })
  //     //       .then((res) => {
  //     //         info = res.data;
  //     //         console.log(info, "info");
  //     //       })
  //     //       .catch((err) => {
  //     //         console.log(err);
  //     //       });
  //     //   }
  //     // },
  //     preConfirm: () => {
  //       let validate = false;
  //       const name = document.getElementById("name").value;
  //       const service_for_enquiry = document.getElementById(
  //         "service_for_enquiry"
  //       ).value;
  //       const email = document.getElementById("email").value;
  //       const phone = document.getElementById("phone").value;
  //       const message = document.getElementById("message").value;
  //       if (
  //         document.getElementById("name").value !== "" &&
  //         document.getElementById("email").value !== "" &&
  //         document.getElementById("phone").value !== "" &&
  //         document.getElementById("service_for_enquiry").value !== "select"
  //       ) {
  //         validate = true;
  //       }
  //       console.log(validate, "validate");
  //       let userData = {
  //         name: name,
  //         service_for_enquiry: service_for_enquiry,
  //         email: email,
  //         phone: phone,
  //         message: message,
  //       };
  //       console.log(userData, "userData");

  //       if (!validate) {
  //         Swal.showValidationMessage("please enter the required feilds");
  //       } else {
  //         let info = axios({
  //           url: "http://localhost:5000/",
  //           method: "POST",
  //           headers: {
  //             "Content-Type": "application/json",
  //             "Access-Control-Allow-Origin": "*",
  //           },
  //           data: JSON.stringify(userData),
  //         })
  //           .then((res) => {
  //             if (validate) info = res.data;
  //             console.log(info, "info");
  //           })
  //           .catch((err) => {
  //             console.log(err);
  //           });
  //       }
  //     },
  //   });
  // }
  const [anchorEl, setAnchorEl] = useState(null);
  const [captcha, setCaptcha] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  const handleCaptcha = () => {
    setCaptcha(true);
  };

  const handleClick = async (event) => {
    await setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const errors = {};
  const validate = () => {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const service_for_enquiry = document.getElementById(
      "service_for_enquiry"
    ).value;
    const contact = document.getElementById("contact").value;

    const regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (name === "") {
      errors.name = <h4 className="text-red-700">Name is required *</h4>
    }
    if (email === "") {
      errors.email = <h4 className="text-red-700">Email is required *</h4>
    }
    if (!email.match(regex) && email !== "") {
      errors.email =<h4 className="text-red-700">Email is invalid *</h4> 
    }
    if (contact === "") {
      errors.contact = errors.email =<h4 className="text-red-700">Phone number  is required *</h4>
    }
    if (service_for_enquiry === "select") {
      errors.service_for_enquiry = <h4 className="text-red-700">Company  is required *</h4>
    }
    console.log(name, email, contact, service_for_enquiry);

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate());
    console.log(formErrors, "formErrors");
    console.log(errors, "errors");
    if (Object.keys(errors).length === 0) {
      handleClose();
    }
  };

  const collectdata = async () => {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const service_for_enquiry = document.getElementById(
      "service_for_enquiry"
    ).value;
    const contact = document.getElementById("contact").value;
    const message = document.getElementById("message").value;

    if (
      name !== "" &&
      email !== "" &&
      service_for_enquiry !== "select" &&
      contact !== "" &&
      email.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      let info = await fetch("http://localhost:5000/", {
        method: "post",
        body: JSON.stringify({
          name,
          service_for_enquiry,
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

  return (
    <footer class="bg-gray-800" aria-labelledby="footerHeading">
      <h2 id="footerHeading" class="sr-only">
        Footer
      </h2>
      <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div class="xl:grid xl:grid-cols-3 xl:gap-8">
          <div class="grid grid-cols-2 gap-8 xl:col-span-2">
            <div class="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 class="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Quick Links
                </h3>
                <ul class="mt-4 space-y-4">
                  <li>
                    <a
                      href="/"
                      class="text-base text-gray-300 hover:text-white"
                    >
                      Home
                    </a>
                  </li>

                  <li>
                    <a
                      href="career"
                      class="text-base text-gray-300 hover:text-white"
                    >
                      Career
                    </a>
                  </li>

                  <li>
                    <a
                      href="life-at-effectual"
                      class="text-base text-gray-300 hover:text-white"
                    >
                      Life at Effectual
                    </a>
                  </li>

                  <li>
                    <a
                      href="/contact-us"
                      class="text-base text-gray-300 hover:text-white"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div class="mt-12 md:mt-0">
                <h3 class="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  About
                </h3>
                <ul class="mt-4 space-y-4">
                  <li>
                    <a
                      href="who-we-are"
                      class="text-base text-gray-300 hover:text-white"
                    >
                      Who We Are
                    </a>
                  </li>

                  <li>
                    <a
                      href="founders-leadership"
                      class="text-base text-gray-300 hover:text-white"
                    >
                      Founders & Leadership
                    </a>
                  </li>

                  <li>
                    <a
                      href="about-csr"
                      class="text-base text-gray-300 hover:text-white"
                    >
                      About CSR
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 class="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Solutions
                </h3>
                <ul class="mt-4 space-y-4">
                  <li>
                    <a
                      href="/patents"
                      class="text-base text-gray-300 hover:text-white"
                    >
                      Patent
                    </a>
                  </li>

                  <li>
                    <a
                      href="trademark-management"
                      class="text-base text-gray-300 hover:text-white"
                    >
                      Trademark Management
                    </a>
                  </li>

                  <li>
                    <a
                      href="research-and-development"
                      class="text-base text-gray-300 hover:text-white"
                    >
                      Research & Development
                    </a>
                  </li>
                </ul>
              </div>
              <div class="mt-12 md:mt-0">
                <h3 class="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Expertise Domains
                </h3>
                <ul class="mt-4 space-y-4">
                  <li>
                    <a
                      href="information-communication-technology"
                      class="text-base text-gray-300 hover:text-white"
                    >
                      Information Communication Technology
                    </a>
                  </li>

                  <li>
                    <a
                      href="lifesciences-and-chemistry"
                      class="text-base text-gray-300 hover:text-white"
                    >
                      Life-Sciences & Chemistry
                    </a>
                  </li>

                  <li>
                    <a
                      href="industry-engineering"
                      class="text-base text-gray-300 hover:text-white"
                    >
                      Engineering
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="mt-8 xl:mt-0 px-8">
            <h3 class="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Get in Touch with Us
            </h3>

            <div class="flex py-4 w-full space-x-10 md:order-2">
              <a
                href="https://www.facebook.com/EffectualServices/"
                class="text-gray-400 hover:text-gray-300"
              >
                <span class="sr-only">Facebook</span>
                <svg
                  class="h-8 w-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>

              <a
                href="https://in.linkedin.com/company/effectual-services"
                class="text-gray-400 hover:text-gray-300"
              >
                <span class="sr-only">Instagram</span>
                <svg
                  class="h-8 w-8"
                  fill="currentColor"
                  viewBox="0 0 48 48"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M20.9716667,33.5527338 L25.001,33.5527338 L25.001,27.1328007 C25.001,25.439485 25.3213333,23.7988354 27.4206667,23.7988354 C29.491,23.7988354 29.517,25.7351486 29.517,27.2404662 L29.517,33.5527338 L33.5506667,33.5527338 L33.5506667,26.4341413 C33.5506667,22.9381777 32.796,20.2505391 28.711,20.2505391 C26.7483333,20.2505391 25.432,21.3265278 24.8943333,22.3471839 L24.839,22.3471839 L24.839,20.5725357 L20.9716667,20.5725357 L20.9716667,33.5527338 Z M16.423,14.1202696 C15.1273333,14.1202696 14.0823333,15.1682587 14.0823333,16.4595785 C14.0823333,17.7508984 15.1273333,18.7992208 16.423,18.7992208 C17.7133333,18.7992208 18.761,17.7508984 18.761,16.4595785 C18.761,15.1682587 17.7133333,14.1202696 16.423,14.1202696 L16.423,14.1202696 Z M14.4026667,33.5527338 L18.4406667,33.5527338 L18.4406667,20.5725357 L14.4026667,20.5725357 L14.4026667,33.5527338 Z M9.76633333,40 C8.79033333,40 8,39.2090082 8,38.2336851 L8,9.76631493 C8,8.79065843 8.79033333,8 9.76633333,8 L38.234,8 C39.2093333,8 40,8.79065843 40,9.76631493 L40,38.2336851 C40,39.2090082 39.2093333,40 38.234,40 L9.76633333,40 Z"
                  ></path>
                </svg>
              </a>

              <a
                href="https://twitter.com/effectualip"
                class="text-gray-400 hover:text-gray-300"
              >
                <span class="sr-only">Twitter</span>
                <svg
                  class="h-8 w-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </a>
            </div>

            <div class="mt-3 py-4 rounded-md sm:mt-0 sm:flex-shrink-0">
              <button
                class="w-1/2 bg-red-600 border border-transparent rounded-md py-2 px-4 flex items-center justify-center text-base font-medium text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-red-600"
                onClick={handleClick}
              >
                Contact Us
              </button>
            </div>
            {/* <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
            > */}
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorReference="anchorPosition"
              anchorPosition={{ top: 80, left: 10 }}
              anchorOrigin={{
                vertical: "center",
                horizontal: "center",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
            >
              <div
                style={{
                  display: "flex",
                  width: " 100%",
                  backgroundColor: "aqua",
                  color: "white",
                }}
              >
                <div
                  style={{
                    width: "40%",
                    background: "#770000",
                    padding: "10px",
                    textAlign: "center",
                  }}
                >
                  <div className="heading mt-3" style={{ fontSize: "50px" }}>
                    {" "}
                    Contact Us
                  </div>
                  <div>
                    <p
                      style={{ fontSize: "20px", marginTop: "20px" }}
                      className="mt-3 text-base text-red-50 max-w-3xl "
                    >
                      USA: Suite-427,425 Broadhollow Road Melville | NY-11747
                    </p>
                    <p
                      style={{ fontSize: "20px", marginTop: "15px" }}
                      className="mt-3 text-base text-red-50 max-w-3xl"
                    >
                      India: SDF A-05, NSEZ, Noida–Dadri Road, Noida Phase II
                      -201305
                    </p>
                    <p
                      style={{ fontSize: "20px", marginTop: "15px" }}
                      className="mt-3 text-base text-red-50 max-w-3xl"
                    >
                      Singapore: 531A, Upper Cross Street, Singapore- 051531
                    </p>
                    <div
                      style={{
                        display: "flex",
                        textAlign: "left",
                        marginTop: "40px",
                      }}
                    >
                      <svg
                        class="flex-shrink-0 w-6 h-6 text-red-200"
                        x-description="Heroicon name: outline/phone"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        ></path>
                      </svg>
                      <p class="ml-3">+1-469-666-1181, +1-972-256-8133 </p>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        textAlign: "left",
                        gap: "15px",
                        marginTop: "20px",
                      }}
                    >
                      <svg
                        class="flex-shrink-0 w-6 h-6 text-red-200"
                        x-description="Heroicon name: outline/phone"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        ></path>
                      </svg>
                      <p>
                        +91-981-068-8705 <br /> +91-887-919-3964 <br />
                        +91-772-888-0256
                      </p>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        textAlign: "left",
                        gap: "15px",
                        marginTop: "20px",
                      }}
                    >
                      <svg
                        class="flex-shrink-0 w-6 h-6 text-red-200"
                        x-description="Heroicon name: outline/mail"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        ></path>
                      </svg>
                      <p>info@effectualservices.in</p>
                    </div>
                    <div style={{ display: "flex" }}>
                      <span>
                        <ul class="mt-6 flex space-x-12">
                          <li>
                            <button
                              class="text-red-200 hover:text-red-100"
                              href="#"
                            >
                              <span class="sr-only">Facebook</span>
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                class="w-6 h-6"
                                aria-hidden="true"
                              >
                                <path
                                  d="M22.258 1H2.242C1.556 1 1 1.556 1 2.242v20.016c0 .686.556 1.242 1.242 1.242h10.776v-8.713h-2.932V11.39h2.932V8.887c0-2.906 1.775-4.489 4.367-4.489 1.242 0 2.31.093 2.62.134v3.037l-1.797.001c-1.41 0-1.683.67-1.683 1.653v2.168h3.362l-.438 3.396h-2.924V23.5h5.733c.686 0 1.242-.556 1.242-1.242V2.242C23.5 1.556 22.944 1 22.258 1"
                                  fill="currentColor"
                                ></path>
                              </svg>{" "}
                            </button>{" "}
                          </li>{" "}
                          <li>
                            <button
                              class="text-red-200 hover:text-red-100"
                              href="#"
                            >
                              <span class="sr-only">GitHub</span>{" "}
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                class="w-6 h-6"
                                aria-hidden="true"
                              >
                                <path
                                  d="M11.999 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.386.6.11.819-.26.819-.578 0-.284-.01-1.04-.017-2.04-3.337.724-4.042-1.61-4.042-1.61-.545-1.386-1.332-1.755-1.332-1.755-1.09-.744.082-.73.082-.73 1.205.086 1.838 1.238 1.838 1.238 1.07 1.833 2.81 1.304 3.493.996.109-.775.419-1.303.762-1.603C7.145 17 4.343 15.97 4.343 11.373c0-1.31.468-2.382 1.236-3.22-.124-.304-.536-1.524.118-3.176 0 0 1.007-.323 3.3 1.23.956-.266 1.983-.4 3.003-.404 1.02.005 2.046.138 3.005.404 2.29-1.553 3.296-1.23 3.296-1.23.655 1.652.243 2.872.12 3.176.77.838 1.233 1.91 1.233 3.22 0 4.61-2.806 5.624-5.478 5.921.43.37.814 1.103.814 2.223 0 1.603-.015 2.898-.015 3.291 0 .321.217.695.825.578C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12.001-12"
                                  fill="currentColor"
                                ></path>
                              </svg>
                            </button>
                          </li>
                          <li>
                            <button
                              class="text-red-200 hover:text-red-100"
                              href="#"
                            >
                              <span class="sr-only">Twitter</span>
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                class="w-6 h-6"
                                aria-hidden="true"
                              >
                                ' + // '
                                <path
                                  d="M7.548 22.501c9.056 0 14.01-7.503 14.01-14.01 0-.213 0-.425-.015-.636A10.02 10.02 0 0024 5.305a9.828 9.828 0 01-2.828.776 4.94 4.94 0 002.165-2.724 9.867 9.867 0 01-3.127 1.195 4.929 4.929 0 00-8.391 4.491A13.98 13.98 0 011.67 3.9a4.928 4.928 0 001.525 6.573A4.887 4.887 0 01.96 9.855v.063a4.926 4.926 0 003.95 4.827 4.917 4.917 0 01-2.223.084 4.93 4.93 0 004.6 3.42A9.88 9.88 0 010 20.289a13.941 13.941 0 007.548 2.209"
                                  fill="currentColor"
                                ></path>
                                ' + // "
                              </svg>
                            </button>{" "}
                          </li>{" "}
                        </ul>
                      </span>

                      <span></span>
                    </div>
                  </div>
                </div>

                <div
                  className="right"
                  style={{
                    width: "60%",
                    backgroundColor: " #1976D2",
                    padding: "30px",
                  }}
                >
                  <ImCross
                    style={{
                      position: "absolute",
                      right: "10px",
                      top: "10px",
                      bottom:"20px",
                      width: "30px",
                      color: "white",
                      cursor: "pointer",
                    }}
                    onClick={handleClose}
                  />
                  <div className="right_heading" style={{ textAlign: "left" }}>
                    Thank you for your interest in Effectual Services. Please
                    fill out the form below and we will contact you shortly. For
                    careers/recruitments related queries, please visit our
                    Careers page.
                    <p style={{ textAlign: "left" }}>
                      Required fields are marked with an asterisk*
                    </p>
                  </div>
                  <form
                    // action="#"
                    // method="POST"
                    class=" grid mt-4 grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
                    onSubmit={handleSubmit}
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      justifyContent: "space-around",
                    }}
                  >
                    <div
                      style={{
                        width: "80%",
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "space-between",
                      }}
                    >
                      <div style={{ flexBasis: "40%" }}>
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
                            class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-red-500 focus:border-red-500 border-gray-300 rounded-md"
                          />
                          <p
                            style={{
                              color: "white",
                              fontSize: "12px",
                              marginTop: "5px",
                            }}
                          >
                            {formErrors.name}
                          </p>
                        </div>
                      </div>
                      <div style={{ flexBasis: "40%" }}>
                        <label
                          for="email"
                          class="block text-sm font-medium text-white"
                        >
                          Email *
                        </label>
                        <div class="mt-1">
                          <input
                            type="email"
                            name="email"
                            id="email"
                            autocomplete="family-name"
                            class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-red-500 focus:border-red-500 border-gray-300 rounded-md"
                            style={{ borderRadius: "5px", border: "none" }}
                          />
                          <p
                            style={{
                              color: "white",
                              fontSize: "12px",
                              marginTop: "5px",
                            }}
                          >
                            {formErrors.email}
                          </p>
                        </div>
                      </div>
                      <div style={{ flexBasis: "40%" }}>
                        <label
                          for="email"
                          class="block text-sm font-medium text-white"
                        >
                          Service for enquiry *
                        </label>
                        <div class="mt-1">
                          <select
                            name="service_for_enquiry"
                            id="service_for_enquiry"
                            style={{
                              border: "none",
                              borderRadius: "5px",
                              padding: "12px",
                              width: "100%",
                              color: "black",
                            }}
                          >
                            <option
                              selected
                              style={{ color: "black" }}
                              value="select"
                            >
                              click here to select Service
                            </option>
                            <option
                              style={{ color: "black" }}
                              value="Trademarks"
                            >
                              Trademarks
                            </option>
                            <option
                              style={{ color: "black" }}
                              value="Research & Development"
                            >
                              Research & Development
                            </option>
                            <option
                              style={{ color: "black" }}
                              value="Market Research"
                            >
                              Market Research
                            </option>
                            <option style={{ color: "black" }} value="Patents">
                              Patents
                            </option>
                          </select>
                          <p
                            style={{
                              color: "white",
                              fontSize: "12px",
                              marginTop: "5px",
                            }}
                          >
                            {formErrors.service_for_enquiry}
                          </p>
                        </div>
                      </div>
                      <div style={{ flexBasis: "40%" }}>
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
                            class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-red-500 focus:border-red-500 border-gray-300 rounded-md"
                            aria-describedby="phone-optional"
                          />
                          <p
                            style={{
                              color: "white",
                              fontSize: "12px",
                              marginTop: "5px",
                            }}
                          >
                            {formErrors.contact}
                          </p>
                        </div>
                      </div>

                      <div class="sm:col-span-2" style={{ flexBasis: "100%" }}>
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
                          <p
                            style={{
                              color: "white",
                              fontSize: "12px",
                              marginTop: "5px",
                            }}
                          ></p>
                        </div>
                      </div>
                      <p class="text-sm pt-4 text-white">
                        By clicking the submit button, you give Effectual
                        Services consent to store and process the personal
                        information submitted above. Effectual is committed to
                        protecting and respecting your privacy, we\'ll only use
                        your information to provide the products and services
                        you requested from us.
                      </p>
                      <ReCAPTCHA
                        sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                        onChange={handleCaptcha}
                        style={{ marginTop: "17px" }}
                      />

                      {captcha && (
                        <button
                          type="submit"
                          class=" w-fit-content  justify-center px-6  border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:w-auto h-10 mt-10"
                          onClick={collectdata}
                          onSubmit={handleSubmit}
                        >
                          Submit
                        </button>
                      )}
                    </div>
                  </form>
                </div>
              </div>
            </Popover>
          </div>
        </div>
        <div class="mt-8 border-t border-gray-700 pt-5 grid grid-cols-1 gap-4 justify-self-center content-center">
          <p class="mt-8 justify-center  items-center text-base justify-self-center text-gray-400 md:mt-0 md:order-1">
            © 2022 Effectual Knowledge Services. All rights reserved.
          </p>
        </div>
      </div>
      <style>
        {`.swal2-html-container{
       margin:0px!important;
       text-align:left!important;
     }`}
      </style>
    </footer>
  );
};

export default Footer;
