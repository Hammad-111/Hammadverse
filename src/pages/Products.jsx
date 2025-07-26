// src/components/ProductCards.jsx
import React, { useRef } from "react";
import "./Products.css";
import headphoneImg from "../assets/headphone.jpg";
import smartwatchImg from "../assets/smart_watch.jpg";
import speakerImg from "../assets/blueSpeaker.jpg";
import mouseImg from "../assets/mouse.jpg";
import laptopstandImg from "../assets/laptop.jpg";
import keyboardImg from "../assets/keyboard.jpg";
import powerbankImg from "../assets/powerbank.jpg";
import webcamImg from "../assets/webcam.jpg";
import usbchubImg from "../assets/usbC.jpg";
import LCDimg from "../assets/LCD.jpg";
import earbudsImg from "../assets/mick.jpg"
import bulbimg from "../assets/bulb.jpg"

const products = [
  {
    id: 1,
    title: "Wireless Headphones",
    description: "High quality sound, noise-cancelling.",
    price: 59.99,
    image: headphoneImg
  },
  {
    id: 2,
    title: "Smart Watch",
    description: "Track your fitness and stay connected.",
    price: 99.99,
    image: smartwatchImg
  },
  {
    id: 3,
    title: "Bluetooth Speaker",
    description: "Portable and powerful bass.",
    price: 39.99,
    image: speakerImg
  },
  {
    id: 4,
    title: "Gaming Mouse",
    description: "Precision and fast response time.",
    price: 29.99,
    image: mouseImg
  },
  {
    id: 5,
    title: "Laptop Stand",
    description: "Ergonomic and adjustable height.",
    price: 24.99,
    image: laptopstandImg
  },
  {
    id: 6,
    title: "Wireless Keyboard",
    description: "Slim design with silent keys.",
    price: 45.99,
    image: keyboardImg
  },
  {
    id: 7,
    title: "LED Monitor",
    description: "24-inch Full HD display with vibrant colors.",
    price: 149.99,
    image: LCDimg
  },
  {
    id: 8,
    title: "Power Bank",
    description: "10,000mAh capacity with fast charging.",
    price: 34.99,
    image: powerbankImg
  },
  {
    id: 9,
    title: "Webcam",
    description: "1080p HD video for meetings and streaming.",
    price: 54.99,
    image: webcamImg
  },
  {
    id: 10,
    title: "Noise Cancelling Earbuds",
    description: "Compact design with active noise cancellation.",
    price: 79.99,
    image: earbudsImg
  },
  {
    id: 11,
    title: "USB-C Hub",
    description: "Multiple ports for all your connectivity needs.",
    price: 27.50,
      image: usbchubImg
  },
  {
    id: 12,
    title: "Smart LED Bulb",
    description: "Color-changing bulb with voice control.",
    price: 19.99,
    image:  bulbimg
  }
    
];

const ProductCards = () => {
  const scrollRef = useRef();
  return (
    <section className="product-section">
      <div className="card-container" ref={scrollRef}>
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <span>${product.price.toFixed(2)}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductCards;
