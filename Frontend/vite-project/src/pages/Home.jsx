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


export default function Home() {
return (
<div className="min-h-screen bg-gray-50 text-gray-800">
<HeroBanner/>
<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
<SearchBar/>
{/* <CategoriesGrid /> */}
{/* <FeaturedProducts /> */}
{/* <DealOfTheDay />
<BestSellers />
<WholesalePromoBanner />
<Testimonials />
<HowItWorks /> */}
</main>
<Footer />
</div>
);
}


// const Home = ()=>{
//     return (
//         <h1>Home</h1>


//     )
// }

// export default Home








