import React from "react";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section className="max-w-5xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
        📩 Contact Me
      </h1>

      <div className="grid md:grid-cols-2 gap-10">
        <ContactInfo />
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
