// import React from 'react';
import {
  FaBus,
  FaBusAlt,
  FaHotel,
  FaUtensils,
  FaBook,
  FaUserFriends,
  FaShieldAlt,
  FaClipboardList,
  FaCamera,
} from 'react-icons/fa';

const services = [
  {
    icon: <FaBus />,
    title: 'Safe & Comfortable Travel',
    description: 'Modern, licensed vehicles and experienced drivers from school to destination.',
  },
  {
    icon: <FaHotel />,
    title: 'Clean & Secure Accommodation',
    description: 'Verified hotels/camps, teacher supervision, gender-specific rooms.',
  },
  {
    icon: <FaUtensils />,
    title: 'Nutritious Meals',
    description: 'Hygienic, tasty, and student-approved! Custom meals for dietary needs.',
  },
  {
    icon: <FaBook />,
    title: 'Educational Value',
    description: 'We combine adventure with academics — learning without textbooks.',
  },
  {
    icon: <FaUserFriends />,
    title: 'Team Activities & Fun',
    description: 'Bonfires, nature walks, workshops — learning through doing.',
  },
  {
    icon: <FaBusAlt />,
    title: 'Trained Tour Coordinators',
    description: 'Professional staff, female escorts when needed, always student-first.',
  },
  {
    icon: <FaShieldAlt />,
    title: 'Safety Protocols',
    description: 'First-aid, hospital tie-ups, risk assessments, and 24x7 support.',
  },
//   {
//     icon: <FaClipboardList />,
//     title: 'Customizable Itineraries',
//     description: 'From one-day picnics to 5-day expeditions — we adapt to your goals.',
//   },
  {
    icon: <FaCamera />,
    title: 'Trip Memories',
    description: 'Group photography and optional trip albums available.',
  },
];

const Services = () => {
  return (
    <section data-aos="fade-up" className="bg-gray-50 py-16 px-6">
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Programs We Offer</h2>
      {/* <h3 className="text-2xl  text-center mb-12">At VAHATA, we handle every detail — from safety to smiles.</h3> */}
      <p className="text-lg text-gray-400 text-center max-w-3xl mx-auto mb-12">At VAHATA, we handle every detail — from safety to smiles.</p>
      <div className="w-16 h-1 bg-orange-500 mx-auto mb-12"></div>
      <div className="max-w-7xl mx-auto px-4">
  {/* Horizontal scroll for mobile */}
  <div className="flex sm:hidden overflow-x-auto space-x-4 scrollbar-hide py-2">
    {services.map((service, index) => (
      <div
        key={index}
        className="min-w-[280px] bg-white rounded-lg shadow-md flex-shrink-0"
      >
        <div className="bg-[#2F86A6] text-white flex flex-col items-center justify-center py-5 rounded-t-lg">
          <div className="text-3xl mb-2">{service.icon}</div>
          <h3 className="font-semibold text-center">{service.title}</h3>
        </div>
        <div className="p-4 text-center">
          <p className="text-gray-700 text-sm">{service.description}</p>
        </div>
      </div>
    ))}
  </div>

  {/* Grid for tablet and larger */}
  <div className="hidden sm:grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    {services.map((service, index) => (
      <div
        key={index}
        className="bg-white rounded-lg shadow-md overflow-hidden"
      >
        <div className="bg-[#2F86A6] text-white flex flex-col items-center justify-center py-5">
          <div className="text-3xl mb-2">{service.icon}</div>
          <h3 className="font-semibold text-center">{service.title}</h3>
        </div>
        <div className="p-4 text-center">
          <p className="text-gray-600 text-sm">{service.description}</p>
        </div>
      </div>
    ))}
  </div>
</div>

    </section>
  );
};

export default Services;






// const Services = () => (
//   <section className="p-8 max-w-4xl mx-auto">
//     <h2 className="text-2xl font-bold text-center mb-6">Our Services</h2>
//     <ul className="list-disc pl-6 text-gray-700">
//       <li>Full trip planning and coordination</li>
//       <li>Certified guides and educators</li>
//       <li>Travel insurance and safety measures</li>
//     </ul>
//   </section>
// );
// export default Services;