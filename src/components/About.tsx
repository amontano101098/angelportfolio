// src/components/About.jsx
import "../styles/about.css"; // make sure this path is correct
import AngelPic from "../assets/img/pic1_Angel.gif"; // Vite uses import for images

function About() {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <div className="about_content">
        <img
          src={AngelPic}
          alt="Angel Portrait"
          className="about_img"
          loading="lazy"
        />

        <div className="about_text">
          <p>
            Hi, I’m <strong>Angelica M. Monta&ntilde;o</strong> — a Full Stack
            Developer with a good heart for helping others and a strong
            willingness to learn.
          </p>
          <p>
            My creativity doesn’t stop at coding — I also enjoy crafting{" "}
            <strong>graphic designs</strong> that bring ideas to life. I believe
            technology and design together can create meaningful digital
            experiences that truly connect with people.
          </p>
          <p>
            Whether it’s solving technical problems or adding an artistic touch,
            I’m always ready to learn, grow, and help others succeed along the
            way.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
