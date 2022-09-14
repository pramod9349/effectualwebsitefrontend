function OurClients(){
    return(
<div class="bg-gray-900 py-5">        
        <h2 class="mb-6 bg-gray-900 py-5 top-0 font-sans text-3xl font-bold tracking-tight text-center text-gray-200 sm:text-4xl sm:leading-none z-10">
          Our Clients        
          </h2> 
        <div class="relative   lg:py-10">
          
          

          <div class="absolute inset-x-0 py-10 items-center justify-center hidden overflow-hidden md:flex md:inset-y-0 z-0">
            <svg viewBox="0 0 88 88" class="w-full max-w-screen-xl text-gray-800">
              <circle fill="currentColor" fill-opacity="0.4" cx="44" cy="44" r="15.5"></circle>
              <circle fill-opacity="0.1" fill="currentColor" cx="44" cy="44" r="44"></circle>
              <circle fill-opacity="0.1" fill="currentColor" cx="44" cy="44" r="37.5"></circle>
              <circle fill-opacity="0.1" fill="currentColor" cx="44" cy="44" r="29.5"></circle>
              <circle fill-opacity="0.1" fill="currentColor" cx="44" cy="44" r="22.5"></circle>
            </svg>
          </div>
          
          <div class="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <div class="px-10 py-10 text-center transition duration-300 transform bg-gray-900 rounded shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl">
              <img src="images/clients/adm.png" alt="client1" />
            </div>
            <div class="px-10 py-10 text-center transition duration-300 transform bg-gray-900 rounded shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl">
              <img src="images/clients/kraft.png" alt="client2" />
            </div>
            <div class="px-10 py-10 text-center transition duration-300 transform bg-gray-900 rounded shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl">
              <img src="images/clients/pepsico.png" alt="client3" />
            </div>
            <div class="px-10 py-10 text-center transition duration-300 transform bg-gray-900 rounded shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl">
              <img src="images/clients/total.png"  alt="client4" />
            </div>            
          </div>
        </div>
      </div>

    );
}

export default OurClients