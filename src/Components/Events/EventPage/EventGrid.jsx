import React from "react";
import EventCard from "../Hightlights/EventCard";

const EventGrid = ({ events }) => {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
};

export default EventGrid;
