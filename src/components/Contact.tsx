import "./../styles/contact.css";

export default function Contact() {
  return (
    <section id="CONTACT" className="contact">
      <h2>Contact Me</h2>
      <p>Feel free to reach out through any of the following:</p>

      <ul className="contact-list">
        <li>
          <strong>Email:</strong>{" "}
          <a href="mailto:amontano0304@gmail.com">amontano0304@gmail.com</a>
        </li>
        <li>
          <strong>Phone:</strong> <a href="tel:+639051306118">0905 130 6118</a>
        </li>
        <li>
          <strong>LinkedIn:</strong>{" "}
          <a
            href="https://www.linkedin.com/in/angelica-monta%C3%B1o-23473720b/"
            target="_blank"
          >
            Angelica Montaño
          </a>
        </li>
        <li>
          <strong>GitHub:</strong>{" "}
          <a href="https://github.com/amontano101098" target="_blank">
            amontano101098
          </a>
        </li>
      </ul>
    </section>
  );
}
