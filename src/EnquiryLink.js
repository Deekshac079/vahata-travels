import Enquire from './Enquire';

const EnquiryLink = () => {
  return (
    <section className="about-hero relative">
      <div className="first-section  text-white">
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
            <h1 className="text-4xl md:text-5xl font-bold text-white">Enquire Now</h1>
            <div className="mt-2 text-sm text-teal-300">
              <a href="/" className="hover:underline">
                Home
              </a>
              <span className="mx-2">|</span>
              <span className="text-white">Enquire now</span>
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
      <div className="enquiry-second-section">
        <Enquire />
        </div>
    </section>
    )
};

export default EnquiryLink;