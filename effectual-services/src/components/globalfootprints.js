import React from 'react';

export default function index(){
    
        return (
            <div>
                
        <div class="flex py-12 flex-col items-center">
        <h1 class="text-2xl md:text-4xl 2xl:text-5xl leading-10 text-gray-200"><span class="font-bold" style={{color: "rgb(0, 86, 161)"}}>Global</span> <span class="italic" style={{color: "rgb(196, 23, 27)"}}>Footprint</span></h1>
            <p class="text-base leading-normal text-center text-gray-600 dark:text-gray-200 mt-5 text-center md:w-3/5">Having a global
footprint in over 5 countries helps us to bridge boundaries and work seamlessly across multiple time zones,
thus living to the core of our philosophy - Innovation is global, so are we !!!</p>
    
            <div class="container mx-auto grid sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 mt-10 gap-6">
                <div class="bg-white dark:bg-gray-800 border rounded-md border-gray-200 dark:border-gray-700 h-64 flex flex-col items-center">
                    <div class="w-48  h-48 flex items-center justify-center" role="img" aria-label="phone number">
                        <img src="us-map.jpg" alt="phone number"/>                       
                    </div> 
                    <p class="text-xl font-semibold leading-5 text-center text-gray-800 dark:text-white">United States</p>
                    <p class="text-base mt-4 mb-4 leading-4 text-center text-gray-600 dark:text-gray-200">Suite-427,425 Broadhollow Road,<br /> Melville | NY-11747</p>
                </div>
                <div class="bg-white dark:bg-gray-800 border rounded-md border-gray-200 dark:border-gray-700 h-64 flex flex-col items-center ">
                    <div class="w-48 h-48  flex items-center justify-center " role="img" aria-label="email">
                        <img src="europe-map.jpg" alt="email"/>                      
                    </div>
                    <p class="text-xl font-semibold leading-5 text-center text-gray-800 dark:text-white">Europe</p>
                    <p class="text-base mt-4 mb-4 leading-4 text-center text-gray-600 dark:text-gray-200">London & Stuttgart</p>
                </div>
                <div class="bg-white dark:bg-gray-800 border rounded-md border-gray-200 dark:border-gray-700 h-64 flex flex-col items-center ">
                    <div class="w-48 h-48 flex items-center justify-center" role="img" aria-label="location">
                        <img src="india-map.jpg" class="h-36" alt="location"/>                     
                    </div>
                    <p class="text-xl font-semibold leading-5 text-center text-gray-800 dark:text-white">India</p>
                    <p class="text-base mt-4 mb-4 leading-6 text-center text-gray-600 dark:text-gray-200 w-48">SDF A-05, NSEZ, Noida–Dadri Road, Noida</p>
                </div>
                <div class="bg-white dark:bg-gray-800 border rounded-md border-gray-200 dark:border-gray-700 h-64 flex flex-col items-center ">
                    <div class="w-48 h-48  flex items-center justify-center" role="img" aria-label="location">
                        <img src="singapore-map.jpg" alt="location"/>                     
                    </div>
                    <p class="text-xl font-semibold leading-5 text-center text-gray-800 dark:text-white">Singapore</p>
                    <p class="text-base mt-4 mb-4 leading-6 text-center text-gray-600 dark:text-gray-200 w-48">531A, Upper Cross Street,<br /> Singapore- 051531

</p>
                </div>
                
            </div>
        </div>
       
    
            </div>
        );
    }


