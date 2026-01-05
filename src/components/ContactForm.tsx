import "./../styles/form.css";
import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("");

  return (
    <section className="contact-form-section">
      <form
        className="contact-form"
        action="https://formspree.io/f/movnyabq"
        method="POST"
        onSubmit={() => setStatus("Sending...")}
      >
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="_replyto" required />

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows="5" required></textarea>

        <button type="submit">Send Message</button>
        {status && <p className="status-message">{status}</p>}
      </form>
    </section>
  );
}
