import React from "react";
import { useParams } from "react-router-dom";
import events from "../MockEvents.json";
import EventHero from "./EventHero";
import EventInfo from "./EventInfo";
import EventActions from "./EventActions";
import RelatedEvents from "./RelatedEvents";
import EventNotFound from "./EventNotFound";

export default function EventDetail() {
  const { id } = useParams();

  const event = events.find((e) => e.id === parseInt(id));

  if (!event) return <EventNotFound />;

  const relatedEvents = events
    .filter((e) => e.category === event.category && e.id !== event.id)
    .slice(0, 3);

  return (
    <div className="bg-gray-50 min-h-screen">
      <EventHero event={event} />

      <div className="max-w-6xl mx-auto px-6 py-12">
        <EventInfo event={event} />
        <EventActions event={event} />

        {relatedEvents.length > 0 && (
          <RelatedEvents
            relatedEvents={relatedEvents}
            category={event.category}
          />
        )}
      </div>
    </div>
  );
}
