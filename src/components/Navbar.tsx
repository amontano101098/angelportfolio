import { useEffect } from "react";
import "../styles/navbar.css";
import logo from "../assets/img/logo.png";

const Navbar: React.FC = () => {
  // Smooth scrolling for internal links
  useEffect(() => {
    const links = document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]');

    const handleClick = (e: MouseEvent) => {
      e.preventDefault();

      const link = e.currentTarget as HTMLAnchorElement;
      const targetId = link.getAttribute("href");

      if (!targetId) return;

      const target = document.querySelector<HTMLElement>(targetId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    };

    links.forEach(link => {
      link.addEventListener("click", handleClick);
    });

    // ✅ Cleanup (important in React + TS)
    return () => {
      links.forEach(link => {
        link.removeEventListener("click", handleClick);
      });
    };
  }, []);

  return (
    <header className="my-navbar">
      <nav className="navbar navbar-expand-md navbar-light bg-light fixed-top">

        <div className="collapse navbar-collapse d-none d-md-flex" id="navbarDesktop">
          <ul className="navbar-nav me-auto">
            <li className="nav-item"><a className="nav-link" href="#HOME">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="#PROJECTS">Projects</a></li>
            <li className="nav-item"><a className="nav-link" href="#REVIEWS">Reviews</a></li>
            <li className="nav-item"><a className="nav-link" href="#BLOG">Blog</a></li>
            <li className="nav-item"><a className="nav-link" href="#ABOUT">About</a></li>
            <li className="nav-item"><a className="nav-link" href="#CONTACT">Contact</a></li>
          </ul>
        </div>

        {/* Logo */}
        <a
          className="navbar-brand position-absolute top-50 start-50 translate-middle"
          href="#HOME"
        >
          <img src={logo} alt="Angel logo" height={80} loading="lazy" />
        </a>

        <button
          className="navbar-toggler d-md-none"
          type="button"
          data-toggle="collapse"
          data-target="#navbarMobile"
          aria-controls="navbarMobile"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Social Media */}
        <div className="ms-3 d-flex align-items-center">
          <a
            className="btn btn-outline-primary btn-sm rounded-circle mx-1"
            href="https://www.facebook.com/spongeyangel"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <i className="bi bi-facebook"></i>
          </a>

          <a
            className="btn btn-outline-dark btn-sm rounded-circle mx-1"
            href="https://github.com/amontano101098"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <i className="bi bi-github"></i>
          </a>

          <a
            className="btn btn-outline-info btn-sm rounded-circle mx-1"
            href="https://www.linkedin.com/in/angelica-monta%C3%B1o-23473720b/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <i className="bi bi-linkedin"></i>
          </a>
        </div>
      </nav>

      {/* Mobile Dropdown */}
      <div
        className="collapse navbar-collapse bg-light position-fixed w-100 d-md-none"
        id="navbarMobile"
      >
        <ul className="navbar-nav text-center">
          <li className="nav-item"><a className="nav-link" href="#HOME">Home</a></li>
          <li className="nav-item"><a className="nav-link" href="#PROJECTS">Projects</a></li>
          <li className="nav-item"><a className="nav-link" href="#REVIEWS">Reviews</a></li>
          <li className="nav-item"><a className="nav-link" href="#BLOG">Blog</a></li>
          <li className="nav-item"><a className="nav-link" href="#ABOUT">About</a></li>
          <li className="nav-item"><a className="nav-link" href="#CONTACT">Contact</a></li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
