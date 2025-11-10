import React, { useEffect, useState } from "react";
import HeroSlide from "./HeroSlide";
import HeroContent from "./HeroContent";

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
      {images.map((img, index) => (
        <HeroSlide key={index} img={img} isActive={index === currentIndex} />
      ))}

      <div className="absolute inset-0 bg-black/50"></div>

      <HeroContent />

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
