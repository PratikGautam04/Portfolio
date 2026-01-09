import { useState } from "react";
import "../styles/contact.css";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const mailtoLink = `
      mailto:gautampratik1107@gmail.com
      ?subject=${encodeURIComponent(subject || "Contact from Portfolio")}
      &body=${encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
      )}
    `;

    // Open mail client
    window.location.href = mailtoLink;

    // Show success message
    setSent(true);

    // Clear form
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");

    // Hide message after 3 seconds
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">Contact</h2>
      <p className="contact-subtitle">
        Want to get in touch? Send me a message.
      </p>

      <div className="contact-card reveal">
        <h3 className="contact-card-title">Send Message</h3>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Your Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="text"
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />

          <textarea
            placeholder="Your Message"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>

          <button type="submit" className="btn">
            Send Message
          </button>
        </form>

        {/* ✅ SUCCESS MESSAGE */}
        {sent && (
          <p className="contact-success">
            ✅ Message sent to <strong>Pratik</strong>
          </p>
        )}
      </div>
    </section>
  );
}
