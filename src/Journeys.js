// Journeys.jsx
import { useEffect } from "react";
import Tilt from "react-parallax-tilt";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useState } from "react";

import { Mountain, Landmark, GraduationCap } from "lucide-react";


const himachalJourneys = [
  {
    title: "Manali Adventure Camp",
    duration: "5 Days / 4 Nights",
    tag: "Adventure",
    icon: <Mountain className="w-5 h-5 text-blue-600" />,
    image: "./gallery/manali.jpeg",
  },
  {
    title: "Shimla-Kufri Exploration",
    duration: "4 Days / 3 Nights",
    tag: "Cultural",
    icon: <Landmark className="w-5 h-5 text-yellow-600" />,
    image: "./gallery/shimla.jpg",
  },
  {
    title: "Ranthambore",
    duration: "2 Days / 3 Nights",
    tag: "Wildlife Program",
    icon: <Mountain className="w-5 h-5 text-blue-600" />,
    image: "./gallery/ranthambore.jpg",
  },
  {
    title: "Jaipur Heritage Tour",
    duration: "2 Days / 3 Nights",
    tag: "Educational",
    icon: <GraduationCap className="w-5 h-5 text-green-600" />,
    image: "./gallery/jaipur.jpg",
  },
  {
    title: "Jim Corbett",
    duration: "2 Days / 3 Nights",
    tag: "Wildlife Program",
    icon: <GraduationCap className="w-5 h-5 text-green-600" />,
    image: "./gallery/jim-corbett.jpg",
  },
];

const Journeys = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
const [currentIndex, setCurrentIndex] = useState(0);
const goPrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? himachalJourneys.length - 1 : prev - 1
    );
  };

  const goNext = () => {
    setCurrentIndex((prev) =>
      prev === himachalJourneys.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section  style={{ backgroundImage: "url('/gallery/bg-image-10.jpg')" }}
      className="w-[100vw] bg-fixed  bg-cover bg-center py-20 px-4 md:px-16"
      id="journeys"
    >
      <div className="bg-white bg-opacity-80 p-6 rounded-xl shadow-2xl">
        <h2 className="text-4xl font-bold text-center text-[#2f86a6] mb-10">
          Journeys
        </h2>
        <div className="hidden lg:block">
          <div className="columns-1 sm:columns-2 lg:columns-5 gap-6 space-y-6">
            {himachalJourneys.map((journey, index) => (
              <Tilt key={index} glareEnable={true} glareMaxOpacity={0.2}>
                <div
                  data-aos="fade-up"
                  className="break-inside-avoid bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
                >
                  <img
                    src={journey.image}
                    alt={journey.title}
                    className="w-full h-60 object-cover rounded-t-2xl hover:scale-105 transition-transform duration-300 hover:shadow-md"
                  />
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                      {journey.icon}
                      <h3 className="text-xl font-semibold text-[#2f86a6]">
                        {journey.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 mb-2">{journey.duration}</p>
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-sm font-medium 
                        ${
                          journey.tag === "Adventure"
                            ? "bg-blue-100 text-blue-700"
                            : journey.tag === "Cultural"
                            ? "bg-yellow-100 text-yellow-800"
                            : journey.tag === "Wildlife Program"
                            ? "bg-pink-100 text-pink-700"
                            : "bg-green-100 text-green-700"
                        }`}
                    >
                      {journey.tag}
                    </span>
                  </div>
                </div>
              </Tilt>
            ))}
          </div>
        </div>
        {/** Mobile Carousel View (visible only on small screens) */}
        <div className="relative block md:hidden w-full overflow-hidden">
          {/* Navigation Buttons */}
          <button
            onClick={goPrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full w-8 h-8 z-10 flex items-center justify-center"
          >
            ◀
          </button>
          <button
            onClick={goNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full w-8 h-8 z-10 flex items-center justify-center"
          >
            ▶
          </button>

          {/* Carousel Slides */}
          <div
            className="flex transition-transform duration-500"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              width: `${himachalJourneys.length * 20}%`,
            }}
          >
            {himachalJourneys.map((journey, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0"
                style={{ width: "100%" }}
              >
                <Tilt  glareEnable={true}
                  glareMaxOpacity={0.2}
                  glareColor="#ffffff"
                  glarePosition="bottom"
                  tiltMaxAngleX={10}
                  tiltMaxAngleY={10}
                  className="transition-transform duration-500 hover:scale-105">
                  <div className="bg-white rounded-2xl shadow-xl overflow-hidden m-4">
                    <img
                      src={journey.image}
                      alt={journey.title}
                      className="w-full h-60 object-cover"
                    />
                    <div className="flex flex-col justify-center items-center p-5">
                      <div className="flex flex-col justify-center  items-center gap-2 mb-2 block">
                          {journey.icon}
                        <h3 className="text-md font-semibold text-[#2f86a6]">
                          {journey.title}
                        </h3>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{journey.duration}</p>
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-sm font-medium 
                          ${
                            journey.tag === "Adventure"
                              ? "bg-blue-100 text-blue-700"
                              : journey.tag === "Cultural"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-green-100 text-green-700"
                          }`}
                      >
                        {journey.tag}
                      </span>
                    </div>
                  </div>
                </Tilt>
              </div>
            ))}
          </div>
        </div>





        <div className="text-center mt-8">
          <a
            href="/contact"
            className="inline-block bg-[#2f86a6] text-white px-8 py-4 rounded-full shadow-lg hover:bg-[#256b8c] hover:shadow-2xl transition-all duration-300 text-lg font-medium transform hover:scale-105"
          >
            Contact Us to Plan a Trip
          </a>
        </div>
      </div>
    </section>
  );
};

export default Journeys;
