import htmlLogo from "../assets/img/html logo.png";
import cssLogo from "../assets/img/css.png";
import jsLogo from "../assets/img/js.png";
import mongoLogo from "../assets/img/MongoDB-Logo-removebg-preview.png";
import reactLogo from "../assets/img/react.js.png";
import nodeLogo from "../assets/img/node.png";
import angel from "../assets/img/angel.png";

import "./../styles/hero.css";

export default function Hero() {
  return (
    
  <main className="hero-page" id="HOME">
    <div className="hero-content">
        <div className="hero-icons">
        <ul>
          <li><img src={htmlLogo} alt="HTML Logo" loading="lazy" /></li>
          <li><img src={cssLogo} alt="CSS Logo" loading="lazy" /></li>
          <li><img src={jsLogo} alt="JS Logo" loading="lazy" /></li>
        </ul>
      </div>



      {/*Left Side additional images*/ }
      <div className="hero-extra">
        <ul>
          <li>
            <img src={mongoLogo} alt="Mongo DB Logo" />
          </li>
          <li><img src={reactLogo} alt="React Logo" loading="lazy" /></li>
          <li><img src={nodeLogo} alt="NodeJS Logo" loading="lazy" /></li>
        </ul>
      </div>

      {/*Main Image*/ }
      <div className="hero-container">
        <img className="hero-image" src={angel} alt="Angel's Portrait" loading="lazy" />
      </div>
    </div>
  </main>
  );
}
