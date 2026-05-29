import { useState } from "react";
import { MessageSquare, Mail, Phone, MapPin, Clock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Import a high-fashion portrait from the PDF for the booking card
import bookingBackground from "../assets/extracted/booking1.jpeg";

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    preferredDate: "",
    service: "Fashion Shoot",
    message: "",
  });

  const [toastMessage, setToastMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const getFormattedDate = (dateStr) => {
    if (!dateStr) return "June 12"; // Placeholder default if empty
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", {
      day: "numeric",
      month: "long"
    });
  };

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => setToastMessage(null), 5000);
  };

  const handleWhatsAppReservation = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email) {
      showToast("Please fill in all required fields marked with *");
      return;
    }

    const formattedDate = getFormattedDate(formData.preferredDate);

    // Core message format matching prompt instruction
    const waText = `Hi RGB Studio, I want to book the studio on ${formattedDate} for a ${formData.service}.
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
${formData.message ? `Notes: ${formData.message}` : ""}`;

    const encodedText = encodeURIComponent(waText);
    const whatsappNum = "919619666066"; // Studio WhatsApp

    showToast("Launching WhatsApp Reservation Link...");
    window.open(`https://wa.me/${whatsappNum}?text=${encodedText}`, "_blank");
  };

  const handleEmailInquiry = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email) {
      showToast("Please fill in all required fields marked with *");
      return;
    }

    const formattedDate = getFormattedDate(formData.preferredDate);
    const emailBody = `Hi RGB Studio,

I would like to book the studio. Here are my inquiry details:

Preferred Date: ${formattedDate}
Service/Package: ${formData.service}

Contact Info:
- Full Name: ${formData.name}
- Phone Number: ${formData.phone}
- Email: ${formData.email}

Message details:
${formData.message || "No additional notes provided."}`;

    const encodedSubject = encodeURIComponent(`RGB Studio Booking Inquiry - ${formData.service}`);
    const encodedBody = encodeURIComponent(emailBody);
    const studioEmail = "anurag19utsav@gmail.com";

    showToast("Opening your mail client...");
    window.location.href = `mailto:${studioEmail}?subject=${encodedSubject}&body=${encodedBody}`;
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
                    <a href="mailto:anurag19utsav@gmail.com" className="text-gray-500 text-xs font-light hover:text-[#c9a35b] transition-colors">
                      anurag19utsav@gmail.com
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
                      Monday - Saturday: 09:00 AM - 08:00 PM | Sunday: By Appointment
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
                    placeholder="e.g. Full Name"
                    className="bg-[#f4f1ed]/50 border border-[#e8e1db] focus:border-[#c9a35b] px-4 py-3.5 text-xs text-[#111111] focus:outline-none transition-colors rounded"
                  />
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
                    className="bg-[#f4f1ed]/50 border border-[#e8e1db] focus:border-[#c9a35b] px-4 py-3.5 text-xs text-[#111111] focus:outline-none transition-colors rounded"
                  />
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
                    className="bg-[#f4f1ed]/50 border border-[#e8e1db] focus:border-[#c9a35b] px-4 py-3.5 text-xs text-[#111111] focus:outline-none transition-colors rounded"
                  />
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

              {/* Service / Package */}
              <div className="flex flex-col">
                <label htmlFor="service" className="text-[9px] uppercase tracking-widest font-bold text-gray-500 mb-2">
                  Service / Package
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="bg-[#f4f1ed]/50 border border-[#e8e1db] focus:border-[#c9a35b] px-4 py-3.5 text-xs text-[#111111] focus:outline-none transition-colors rounded appearance-none"
                >
                  <option value="Fashion Shoot">Fashion Shoot</option>
                  <option value="Commercial Project">Commercial Project</option>
                  <option value="Content Creation">Content Creation</option>
                  <option value="Studio Rental (Hourly)">Studio Rental (Hourly)</option>
                  <option value="Editorial Shoot">Editorial Shoot</option>
                  <option value="Portrait Session">Portrait Session</option>
                </select>
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

              {/* CTA Action Buttons Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">

                {/* Secondary Button: Email Inquiry */}
                <button
                  type="button"
                  onClick={handleEmailInquiry}
                  className="w-full text-[10px] uppercase tracking-[0.2em] font-bold border border-[#111111] text-[#111111] hover:bg-[#111111] hover:text-white py-4 transition-all duration-300 flex justify-center items-center cursor-pointer rounded"
                >
                  <Mail size={14} className="mr-2" />
                  Email Link
                </button>

                {/* Primary Button: WhatsApp Reservation */}
                <button
                  type="button"
                  onClick={handleWhatsAppReservation}
                  className="w-full text-[10px] uppercase tracking-[0.2em] font-bold bg-[#111111] hover:bg-[#c9a35b] text-white py-4 transition-all duration-300 flex justify-center items-center cursor-pointer rounded shadow-sm hover:shadow"
                >
                  <MessageSquare size={14} className="mr-2 text-[#c9a35b]" />
                  Open WhatsApp
                </button>

              </div>

              {/* Main Prominent Reservation CTA */}
              <button
                type="button"
                onClick={handleWhatsAppReservation}
                className="w-full text-xs uppercase tracking-[0.2em] font-semibold bg-[#c9a35b] hover:bg-[#b08c4b] text-white py-4.5 transition-all duration-300 flex justify-center items-center cursor-pointer rounded shadow-md"
              >
                <MessageSquare size={16} className="mr-2" />
                OPEN WHATSAPP RESERVATION
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
