import React, { useState, useEffect } from "react";
// import GitHubButton from './components/GitHubButton';
import "../App.css";
import owlBanner from "../assets/img/owlBanner.png";
import GitHubButton from "./GithubButton";

const IntroBanner: React.FC = () => {
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
    <div className="banner-text">
      <GitHubButton />
      <div className="content">
        <div className="text-section">
          <h1>
            {displayedText}
            <span className="typing-cursor">|</span>
          </h1>
          <p>
            Con más de tres años de experiencia en la resolución de incidentes
            en aplicaciones web e implementación de nuevas funcionalidades en
            productos de diversas áreas, enfoco mi aprendizaje en la ingeniería
            de software para mejorar continuamente mis habilidades técnicas.
          </p>
          <a href="#about" className="about-link">
            About me &rarr;
          </a>
        </div>
        <div className="graphic-section">
          <img src={owlBanner} alt="" style={{ width: "100%" }} />
        </div>
      </div>
    </div>
  );
};

export default IntroBanner;
