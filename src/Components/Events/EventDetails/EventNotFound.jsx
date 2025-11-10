import React from "react";
import { Link } from "react-router-dom";

const EventNotFound = () => (
  <div className="flex flex-col items-center justify-center h-screen text-center">
    <h2 className="text-2xl font-bold text-red-600 mb-4">Event not found!</h2>
    <Link
      to="/events"
      className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
    >
      Go Back
    </Link>
  </div>
);

export default EventNotFound;
