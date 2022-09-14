function MainHero() {
    return (
     
           
    <div className="relative bg-gray-800 overflow-hidden">
      <div className="hidden sm:block sm:absolute sm:inset-0" aria-hidden="true">
        <svg className="absolute bottom-0 right-0 transform translate-x-1/2 mb-48 text-gray-700 lg:top-0 lg:mt-28 lg:mb-0 xl:transform-none xl:translate-x-0" width="364" height="384" viewBox="0 0 364 384" fill="none">
          <defs>
            <pattern id="eab71dd9-9d7a-47bd-8044-256344ee00d0" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="4" height="4" fill="currentColor"></rect>
            </pattern>
          </defs>
          <rect width="364" height="384" fill="url(#eab71dd9-9d7a-47bd-8044-256344ee00d0)"></rect>
        </svg>
      </div>
      <div className="relative pt-6 pb-16 sm:pb-24" x-data="Components.popover({ open: false, focus: true })" x-init='init()'>
   
  
        
         
        
  
        <main className="sm:mt-6">
          <div className="mx-auto max-w-7xl">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8">
              <div className="px-4 sm:px-6 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center">
                <div>
                  <a href="/" className="inline-flex items-center text-white bg-gray-900 rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200">
                    <span className="px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-red-600 rounded-full">Get Sample Report</span>
                    <span className="ml-4 text-sm">Fill the form</span>
                    <svg className="ml-2 w-5 h-5 text-gray-500" x-description="Heroicon name: solid/chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
  </svg>
                  </a>
                  <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:leading-none lg:mt-6 lg:text-5xl xl:text-6xl">
                    <span className="md:block">Business & Market</span>
    
                    <span className="text-red-600 md:block">Research Vertical</span>
                  </h1>
                  <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                    Enabling Fortune 500’s, R&D Giants, Law firms, Universities & SME’s Around The Globe Gather Intelligence That Protects and Nurtures Innovation Through a Team of 200+ Techno Legal Professionals.
                  </p>
                 
                </div>
              </div>
              <div className="mt-16 sm:mt-24 lg:mt-0 lg:col-span-6">
                <div className="bg-white sm:max-w-md sm:w-full sm:mx-auto sm:rounded-lg sm:overflow-hidden">
                  <div className="px-4 py-8 sm:px-10">
                    
  
                   
  
                    <div className="mt-6">
                      <form action="#" method="POST" className="space-y-6">
                        <div>
                          <label for="name" className="sr-only">Name</label>
                          <input type="text" name="name" id="name" autocomplete="name" placeholder="Name" required="" className="block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md" />
                        </div>
  
                        <div>
                          <label for="mobile-or-email" className="sr-only">Mobile</label>
                          <input type="text" name="mobile-or-email" id="mobile-or-email" autocomplete="email" placeholder="Mobile number" required="" className="block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md" />
                        </div>
  
                        <div>
                          <label for="password" className="sr-only">Email</label>
                          <input id="password" name="password" type="password" placeholder="Email" autocomplete="current-password" required="" className="block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md" />
                        </div>
  
                        <div>
                          <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Request Free Sample
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="px-4 py-6 bg-gray-50 border-t-2 border-gray-200 sm:px-10">
                    <p className="text-xs leading-5 text-gray-500">Your information is safe by our <a href="/" className="font-medium text-gray-900 hover:underline">Privacy Policy</a>.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
 
    );
  }
  
  export default MainHero;