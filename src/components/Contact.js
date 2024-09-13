import React, { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import NavBar from "./NavBar";
import "./Contact.css";

function Contact() {
  const form = useRef();
  const [responseMessage, setResponseMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_9el7a3i", "template_ds71gb4", form.current, {
        publicKey: "VXVu6P5KCWf0VXiS_",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setResponseMessage("Your message has been sent successfully!!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="contact_page">
      <NavBar />
      <form ref={form} onSubmit={sendEmail} className="contact">
        <h1 className="contact-me text-2xl font-bold">contact me</h1>
        <label>
          Name
          <input type="text" name="name" placeholder="Your Name" required />
        </label>
        <label>
          Email
          <input type="email" name="email" placeholder="Your Email" required />
        </label>
        <label>
          Phone No.
          <input
            type="text"
            name="contact"
            placeholder="Your Contact Details"
            required
          />
        </label>
        <label>Message</label>
        <textarea name="message" placeholder="Your Message" required />
      
        <button type="submit" className="submit">
          Send Message
        </button>
        <p>{responseMessage}</p>
      </form>
    </div>
  );
}

export default Contact;
