import "./navigation.css";

function Navigation() {
  return (
    <div className="px-4 py-1 mx-auto sticky top-0 z-50 bg-white  md:px-24 lg:px-8 z-10">
      <div className="relative flex items-center justify-between">
        <a
          href="/"
          aria-label="Company"
          title="Company"
          className="inline-flex items-center"
        >
          <img
            className="w-1/2 h-1/2"
            src="/images/Effectual-Logo-1.png"
            alt="logo"
          />
        </a>
        <ul className="flex items-center hidden space-x-8 lg:flex " id="menu">
          <li className="parent ">
            <a 
              href="/"
              aria-label="Our product"
              title="Our product"
              className="font-bold tracking-wide text-sky-700  transition-colors duration-200 text-md hover:text-deep-purple-accent-400 "
            >
              Home
            </a>
          </li>
          <li className="parent">
            <a
              href="/"
              aria-label="Our product"
              title="Our product"
              className="font-bold tracking-wide text-sky-700 transition-colors duration-200 text-md hover:text-deep-purple-accent-400"
            >
              About
            </a>
            <ul className="child z-10">
              <li>
                <a href="who-we-are">Who We Are</a>
              </li>
              <li>
                <a href="founders-leadership">Founders & Leadership</a>
              </li>
              <li>
                <a href="about-csr">CSR</a>
              </li>
            </ul>
          </li>

          <li className="parent">
            <a
              href="/"
              aria-label="Our product"
              title="Our product"
              className="font-bold tracking-wide text-sky-700 transition-colors duration-200 text-md hover:text-deep-purple-accent-400"
            >
              Our Brands
            </a>
            <ul className="child z-10">
              <li>
                <a href="https://www.effemark.com">Effemark</a>
              </li>
              <li>
                <a href="https://effemarket.com">Effemarket</a>
              </li>
              <li>
                <a href="https://thepatentdrawing.com">Thepatentdrawing</a>
              </li>
              <li>
                <a href="http://getpatentidea.com">Getpatentidea</a>
              </li>
              <li>
                <a href="http://trademarkinindia.com">Trademarkinindia</a>
              </li>
            </ul>
          </li>

          <li className="parent">
            <a
              href="/"
              aria-label="About us"
              title="About us"
              className="font-bold tracking-wide text-sky-700 transition-colors duration-200 text-md hover:text-deep-purple-accent-400 underline-offset-auto"
            >
              Solutions
            </a>
            <ul className="child z-10">
              <li className="parent">
                <a href="/patents">Patents </a>
                <ul className="child">
                  <li className="parent">
                    <a href="patent-creation">Patent Creation</a>
                    <ul className="child z-10">
                      <li>
                        <a href="/patent-drafting">Patent Drafting</a>
                      </li>
                      <li>
                        <a href="/office-action-response">
                          Office Action Response
                        </a>
                      </li>
                      <li>
                        <a href="/patent-filing-services">
                          Patent Filing Services
                        </a>
                      </li>
                      <li>
                        <a href="/formal-patent-drawings-illustrations">
                          Formal Patent Drawings / &nbsp;&nbsp;Illustrations
                        </a>
                      </li>
                      <li>
                        <a href="/design-patent-drawings">
                          Design Patent Drawings
                        </a>
                      </li>
                      <li>
                        <a href="/defensive-publication">
                          Defensive Publication
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="parent">
                    <a href="indian-patent-services">Indian Patent Services</a>
                    <ul className="child z-10">
                      <li>
                        <a href="/indian-patent-application-drafting">
                          Indian Patent Application &nbsp;&nbsp;&nbsp;Drafting
                        </a>
                      </li>
                      <li>
                        <a href="/design-patent-application">
                          Design Patent Application
                        </a>
                      </li>
                      <li>
                        <a href="/opposition-searches">Opposition Searches</a>
                      </li>
                      <li>
                        <a href="/licensing-litigation-support">
                          Licensing & Litigation Support
                        </a>
                      </li>
                      <li>
                        <a href="/india-entry-strategy">India Entry Strategy</a>
                      </li>
                    </ul>
                  </li>
                  <li className="parent">
                    <a href="patent-management">Patent Management</a>
                    <ul className="child z-10">
                      <li>
                        <a href="/patent-proofreading">Patent Proofreading</a>
                      </li>
                      <li>
                        <a href="/remote-patent-docketing">
                          Remote Patent Docketing
                        </a>
                      </li>
                      <li>
                        <a href="/patent-translations">Patent Translations</a>
                      </li>
                      <li>
                        <a href="/pta-calculations">PTA Calculations</a>
                      </li>
                      <li>
                        <a href="/file-history-analysis">
                          File History Analysis
                        </a>
                      </li>
                      <li>
                        <a href="/ids-management">IDS Management</a>
                      </li>
                      <li>
                        <a href="/data-verification">Data Verification</a>
                      </li>
                    </ul>
                  </li>
                  <li className="parent">
                    <a href="patent-searches">Patent Searches</a>
                    <ul className="child z-10">
                      <li>
                        <a href="/knockout-search">Knockout Search</a>
                      </li>
                      <li>
                        <a href="/patentability-search">Patentibility Search</a>
                      </li>
                      <li>
                        <a href="/accelarated-examination-search">
                          Accelarated Examination &nbsp;&nbsp;&nbsp;Search
                        </a>
                      </li>
                      <li>
                        <a href="/design-search">Design Search</a>
                      </li>
                      <li>
                        <a href="/patent-invalidation-search">
                          Patent Invalidation Search
                        </a>
                      </li>
                      <li>
                        <a href="/freedom-to-operate-search">
                          Freedom to Operate Search
                        </a>
                      </li>
                      <li>
                        <a href="/asian-language-searches">
                          Asian Language Searches
                        </a>
                      </li>
                      <li>
                        <a href="/patent-landscape">Patent Landscape</a>
                      </li>
                      <li>
                        <a href="/state-of-art-search">State of Art Search</a>
                      </li>
                      <li>
                        <a href="/bio-sequence-search">Bio-Sequence Search</a>
                      </li>
                      <li>
                        <a href="/chemical-structure-search">
                          Chemical Structure Search
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="parent">
                    <a href="patent-litigation">Patent Litigation</a>
                    <ul className="child z-10">
                      <li>
                        <a href="/pre-litigation-assessment">
                          Pre-Litigation Assessment
                        </a>
                      </li>
                      <li>
                        <a href="/infringement-contentions">
                          Infringement Contentions
                        </a>
                      </li>
                      <li>
                        <a href="/rule-11-337-investigation-support ">
                          Rule 11/337 Investigation &nbsp;&nbsp;&nbsp;Support
                        </a>
                      </li>
                      <li>
                        <a href="/prior-art-search">Prior Art Search</a>
                      </li>
                      <li>
                        <a href="/product-testing-code-review">
                          Product Testing & Code &nbsp;&nbsp;&nbsp;Review
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="parent">
                    <a href="patent-licensing">Patent Licensing</a>
                    <ul className="child z-10">
                      <li>
                        <a href="/patent-mining">Patent Mining</a>
                      </li>
                      <li>
                        <a href="/eou-chart">EOU Chart</a>
                      </li>
                      <li>
                        <a href="/market-research">Market Research</a>
                      </li>
                      <li>
                        <a href="/infringement-search">Infringement Search</a>
                      </li>
                      <li>
                        <a href="/bucketing-and-ranking">Bucketing & Ranking</a>
                      </li>
                      <li>
                        <a href="/patent-due-diligence">Patent Due Diligence</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="parent">
                <a href="trademark-services">Trademarks</a>
                <ul className="child">
                  <li>
                    <a href="trademark-management">Trademark Management</a>
                  </li>
                  <li>
                    <a href="trademark-search">Trademark Search</a>
                  </li>
                  <li>
                    <a href="trademark-registration">Trademark Registration</a>
                  </li>
                </ul>
              </li>
              <li className="parent">
                <a href="research-and-development">Research & Development</a>
                <ul className="child">
                  <li>
                    <a href="innovation-scouting">Innovation Scouting</a>
                  </li>
                  <li>
                    <a href="patent-technology-landscape">
                      Technology & Business &nbsp;&nbsp;Landscape
                    </a>
                  </li>
                  <li>
                    <a href="partner-identification">Partner Identification</a>
                  </li>
                  <li>
                    <a href="competitive-intelligence-ip-watch">
                      Competitive Intelligence & IP &nbsp;&nbsp;Watch
                    </a>
                  </li>
                  <li>
                    <a href="opportunity-assessment">Opportunity Assessment</a>
                  </li>
                  <li>
                    <a href="portfolio-whitespace-analysis">
                      Portfolio & Whitespace Analysis
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="market-research-capabilities">
                  Market Research Capabilities
                </a>
              </li>
            </ul>
          </li>
          <li className="parent">
            <a
              href="/"
              aria-label="Product pricing"
              title="Product pricing"
              className="font-bold text-md tracking-wide text-sky-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
              Expertise Domains
            </a>
            <ul className="child z-10">
              <li>
                <a href="information-communication-technology">
                  Information Communication &nbsp;&nbsp;Technology
                </a>
              </li>
              <li>
                <a href="lifesciences-and-chemistry">
                  Life Sciences & Chemistry
                </a>
              </li>
              <li>
                <a href="industry-engineering">Engineering</a>
              </li>
            </ul>
          </li>
          <li className="parent">
            <a
              href="/"
              aria-label="About us"
              title="About us"
              className="font-bold text-md tracking-wide text-sky-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
              Effectual Innovation Center
            </a>
            <ul className="child z-10">
              <li>
                <a href="ip-minute-to-go">IP Minute To Go</a>
              </li>
              <li>
                <a href="articles">Articles</a>
              </li>
              <li>
                <a href="case-studies">Case Studies</a>
              </li>
              <li>
                <a href="reports">Newsletters / Reports</a>
              </li>
              <li>
                <a href="press-releases">Press Releases</a>
              </li>
            </ul>
          </li>
          <li className="parent">
            <a
              href="/"
              aria-label="About us"
              title="About us"
              className="font-bold text-md tracking-wide text-sky-700 transition-colors duration-200 hover:text-deep-purple-accent-400  "
            >
              Why Us
            </a>
            <ul className="child z-10">
              <li>
                <a href="life-at-effectual">Life at Effectual</a>
              </li>
              <li>
                <a href="career">Careers</a>
              </li>
            </ul>
          </li>
          <li className="parent">
            <a
              href="/contact-us"
              aria-label="About us"
              title="About us"
              className="font-bold text-md tracking-wide text-sky-700 transition-colors duration-200 hover:text-deep-purple-accent-400 "
            >
              Contact Us
            </a>
          </li>
        </ul>

        <div className="lg:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50  focus:bg-deep-purple-50"
          >
            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              ></path>
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              ></path>
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
