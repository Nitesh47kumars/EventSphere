// src/components/Highlights/HighlightEvents.jsx
import React from "react";
import eventsData from "./mockEvents.json";
import EventCard from "./EventCard";

const HighlightEvents = () => {
  const featuredEvents = eventsData.filter((event) => event.featured);
  const today = new Date();
  const upcomingEvents = eventsData.filter(
    (event) => new Date(event.date) > today
  );

  return (
    <section className="max-w-6xl mx-auto py-16 px-4">
      {/* Featured Events */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
          🌟 Featured Events
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {featuredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>

      {/* Upcoming Events */}
      <div>
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
          📅 Upcoming Events
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {upcomingEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightEvents;
