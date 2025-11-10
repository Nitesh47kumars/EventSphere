import React, { useState } from "react";
import eventsData from "../MockEvents.json";
import EventCard from "../Hightlights/EventCard";
import EventFilters from "./EventFilters";
import EventGrid from "./EventGrid";
import EmptyState from "./EmptyState";

const Events = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("asc");

  const categories = ["All", ...new Set(eventsData.map((e) => e.category))];

  const filteredEvents = eventsData
    .filter((event) => (category === "All" ? true : event.category === category))
    .filter((event) =>
      event.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) =>
      sortOrder === "asc"
        ? new Date(a.date) - new Date(b.date)
        : new Date(b.date) - new Date(a.date)
    );

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
        🎟️ All Events
      </h1>

      <EventFilters
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        category={category}
        setCategory={setCategory}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
        categories={categories}
      />

      {filteredEvents.length > 0 ? (
        <EventGrid events={filteredEvents} />
      ) : (
        <EmptyState message="No events found matching your search." />
      )}
    </section>
  );
};

export default Events;
