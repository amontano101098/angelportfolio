import { useState, useEffect } from "react";
import "./../styles/backtotop.css";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  // Show button when scrollY > 300
  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    visible && (
      <button className="back-to-top" onClick={scrollToTop}>
        ↑
      </button>
    )
  );
}
