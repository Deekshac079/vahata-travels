
const PrivacyPolicy= () => {
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
            <h1 className="text-4xl md:text-5xl font-bold text-white">Privacy Policy</h1>
            <div className="mt-2 text-sm text-teal-300">
              <a href="/" className="hover:underline">
                Home
              </a>
              <span className="mx-2">|</span>
              <span className="text-white">Privacy Policy</span>
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
          At <strong>VAHATA</strong>, your privacy is important to us. This policy explains how we handle the limited personal information we collect through our website.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">Information We Collect</h2>
        <p className="mb-4">
          We only collect the basic details you voluntarily submit through our enquiry form. This may include: Name, Email address, Phone number, and any additional information you provide in your message.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">How We Use Your Information</h2>
        <p className="mb-4">
          We use the information solely to respond to your enquiry or provide relevant information about our travel services.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">Data Sharing</h2>
        <p className="mb-4">
          We do not sell, rent, or share your personal information with any third party. Your details are used strictly for communication purposes related to your enquiry.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">Data Storage</h2>
        <p className="mb-4">
          Since our website is static, form submissions may be processed through a third-party service (like Formspree, Netlify Forms, etc.). These services may temporarily store the data to deliver it to us securely.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">Your Rights</h2>
        <p className="mb-4">
          If you want us to delete your information or stop contacting you, just email us at <a href="mailto:info@vahata.co.in" className="text-blue-600 hover:underline">info@vahata.co.in</a>.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">Changes to This Policy</h2>
        <p className="mb-4">
          This policy may be updated occasionally. Any changes will be posted on this page.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, feel free to contact us:
        </p>
        <ul className="list-disc ml-6 mt-3">
          <li>Email: <a href="mailto:info@vahata.co.in" className="text-blue-600 hover:underline">info@vahata.co.in</a></li>
          <li>Phone: +91 7982715254</li>
          <li>Address: 671, T-16, River Height, Rajnagar Ext, Ghaziabad, Pin code - 201017</li>
        </ul>

        {/* <p className="text-sm mt-10 text-gray-500">Last Updated: August 1, 2025</p> */}
      </div>
    </section>
  );
}
export default PrivacyPolicy;