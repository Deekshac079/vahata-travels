import { FaPhoneAlt, FaMailBulk } from "react-icons/fa";
import Enquire from "./Enquire";
const Contact = () => (
  <section className="contact-Us-Main-section">
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
            <h1 className="text-4xl md:text-5xl font-bold text-white">Contact Us</h1>
            <div className="mt-2 text-sm text-teal-300">
              <a href="/" className="hover:underline">
                Home
              </a>
              <span className="mx-2">|</span>
              <span className="text-white">Contact Us</span>
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
    <div className="contact-second-section p-8 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Section */}
        <div>
          <h2 className="text-4xl font-bold mb-4">Get In Touch With Us</h2>
          <p className="mb-6">
            <span className="font-bold text-[#2f86a6]">ADDRESS:</span> TRIPIX WQ 966 MUNICH EXPRESS 70 GERMANY, PARK
            LAN, TX 7859
          </p>

          <div className="flex items-center mb-5">
            <div className="bg-[#2f86a6] text-white rounded-full p-4 mr-4">
              <FaPhoneAlt className="text-xl" />
            </div>
            <div>
              <p className="font-bold">Contact Number :</p>
              <p><a href={`tel:+91 7982715254`} className="">+91 7982715254</a></p>
            </div>
          </div>

          <div className="flex items-center mb-6">
            <div className="bg-[#2f86a6] text-white rounded-full p-4 mr-4">
              <FaMailBulk className="text-xl" />
            </div>
            <div>
              <p className="font-bold">EMAIL :</p>
              <p><a href={`mailto:"Info@vahata.co.in"`}>Info@vahata.co.in</a></p>
            </div>
          </div>

          
        </div>

        {/* Right Section */}
        <div className="contact-us-enquiry-form">
          <Enquire />
        </div>
      </div>
      </div>
  </section>
);
export default Contact;
