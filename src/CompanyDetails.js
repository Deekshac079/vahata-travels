const CompanyDetails = () => (
  <section data-aos="fade-up" className="w-[100vw] relative bg-white py-16 px-4 sm:px-6 lg:px-10 text-center overflow-hidden company-details about-us">
    
    <img className="des-icon-2 w-[15%] left-[0.5rem] bottom-[-5px] md:w-[auto] md:left-[100px] animate-tree " src="/gallery/bg-image-5.png" alt="icon"></img>
    <img src="/gallery/bg-image-2.png" alt="" className="absolute left-[39rem] md:left-[85%] md:top-[10%]  md:rotate-[0] top-[2%] rotate-[300deg] enquiry-bg-image enquiry-bg-image-1"/>
  
    <div className="relative z-10 max-w-full md:max-w-6xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-[#2f86a6]">About VAHATA</h2>
      <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed">
        <i>At <b><em>VAHATA</em></b>, we believe that travel is more than just a journey—it’s an opportunity for students to discover new perspectives, learn beyond the classroom, and grow as individuals.
        We specialize in enriching domestic travel experiences tailored specifically for students. Our programs help them explore vibrant cultures, immerse in nature, and engage in thrilling adventures that build essential life skills.
        <br  className="hidden sm:block" />
        With a strong focus on safety, affordability, and exposure, we create unforgettable experiences that spark curiosity, promote global citizenship, and leave lasting memories.
        At <b><em>VAHATA</em></b>, we turn every trip into a learning adventure.</i>

        </p>
      {/* <p>At VAHATA, we craft memorable and safe educational trips for school students. */}
      {/* We believe travel is the best teacher, helping students learn by exploring the world around them.</p> */}

      {/* Cards */}
      <div className="lg:mt-10 grid grid-cols-1 sm:w-[70%] sm:my-[2rem] sm:mx-[auto] lg:grid-cols-3 gap-6">
        <div className="bg-[#2f86a61a] p-6 rounded shadow">
          <h3 className="text-xl font-semibold text-[#2F86A6] mb-2">10+ Years Experience</h3>
          <p className="text-sm sm:text-base">Organizing educational and safe student trips since 2014.</p>
        </div>
        <div className="bg-[#2f86a61a] p-6 rounded shadow">
          <h3 className="text-lg sm:text-xl font-semibold text-[#2F86A6] mb-2">Certified Guides</h3>
          <p className="text-sm sm:text-base">Professionally trained and background-verified tour staff.</p>
        </div>
        <div className="bg-[#2f86a61a] p-6 rounded shadow">
          <h3 className="text-lg sm:text-xl font-semibold text-[#2F86A6] mb-2">Trusted by Schools</h3>
          <p  className="text-sm sm:text-base">Over 500+ schools trust VAHATA for safe and impactful journeys.</p>
        </div>
      </div>
    </div>
  </section>
);

export default CompanyDetails;