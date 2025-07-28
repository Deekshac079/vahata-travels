import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 500); // change threshold as needed
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
    <header className={`flex justify-between items-center py-4 px-6  fixed top-0 left-0 w-full z-[9999]  transition-colors duration-500 ${scrolled ? "bg-[#2F86A6] text-white shadow-md" : "md:bg-white/5 md:text-white bg-[#2F86A6] text-white"}`} >
        <div className="text-left">
          {/* <a href="/" className="text-3xl md:text-5xl font-bold">VAHATA</a> */}
          <Link to="/" className="text-5xl font-bold leading-tight">VAHATA</Link>
          <p className="text-[13px] leading-tight">Where Travel Becomes Learning</p>
        </div>
        {/* Desktop Navigation */}
        <nav className='hidden md:block'>
          <ul className="flex space-x-6 text-2xl font-medium">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            {/* <li><Link to="/journeys">Journeys</Link></li> */}
            <li><Link to="/ourservice">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/enquiry">Enquire</Link></li>
          </ul>
        </nav>
      {/* Hamburger (Mobile only) */}
      <div className="md:hidden">
        <button onClick={() => setIsMenuOpen(true)} className="text-3xl focus:outline-none">
            <FiMenu />
        </button>
      </div>
      
    </header>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          onClick={() => setIsMenuOpen(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[9998]"
        ></div>
      )}
      {/* Slide-in Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-1/2 bg-[#2F86A6] text-white z-[9999] transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-3xl"
          onClick={() => setIsMenuOpen(false)}
        >
          <FiX />
        </button>

        {/* Mobile Nav Items */}
        <ul className="flex flex-col justify-start items-center h-full gap-8 text-xl font-semibold px-6 py-12 ">
          <li className='w-full px-2 pb-4 border-b text-center'><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
          <li className='w-full px-2 pb-4 border-b  text-center'><Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link></li>
          {/* <li className='w-full px-2 pb-4 border-b  text-center'><Link to="/journeys" onClick={() => setIsMenuOpen(false)}>Journeys</Link></li> */}
          <li className='w-full px-2 pb-4 border-b  text-center'><Link to="/ourservice" onClick={() => setIsMenuOpen(false)}>Services</Link></li>
          <li className='w-full px-2 pb-4 border-b  text-center'><Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
          <li className='w-full px-2 pb-4 border-b  text-center'><Link to="/gallery" onClick={() => setIsMenuOpen(false)}>Gallery</Link></li>
          <li className='w-full px-2 pb-4 border-b  text-center'><Link to="/enquiry" onClick={() => setIsMenuOpen(false)}>Enquire</Link></li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
