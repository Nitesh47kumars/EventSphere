import React, { useEffect, useState } from "react";

const images = [
  "/HeroSection/image1.webp",
  "/HeroSection/image2.jpg",
  "/HeroSection/image3.jpg",
  "/HeroSection/image4.jpg",
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[75vh] w-full overflow-hidden flex items-center justify-center">
      {/* Background Images */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Text Content */}
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
          Discover & Experience Events
        </h1>
        <p className="text-lg md:text-2xl mb-6 opacity-90">
          Join the most exciting fests, meetups, and workshops near you.
        </p>
        <a
          href="/events"
          className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-6 py-3 rounded-lg transition-all"
        >
          Explore Events
        </a>
      </div>

      {/* Dots Navigation */}
      <div className="absolute bottom-6 flex justify-center w-full space-x-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              currentIndex === index ? "bg-cyan-400 scale-110" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
