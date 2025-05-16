
import { useState } from 'react';
import { contRender } from "./Main.jsx"

function Button({ onButtonClick }){
  return (
    <>
      <button className="bg-green-500 text-white py-3 px-6 rounded-full hover:bg-green-700 transition duration-300 ease-in-out text-lg mt-3" onClick={ onButtonClick}>Shop Now!</button>
    </>
  );
}


function Home() {

  function renderProducts(){
      contRender("Products");
  }

  return (
    <>
      <section id="home" className="text-center">
        <div className="m-6 p-6 p-600 bg-aliceblue rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold text-gray-800 ">Welcome to Our Computer Store</h2>
            <p className="text-lg text-gray-700">Your one-stop shop for all your computing needs.</p>
        </div>
          <div className="m-6 p-6 bg-aliceblue rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-blue-600 mb-4">Explore Our Wide Selection</h2>
              <p className="text-lg text-gray-700">
                  Discover a diverse range of high-quality computers, laptops, peripherals, and accessories tailored to meet your specific requirements. We cater to students, professionals, and gamers, ensuring everyone finds their perfect tech solution.
              </p>
              <ul className="list-disc list-inside mt-4 text-left">
                  <li className="text-lg text-gray-700"><strong>Laptops:</strong> From ultra-portable to high-performance, find the ideal laptop for work, study, or play.</li>
                  <li className="text-lg text-gray-700"><strong>Desktops:</strong> Powerful and customizable desktops for gaming, content creation, and professional use.</li>
                  <li className="text-lg text-gray-700"><strong>Peripherals:</strong> Enhance your setup with our selection of monitors, keyboards, mice, and more.</li>
                  <li className="text-lg text-gray-700"><strong>Accessories:</strong> Find essential accessories like cables, adapters, storage solutions, and protective gear.</li>
              </ul>
              <Button onButtonClick={() => renderProducts()}/>
          </div>
      </section>
    </>
  );
}

export default Home;
