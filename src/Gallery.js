const Gallery = () => {
  const images = [
      '/gallery/4.jpg',
      '/gallery/5.jpg',
      '/gallery/6.jpg',
      '/gallery/7.jpg',
    '/gallery/8.jpg',
    // '/gallery/3.jpg',
    // '/gallery/9.jpg',
    '/gallery/10.jpg',
    '/gallery/11.jpg',
    '/gallery/12.jpg',
    '/gallery/13.jpg',
    '/gallery/14.jpg',
    '/gallery/2.jpeg',
    '/gallery/15.jpg',
    '/gallery/1.jpg',
    // '/gallery/16.jpg',
    '/gallery/17.jpg',
    '/gallery/18.jpg',
  ];

  return (
    <section className="">
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
            <h1 className="text-4xl md:text-5xl font-bold text-white">PHOTO GALLERY</h1>
            <div className="mt-2 text-sm text-teal-300">
              <a href="/" className="hover:underline">
                Home
              </a>
              <span className="mx-2">|</span>
              <span className="text-white">Photo Gallery</span>
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
      <div className="second-section px-4 py-10">
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {images.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Gallery ${idx}`}
              className="w-full rounded-lg mb-4 break-inside-avoid shadow-md hover:scale-105 transition-transform duration-300"
            />
          ))}
        </div>
        </div>
    </section>
  );
};

export default Gallery;
