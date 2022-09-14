import React from "react";
function Index() {
    return (
        <>
            <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 pt-6 gap-0">
                {/* Remove class [ h-24 ] when adding a card block */}
                {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                <div className="rounded p-4 ml-24" style={{backgroundColor:"#0056A1"}} >
                 <h1 className="text-4xl text-center text-white py-8 underline ">MISSION</h1>
                 <p className="py-4 text-white text-justify">Effectual Services being an indispensable partner of the innovation ecosystem dedicates itself to identifying and solving key business & IP challenges, by providing result oriented, knowledge based and data driven research, provided by our client driven industry subject matter experts at all times.</p>
                </div>
                {/* Remove class [ h-24 ] when adding a card block */}
                {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                <div className="rounded bg-red-700 mr-24 p-4" >
                <h1 className="text-4xl text-center text-white underline py-8 ">VISION</h1>
                 <p className="py-4 text-white text-justify">To be the most innovative and preferred solutions partner, serving the knowledge economy, by attracting and nurturing the best global talent. </p>
               
                </div>
            </div>

            
        </>
    );
}
export default Index;
