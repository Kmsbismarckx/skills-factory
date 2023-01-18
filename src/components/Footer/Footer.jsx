import React from "react";
import "./Footer.scss";

const Footer = () => {
  const societies = ["facebook", "twitter", "instagram"];
  return (
    <footer className="footer">
      <div className="copyright">2000-2022 © System</div>
      <ul className="societies">
        {societies.map((society) => (
          <li className="society">
            <img src={`/media/${society}.svg`} alt={society} />
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
