import React, { useState, useRef } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import ReCAPTCHA from "react-google-recaptcha";

const Carerrcomindex = () => {
  const el = useRef();
  const intialValue = {
    name: "",
    email: "",
  };
  const [formValues, SetFormValues] = useState(intialValue);
  const [file, setFile] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [captcha, setCaptcha] = useState(false);

  const handleFileChange = (e) => {
    console.log(e.target.files[0]);
    setFile(e.target.files[0]);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    SetFormValues({ ...formValues, [name]: value });
  };

  const { email, name } = formValues;

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate());
    console.log(formErrors, "formErrors");
  };

  const validate = () => {
    const errors = {};
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
    if (!file) {
      errors.file = "resume is required";
    }
    console.log(errors, "errors");
    return errors;
  };

  const collectdata = async () => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("Name", name);
    formData.append("email", email);

    axios
      .post("http://localhost:5000/career", formData, {
        headers: {
          "Content-Disposition": "attachment; filename=template.xlsx",
          "Content-Type":
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        },
        responseType: "arraybuffer",
      })
      .then((res) => {
        console.log("in result final");
      })
      .catch((err) => {
        console.log("in error");
        console.log(err);
      });
  };

  const handleClick = async () => {
    if (
      name !== "" &&
      email !== "" &&
      file !== "" &&
      email.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      await collectdata();
      Swal.fire({
        icon: "success",
        title: "Thank you for your interest",
        footer: "Your response has been sent to our team",
      });
    }
  };
  const handleCaptcha = () => {
    setCaptcha(!captcha);
  };

  return (
    <>
      <div>
        <p class="text-center px-4 font-bold text-3xl">COME WORK WITH US! </p>
        <br></br>
        <p class="px-36 text-center text-justify text-l">
          {" "}
          We are driven by a workforce of individuals with rich and diverse
          experience. As a team we have the zeal to excel and go the extra mile
          to explore opportunities in a challenging business environment. At
          Effectual, we offer a high growth-oriented hierarchy that is designed
          to encourage professionals to move up the ladder purely through
          performance. While our work culture focuses on leadership, innovation,
          and teamwork, we provide various opportunities for individual growth
          and development. Our policies are aimed at nurturing the professional
          growth of employees by providing a stimulating work environment. To
          continuously develop and enhance the knowledge and capabilities of our
          employees, we provide in-house training programs to enhance and
          upgrade their knowledge in IP. In addition to this, we attract,
          develop, and reward people who make significant contribution to the
          continued growth of our business. <br></br>We, with an open heart,
          welcome your profiles at{" "}
          <a class="text-red-500 " href="mailto:careers@effectualservices.com">
            careers@effectualservices.com
          </a>{" "}
          and assure you that we would take a strong note of the same.
        </p>
      </div>

      <div className="py-12 px-4 ">
        <div className="lg:max-w-[1440px] md:max-w-[744px] max-w-[375px] w-full py-10 lg:px-10 md:px-6 px-4 bg-white mx-auto">
          <div className="flex lg:flex-row md:flex-row flex-col justify-center gap-x-7 gap-y-7">
            <div className="py-5 px-4 max-w-[356px] w-full bg-sky-700 rounded border  border-transparent hover:border hover:rounded hover:border-red-700 group hover:cursor-pointer">
              <p className=" text-base font-bold leading-normal text-white mb-3">
                ASSOCIATE - PATENT ANALYST - FRESHER- ECE/ CS/LIFE SC.
              </p>
              <div className="flex justify-between mb-4">
                <p className="text-s font-semibold leading-4 text-white">
                  <b>Reports into : </b> Manager/ Sr. Manager
                </p>
              </div>
              <p className=" font-bold text-sm leading-tight text-white ">
                Practise Functions:
              </p>

              <p className=" text-sm leading-tight text-white ">
                (a) Research technical literature including patents.<br></br>{" "}
                (b) Research products and associated technical literature{" "}
                <br></br> (c) Work as subject matter expert in areas of his/her
                qualification.<br></br> (d) Landscape, Prior Art Search,
                Infringement and Invalidity Analysis
              </p>
              <hr className="my-2  border-gray-300" />
              <div className="flex justify-between mb-4">
                <p className="text-s  leading-4 text-white">
                  <b>Requirements/Qualification: </b>
                  <br></br>
                  <br></br>B Tech/ M Tech in Mechanical Engineering and related
                  specialisation
                </p>
              </div>
            </div>
            <div className="py-5 px-4 max-w-[356px] w-full bg-sky-700 rounded border  border-transparent hover:border hover:rounded hover:border-red-700 group hover:cursor-pointer">
              <p className=" text-base font-bold leading-normal text-white mb-3">
                ASSOCIATE - BUSINESS DEVELOPMENT - FRESHER - US SHIFT
              </p>
              <div className="flex justify-between mb-4">
                <p className="text-s font-semibold leading-4 text-white">
                  <b>Reports into : </b> Manager/ Sr. Manager
                </p>
              </div>
              <p className=" font-bold text-sm leading-tight text-white ">
                Practise Functions:
              </p>

              <p className=" text-sm leading-tight text-white ">
                (a) Lead Generation <br></br>(b) Meeting / Calling clients for
                new client acquisition <br></br>(c) Marketing of company
                services <br></br>(d) Attending seminars / conferences / trade
                shows <br></br>(e) MIS reporting Shift: Evening Shift (7:00 PM
                to 4:00 AM)
              </p>
              <hr className="my-2  border-gray-300" />
              <div className="flex justify-between mb-4">
                <p className="text-s  leading-4 text-white">
                  <b>Requirements/Qualification: </b>
                  <br></br>
                  <br></br>
                  Graduate in any stream with excellent communication skills
                </p>
              </div>
            </div>
            <div className="py-5 px-4 max-w-[356px] w-full bg-sky-700 rounded border  border-transparent hover:border hover:rounded hover:border-red-700 group hover:cursor-pointer">
              <p className=" text-base font-bold leading-normal text-white mb-3">
                ASSOCIATE - PATENT ANALYST - MECHANICAL
              </p>
              <div className="flex justify-between mb-4">
                <p className="text-s font-semibold leading-4 text-white">
                  <b>Reports into : </b> Manager/ Sr. Manager
                </p>
              </div>
              <p className=" font-bold text-sm leading-tight text-white ">
                Practise Functions:
              </p>

              <p className=" text-sm leading-tight text-white ">
                (a) Research technical literature including patents.<br></br>{" "}
                (b) Research products and associated technical literature
                <br></br> (c) Work as subject matter expert in areas of his/her
                qualification. <br></br>(d) Landscape, Prior Art Search,
                Infringement and Invalidity Analysis
              </p>
              <hr className="my-2  border-gray-300" />
              <div className="flex justify-between mb-4">
                <p className="text-s  leading-4 text-white">
                  <b>Requirements/Qualification: </b>
                  <br></br>
                  <br></br>B Tech/ M Tech in Mechanical Engineering and related
                  specialisation
                </p>
              </div>
            </div>
          </div>
          <div className="flex lg:flex-row md:flex-row flex-col justify-center gap-x-7 mt-7 gap-y-7">
            <div className="py-5 px-4 max-w-[356px] w-full bg-sky-700 rounded border  border-transparent hover:border hover:rounded hover:border-red-700 group hover:cursor-pointer">
              <p className=" text-base font-bold leading-normal text-white mb-3">
                PATENT ILLUSTRATOR
              </p>
              <div className="flex justify-between mb-4">
                <p className="text-s font-semibold leading-4 text-white">
                  <b>Reports into : </b> Manager/ Sr. Manager
                </p>
              </div>
              <p className=" font-bold text-sm leading-tight text-white ">
                Practise Functions:
              </p>

              <p className=" text-sm leading-tight text-white ">
                Would be trained and then required to work on various
                Illustrations based on Patents
              </p>
              <hr className="my-2  border-gray-300" />
              <div className="flex justify-between mb-4">
                <p className="text-s  leading-4 text-white">
                  <b>Requirements/Qualification: </b>
                  <br></br>
                  <br></br>
                  Proficiency in AutoCAD
                </p>
              </div>
            </div>

            <div className="max-w-[740px] w-full rounded border  border-transparent border rounded    border-red-700 group hover:cursor-pointer">
              <div className=" lg:flex justify-between ">
                <div className="w-96 bg-red-700 ">
                  <div className="flex items-center">
                    <h1 className="text-xl font-medium pr-2 leading-5 text-white font-bold ml-4 mt-4">
                      Upload Your Resume
                    </h1>
                  </div>
                  <p className="mt-4 text-sm leading-5 text-white ml-4 mr-4 ">
                    Thank you for your interest in Effectual Services. Please
                    fill out the form & upload your resume, we will contact you
                    shortly.
                  </p>
                  <br></br>
                  <h1 className="text-xl font-medium pr-2 leading-5 text-white font-bold ml-4 mt-4">
                      <h1 className="text-center">Or </h1> <br></br>Call us at :-
                    </h1>
                 
                  <p className="text-white text-sm py-4 px-4">
                        +91-981-068-8705 <br /> +91-887-919-3964 <br />
                        +91-772-888-0256
                      </p>



                      <div className="text-white"
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

                </div>
                <form className="bg-sky-700" onSubmit={handleSubmit}>
                  <div>
                    <div className="md:flex items-center lg:ml-24 lg:mt-0 mt-4">
                      <div className="md:w-1/.5">
                        <div>
                          <label className="text-white">Your Name(required*)</label>
                          <input
                            className="bg-white focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2 h-12 w-full border border-gray-400 px-4 placeholder-gray-600 text-base leading-none text-gray-600 pb-1 mb-4"
                            type="text"
                            name="name"
                            value={formValues.name}
                            onChange={handleChange}
                          />
                          <p
                            style={{
                              fontSize: "12px",
                              color: "red",
                              marginBottom: "10px",
                            }}
                          >
                            {formErrors.name}
                          </p>
                        </div>
                        <div>
                          <label className="text-white">Your E-mail(required*)</label>
                          <input
                            className="bg-white focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2 h-12 w-full border border-gray-400 px-4 placeholder-gray-600 text-base leading-none text-gray-600 pb-1 mb-4"
                            type="email"
                            name="email"
                            value={formValues.email}
                            onChange={handleChange}
                          />
                          <p
                            style={{
                              fontSize: "12px",
                              color: "red",
                              marginBottom: "10px",
                            }}
                          >
                            {formErrors.email}
                          </p>
                        </div>

                        <label
                          for="formFile"
                          className="form-label inline-block mb-2 text-white "
                        >
                          Default file input example
                        </label>
                        <input
                          className="form-control block  w-full px-1  py-1.5  text-base  font-normal  text-gray-700    bg-white bg-clip-padding    border border-solid border-gray-300    rounded    transition    ease-in-out    m-0    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          type="file"
                          name="resume"
                          onChange={handleFileChange}
                          ref={el}
                        />
                        <p
                          style={{
                            fontSize: "12px",
                            color: "red",
                            marginBottom: "10px",
                          }}
                        >
                          {formErrors.file}
                        </p>
                      </div>

                      <div className="md:w-64 md:ml-12 md:mt-0 mt-4 pt-8">
                        {/* {captcha && (
                          <button
                            type="submit"
                            className="mx-2 mt-32 bg-red-600 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-8 py-3 text-sm"
                            onClick={handleClick}
                            onSubmit={handleSubmit}
                          >
                            Upload
                          </button>
                        )} */}
                      </div>
                    </div>
                  </div>
                  <ReCAPTCHA
                    sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                    onChange={handleCaptcha}
                    style={{ marginLeft: "80px", marginTop: "10px" }}

                  />
                  <div className="md:w-64 md:ml-12 md:mt-0 mt-2 pt-4 text-center">
                    {captcha && (
                      <button
                        type="submit"
                        className="mx-2 mt-4 bg-red-600 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-8 py-3 text-sm mb-4"
                        onClick={handleClick}
                        onSubmit={handleSubmit}
                      >
                        Upload
                      </button>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carerrcomindex;
