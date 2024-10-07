import React, { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission

    const { name, email, phone, message } = formData;
    const subject = encodeURIComponent("Contact Form Submission");
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`
    );

    // Create a mailto link
    const mailtoLink = `mailto:support@gyanoda.com?subject=${subject}&body=${body}`;

    // Open the user's email client
    window.location.href = mailtoLink;

    // Reset form fields
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form row">
      <div className="col-12">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="col-12">
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="col-12">
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>
      <div className="col-12">
        <textarea
          name="message"
          placeholder="Write your message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
      </div>
      <div className="col-12">
        <button className="theme-btn" type="submit">
          Message Submit
        </button>
      </div>
    </form>
  );
}
