import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from "emailjs-com";
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect  } from 'react';
// import 'tailwindcss/tailwind.css';
import './App.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


const Enquire = () => {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({});
  const next = () => setStep((s) => s + 1);
  const prev = () => setStep((s) => s - 1);
  const edit = (targetStep) => setStep(targetStep);

  // const [formData, setFormData] = useState(() => {
  //   const saved = localStorage.getItem('enquiryData');
  //   return saved ? JSON.parse(saved) : {};
  // });
  // const [formData, setFormData] = useState({
  //   organization_name: '',
  //   contact_person: '',
  //   phone: '',
  //   email: '',
  //   city: '',
  //   tripType: [],
  //   students: '',
  //   grade_class: '',
  //   tripDate: '',           // ✅ Include this
  //   requirements: ''
  // });
  
  const [date, setDate] = useState(null);

  useEffect(() => {
    localStorage.setItem('enquiryData', JSON.stringify(formData));
  }, [formData]);



  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name === "tripDate") return;
    if (type === 'checkbox') {
      setFormData((prev) => ({
        ...prev,
        [name]: [...(prev[name] || []), value],
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  }; 
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send(
      "service_a500329",
      "template_c9b7f7j",
      formData,
      "vkn0Ji1uZsBk2j1Uq"
    ).then(
      (result) => {
        console.log("Success:", result.text);
        console.log(result.text);
      },
      (error) => {
        console.error("Error:", error.text);
        console.error(error.text);
      }
    );

    // existing code (e.g., sending to backend or email)
    // console.log("Form submitted with data:", formData); // <-- This logs the data
    // console.log(formData.tripDate?.toLocaleDateString());
      // const formattedData = {
      //   ...formData,
      //   tripDate: formData.tripDate
      //     ? formData.tripDate.toISOString().split("T")[0] // "2025-07-16"
      //     : null,
      // };

      // console.log("Submitting:", formattedData);
      // setIsSubmitted(true);

    // Optional: Show a toast or confirmation
    // alert("Form submitted successfully!");
    // toast.success("Form submitted successfully!");
  };

  // const sendEmail = (e) => {
  //   e.preventDefault();
  //   formData.dates = date?.toLocaleDateString();

  //   emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData, 'YOUR_PUBLIC_KEY')
  //     .then(() => {
  //       toast.success('Enquiry submitted successfully!');
  //       setStep(1);
  //       setFormData({});
  //       setDate(null);
  //       localStorage.removeItem('enquiryData');
  //     })
  //     .catch(() => toast.error('Something went wrong. Please try again.'));
  // };

  const progressClass = step === 3 ? 'w-full bg-green-500' : step === 2 ? 'w-2/3 bg-[#2F86A6]' : 'w-1/3 bg-blue-400';

  return (
    <section data-aos="fade-up" className="Enquiry-Form bg-gradient-to-tr from-gray-100 to-white py-16 px-4 sm:px-8 w-[100vw]">
      <img src="/gallery/bg-image-12.png" alt="" className="w-full h-full absolute left-[0%] top-[0%] opacity-50 enquiry-bg-image enquiry-bg-image-1"/>
      {isSubmitted ? (
        <div className="form-main-container text-center relative max-w-3xl mx-auto bg-white shadow-xl rounded-xl p-8 sm:p-10 border border-blue-100">
          <div className="flex justify-center mb-4">
            <div className="bg-green-500 p-3 rounded-full">
              <svg
                className="w-10 h-10 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
          <h2 className="text-3xl font-semibold text-gray-800 mb-2">
            Form submitted successfully!
          </h2>
          <p className="text-xl pt-10 text-gray-600 mb-4">
            Thank you for your submission. We have received your information and
            will process it shortly. You will receive a confirmation email within
            the next few minutes.
          </p>
        </div>
      ) : (
        <div className="form-main-container relative max-w-3xl mx-auto bg-white shadow-xl rounded-xl p-8 sm:p-10 border border-blue-100">
          <h2 className="text-3xl font-extrabold text-[#2F86A6] text-center mb-6">Enquire Now</h2>

          {/* Progress Bar */}
          <div className="mb-6 h-2 bg-gray-200 rounded-full">
            <div className={`h-2 rounded-full transition-all duration-500 ${progressClass}`}></div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5 overflow-hidden">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div key="step1" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} transition={{ duration: 0.3 }} className="space-y-4">
                  <input type="text" name="organization_name" placeholder="School/Organization Name" required onChange={handleChange} value={formData.organization_name || ''} className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400" />
                  <input type="text" name="contact_person" placeholder="Contact Person Name" required onChange={handleChange} value={formData.contact_person || ''} className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400" />
                  <input type="text" name="phone" placeholder="Phone Number (Mobile & WhatsApp)" required onChange={handleChange} value={formData.phone || ''} className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400" />
                  <input type="email" name="email" placeholder="Email Address" required onChange={handleChange} value={formData.email || ''} className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400" />
                  <input type="text" name="city" placeholder="City / Location" required onChange={handleChange} value={formData.city || ''} className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400" />
                </motion.div>
              )}

              {step === 2 && (
                <motion.fieldset key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }} className="space-y-4">
                  <legend className="font-semibold text-[#2F86A6] mb-2">Preferred Trip Type:</legend>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {['Educational Tour', 'Adventure Camp', 'Day Picnic', 'Customized Trip'].map((type) => (
                      <label key={type} className="inline-flex items-center">
                        <input type="checkbox" name="tripType" value={type} onChange={handleChange} className="mr-2" /> {type}
                      </label>
                    ))}
                  </div>
                  <input type="number" name="students" placeholder="No. of Students" onChange={handleChange} value={formData.students || ''} className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400" />
                  <input type="text" name="grade_class" placeholder="Grade/Class Range (e.g., Class 6–10)" onChange={handleChange} value={formData.grade_class || ''} className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400" />
                  {/* <DatePicker selected={date} onChange={(d) => setDate(d)} placeholderText="01/01/2025" className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400" /> */}
                  <DatePicker name="tripDate"  selected={formData.tripDate || null}  onChange={(date) =>    setFormData((prev) => ({      ...prev,      tripDate: date,    }))  }  placeholderText="01/01/2025"  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"/>
                  {/* <p className="text-sm text-gray-500 mt-1">  Selected Date: {formData.tripDate ? new Date(formData.tripDate).toLocaleDateString() : "01/01/2025"}</p> */}
                  <textarea name="requirements" placeholder="Special Requirements (if any)" onChange={handleChange} value={formData.requirements || ''} className="w-full p-3 border border-gray-300 rounded-md h-24 focus:ring-2 focus:ring-blue-400"></textarea>
                </motion.fieldset>
              )}

              {step === 3 && (
                <motion.div key="step3" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }} className="space-y-3 text-gray-800">
                  <h3 className="text-xl font-bold text-[#2F86A6] mb-4">Review Your Details</h3>
                  {/* {Object.entries({ ...formData, dates: date?.toLocaleDateString() || '' }).map(([key, value], i) => ( */}
                  {Object.entries({ ...formData, tripDate: formData.tripDate ? new Date(formData.tripDate).toLocaleDateString() : '' }).map(([key, value], i) => (
                    <div key={i} className="flex justify-between items-center bg-gray-50 p-4 rounded border">
                      <div>
                        <strong className="capitalize block text-sm text-gray-500">{key.replace(/([A-Z])/g, ' $1')}</strong>
                        <p className="text-base font-medium text-gray-900">{Array.isArray(value) ? value.join(', ') : value}</p>
                      </div>
                      <button type="button" onClick={() => edit(key === 'organization_name' ? 1 : 2)} className="text-sm text-[#2F86A6] hover:underline">Edit</button>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            <div className="flex justify-between mt-6">
              {step > 1 && <button type="button" onClick={prev} className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-5 rounded">Back</button>}
              {step < 3 && <button type="button" onClick={next} className="bg-[#2F86A6] text-white py-2 px-5 rounded hover:bg-[#358caf]">Next</button>}
              {step === 3 && <button type="submit" className="bg-blue-700 text-white py-2 px-6 rounded hover:bg-blue-800">Submit</button>}
            </div>
          </form>
          <ToastContainer position="top-center" autoClose={3000} />
        </div>
      )}
    </section>
  );
};

export default Enquire;