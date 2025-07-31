import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
// import footerBg from '/gallery/6.jpg';
// import footLogo from './assets/vahata-logo.png';

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="">
        <div className="w-[100vw] bg-yellow-300 text-center py-4 px-6">
            <p className="text-lg font-semibold text-gray-800">
                Still have questions? Give us a call—we’re happy to assist!
            </p>
        </div>

        <footer
        className="absolute text-white pt-12 pb-8 px-8 sm:px-16 md:px-24 lg:px-32 xl:px-40  w-[100vw] overflow-hidden"
        >

        {/* Background Image */}
        <div
            className="absolute bottom-0 inset-0 bg-cover bg-fixed bg-center z-0"
            style={{
            backgroundImage: `url("/gallery/6.jpg")`,
            // backgroundImage: `url(${footerBg})`,
            filter: "brightness(0.4)",
            }}
        ></div>

        {/* Overlay Content */}
        <div className="relative z-10  space-y-8">
            {/* Section 1: Logo and About */}
            <div className="text-center  bg-opacity-50 sm:px-6 p-6 rounded-lg">
            <h2 className="text-4xl sm:text-6xl text-center">VAHATA</h2>
            <p className="text-xs sm:text-[15px] text-center">Where Travel Becomes Learning</p>
            <br />
            <p className="text-xl leading-6 max-w-md mx-auto text-blue-100">
                VAHATA Travel Solution is a student-centric travel brand making
                learning fun through curated, safe, and memorable journeys.
            </p>
            </div>

            {/* Section 2: Quick Links (Inline) */}
            <div className="flex justify-center flex-wrap gap-6 text-sm font-bold bg-opacity-50 p-6 rounded-lg">
            {["About", "Privacy Policy", "Contact",  "Gallery"].map(
                (label, index) => (
                <a
                    key={index}
                    href={`/${label.toLowerCase().replace(" ", "")}`}
                    className="text-lg hover:underline underline-offset-4 transition duration-300 hover:text-yellow-400"
                >
                    {label}
                </a>
                )
            )}
            </div>

            {/* Section 3: Contact & Social */}
            <div className="text-center  bg-opacity-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <p className="text-sm mb-1 text-blue-100">📍 671, T-16, River Height, Rajnagar Ext, Ghaziabad, Pin code - 201017</p>
            <p className="text-sm mb-1 text-blue-100">📞 +91 7982715254</p>
            <p className="text-sm mb-4 text-blue-100">✉️ Info@vahata.co.in</p>
            <div className="flex justify-center space-x-4">
                <a href="#"><FaFacebookF className="hover:text-yellow-400 text-lg transition duration-300" /></a>
                <a href="#"><FaTwitter className="hover:text-yellow-400 text-lg transition duration-300" /></a>
                <a href="#"><FaInstagram className="hover:text-yellow-400 text-lg transition duration-300" /></a>
            </div>
            </div>

            {/* Bottom Disclaimer */}
            <div className="border-t border-blue-700 pt-6 text-center text-sm text-blue-300">
            <p>We respect your privacy. Your information will only be used to respond to your enquiry.</p>
            <p>© 2025 VAHATA. All rights reserved.</p>
            </div>
        </div>
        </footer>
    </div>
  );
};

export default Footer;
