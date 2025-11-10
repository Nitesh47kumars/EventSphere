import React from "react";

const EventHero = ({ event }) => {
  return (
    <div className="relative h-[60vh] w-full overflow-hidden">
      <img
        src={event.image}
        alt={event.title}
        className="w-full h-full object-cover brightness-75"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-3">{event.title}</h1>
        <p className="text-lg md:text-xl opacity-90">
          {new Date(event.date).toDateString()} • {event.category}
        </p>
      </div>
    </div>
  );
};

export default EventHero;
