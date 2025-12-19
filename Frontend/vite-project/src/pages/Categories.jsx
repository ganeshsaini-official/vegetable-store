const Categories = () => {
  return (
    <>
      <div className="mt-6 max-w-6xl mx-auto px-4 mb-16">
        <h1 className="text-center text-4xl font-bold text-gray-800 mb-2"> Categories </h1>
          <div className="flex justify-center gap-8 mt-6  ">

          <div className="flex flex-col items-center justify-center h-36 cursor-pointer w-56  shadow-md bg-[#2522]  hover:bg-[#2527] rounded-md transition-all duration-300">
            <img
              src="src/Uploads/Apple.png"
              alt="Fruits"
              className="w-18 h-18 rounded-full object-cover border-2 "
            />
            <span className="text-base mt-2">Fruits</span>
          </div>

          <div className="flex flex-col items-center justify-center h-36 cursor-pointer w-56  shadow-md bg-[#2522]  hover:bg-[#2527] rounded-md transition-all duration-300">
            <img
              src="src/Uploads/Carrot.png"
              alt="Vegetables"
              className="w-18 h-18  rounded-full object-cover border-2 "
            /> 
            <span className="block text-center mt-2 px-2">Seasonal Vegetables</span>
          </div>

          <div className="flex flex-col items-center justify-center h-36 cursor-pointer w-56  shadow-md bg-[#2522]  hover:bg-[#2527] rounded-md transition-all duration-300">
            <img
              src="src/Uploads/tomatos.jpg"
              alt="Tomatos"
              className="w-18 h-18  rounded-full object-cover border-2 "
            />
            <span className="block text-center mt-2 px-2">Roots & Tubers</span>
          </div>
          <div className="flex flex-col items-center justify-center h-36 cursor-pointer w-56  shadow-md bg-[#2522]  hover:bg-[#2527] rounded-md transition-all duration-300">
            <img
              src="src/Uploads/SeasonalVegetables.jpg"
              alt="Seasonal Vegetables"
              className="w-18 h-18  rounded-full object-cover border-2 "
            />
            <span className="block text-center mt-2 px-2">Seasonal</span>
          </div>
          <div className="flex flex-col items-center justify-center h-36 cursor-pointer w-56  shadow-md bg-[#2522]  hover:bg-[#2527] rounded-md transition-all duration-300">
            <img
              src="src/Uploads/HariSabji.jpg"
              alt="Hari Sabji"
              className="w-18 h-18  rounded-full object-cover border-2 "
            />
            <span className="block text-center mt-2 px-2">Hari Sabji</span>
          </div>

          <div className="flex flex-col items-center justify-center h-36 cursor-pointer w-56  shadow-md bg-[#2522]  hover:bg-[#2527] rounded-md transition-all duration-300">
            <img
              src="src/Uploads/SeasonalVegetables.jpg"
              alt="Seasonal Vegetables"
              className="w-18 h-18  rounded-full object-cover border-2 "
            />
            <span className="block text-center mt-2 px-2">Seasonal Vegetables</span>
          </div>

          <div className="flex flex-col items-center justify-center h-36 cursor-pointer w-56  shadow-md bg-[#2522]  hover:bg-[#2527] rounded-md transition-all duration-300">
            <img
              src="src/Uploads/SeasonalVegetables.jpg"
              alt="Seasonal Vegetables"
              className="w-18 h-18  rounded-full object-cover border-2 "
            />
            <span className="block text-center mt-2 px-2">Organic Vegetables</span>
          </div>

          <div className="flex flex-col items-center justify-center h-36 cursor-pointer w-56  shadow-md bg-[#2522]  hover:bg-[#2527] rounded-md transition-all duration-300">
            <img
              src="src/Uploads/SeasonalVegetables.jpg"
              alt="Seasonal Vegetables"
              className="w-18 h-18  rounded-full object-cover border-2 "
            />
            <span className=" block text-center mt-2 px-2" >Daily Essentials</span>
          </div>

        </div>
      </div>
    </>
  );
};

export default Categories;
