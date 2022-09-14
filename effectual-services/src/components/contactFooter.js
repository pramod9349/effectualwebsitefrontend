import React, { Component } from "react";
import axios from "axios";
// import Contactmodel from './contactmodel'
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

class contactFooter extends Component {
  render() {
    <style>
      {`
                .formbackground{
                  background-color: #0056A1;
                  justify-content: flex-start;
                }
          `}
    </style>;

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
                        href="/"
                        class="text-base text-gray-300 hover:text-white"
                      >
                        Career
                      </a>
                    </li>

                    <li>
                      <a
                        href="/"
                        class="text-base text-gray-300 hover:text-white"
                      >
                        Life at Effectual
                      </a>
                    </li>

                    <li>
                      <a
                        href="/"
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
                        href="/"
                        class="text-base text-gray-300 hover:text-white"
                      >
                        Who We Are
                      </a>
                    </li>

                    <li>
                      <a
                        href="/"
                        class="text-base text-gray-300 hover:text-white"
                      >
                        Founders & Leadership
                      </a>
                    </li>

                    <li>
                      <a
                        href="/"
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
                        href="/"
                        class="text-base text-gray-300 hover:text-white"
                      >
                        Patent
                      </a>
                    </li>

                    <li>
                      <a
                        href="/"
                        class="text-base text-gray-300 hover:text-white"
                      >
                        Trademark Management
                      </a>
                    </li>

                    <li>
                      <a
                        href="/"
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
                        href="/"
                        class="text-base text-gray-300 hover:text-white"
                      >
                        Information Communication Technology
                      </a>
                    </li>

                    <li>
                      <a
                        href="/"
                        class="text-base text-gray-300 hover:text-white"
                      >
                        Life-Sciences & Chemistry
                      </a>
                    </li>

                    <li>
                      <a
                        href="/"
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
                    class="h-6 w-6"
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
                    class="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
              </div>
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
  }
}

export default contactFooter;
