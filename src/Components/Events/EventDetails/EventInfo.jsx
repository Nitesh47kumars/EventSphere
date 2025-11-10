import React from "react";

const EventInfo = ({ event }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 mb-10">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Event Details
      </h2>
      <p className="text-gray-700 mb-6 leading-relaxed">{event.description}</p>

      <div className="grid md:grid-cols-3 gap-6 text-gray-600">
        <div>
          <h3 className="font-semibold text-gray-800 mb-1">📅 Date</h3>
          <p>{new Date(event.date).toDateString()}</p>
        </div>
        <div>
          <h3 className="font-semibold text-gray-800 mb-1">📍 Location</h3>
          <p>{event.location || "Downtown Arena, City Center"}</p>
        </div>
        <div>
          <h3 className="font-semibold text-gray-800 mb-1">🎟️ Category</h3>
          <p>{event.category}</p>
        </div>
      </div>
    </div>
  );
};

export default EventInfo;
