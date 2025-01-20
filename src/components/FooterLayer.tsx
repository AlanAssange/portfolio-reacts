import React, { useState, useEffect } from "react";
import "../App.css";
import navIcon1 from "../assets/img/nav-icon1.svg";
// import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from "../assets/img/nav-icon3.svg";

const FooterLayer: React.FC = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  const texts = ["Software Engineer", "Cibersecurity Student", "Owl Lover 🦉"];

  useEffect(() => {
    const handleTyping = () => {
      if (isDeleting) {
        setDisplayedText((prev) => prev.slice(0, -1));
        setTypingSpeed(50);
      } else {
        setDisplayedText((prev) => texts[textIndex].slice(0, prev.length + 1));
        setTypingSpeed(100);
      }

      if (!isDeleting && displayedText === texts[textIndex]) {
        setTimeout(() => setIsDeleting(true), 2000); // Pause before deleting
      } else if (isDeleting && displayedText === "") {
        setIsDeleting(false);
        setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }
    };

    const typingTimeout = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(typingTimeout);
  }, [displayedText, isDeleting, textIndex, typingSpeed, texts]);

  return (
    <footer className="footer">
      <p>© 2025 Alan Javier Cañellas</p>
      <p>Charlemos!</p>
      <div className="social-icon">
        <a
          href="https://www.linkedin.com/in/alanjaviercanellas/"
          target="_blank"
        >
          <img src={navIcon1} alt="" />
        </a>
        {/* <a href="#"><img src={navIcon2} alt="" /></a> */}
        <a href="#">
          <img src={navIcon3} alt="" />
        </a>
      </div>
      <div className="footer-icon">🦉</div>
    </footer>
  );
};

export default FooterLayer;
