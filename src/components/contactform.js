import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const Contactform = () => {
  const [formErrors, setFormErrors] = useState({});
  const [captcha, setCaptcha] = useState(false);

  const errors = {};
  const validate = () => {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const service_for_enquiry = document.getElementById(
      "service_for_enquiry"
    ).value;
    const phone = document.getElementById("phone").value;

    const regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (name === "") {
      errors.name = "Name is required";
    }
    if (email === "") {
      errors.email = "Email is required";
    }
    if (!email.match(regex) && email !== "") {
      errors.email = "Email is invalid";
    }
    if (phone === "") {
      errors.phone = "phone number  is required";
    }
    if (service_for_enquiry === "select") {
      errors.service_for_enquiry = "service for enquiry  is required";
    }
    console.log(name, email, phone, service_for_enquiry);

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate());
    console.log(formErrors, "formErrors");
  };

  const collectdata = async () => {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const service_for_enquiry = document.getElementById(
      "service_for_enquiry"
    ).value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    if (
      name !== "" &&
      email !== "" &&
      service_for_enquiry !== "select" &&
      phone !== "" &&
      email.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      let info = await fetch("http://localhost:5000/", {
        method: "post",
        body: JSON.stringify({
          name,
          service_for_enquiry,
          phone,
          email,
          message,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      info = await info.json();
      console.log(info);
    }
  };
  const handleCaptcha = () => {
    setCaptcha(!captcha);
  };

  return (
    <div>
      <section class="text-gray-600 body-font transition duration-150 ease-in-out z-500">
        <div class="text-center">
          <div class="bg-gray-100">
            <div class="max-w-7xl mx-auto ">
              <div class="relative bg-white shadow-xl">
                <div class="grid grid-cols-1 lg:grid-cols-3">
                  <div class="relative overflow-hidden  bg-red-700 xl:p-12">
                    <div
                      class="absolute inset-0 pointer-events-none sm:hidden"
                      aria-hidden="true"
                    >
                      <svg
                        class="absolute inset-0 w-full h-full"
                        width="343"
                        height="388"
                        viewBox="0 0 343 388"
                        fill="none"
                        preserveAspectRatio="xMidYMid slice"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z"
                          fill="url(#linear1)"
                          fill-opacity=".1"
                        ></path>
                        <defs>
                          <linearGradient
                            id="linear1"
                            x1="254.553"
                            y1="107.554"
                            x2="961.66"
                            y2="814.66"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#fff"></stop>
                            <stop
                              offset="1"
                              stop-color="#fff"
                              stop-opacity="0"
                            ></stop>
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <div
                      class="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none sm:block lg:hidden"
                      aria-hidden="true"
                    >
                      <svg
                        class="absolute inset-0 w-full h-full"
                        width="359"
                        height="339"
                        viewBox="0 0 359 339"
                        fill="none"
                        preserveAspectRatio="xMidYMid slice"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z"
                          fill="url(#linear2)"
                          fill-opacity=".1"
                        ></path>
                        <defs>
                          <linearGradient
                            id="linear2"
                            x1="192.553"
                            y1="28.553"
                            x2="899.66"
                            y2="735.66"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#fff"></stop>
                            <stop
                              offset="1"
                              stop-color="#fff"
                              stop-opacity="0"
                            ></stop>
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <div
                      class="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none lg:block"
                      aria-hidden="true"
                    >
                      <svg
                        class="absolute inset-0 w-full h-full"
                        width="160"
                        height="678"
                        viewBox="0 0 160 678"
                        fill="none"
                        preserveAspectRatio="xMidYMid slice"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z"
                          fill="url(#linear3)"
                          fill-opacity=".1"
                        ></path>
                        <defs>
                          <linearGradient
                            id="linear3"
                            x1="192.553"
                            y1="325.553"
                            x2="899.66"
                            y2="1032.66"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#fff"></stop>
                            <stop
                              offset="1"
                              stop-color="#fff"
                              stop-opacity="0"
                            ></stop>
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <h1 class="text-2xl md:text-4xl 2xl:text-5xl leading-10 text-gray-200">
                      <span class="font-bold">Contact</span>{" "}
                      <span class="italic">Us</span>
                    </h1>
                    <p class="mt-6 text-base text-red-50 max-w-3xl">
                      USA: Suite-427,425 Broadhollow Road Melville | NY-11747
                    </p>
                    <p class="mt-6 text-base text-red-50 max-w-3xl">
                      {" "}
                      India: SDF A-05, NSEZ, Noida???Dadri Road, Noida Phase II
                      -201305
                    </p>
                    <p class="mt-6 text-base text-red-50 max-w-3xl">
                      {" "}
                      Singapore: 531A, Upper Cross Street, Singapore- 051531
                    </p>
                    <dl class="mt-8 space-y-6">
                      <dt>
                        <span class="sr-only">Phone number</span>
                      </dt>
                      <dd class="flex text-base text-red-50">
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
                        <span class="ml-3">
                          {" "}
                          +1-469-666-1181, +1-972-256-8133{" "}
                        </span>
                      </dd>
                      <dt>
                        <span class="sr-only">Phone number</span>
                      </dt>{" "}
                      <dd class="flex text-base text-red-50">
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
                        <span class="ml-3">
                          +91-981-068-8705 <br /> +91-887-919-3964 <br />{" "}
                          +91-772-888-0256
                        </span>{" "}
                      </dd>{" "}
                      <dt>
                        <span class="sr-only">Email</span>
                      </dt>
                      <dd class="flex text-base text-red-50">
                        {" "}
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
                        </svg>{" "}
                        <span class="ml-3">info@effectualservices.com</span>{" "}
                      </dd>{" "}
                    </dl>{" "}
                    <ul class="mt-8 flex space-x-12">
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
                            <path
                              d="M7.548 22.501c9.056 0 14.01-7.503 14.01-14.01 0-.213 0-.425-.015-.636A10.02 10.02 0 0024 5.305a9.828 9.828 0 01-2.828.776 4.94 4.94 0 002.165-2.724 9.867 9.867 0 01-3.127 1.195 4.929 4.929 0 00-8.391 4.491A13.98 13.98 0 011.67 3.9a4.928 4.928 0 001.525 6.573A4.887 4.887 0 01.96 9.855v.063a4.926 4.926 0 003.95 4.827 4.917 4.917 0 01-2.223.084 4.93 4.93 0 004.6 3.42A9.88 9.88 0 010 20.289a13.941 13.941 0 007.548 2.209"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </button>{" "}
                      </li>{" "}
                    </ul>{" "}
                  </div>
                  <div
                    class=" px-6 py-8 sm:px-10 lg:col-span-2 formbackground"
                    style={{ backgroundColor: "#0056A1" }}
                  >
                    <p class="text-white text-base">
                      Thank you for your interest in Effectual Services. Please
                      fill out the form below and we will contact you shortly.
                      For careers/recruitments related queries, please visit our
                      Careers page.
                    </p>
                    <p class="text-white mt-8 text-xs">
                      Required fields are marked with an asterisk
                    </p>
                    <form
                      // action="#"
                      // method="POST"
                      class=" grid mt-4 grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
                      onSubmit={handleSubmit}
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
                            class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-red-500 focus:border-red-500 border-gray-300 rounded-md"
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
                      <div>
                        <label
                          for="email"
                          class="block text-sm font-medium text-white"
                        >
                          Service for Enquiry *
                        </label>
                        <div class="mt-1.5">
                          <select
                            class="form-select appearance-none block w-full px-3 py-2.5 text-base  font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            aria-label="Default select example"
                            name="service_for_enquiry"
                            id="service_for_enquiry"
                          >
                            <option value="select" selected>
                              Click here to select Service
                              <svg
                                class="-mr-1 ml-2 h-5 w-5"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                  clip-rule="evenodd"
                                />
                              </svg>
                            </option>
                            <option value="Patents">Patents</option>
                            <option value="Trademarks">Trademarks</option>
                            <option value="Market Research">
                              Market Research
                            </option>
                            <option value="Research & Development">
                              Research & Development
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
                      <div>
                        <div class="flex justify-between">
                          <label
                            for="phone"
                            class="block text-sm font-medium text-white"
                          >
                            Phone *
                          </label>
                        </div>
                        <div class="mt-1">
                          <input
                            type="text"
                            name="phone"
                            id="phone"
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
                            {formErrors.phone}
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
                            rows="4"
                            class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-red-500 focus:border-red-500 border-gray-300 rounded-md"
                            aria-describedby="message-max"
                          ></textarea>
                        </div>
                        <p class="text-sm pt-4 text-white">
                          By clicking the submit button, you give Effectual
                          Services consent to store and process the personal
                          information submitted above. Effectual is committed to
                          protecting and respecting your privacy, we\'ll only
                          use your information to provide the products and
                          services you requested from us.
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
                            class="mt-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:w-auto"
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
              </div>
            </div>
          </div>
        </div>
      </section>{" "}
      ',
    </div>
  );
};

export default Contactform;
