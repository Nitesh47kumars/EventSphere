import { useParams, Link } from "react-router-dom";
import events from "../MockEvents.json";
import EventCard from "../Hightlights/EventCard";

export default function EventDetail() {
  const { id } = useParams();
  const event = events.find((e) => e.id === parseInt(id));

  if (!event) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-center">
        <h2 className="text-2xl font-bold text-red-600">Event not found!</h2>
        <Link
          to="/events"
          className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
        >
          Go Back
        </Link>
      </div>
    );
  }

  // Related events from the same category (excluding current one)
  const relatedEvents = events
    .filter((e) => e.category === event.category && e.id !== event.id)
    .slice(0, 3);

  return (
    <div id="eventdetail" className="min-h-screen bg-gray-50 py-10 px-4">
      {/* Event Detail Card */}
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            {event.title}
          </h1>
          <p className="text-gray-500 text-sm mb-4">
            📅 {new Date(event.date).toDateString()} • 🎭 {event.category}
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            {event.description}
          </p>

          <div className="flex justify-between items-center">
            <Link
              to="/events"
              className="text-indigo-600 font-medium hover:underline"
            >
              ← Back to Events
            </Link>

            {event.featured && (
              <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold">
                ⭐ Featured Event
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Related Events */}
      {relatedEvents.length > 0 && (
        <div className="max-w-6xl mx-auto mt-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            Related {event.category} Events
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {relatedEvents.map((related) => (
              <EventCard key={related.id} event={related} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
