import GalleryScroll from "./GalleryScroll";
import { FaPlane, FaMountain, FaSign } from "react-icons/fa";

const About = () => {
  return (
    <section className="about-hero relative text-white">
      <div className="first-section">
        {/* Hero Section */}
        <div className="relative h-[70vh] flex flex-col items-center justify-center text-center">
          <img
            src="/gallery/about-bg.jpg" // Your background image
            alt="About Us"
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-transparent z-10"></div>

          {/* Title & Breadcrumb */}
          <div className="relative z-20">
            <h1 className="text-4xl md:text-5xl font-bold text-white">ABOUT US</h1>
            <div className="mt-2 text-sm text-teal-300">
              <a href="/" className="hover:underline">
                Home
              </a>
              <span className="mx-2">|</span>
              <span className="text-white">About Us</span>
            </div>
          </div>
        </div>

        {/* Torn Paper SVG */}
        {/* <div className="overflow-hidden -mb-1 ">
          <img
            src="/gallery/bg-bottom-image.png"
            alt="edge"
            className="w-full absolute bottom-[65%] h-13 rotate-180 z-[1]"
          />
        </div> */}
      </div>
      <div className="second-section w-[80%] m-auto  p-6 ">
        <div className="bg-white py-16 px-6 md:px-20">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Content */}
            <div className="lg:w-1/2">
              <p className="text-green-600 font-semibold mb-2">
                Get To Know Us
              </p>
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
                Let’s Make Your Travel Dreams Come True.
              </h2>
              <p className="text-gray-600 mb-4">
                We are passionate about delivering incredible experiences through student travel. Our goal is to create journeys that inspire, educate, and connect people with new places and cultures.
              </p>
              <p className="text-gray-600 mb-6">
                At VAHATA, we believe that travel is more than just a journey—it’s an opportunity for students to discover new perspectives, learn beyond the classroom, and grow as individuals.
              </p>
              <p className="text-gray-600 mb-6">
                We specialize in enriching domestic travel experiences tailored specifically for students. Our programs help them explore vibrant cultures, immerse in nature, and engage in thrilling adventures that build essential life skills.
                With a strong focus on safety, affordability, and exposure, we create unforgettable experiences that spark curiosity, promote global citizenship, and leave lasting memories.
                At VAHATA, we turn every trip into a learning adventure.

              </p>

              <div className="flex flex-wrap gap-6 text-sm text-gray-700 font-medium mb-10">
                <div className="flex items-center gap-2">
                  <FaPlane className="text-teal-500" />
                  <span>Tour Guide</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaMountain className="text-teal-500" />
                  <span>Friendly Price</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaSign className="text-teal-500" />
                  <span>Reliable Tour Package</span>
                </div>
              </div>
            </div>

            {/* Right Content (Image with Yellow Circle and Icons) */}
            <div className="relative lg:w-1/2 flex justify-center items-center">
              <div className="absolute w-[450px] h-[450px] bg-yellow-400 rounded-full -z-10" />
              <img
                src="/gallery/travel.png"
                alt="Travelers"
                className="w-[500px] md:w-[600px] object-contain"
              />
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-16 bg-white shadow-md rounded-xl p-6 grid grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-teal-600 text-3xl font-bold">10</p>
              <p className="text-gray-600">Years Experiences</p>
            </div>
            <div>
              <p className="text-teal-600 text-3xl font-bold">50+</p>
              <p className="text-gray-600">Tour Packages</p>
            </div>
            <div>
              <p className="text-teal-600 text-3xl font-bold">100+</p>
              <p className="text-gray-600">Happy Customers</p>
            </div>
            {/* <div>
              <p className="text-teal-600 text-3xl font-bold">320</p>
              <p className="text-gray-600">Award Winning</p>
            </div> */}
          </div>
        </div>
      </div>
      <GalleryScroll className="gallery-main-box1" />
    </section>
  );
};

export default About;
