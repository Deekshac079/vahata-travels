const TermsAndConditions = () => {
  return (
    <section className="about-hero relative w-[100vw]">
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
            <h1 className="text-4xl md:text-5xl font-bold text-white">Terms and Condition</h1>
            <div className="mt-2 text-sm text-teal-300">
              <a href="/" className="hover:underline">
                Home
              </a>
              <span className="mx-2">|</span>
              <span className="text-white">Terms and Condition</span>
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
      <div className="max-w-[60%] mx-auto px-6 py-10 text-gray-800">

        <p className="mb-4">
          Welcome to <strong>VAHATA</strong>! By accessing or using our website, you agree to be bound by the following terms and conditions. Please read them carefully.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">1. Use of Website</h2>
        <p className="mb-4">
          This website is intended to provide information about our student-focused travel services and to allow users to submit inquiries. All content is for informational purposes only.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">2. Information Accuracy</h2>
        <p className="mb-4">
          We do our best to ensure the information on our website is accurate and up-to-date. However, we make no warranties regarding the completeness, accuracy, or reliability of any content.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">3. User Responsibilities</h2>
        <p className="mb-4">
          You agree not to misuse our website or submit any false, misleading, or harmful information through our forms. We reserve the right to ignore or delete such inquiries.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">4. Intellectual Property</h2>
        <p className="mb-4">
          All content on this website, including text, graphics, logos, images, and layout, is the property of VAHATA or used with permission. You may not copy, distribute, or reuse any content without our written permission.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">5. Third-Party Services</h2>
        <p className="mb-4">
          We may use third-party services (like Netlify Forms) to process your submitted information. We are not responsible for any issues arising from these services, though we only use reputable providers.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">6. Limitation of Liability</h2>
        <p className="mb-4">
          VAHATA is not responsible for any direct, indirect, or incidental losses that may result from your use of this website or any information provided on it.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">7. Modifications</h2>
        <p className="mb-4">
          We may update these Terms and Conditions at any time without prior notice. Changes will be effective immediately upon posting. Please review this page regularly.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">8. Contact Information</h2>
        <p className="mb-4">
          If you have any questions about these Terms and Conditions, you may contact us at:
        </p>
        <ul className="list-disc ml-6 mb-4">
          <li>Email: <a href="mailto:info@vahata.co.in" className="text-blue-600 hover:underline">info@vahata.co.in</a></li>
          <li>Phone: +91 7982715254</li>
          <li>Address: 671, T-16, River Height, Rajnagar Ext, Ghaziabad, Pin code - 201017</li>
        </ul>

        <p className="text-sm mt-10 text-gray-500">Last Updated: August 1, 2025</p>
      </div>
    </section>
  );
};

export default TermsAndConditions;
