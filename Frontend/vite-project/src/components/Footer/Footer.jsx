// FILE: src/components/Footer.jsx
import React from "react";


export default function Footer() {
return (
<footer className="bg-gray-900 text-gray-200 mt-12">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
<div>
<h3 className="text-lg font-bold text-white">Chandel Fruits & Vegetables Store</h3>
<p className="mt-3 text-sm">Fresh, local and trusted since generations. Same-day delivery and wholesale options available.</p>
<div className="mt-4 text-sm">Call / WhatsApp: <span className="font-semibold">+91 99999 99999</span></div>
</div>


<div>
<h4 className="font-semibold">Quick Links</h4>
<ul className="mt-3 text-sm space-y-2">
<li><a href="/shop" className="hover:underline">Shop</a></li>
<li><a href="/wholesale" className="hover:underline">Wholesale</a></li>
<li><a href="/about" className="hover:underline">About</a></li>
<li><a href="/contact" className="hover:underline">Contact</a></li>
</ul>
</div>


<div>
<h4 className="font-semibold">Subscribe</h4>
<p className="text-sm mt-2">Get daily fresh rates & offers.</p>
<div className="mt-3 flex gap-2">
<input placeholder="Email address" className="px-3 py-2 rounded-md text-gray-800" />
<button className="bg-green-600 px-4 py-2 rounded-md text-white">Subscribe</button>
</div>
</div>
</div>
<div className="border-t border-gray-800 py-4 text-center text-sm">© {new Date().getFullYear()} Chandel Fruits & Vegetables Store. All rights reserved.</div>
</footer>
);
}