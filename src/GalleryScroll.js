import { useEffect, useRef } from 'react';

const GalleryScroll = () => {
  const galleryRef = useRef(null);

  useEffect(() => {
    const handleScroll = (e) => {
      const direction = window.scrollY - lastScrollY.current;
      lastScrollY.current = window.scrollY;

      if (galleryRef.current) {
        const move = direction > 0 ? 2 : -2; // down = left, up = right
        galleryRef.current.scrollLeft += move;
      }
    };

    const lastScrollY = { current: window.scrollY };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

    const scrollLeft = () => {
    galleryRef.current.scrollBy({ left: -200, behavior: 'smooth' });
  };

  const scrollRight = () => {
    galleryRef.current.scrollBy({ left: 200, behavior: 'smooth' });
  };

  const images = [
    // '/gallery/1.jpg',
    // '/gallery/2.jpeg',
    // '/gallery/3.jpg',
    '/gallery/4.jpg',
    // '/gallery/5.jpg',
    '/gallery/6.jpg',
    '/gallery/7.jpg',
    '/gallery/8.jpg',
    '/gallery/9.jpg',
    // '/gallery/10.jpg',
    '/gallery/11.jpg',
    // '/gallery/12.jpg',
    // '/gallery/13.jpg',
    '/gallery/15.jpg',
    '/gallery/16.jpg',
    '/gallery/14.jpg',
  ];
const FilmstripGallery = () => {
  return (
    <div className="overflow-x-auto whitespace-nowrap p-4">
      <div className="flex gap-6">
        {images.map((src, index) => (
          <div key={index} className="filmstrip">
            <img
              src={src}
              alt={`Gallery ${index}`}
              className="w-60 h-40 object-cover rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
  return (
    <section data-aos="fade-up" className="gallery-main-box relative overflow-hidden w-[100vw]">
      {/* <h2 className="text-2xl font-bold text-center mb-8">Photo Gallery</h2> */}
      <button
        onClick={scrollLeft}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-60 text-white p-2 rounded-full z-10"
      >
        ◀
      </button>
      <button
        onClick={scrollRight}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-60 text-white p-2 rounded-full z-10"
      >
        ▶
      </button>
      <div
        ref={galleryRef}
        className="gallery-scroll-item flex gap-4 overflow-x-scroll scroll-smooth px-8 scrollbar-hide"
      >
        {FilmstripGallery()}
        {images.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`Gallery ${idx}`}
            className="h-100 w-auto object-cover transition-transform duration-100 hover:scale-105"
          />
        ))}
      </div>
    </section>
  );
};

export default GalleryScroll;
