const HeroBanner = () => {
  return (
    <div
      className="relative w-full h-[80vh] bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: "url('src/Uploads/heroBanner.png')",
      }}
    >
      {/* Overlay layer */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Text Content */}
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-lg">
          Fresh Fruits & Vegetables <br /> Delivered to Your Doorstep
        </h1>

        <p className="mt-4 text-lg md:text-2xl font-medium drop-shadow-md">
          100% Quality • Best Prices • Daily Fresh Stock
        </p>

        <span className="mt-6 inline-block bg-green-600 text-white px-5 py-2 rounded-full text-sm md:text-base shadow-lg">
          Farm Fresh · Trusted Quality
        </span>
      </div>
    </div>
  );
};

export default HeroBanner;
