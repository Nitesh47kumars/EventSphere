import React from "react";
import { Link } from "react-router-dom";

const HeroContent = () => {
  return (
    <div className="relative z-10 text-center text-white px-4">
      <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
        Discover & Experience Events
      </h1>
      <p className="text-lg md:text-2xl mb-6 opacity-90">
        Join the most exciting fests, meetups, and workshops near you.
      </p>
      <Link
        to="/events"
        className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-6 py-3 rounded-lg transition-all"
      >
        Explore Events
      </Link>
    </div>
  );
};

export default HeroContent;
