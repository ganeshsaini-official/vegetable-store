// FILE: src/components/FeaturedProducts.jsx
import React from "react";


const sampleProducts = [
{ id: 1, name: "Fresh Tomatoes", price: 40, img: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=aa" },
{ id: 2, name: "Potatoes (1kg)", price: 30, img: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=bb" },
{ id: 3, name: "Onions", price: 35, img: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=cc" },
{ id: 4, name: "Spinach (Bunch)", price: 20, img: "https://images.unsplash.com/photo-1524594154905-8c8a2b7a4b7e?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=dd" },
];


export default function FeaturedProducts() {
return (
<section className="mt-12">
<div className="flex items-center justify-between">
<h2 className="text-xl font-semibold">Featured Products</h2>
<a href="/shop" className="text-green-600 hover:underline">View All</a>
</div>


<div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
{sampleProducts.map((p) => (
<div key={p.id} className="bg-white rounded-xl shadow p-4 hover:shadow-lg transition">
<img src={p.img} alt={p.name} className="h-36 w-full object-cover rounded-md" />
<div className="mt-3 flex items-center justify-between">
<div>
<div className="font-medium">{p.name}</div>
<div className="text-sm text-gray-500">{p.price} ₹ / kg</div>
</div>
<button className="bg-green-600 text-white px-3 py-2 rounded-md">Add</button>
</div>
</div>
))}
</div>
</section>
);
}