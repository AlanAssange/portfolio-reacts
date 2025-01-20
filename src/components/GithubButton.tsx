import React from "react";
import "../App.css";
import githubIcon from "../assets/img/github-mark-white.svg";

const GitHubButton: React.FC = () => {
  return (
    <div className="github-button">
      <a
        href="https://github.com/AlanAssange/securityarchive"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={githubIcon} alt="GitHub" className="github-icon" />
      </a>
    </div>
  );
};

export default GitHubButton;
