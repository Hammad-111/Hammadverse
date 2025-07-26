import React, { useEffect, useState } from 'react';
import './Home.css';
import headphone from "../assets/headphone.jpg";
import smart_watch from "../assets/smart_watch.jpg";
import blueSpeaker from "../assets/blueSpeaker.jpg";
import mouse from "../assets/mouse.jpg";
import laptop from "../assets/laptop.jpg";
import keyboard from "../assets/keyboard.jpg";
import powerbank from "../assets/powerbank.jpg";
import webcam from "../assets/webcam.jpg";
import usbC from "../assets/usbC.jpg";
import LCD from "../assets/LCD.jpg";
import mick from "../assets/mick.jpg";
import bulb from "../assets/bulb.jpg";

const images = [
  headphone,
  smart_watch,
  blueSpeaker,
  mouse,
  laptop,
  keyboard,
  powerbank,
  webcam,
  usbC,
  LCD,
  mick,
  bulb,
];

const textLines = [
 "Welcome to Our Trendy Store!",
  "Discover Amazing Deals Just for You!",
  "Your Happiness is Our Priority!",
  "Fast Delivery,Easy Payments!",
  "Shop Now & Enjoy Exclusive Discounts!",
];

export default function Home() {
  const [currentText, setCurrentText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const textTimer = setInterval(() => {
      setCharIndex((prev) => {
        if (prev < textLines[textIndex].length) {
          setCurrentText(textLines[textIndex].slice(0, prev + 1));
          return prev + 1;
        } else {
          setTimeout(() => {
            setCurrentText('');
            setCharIndex(0);
            setTextIndex((prevIndex) => (prevIndex + 1) % textLines.length);
          }, 1000);
          clearInterval(textTimer);
          return prev;
        }
      });
    }, 100);
    return () => clearInterval(textTimer);
  }, [charIndex, textIndex]);

  useEffect(() => {
    const imageTimer = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(imageTimer);
  }, []);

  return (
    <div className="home-section">
    <section id="home" style={{ minHeight: "100vh", backgroundColor: "#f5f5f5", padding: "2rem"}}></section>
    <div className="home-left-wrapper">
      <div className="home-left">
        <h1>{currentText}</h1>
        <p>
           🌟 <strong>Discover a stunning range of premium products</strong> designed to elevate your lifestyle. <br />
           🖥️📱 <strong>From cutting-edge electronics to stylish fashion essentials</strong> — we bring you only the best, at unbeatable prices. <br />
           ✅ <strong>Shop with confidence</strong>, backed by our customer-first promise and lightning-fast delivery! 🚚✨
        </p>
      </div>
     </div>
      <div className="home-right">
        <img src={images[imageIndex]} alt="Rotating Display" className="home-image" />
      </div>
    </div>
  );
}
