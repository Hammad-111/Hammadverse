import React, { useState } from "react";
import "./Cart.css";
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

const initialCartItems = [
  {
    id: 1,
    name: "Wireless Headphones",
    description: "High quality sound, noise-cancelling.",
    price: 59.99,
    image: headphoneImg,
    quantity: 1
  },
  {
    id: 2,
    name: "Smart Watch",
    description: "Track your fitness and stay connected.",
    price: 99.99,
    image: smartwatchImg,
    quantity: 1
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    description: "Portable and powerful bass.",
    price: 39.99,
    image: speakerImg,
    quantity: 1
  },
  {
    id: 4,
    name: "Gaming Mouse",
    description: "Precision and fast response time.",
    price: 29.99,
    image: mouseImg,
    quantity: 1
  },
  {
    id: 5,
    name: "Laptop Stand",
    description: "Ergonomic and adjustable height.",
    price: 24.99,
    image: laptopstandImg,
    quantity: 1
  },
  {
    id: 6,
    name: "Wireless Keyboard",
    description: "Slim design with silent keys.",
    price: 45.99,
    image: keyboardImg,
    quantity: 1
  },
  {
    id: 7,
    name: "LED Monitor",
    description: "24-inch Full HD display with vibrant colors.",
    price: 149.99,
    image: LCDimg,
    quantity: 1
  },
  {
    id: 8,
    name: "Power Bank",
    description: "10,000mAh capacity with fast charging.",
    price: 34.99,
    image: powerbankImg,
    quantity: 1
  },
  {
    id: 9,
    name: "Webcam",
    description: "1080p HD video for meetings and streaming.",
    price: 54.99,
    image: webcamImg,
    quantity: 1
  },
  {
    id: 10,
    name: "Noise Cancelling Earbuds",
    description: "Compact design with active noise cancellation.",
    price: 79.99,
    image: earbudsImg,
    quantity: 1
  },
  {
    id: 11,
    name: "USB-C Hub",
    description: "Multiple ports for all your connectivity needs.",
    price: 27.50,
    image: usbchubImg,
    quantity: 1
  },
  {
    id: 12,
    name: "Smart LED Bulb",
    description: "Color-changing bulb with voice control.",
    price: 19.99,
    image: bulbimg,
    quantity: 1
  }
];

const Cart = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);

  // Remove item handler
  const handleRemove = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Calculate total
  const total = cartItems.reduce(
    (acc, item) => acc + item.price * (item.quantity || 1),
    0
  );

  return (
    <div className="cart-container">
      <section id="cart" style={{ minHeight: "100vh", backgroundColor: "#f5f5f5", padding: "2rem" }}>
        <h2>Your Cart 🛒</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div>
            {cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.name} />
                <div className="item-details">
                  <h4>{item.name}</h4>
                  <p>Rs. {item.price}</p>
                  <p>Quantity: {item.quantity || 1}</p>
                </div>
                <button className="remove-btn" onClick={() => handleRemove(item.id)}>
                  Remove
                </button>
              </div>
            ))}
            <div className="cart-total">
              <h3>Total: Rs. {total.toFixed(2)}</h3>
              <button className="checkout-btn">Proceed to Checkout</button>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default Cart;
