const services = [
  {
    id: '01',
    title: '🚍 Safe & Comfortable Travel',
    desc:
      'Modern, licensed vehicles and experienced drivers from school to destination.',
  },
  {
    id: '02',
    title: '🏨 Clean & Secure Accommodation',
    desc:
      'Verified hotels/camps, teacher supervision, gender-specific rooms.',
  },
  {
    id: '03',
    title: '🍽️ Nutritious Meals',
    desc:
      'Hygienic, tasty, and student-approved! Custom meals for dietary needs.',
  },
  {
    id: '04',
    title: '📚 Educational Value',
    desc:
      'We combine adventure with academics—learning without textbooks.',
  },
  {
    id: '05',
    title: '🎒 Team Activities & Fun',
    desc:
      'Bonfires, nature walks, workshops—learning through doing.',
  },
  {
    id: '06',
    title: '🧑‍🏫 Trained Tour Coordinators',
    desc:
      'Professional staff, female escorts when needed, always student-first.',
  },
  {
    id: '07',
    title: '🛡️ Safety Protocols',
    desc:
      'First-aid, local hospital tie-ups, risk assessments, and support 24x7.',
  },
  {
    id: '08',
    title: '📝 Customizable Itineraries',
    desc:
      'From one-day picnics to 5-day expeditions — we adapt to your goals.',
  },
  {
    id: '09',
    title: '📸 Trip Memories',
    desc:
      'Group photography and optional trip albums available.',
  },
];

const ServiceCard = ({ service, total  }) => {
    const currentId = parseInt(service.id); // Convert '01' to 1
    const isFirst = currentId === 1;
    const isLast = currentId === total;
    const isEven = currentId % 2 === 0;
    console.log("total"+total)
    let borderClass = '';
      if (isFirst) {
        borderClass = 'rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-none';
    } else if (isLast) {
        borderClass = 'rounded-tl-lg rounded-bl-lg rounded-br-lg rounded-tr-none';
    } else if (isEven) {
        borderClass = 'rounded-tr-lg rounded-br-lg rounded-tl-none rounded-bl-none';
    } else {
        borderClass = 'rounded-tl-lg rounded-bl-lg rounded-tr-none rounded-br-none';
    }
  return (
  <div className={` flex items-start flex-row even:flex-row-reverse `}>
    <div className={` ${borderClass}   border border-[1px] border-[#2f86a6] text-[#2f86a6] p-12 rounded-lg relative `}>
      <h3 className="text-3xl font-bold mb-6">{service.title}</h3>
      <p className="text-2xl mb-3">{service.desc}</p>
      <a href="#" className="text-[#2f86a6] text-sm font-semibold hover:underline">Contact Us →</a>
    </div>
    <div className="text-[10.6rem] mx-[1rem] font-semibold capitalize text-transparent stroke-[2px] text-stroke-black our-service-list">
      {service.id}
    </div>
  </div>
    );
};


const OurService = () => {
  return (
    <section className=" bg-gradient-to-br from-white to-[#2f86a6]  OurService-container">
        <div className="OurService-first-section">
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
                <h1 className="text-4xl md:text-5xl font-bold text-white">Our Services</h1>
                <div className="mt-2 text-sm text-teal-300">
                <a href="/" className="hover:underline">
                    Home
                </a>
                <span className="mx-2">|</span>
                <span className="text-white">Our Services</span>
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
        <div className="OurService-second-section sm:w-[100%] md:w-[80%] m-auto p-6">
            <div className="py-16 px-4">
                <div className="text-center mb-10">
                    <h4 className="uppercase text-[rgb(47,134,166)] text-2xl font-semibold pb-6">What We Provide</h4>
                    <h2 className="text-4xl md:text-4xl font-bold mt-2">Get A Solution For Your Business</h2>
                </div>
                <div className="flex flex-col max-w-4xl mx-auto">
                    {services.map(service => (
                    // <ServiceCard key={service.id} service={service} />
                    <ServiceCard key={service.id} service={service} total={services.length} />
                    ))}
                </div>
            </div>
        </div>
    </section>
  );
}
export default OurService;