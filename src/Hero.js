import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import img1 from "./gallery/7.jpg";
// import img2 from "./gallery/16.jpg";
// import img3 from "./gallery/13.jpg";
// import img4 from "./gallery/12.jpg";
// import img5 from "./gallery/10.jpg";

const slides = [
//   {
//     image: "/gallery/7.jpg",
//     title: "Where Travel Becomes Learning",
//     description: "Inspiring school journeys that educate and excite.",
//   },
//   {
//     image: "/gallery/16.jpg",
//     title: "Explore Iconic Destinations",
//     description: "Educational tours to heritage, history, and nature.",
//   },
  {
    image: "/gallery/13.jpg",
    title: "Make Friends. Make Memories.",
    description: "Every trip creates stories students cherish forever.",
  },
  {
    image: "/gallery/12.jpg",
    title: "Explore Iconic Destinations",
    description: "Every trip creates stories students cherish forever.",
  },
  {
    image: "/gallery/10.jpg",
    title: "Make Friends. Make Memories.",
    description: "Every trip creates stories students cherish forever.",
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000); // 5 seconds per slide
    return () => clearInterval(timer);
  }, []);
const navigate = useNavigate();

  return (
    <section className="hero-section relative w-[100vw] h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="hero-image w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{slide.title}</h1>
            <p className="text-lg text-white mb-6">{slide.description}</p>
            <div className="space-x-4">
              <button className="bg-white text-blue-800 font-semibold px-6 py-2 rounded hover:bg-blue-100">
                Explore Trips
              </button>
              <button onClick={() => navigate("/enquire")} className="bg-yellow-400 text-black font-semibold px-6 py-2 rounded hover:bg-yellow-300">
                Enquire Now
              </button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Hero;
