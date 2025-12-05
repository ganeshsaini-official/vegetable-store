import React from "react";
// import CategoriesGrid from "../components/CategoriesGrid/CategoriesGrid";
// import FeaturedProducts from "../components/FeaturedProducts/FeaturedProducts";
// import DealOfTheDay from "../components/DealOfTheDay/DealOfTheDay";
// import BestSellers from "../components/BestSellers/BestSellers";
// import WholesalePromoBanner from "../components/WholesaleBanner/WholesalePromoBanner";
// import Testimonials from "../components/Testimonials/Testimonials";
// import HowItWorks from "../components/HowItWorks/HowItWorks";
import Footer from "../components/Footer/Footer";
import HeroBanner from "../components/HeroBanner/HeroBanner";
import SearchBar from "../components/SearchBar/SearchBar";

// ⬅️ Sample products (later backend se aa jayenge)
const sampleProducts = [
  {
    name: "Apple (Seb)",
    price: 135,
    image: "src/Uploads/Apple.png",
  },
  {
    name: "Banana (Kela)",
    price: 50,
    image: "src/Uploads/Banana.png",
  },
  {
    name: "Carrot (Gajar)",
    price: 40,
    image: "src/Uploads/Carrot.png",
  },
  {
    name: "Cucumber (Kheera)",
    price: 30,
    image: "src/Uploads/Cucumber.png",
  },
];

import ProductCard from "../components/ProductCard/ProductCard"; 
// ⬅️ product card component use hoga

export default function Home() {
  return (
    <div className=" relative min-h-screen">

      {/* ---------------- HERO + SEARCH BAR ---------------- */}
      <div className="relative">
        <HeroBanner />

        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-full max-w-2xl z-50">
          <SearchBar />
        </div>
      </div>

      {/* ---------------- MAIN CONTENT ---------------- */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">

        {/* OLD COMMENTED COMPONENTS (NOT REMOVED) */}
        {/* <CategoriesGrid /> */}
        {/* <FeaturedProducts /> */}
        {/* <DealOfTheDay /> */}
        {/* <BestSellers /> */}
        {/* <WholesalePromoBanner /> */}
        {/* <Testimonials /> */}
        {/* <HowItWorks /> */}

        {/* ---------------- PRODUCTS SECTION ---------------- */}
        <h2 className="text-2xl font-bold mb-5 mt-10">Popular Products</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
          {sampleProducts.map((p, i) => (
            <ProductCard key={i} product={p} />
          ))}
        </div>

      </main>

      {/* ---------------- FOOTER ---------------- */}
      <Footer />
    </div>
  );
}
