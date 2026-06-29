import { useState } from "react";
import { MessageSquare, Mail, Phone, MapPin, Clock, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Import a high-fashion portrait from the PDF for the booking card
import bookingBackground from "../assets/images/booking1.jpg";

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    preferredDate: "",
    bookingPurpose: "Fashion Shoot",
    purposeDetails: "",
    preferredStartTime: "",
    rentalDuration: "3 Hours",
    teamSize: "1–3 People",
    equipmentRequirements: [],
    message: "",
  });

  const [toastMessage, setToastMessage] = useState(null);
  const [errors, setErrors] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => {
      const currentReqs = prev.equipmentRequirements || [];
      const updatedReqs = checked
        ? [...currentReqs, value]
        : currentReqs.filter((item) => item !== value);
      return { ...prev, equipmentRequirements: updatedReqs };
    });
  };

  const getFormattedDate = (dateStr) => {
    if (!dateStr) return "June 12"; // Placeholder default if empty
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", {
      day: "numeric",
      month: "long"
    });
  };

  const formatTime12h = (timeStr) => {
    if (!timeStr) return "";
    const [hoursStr, minutesStr] = timeStr.split(":");
    const hours = parseInt(hoursStr, 10);
    const ampm = hours >= 12 ? "PM" : "AM";
    const hours12 = hours % 12 || 12;
    return `${hours12.toString().padStart(2, "0")}:${minutesStr} ${ampm}`;
  };

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => setToastMessage(null), 5000);
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Full Name is required";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone Number is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email Address is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.preferredStartTime) {
      newErrors.preferredStartTime = "Preferred Start Time is required";
    }
    if (!formData.rentalDuration) {
      newErrors.rentalDuration = "Rental Duration is required";
    }
    if (!formData.teamSize) {
      newErrors.teamSize = "Team Size is required";
    }
    if (formData.bookingPurpose === "Other" && !formData.purposeDetails.trim()) {
      newErrors.purposeDetails = "Purpose Details are required when 'Other' is selected";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleWhatsAppSubmit = () => {
    const formattedDate = getFormattedDate(formData.preferredDate);
    const formattedTime = formatTime12h(formData.preferredStartTime);
    const equipList = formData.equipmentRequirements.length > 0
      ? formData.equipmentRequirements.map(item => `* ${item}`).join("\n")
      : "* None";
    const purposeText = formData.bookingPurpose === "Other"
      ? `Other (${formData.purposeDetails})`
      : formData.bookingPurpose;

    const waText = `Hello RGB Studio,

I would like to make a booking request.

Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}

Booking Purpose: ${purposeText}
Preferred Date: ${formattedDate}
Preferred Start Time: ${formattedTime}
Rental Duration: ${formData.rentalDuration}
Team Size: ${formData.teamSize}

Equipment Requirements:
${equipList}

Additional Notes:
${formData.message || "None"}

Please let me know if the studio is available at the requested date and time.`;

    const encodedText = encodeURIComponent(waText);
    const whatsappNum = "919619666066"; // Studio WhatsApp

    showToast("Launching WhatsApp...");
    window.open(`https://wa.me/${whatsappNum}?text=${encodedText}`, "_blank");
  };

  const handleGmailSubmit = () => {
    const formattedDate = getFormattedDate(formData.preferredDate);
    const formattedTime = formatTime12h(formData.preferredStartTime);
    const equipList = formData.equipmentRequirements.length > 0
      ? formData.equipmentRequirements.map(item => `* ${item}`).join("\n")
      : "* None";
    const purposeText = formData.bookingPurpose === "Other"
      ? `Other (${formData.purposeDetails})`
      : formData.bookingPurpose;

    const emailBody = `Hello RGB Studio,

I would like to make a booking request.

Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}

Booking Purpose: ${purposeText}
Preferred Date: ${formattedDate}
Preferred Start Time: ${formattedTime}
Rental Duration: ${formData.rentalDuration}
Team Size: ${formData.teamSize}

Equipment Requirements:
${equipList}

Additional Notes:
${formData.message || "None"}

Please let me know if the studio is available at the requested date and time.`;

    const encodedSubject = encodeURIComponent(`RGB Studio Booking Inquiry - ${purposeText}`);
    const encodedBody = encodeURIComponent(emailBody);
    const studioEmail = "rgbstudio.mumbai@gmail.com";

    showToast("Opening Gmail Compose...");
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${studioEmail}&su=${encodedSubject}&body=${encodedBody}`, "_blank");
  };

  const handleSubmitBookingRequest = (e) => {
    e?.preventDefault();
    if (validateForm()) {
      setIsModalOpen(true);
    }
  };

  return (
    <section id="booking" className="py-32 px-6 md:px-12 lg:px-24 bg-[#f4f1ed] relative">
      {/* Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 50, x: "-50%" }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-[#111111] text-white px-6 py-4 rounded shadow-2xl z-55 flex items-center space-x-3 border border-[#c9a35b]/30 min-w-[300px]"
          >
            <div className="w-2 h-2 rounded-full bg-[#c9a35b] animate-ping" />
            <span className="text-xs uppercase tracking-wider font-semibold">{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

          {/* Left Column: Direct Info Card */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-[10px] uppercase tracking-[0.4em] text-[#c9a35b] font-bold block mb-4">
                Reservations
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-light text-[#111111] mb-6 leading-[1.2]">
                Book a Session
              </h2>
              <div className="w-16 h-[1px] bg-[#c9a35b] mb-8" />

              <p className="text-gray-500 font-light text-sm leading-relaxed mb-10">
                Ready to secure your booking date for a fashion shoot, content production, or commercial project? Complete the request form. Our system supports direct, instant scheduling via WhatsApp and Email redirection.
              </p>

              {/* Direct Info list */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="text-[#c9a35b] shrink-0 mt-0.5" size={18} />
                  <div>
                    <h4 className="text-[10px] uppercase tracking-widest font-bold text-[#111111] mb-1">Studio Address</h4>
                    <p className="text-gray-500 text-xs font-light">
                      FIRST FLOOR, 01, Rd Number 6, near GLOW STUDIO, Motilal Nagar I, Goregaon West, Mumbai, Maharashtra 400104
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="text-[#c9a35b] shrink-0 mt-0.5" size={18} />
                  <div>
                    <h4 className="text-[10px] uppercase tracking-widest font-bold text-[#111111] mb-1">Email Helpline</h4>
                    <a href="mailto:rgbstudio.mumbai@gmail.com" className="text-gray-500 text-xs font-light hover:text-[#c9a35b] transition-colors">
                      rgbstudio.mumbai@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="text-[#c9a35b] shrink-0 mt-0.5" size={18} />
                  <div>
                    <h4 className="text-[10px] uppercase tracking-widest font-bold text-[#111111] mb-1">Direct Calling</h4>
                    <a href="tel:+919619666066" className="text-gray-500 text-xs font-light hover:text-[#c9a35b] transition-colors">
                      +91 96196 66066
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="text-[#c9a35b] shrink-0 mt-0.5" size={18} />
                  <div>
                    <h4 className="text-[10px] uppercase tracking-widest font-bold text-[#111111] mb-1">Operational Hours</h4>
                    <p className="text-gray-500 text-xs font-light">
                      Monday - Sunday: 09:00 AM - 11:59 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Editorial Background visual from PDF */}
            <div className="hidden lg:block h-[260px] overflow-hidden relative rounded border border-[#e8e1db] shadow-sm mt-10">
              <img
                src={bookingBackground}
                alt="Studio editorial photoshoot"
                className="w-full h-full object-cover grayscale brightness-95 contrast-105 hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-[#c9a35b]/5 mix-blend-overlay" />
            </div>

          </div>

          {/* Right Column: Premium Form Card */}
          <div className="lg:col-span-7 bg-white p-8 md:p-12 border border-[#e8e1db] rounded shadow-sm">
            <form className="space-y-6">

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Full Name */}
                <div className="flex flex-col">
                  <label htmlFor="name" className="text-[9px] uppercase tracking-widest font-bold text-gray-500 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Your Name"
                    className={`bg-[#f4f1ed]/50 border ${errors.name ? "border-red-500 focus:border-red-500" : "border-[#e8e1db] focus:border-[#c9a35b]"
                      } px-4 py-3.5 text-xs text-[#111111] focus:outline-none transition-colors rounded`}
                  />
                  {errors.name && (
                    <span className="text-red-500 text-[10px] mt-1 font-semibold tracking-wide">
                      {errors.name}
                    </span>
                  )}
                </div>

                {/* Phone Number */}
                <div className="flex flex-col">
                  <label htmlFor="phone" className="text-[9px] uppercase tracking-widest font-bold text-gray-500 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. +91 96196 66066"
                    className={`bg-[#f4f1ed]/50 border ${errors.phone ? "border-red-500 focus:border-red-500" : "border-[#e8e1db] focus:border-[#c9a35b]"
                      } px-4 py-3.5 text-xs text-[#111111] focus:outline-none transition-colors rounded`}
                  />
                  {errors.phone && (
                    <span className="text-red-500 text-[10px] mt-1 font-semibold tracking-wide">
                      {errors.phone}
                    </span>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Email Address */}
                <div className="flex flex-col">
                  <label htmlFor="email" className="text-[9px] uppercase tracking-widest font-bold text-gray-500 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. rgbstudio@example.com"
                    className={`bg-[#f4f1ed]/50 border ${errors.email ? "border-red-500 focus:border-red-500" : "border-[#e8e1db] focus:border-[#c9a35b]"
                      } px-4 py-3.5 text-xs text-[#111111] focus:outline-none transition-colors rounded`}
                  />
                  {errors.email && (
                    <span className="text-red-500 text-[10px] mt-1 font-semibold tracking-wide">
                      {errors.email}
                    </span>
                  )}
                </div>

                {/* Preferred Date */}
                <div className="flex flex-col">
                  <label htmlFor="preferredDate" className="text-[9px] uppercase tracking-widest font-bold text-gray-500 mb-2">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    id="preferredDate"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    className="bg-[#f4f1ed]/50 border border-[#e8e1db] focus:border-[#c9a35b] px-4 py-3.5 text-xs text-[#111111] focus:outline-none transition-colors rounded appearance-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Booking Purpose */}
                <div className="flex flex-col">
                  <label htmlFor="bookingPurpose" className="text-[9px] uppercase tracking-widest font-bold text-gray-500 mb-2">
                    Booking Purpose
                  </label>
                  <select
                    id="bookingPurpose"
                    name="bookingPurpose"
                    value={formData.bookingPurpose}
                    onChange={handleChange}
                    className="bg-[#f4f1ed]/50 border border-[#e8e1db] focus:border-[#c9a35b] px-4 py-3.5 text-xs text-[#111111] focus:outline-none transition-colors rounded appearance-none"
                  >
                    <option value="Fashion Shoot">Fashion Shoot</option>
                    <option value="Portfolio Shoot">Portfolio Shoot</option>
                    <option value="Product Photography">Product Photography</option>
                    <option value="Commercial Shoot">Commercial Shoot</option>
                    <option value="Video Production">Video Production</option>
                    <option value="Content Creation">Content Creation</option>
                    <option value="Podcast Recording">Podcast Recording</option>
                    <option value="Workshop / Training">Workshop / Training</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Preferred Start Time */}
                <div className="flex flex-col">
                  <label htmlFor="preferredStartTime" className="text-[9px] uppercase tracking-widest font-bold text-gray-500 mb-2">
                    Preferred Start Time *
                  </label>
                  <input
                    type="time"
                    id="preferredStartTime"
                    name="preferredStartTime"
                    required
                    value={formData.preferredStartTime}
                    onChange={handleChange}
                    className={`bg-[#f4f1ed]/50 border ${errors.preferredStartTime ? "border-red-500 focus:border-red-500" : "border-[#e8e1db] focus:border-[#c9a35b]"
                      } px-4 py-3.5 text-xs text-[#111111] focus:outline-none transition-colors rounded`}
                  />
                  {errors.preferredStartTime && (
                    <span className="text-red-500 text-[10px] mt-1 font-semibold tracking-wide">
                      {errors.preferredStartTime}
                    </span>
                  )}
                  <span className="text-[9px] text-gray-400 mt-1 font-light italic">
                    Actual booking time will be confirmed based on studio availability.
                  </span>
                </div>
              </div>

              {/* Dynamic Other Booking Purpose details */}
              <AnimatePresence>
                {formData.bookingPurpose === "Other" && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col overflow-hidden"
                  >
                    <label htmlFor="purposeDetails" className="text-[9px] uppercase tracking-widest font-bold text-gray-500 mb-2">
                      Purpose Details *
                    </label>
                    <input
                      type="text"
                      id="purposeDetails"
                      name="purposeDetails"
                      required
                      value={formData.purposeDetails}
                      onChange={handleChange}
                      placeholder="Please describe your booking purpose"
                      className={`bg-[#f4f1ed]/50 border ${errors.purposeDetails ? "border-red-500 focus:border-red-500" : "border-[#e8e1db] focus:border-[#c9a35b]"
                        } px-4 py-3.5 text-xs text-[#111111] focus:outline-none transition-colors rounded`}
                    />
                    {errors.purposeDetails && (
                      <span className="text-red-500 text-[10px] mt-1 font-semibold tracking-wide">
                        {errors.purposeDetails}
                      </span>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Rental Duration */}
                <div className="flex flex-col">
                  <label htmlFor="rentalDuration" className="text-[9px] uppercase tracking-widest font-bold text-gray-500 mb-2">
                    Rental Duration *
                  </label>
                  <select
                    id="rentalDuration"
                    name="rentalDuration"
                    value={formData.rentalDuration}
                    onChange={handleChange}
                    className="bg-[#f4f1ed]/50 border border-[#e8e1db] focus:border-[#c9a35b] px-4 py-3.5 text-xs text-[#111111] focus:outline-none transition-colors rounded appearance-none"
                  >
                    <option value="1 Hour">1 Hour</option>
                    <option value="2 Hours">2 Hours</option>
                    <option value="3 Hours">3 Hours</option>
                    <option value="4 Hours">4 Hours</option>
                    <option value="Half Day (5–6 Hours)">Half Day (5–6 Hours)</option>
                    <option value="Full Day (8–10 Hours)">Full Day (8–10 Hours)</option>
                  </select>
                </div>

                {/* Team Size */}
                <div className="flex flex-col">
                  <label htmlFor="teamSize" className="text-[9px] uppercase tracking-widest font-bold text-gray-500 mb-2">
                    Team Size *
                  </label>
                  <select
                    id="teamSize"
                    name="teamSize"
                    value={formData.teamSize}
                    onChange={handleChange}
                    className="bg-[#f4f1ed]/50 border border-[#e8e1db] focus:border-[#c9a35b] px-4 py-3.5 text-xs text-[#111111] focus:outline-none transition-colors rounded appearance-none"
                  >
                    <option value="1–3 People">1–3 People</option>
                    <option value="4–6 People">4–6 People</option>
                    <option value="7–10 People">7–10 People</option>
                    <option value="10+ People">10+ People</option>
                  </select>
                </div>
              </div>

              {/* Equipment Requirements */}
              <div className="flex flex-col">
                <label className="text-[9px] uppercase tracking-widest font-bold text-gray-500 mb-3">
                  Equipment Requirements
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-[#f4f1ed]/30 p-4 border border-[#e8e1db] rounded">
                  {[
                    "Strobes",
                    "Softboxes",
                    "Continuous Lights",
                    "Backdrops",
                    "Reflectors",
                    "Props",
                    "Makeup Area",
                    "Not Sure Yet"
                  ].map((item) => (
                    <label key={item} className="flex items-center space-x-2 text-xs text-gray-600 font-light cursor-pointer select-none">
                      <input
                        type="checkbox"
                        value={item}
                        checked={formData.equipmentRequirements.includes(item)}
                        onChange={handleCheckboxChange}
                        className="accent-[#c9a35b] border-[#e8e1db] rounded w-4 h-4"
                      />
                      <span>{item}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Inquiry Message */}
              <div className="flex flex-col">
                <label htmlFor="message" className="text-[9px] uppercase tracking-widest font-bold text-gray-500 mb-2">
                  Inquiry Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Share a brief overview of your creative scope, theme details, or required hours..."
                  className="bg-[#f4f1ed]/50 border border-[#e8e1db] focus:border-[#c9a35b] px-4 py-3.5 text-xs text-[#111111] focus:outline-none transition-colors rounded resize-none"
                />
              </div>

              {/* Main Prominent Reservation CTA */}
              <button
                type="button"
                onClick={handleSubmitBookingRequest}
                className="w-full text-xs uppercase tracking-[0.2em] font-semibold bg-[#c9a35b] hover:bg-[#b08c4b] text-white py-4.5 transition-all duration-300 flex justify-center items-center cursor-pointer rounded shadow-md mt-6"
              >
                SUBMIT BOOKING REQUEST
              </button>

            </form>
          </div>

        </div>
      </div>

      {/* Choice Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
            {/* Backdrop click to close */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 cursor-pointer"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="bg-white border border-[#e8e1db] p-8 md:p-10 rounded shadow-2xl max-w-md w-full relative z-51 text-center"
            >
              {/* Close Icon */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-[#111111] transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              {/* Gold decorative line */}
              <div className="w-12 h-[1px] bg-[#c9a35b] mx-auto mb-6" />

              <h3 className="font-serif text-2xl md:text-3xl font-light text-[#111111] mb-3 tracking-wide">
                Choose Contact Method
              </h3>
              <p className="text-gray-500 font-light text-xs md:text-sm mb-8 max-w-xs mx-auto leading-relaxed">
                Your booking request is ready to send.
              </p>

              {/* Action Buttons */}
              <div className="space-y-4">
                {/* Continue with WhatsApp */}
                <button
                  onClick={() => {
                    handleWhatsAppSubmit();
                    setIsModalOpen(false);
                  }}
                  className="w-full text-xs uppercase tracking-[0.2em] font-semibold bg-[#111111] hover:bg-[#c9a35b] text-white py-4 transition-all duration-300 flex justify-center items-center cursor-pointer rounded shadow-sm hover:shadow"
                >
                  <MessageSquare size={15} className="mr-2 text-[#c9a35b]" />
                  Continue with WhatsApp
                </button>

                {/* Continue with Gmail */}
                <button
                  onClick={() => {
                    handleGmailSubmit();
                    setIsModalOpen(false);
                  }}
                  className="w-full text-xs uppercase tracking-[0.2em] font-semibold border border-[#111111] text-[#111111] hover:bg-[#111111] hover:text-white py-4 transition-all duration-300 flex justify-center items-center cursor-pointer rounded"
                >
                  <Mail size={15} className="mr-2" />
                  Continue with Gmail
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
