import React from "react";
import "./About.css";
import profileImage from "../assets/Hammad.png"; // apni image ka path

const About = () => {
  return (
    <section id="about" style={{ minHeight: "100vh"}}> 
      <div className="about-container">
        <div className="about-image">
          <img src={profileImage} alt="Hammad Javed" />
        </div>

        <div className="about-details">
          <h2>Waleed Javed</h2>
          <h4>Full Stack Developer | MERN | React Native | .NET | Python </h4>
          <p className="summary">
             I am a passionate and dedicated programmer with hands-on experience in web and mobile app development. 
              Skilled in React.js, React Native, and backend technologies like Node.js and MongoDB, I create efficient and scalable applications. 
              I believe in writing clean code, solving real-world problems, and continuously learning to stay updated with the latest trends in technology.
           
          </p>
          <p><strong>📞 Phone:</strong> <a href="tel:+923017891391">+92 301 7891391</a></p>
          <p><strong>📧 Email:</strong> <a href="mailto:Connect2hammadjaveed@gmail.com">Connect2hammadjaveed@gmail.com</a></p>
          <p><strong>📍 Location:</strong> Multan, Pakistan</p> 
          <p><strong>🔗 GitHub:</strong> <a href="https://github.com/Hammad-111" target="_blank">github.com/hammadjaved</a></p>
          <p><strong>🔗 LinkedIn:</strong> <a href="https://www.linkedin.com/in/hammad-javed11/" target="_blank">linkedin.com/in/hammadjaved</a></p>
        </div>
      </div>
    </section>
  );
};

export default About;
