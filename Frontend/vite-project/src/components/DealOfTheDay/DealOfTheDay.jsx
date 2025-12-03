import React from "react";


export default function DealOfTheDay() {
return (
<section className="mt-12">
<div className="bg-gradient-to-r from-yellow-100 to-white rounded-xl p-6 flex flex-col md:flex-row items-center gap-6 shadow">
<div className="w-full md:w-1/3">
<img src="https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=ee" alt="deal" className="rounded-lg object-cover w-full h-44" />
</div>
<div className="w-full md:w-2/3">
<div className="flex items-center gap-4">
<div className="text-lg font-bold">Deal of the Day</div>
<div className="ml-auto text-sm text-gray-500">Hurry up! Limited stock.</div>
</div>
<p className="mt-2 text-2xl font-semibold">Potatoes — 20% off today</p>
<div className="mt-3 flex items-center gap-3">
<button className="bg-green-600 text-white px-4 py-2 rounded-md">Grab Deal</button>
<div className="text-sm text-gray-600">Offer ends in <span className="font-semibold">06:12:45</span></div>
</div>
</div>
</div>
</section>
);
}