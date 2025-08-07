// Shop.jsx
import React, { useState } from "react";
import "./Shop.css";
import ProductCard from "./Products";

const dummyProducts = [
  { id: 1, name: "Sony Headphones", price: 2500, image: "/assets/sony.jpg" },
  { id: 2, name: "Bluetooth Speaker", price: 1800, image: "/assets/speaker.jpg" },
  { id: 3, name: "Smartwatch", price: 3200, image: "/assets/smartwatch.jpg" },
];

const Shop = () => {
  const [search, setSearch] = useState("");
  return (
    <section id="shop" className="shop-page">
      {/* Banner */}
      <div className="shop-banner">
        <h1>Welcome to Our Shop</h1>
        <p>Big Deals | Top Brands | Fast Delivery</p>
      </div>

      {/* Search Bar */}
      <div className="shop-search">
        <input
          type="text"
          placeholder="Search for products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)} 
        />
     </div>
      <div className="shop-content">
        {/* Sidebar Filters */}
        <aside className="shop-sidebar">
          <h3>Filters</h3>

          <div className="filter-group">
            <h4>Category</h4>
            <label><input type="checkbox" /> Headphones</label>
            <label><input type="checkbox" /> Speakers</label>
            <label><input type="checkbox" /> Smartwatches</label>
          </div>

          <div className="filter-group">
            <h4>Price</h4>
            <input type="range" min="1000" max="10000" />
            <span>1000 PKR - 10000 PKR</span>
          </div>

          <div className="filter-group">
            <h4>Ratings</h4>
            <label><input type="checkbox" /> ⭐ 4 & above</label>
            <label><input type="checkbox" /> ⭐ 3 & above</label>
          </div>
        </aside>

        {/* Product List */}
        <ProductCard/>
         
      </div>
    </section>
  );
};

export default Shop;
