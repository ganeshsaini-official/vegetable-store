
const HeroBanner = () => {
  return (
    <div className="relative w-full h-[80vh]">

      {/* Background Image */}
     <img
  src="http://localhost:5000/uploads/banner/heroBanner1.png"
  // src="src/Uploads/heroBanner1.png"
  className="w-full h-full object-cover"
  alt="banner"
/>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center top-25 text-center text-white px-4">

        <h1 className=" text-4xl sm:text-5xl font-bold mb-4">
          Chandel Fruits & Vegetables Store
        </h1>
        <h1 className=" text-3xl sm:text-4xl font-bold mb-4">
          Fresh Fruits & Vegetables Delivered to Your Doorstep
        </h1>

        <p className="text-lg sm:text-xl mb-6">
          100% Quality • Best Prices • Daily Fresh Stock
        </p>

        <button className="bg-green-600 px-6 py-2 rounded-full text-white font-semibold shadow-lg mb-6">
          Farm Fresh · Trusted Quality
        </button>
     

        <div className="flex gap-4 mt-4">
          <button className="bg-[#830c6fff] px-6 py-2 rounded-full text-white font-semibold shadow-lg mb-6 cursor-pointer">
            Shop Now
          </button>
          <button className="bg-[#830c6fff] px-6 py-2 rounded-full text-white font-semibold shadow-lg mb-6 cursor-pointer">
            Wholesale Orders
          </button>
        </div>


      </div>

    </div>
  );
};

export default HeroBanner;
