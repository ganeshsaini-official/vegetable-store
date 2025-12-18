// FILE: src/components/SearchBar.jsx
import React from "react";
import { FiSearch } from "react-icons/fi";


export default function SearchBar() {
return (
<div className="mt-6">
<div className="max-w-3xl mx-auto">
<div className="relative">
<input className="w-full border border-gray-200 rounded-full py-3 pl-12 pr-4 shadow-sm focus:ring-2 focus:ring-green-400" placeholder="Search vegetables, fruits, combos..." />
<div className="absolute left-4 top-3 text-gray-400"><FiSearch /></div>
</div>
</div>
</div>
);
}