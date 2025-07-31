import React from "react";
import blog1 from "./assets/image-1.jpg";
import blog2 from "./assets/image-2.jpeg";
import blog3 from "./assets/image-3.jpg";
import { FaUser, FaRegComments } from "react-icons/fa";

const programs = [
  {
    id: 1,
    image: blog1,
    title: "Cultural Program",
    description: "Explore India's rich heritage, local traditions, and history through hands-on learning and real-world interactions.",
  },
  {
    id: 2,
    image: blog2,
    title: "Wildlife Program (National Parks)",
    description: "Discover India's biodiversity with guided trips to national parks — perfect for nature lovers and eco-learners.",
  },
  {
    id: 3,
    image: blog3,
    title: "Adventure & Life Skills Program",
    description: "Trekking, camping, team-building games, and workshops that instill confidence, discipline, and leadership.",
  },
  {
    id: 4,
    image: blog3,
    title: "Space Program",
    description: "From planetariums to ISRO visits — ignite young minds with space exploration and science workshops.",
  },
];

const ProgramWeOffer = () => {
  return (
     <section data-aos="fade-up" className="program-we-offer py-16 space-y-px bg-[#2F86A6] text-center overflow-hidden w-[100vw]">
        <img className="absolute opacity-80 top-[2%] left-[90%] des-icon-1 animate-parachute" src="/gallery/bg-image-4.png" alt="icon"></img>
        <img src="/gallery/bg-image-1.png" alt="" className="w-[17%] absolute bottom-[0] right-[90%] enquiry-bg-image enquiry-bg-image-1"/>
        <img src="/gallery/bg-image-1.png" alt="" className="w-[17%]  absolute bottom-[0] right-[70%] enquiry-bg-image enquiry-bg-image-1"/>
        <img src="/gallery/bg-image-1.png" alt="" className="w-[17%]  absolute bottom-[0] right-[50%] enquiry-bg-image enquiry-bg-image-1"/>
        <img src="/gallery/bg-image-1.png" alt="" className="w-[17%]  absolute bottom-[0] right-[30%] enquiry-bg-image enquiry-bg-image-1"/>
        <img src="/gallery/bg-image-1.png" alt="" className="w-[17%]  absolute bottom-[0] right-[10%] enquiry-bg-image enquiry-bg-image-1"/>
        <img src="/gallery/bg-image-1.png" alt="" className="w-[17%]  absolute bottom-[0] left-[93%] enquiry-bg-image enquiry-bg-image-1"/>
      
        <h2 className="text-white text-3xl font-bold p-8">🧭 Programs We Offer</h2>
        <p className="text-yellow-300  text-2xl pb-8">Every student is different—and so is every journey. VAHATA offers customized travel experiences designed to educate, inspire, and thrill.</p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-6 md:px-16">
          {programs.map((program) => (
            <div key={program.id} className="relative flex flex-col items-center">
              {/* Image */}
              <img
                src={program.image}
                alt={program.title}
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />

              {/* White floating card */}
              <div className="text-center bg-white w-11/12 md:w-10/12 rounded-lg shadow-lg p-[1rem] text-left -mt-8 z-10 relative">
                <h3 className="text-xl font-bold text-gray-900 leading-snug">
                  {program.title}
                </h3>
                <div className="bg-white  px-3 py-1 text-xl ">
                  {program.description}
                </div>
              
              </div>
            </div>
          ))}
        </div>
      </section>
  );
};

export default ProgramWeOffer;
