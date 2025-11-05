// src/Components/Contact/ContactInfo.jsx
import React from "react";

const ContactInfo = () => {
  return (
    <div className="flex flex-col justify-center space-y-4 text-gray-700">
      <h2 className="text-2xl font-semibold text-cyan-600 mb-2">
        Get in Touch
      </h2>
      <p>
        Have a question or want to collaborate on an event?  
        Feel free to reach out — I’d love to hear from you.
      </p>

      <div className="space-y-3 mt-4">
        <p>
          📍 <span className="font-medium">Location:</span>{" "}
          Yamuna Nagar, Haryana, India
        </p>
        <p>
          📧 <span className="font-medium">Email:</span>{" "}
          <a
            href="mailto:niteshshah028@gmail.com"
            className="text-cyan-600 hover:underline"
          >
            niteshshah028@gmail.com
          </a>
        </p>
        <p>
          📞 <span className="font-medium">Phone:</span>{" "}
          <a
            href="tel:7988576105"
            className="text-cyan-600 hover:underline"
          >
            7988576105
          </a>
        </p>
      </div>
    </div>
  );
};

export default ContactInfo;
