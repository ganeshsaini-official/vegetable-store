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
<div className=" relative min-h-screen">
    <div className="relative">
<HeroBanner/>

<div className="absolute top-2 left-1/2 -translate-x-1/2 w-full  max-w-2xl z-50 " >
<SearchBar/>
</div>
    </div>

<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
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








