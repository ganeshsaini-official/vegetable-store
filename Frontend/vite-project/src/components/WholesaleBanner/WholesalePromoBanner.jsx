import React from "react";


export default function WholesalePromoBanner() {
return (
<section className="mt-12">
<div className="bg-green-700 text-white rounded-xl p-6 flex items-center justify-between">
<div>
<h3 className="text-lg font-bold">Bulk Orders for Hotels & Restaurants</h3>
<p className="mt-1 opacity-90">Special wholesale prices • Daily delivery • Custom packing available.</p>
</div>
<a href="/wholesale" className="bg-white text-green-700 font-semibold px-5 py-3 rounded-md">Request Wholesale</a>
</div>
</section>
);
}