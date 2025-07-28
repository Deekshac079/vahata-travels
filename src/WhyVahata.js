import Slider from "react-slick";
import {
  FaBusAlt,
  FaHotel,
  FaUtensils,
  FaBook,
  FaUsers,
  FaChalkboardTeacher,
  FaShieldAlt,
  FaClipboardList,
  FaCamera
} from "react-icons/fa";

const infoBoxes = [
  {
    icon: <FaBusAlt className="text-[#2f86a6] text-4xl mb-2" />,
    title: "Safe & Comfortable Travel",
    desc: "Modern, licensed vehicles and experienced drivers from school to destination."
  },
  {
    icon: <FaHotel className="text-[#2f86a6] text-4xl mb-2" />,
    title: "Clean & Secure Accommodation",
    desc: "Verified hotels/camps, teacher supervision, gender-specific rooms."
  },
  {
    icon: <FaUtensils className="text-[#2f86a6] text-4xl mb-2" />,
    title: "Nutritious Meals",
    desc: "Hygienic, tasty, and student-approved! Custom meals for dietary needs."
  },
  {
    icon: <FaBook className="text-[#2f86a6] text-4xl mb-2" />,
    title: "Educational Value",
    desc: "We combine adventure with academics—learning without textbooks."
  },
  {
    icon: <FaUsers className="text-[#2f86a6] text-4xl mb-2" />,
    title: "Team Activities & Fun",
    desc: "Bonfires, nature walks, workshops—learning through doing."
  },
  {
    icon: <FaChalkboardTeacher className="text-[#2f86a6] text-4xl mb-2" />,
    title: "Trained Tour Coordinators",
    desc: "Professional staff, female escorts when needed, always student-first."
  },
  {
    icon: <FaShieldAlt className="text-[#2f86a6] text-4xl mb-2" />,
    title: "Safety Protocols",
    desc: "First-aid, local hospital tie-ups, risk assessments, and support 24x7."
  },
  {
    icon: <FaClipboardList className="text-[#2f86a6] text-4xl mb-2" />,
    title: "Customizable Itineraries",
    desc: "From one-day picnics to 5-day expeditions — we adapt to your goals."
  },
  {
    icon: <FaCamera className="text-[#2f86a6] text-4xl mb-2" />,
    title: "Trip Memories",
    desc: "Group photography and optional trip albums available."
  }
];

const CarouselWithInfo = () => {
  const settings = {
    infinite: true,
    speed: 6000,
    autoplay: true,
    autoplaySpeed: 0, 
    cssEase: "linear",  
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    pauseOnHover: true,
    responsive: [
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ]
  };

  return (
    <section>
      <div data-aos="fade-up" className="flex flex-row bg-white  w-[100vw]">
        {/* Static Blue Left Box */}
        <div className="bg-[#2f86a6] text-white w-full w-[40%] md:w-1/4 flex flex-col justify-center items-center p-6 text-center">
          <p className="italic text-xl mb-2">Your travel agency</p>
          <h2 className="text-3xl md:text-3xl font-bold">» WHY VAHATA?</h2>
        </div>

        {/* Right Carousel */}
        <div className="w-full w-[60%] md:w-3/4 p-6 bg-gray-100  rounded-lg  shadow-md">
          <Slider {...settings}>
            {infoBoxes.map((item, idx) => (
              <div key={idx} className="px-4 border-r border-gray-300">
                <div className="flex flex-col items-center text-center  p-4 h-full">
                  {item.icon}
                  <h3 className="text-2xl font-semibold">{item.title}</h3>
                  <p className="text-lg text-gray-700 mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default CarouselWithInfo;
