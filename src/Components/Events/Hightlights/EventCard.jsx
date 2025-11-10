import React from "react";
import { Link } from "react-router-dom";

const EventCard = ({ event }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow">
      <img
        src={event.image}
        alt={event.title}
        className="h-48 w-full object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {event.title}
        </h3>
        <p className="text-sm text-gray-500 mb-1">{event.category}</p>
        <p className="text-sm text-gray-500 mb-2">
          {new Date(event.date).toDateString()}
        </p>
        <p className="text-gray-600 mb-4 text-sm">{event.description}</p>
        <Link
          to={`/events/${event.id}`}
          className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-md text-sm font-medium"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default EventCard;
