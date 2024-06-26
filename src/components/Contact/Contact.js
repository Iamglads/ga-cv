import React, { useState } from "react";



const Contact = () => {
  const [name, setName] = useState("Glad");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let contactForm = {
      name,
      email,
      message,
    };
    console.log(contactForm);
  };

  return (
    <section id="contact" className="section contact">
      <div className="section-title">
        <h2>Contact</h2>
        <div className="underline"></div>
        <a className="email" href="mailto:g.aristoverne@kabatis.com" title="Email Gladston Aristoverne">g.aristoverne@kabatis.com</a>

      </div>
    </section>
  );
};

export default Contact;
