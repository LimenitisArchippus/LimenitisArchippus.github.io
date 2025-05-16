function Products() {
  return (
    <>
      <section id="products">
        <h2 className="text-2xl font-semibold text-gray-800 m-6 p-3 text-center bg-aliceblue rounded-lg shadow-md">
          Our Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-aliceblue rounded-lg shadow-md p-4 ml-3 mr-3 flex flex-col justify-between">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Cartaphilus Laptop
            </h3>
            <p className="text-gray-600 mb-2">
              High-performance laptop with Easy to Replace Internal Parts
              Allowing for a Laptop That Lives Forever and for Whatever Purpose.
            </p>
            <p className="text-gray-700 font-bold mb-2">$1200</p>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition duration-300 ease-in-out">
              Add to Cart
            </button>
          </div>
          <div className="bg-aliceblue rounded-lg shadow-md p-4 ml-3 mr-3 flex flex-col justify-between">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Ryuu Gaming Desktop
            </h3>
            <p className="text-gray-600 mb-2">
              Powerful Gaming Desktop That Gives You the Power of the Dragon.
            </p>
            <p className="text-gray-700 font-bold mb-2">$1500</p>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition duration-300 ease-in-out">
              Add to Cart
            </button>
          </div>
          <div className="bg-aliceblue rounded-lg shadow-md p-4 ml-3 mr-3 flex flex-col justify-between">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Koraka Gaming Monitor
            </h3>
            <p className="text-gray-600 mb-2">
              27-inch, 144Hz, O-LED, G-Sync compatible.
            </p>
            <p className="text-gray-700 font-bold mb-2">$400</p>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition duration-300 ease-in-out">
              Add to Cart
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Products;
