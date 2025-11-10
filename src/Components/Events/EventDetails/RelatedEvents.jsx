import React from "react";
import EventCard from "../Hightlights/EventCard";

const RelatedEvents = ({ relatedEvents, category }) => {
  if (relatedEvents.length === 0) return null;

  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
        Related {category} Events
      </h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {relatedEvents.map((related) => (
          <EventCard key={related.id} event={related} />
        ))}
      </div>
    </div>
  );
};

export default RelatedEvents;
