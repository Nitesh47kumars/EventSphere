import React from "react";
import { Link } from "react-router-dom";

const EventActions = ({ event }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center bg-indigo-50 p-6 rounded-xl mb-10">
      <div>
        {event.featured && (
          <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold mr-3">
            ⭐ Featured Event
          </span>
        )}
        <span className="text-gray-700 text-sm">
          Share this event with friends!
        </span>
      </div>

      <div className="flex gap-4 mt-4 md:mt-0">
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-lg font-medium">
          Book Ticket
        </button>
        <button className="bg-white border border-indigo-600 text-indigo-600 hover:bg-indigo-50 px-5 py-2 rounded-lg font-medium">
          Add to Calendar
        </button>
        <Link
          to="/events"
          className="text-indigo-600 hover:underline font-medium"
        >
          ← Back to Events
        </Link>
      </div>
    </div>
  );
};

export default EventActions;
