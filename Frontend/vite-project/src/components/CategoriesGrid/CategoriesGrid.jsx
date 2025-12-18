// // / FILE: src/components/CategoriesGrid.jsx
// import React from "react";


// const categories = [
// { name: "Leafy Greens", img: "https://images.unsplash.com/photo-1524594154905-8c8a2b7a4b7e?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.0.3&s=2b" },
// { name: "Root Vegetables", img: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.0.3&s=3c" },
// { name: "Seasonal Picks", img: "https://images.unsplash.com/photo-1506806732259-39c2d0268443?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.0.3&s=4d" },
// { name: "Fruits", img: "https://images.unsplash.com/photo-1574226516831-e292af5d80f1?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.0.3&s=5e" },
// { name: "Herbs & Spices", img: "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.0.3&s=6f" },
// { name: "Combo Packs", img: "https://images.unsplash.com/photo-1532634896-26909d0d3f18?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.0.3&s=7g" },
// ];


// export default function CategoriesGrid() {
// return (
// <section className="mt-10">
// <h2 className="text-xl font-semibold mb-4">Shop by Category</h2>
// <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
// {categories.map((c) => (
// <div key={c.name} className="bg-white rounded-xl shadow p-3 hover:shadow-lg transition">
// <img src={c.img} alt={c.name} className="h-24 w-full object-cover rounded-md" />
// <div className="mt-2 text-center font-medium">{c.name}</div>
// </div>
// ))}
// </div>
// </section>
// );
// }