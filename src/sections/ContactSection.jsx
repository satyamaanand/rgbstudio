import { useState } from "react";
import { MessageSquare, Mail, Phone, MapPin, Clock } from "lucide-react";
import { motion } from "framer-motion";

import fashionImg from "../assets/fashion_0.jpg";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    serviceType: "Premium Portfolio Package",
    preferredDate: "",
    message: "",
  });

  const [contactMethod, setContactMethod] = useState("whatsapp"); // "whatsapp" or "email"
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const { name, phone, email, serviceType, preferredDate, message } = formData;
    
    // Formatting date nicely
    const formattedDate = preferredDate 
      ? new Date(preferredDate).toLocaleDateString("en-US", {
          day: "numeric",
          month: "long",
          year: "numeric",
        }) 
      : "a preferred date";

    // Prefilled text message
    const rawMessage = `Hi RGB Studio, my name is ${name}. I want to book/inquire about the "${serviceType}" on ${formattedDate}.
Phone: ${phone}
Email: ${email}
${message ? `Notes: ${message}` : ""}`;

    const encodedText = encodeURIComponent(rawMessage);

    if (contactMethod === "whatsapp") {
      // User's WhatsApp number
      const whatsappNumber = "919619671971"; 
      window.open(`https://wa.me/${whatsappNumber}?text=${encodedText}`, "_blank");
    } else {
      const emailAddress = "anurag19utsav@gmail.com";
      const subject = encodeURIComponent(`Booking Inquiry - ${serviceType}`);
      window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${encodedText}`;
    }

    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="booking" className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-[#c9a35b] font-semibold block mb-3">
                Reservations
              </span>
              <h2 className="text-3xl md:text-5xl font-light tracking-wide text-[#111111] mb-6 font-serif">
                Book a Session
              </h2>
              <div className="w-12 h-[1px] bg-[#c9a35b] mb-8"></div>
              
              <p className="text-gray-500 font-light text-sm md:text-base leading-relaxed mb-10">
                Ready to capture your next editorial campaign, talent portfolio, or product launch? Fill out our minimal request form, and our studio assistants will coordinate standard dates with you.
              </p>

              {/* Information List */}
              <div className="space-y-6 mb-10">
                <div className="flex items-start space-x-4">
                  <MapPin className="text-[#c9a35b] shrink-0 mt-0.5" size={20} />
                  <div>
                    <h4 className="text-xs uppercase tracking-widest font-semibold text-[#111111] mb-1">Studio Address</h4>
                    <a
                      href="https://maps.app.goo.gl/i6M9ZR2zqBkD898b9"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 text-xs font-light hover:text-[#c9a35b] transition-colors duration-300"
                    >
                      101, Editorial Lane, Creative District, Mumbai, MH - 400013
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="text-[#c9a35b] shrink-0 mt-0.5" size={20} />
                  <div>
                    <h4 className="text-xs uppercase tracking-widest font-semibold text-[#111111] mb-1">Inquiries</h4>
                    <a
                      href="mailto:anurag19utsav@gmail.com"
                      className="text-gray-500 text-xs font-light hover:text-[#c9a35b] transition-colors duration-300"
                    >
                      anurag19utsav@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="text-[#c9a35b] shrink-0 mt-0.5" size={20} />
                  <div>
                    <h4 className="text-xs uppercase tracking-widest font-semibold text-[#111111] mb-1">Direct Helpline</h4>
                    <a
                      href="tel:+919619671971"
                      className="text-gray-500 text-xs font-light hover:text-[#c9a35b] transition-colors duration-300"
                    >
                      +91 96196 71971
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="text-[#c9a35b] shrink-0 mt-0.5" size={20} />
                  <div>
                    <h4 className="text-xs uppercase tracking-widest font-semibold text-[#111111] mb-1">Operational Hours</h4>
                    <p className="text-gray-500 text-xs font-light">Mon - Sat: 9 AM - 8 PM | Sun: Appointment Only</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Editorial Image Card */}
            <div className="hidden lg:block h-[220px] overflow-hidden relative">
              <img
                src={fashionImg}
                alt="Studio Setup Camera"
                className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-[#c9a35b]/10 mix-blend-overlay" />
            </div>

          </div>

          {/* Right Column: Interactive Booking Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 bg-[#f5f5f5] p-8 md:p-12 border border-gray-100"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Your Name */}
                <div className="flex flex-col">
                  <label htmlFor="name" className="text-[10px] uppercase tracking-widest font-bold text-gray-500 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Alexander Vance"
                    className="bg-white border border-gray-200 px-4 py-3.5 text-xs text-[#111111] focus:outline-none focus:border-[#c9a35b] transition-colors"
                  />
                </div>

                {/* Phone */}
                <div className="flex flex-col">
                  <label htmlFor="phone" className="text-[10px] uppercase tracking-widest font-bold text-gray-500 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. +91 96196 71971"
                    className="bg-white border border-gray-200 px-4 py-3.5 text-xs text-[#111111] focus:outline-none focus:border-[#c9a35b] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Email Address */}
                <div className="flex flex-col">
                  <label htmlFor="email" className="text-[10px] uppercase tracking-widest font-bold text-gray-500 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. alex@example.com"
                    className="bg-white border border-gray-200 px-4 py-3.5 text-xs text-[#111111] focus:outline-none focus:border-[#c9a35b] transition-colors"
                  />
                </div>

                {/* Preferred Date */}
                <div className="flex flex-col">
                  <label htmlFor="preferredDate" className="text-[10px] uppercase tracking-widest font-bold text-gray-500 mb-2">
                    Preferred Date
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      id="preferredDate"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleChange}
                      className="w-full bg-white border border-gray-200 px-4 py-3.5 text-xs text-[#111111] focus:outline-none focus:border-[#c9a35b] transition-colors appearance-none"
                    />
                  </div>
                </div>
              </div>

              {/* Service Type Selection */}
              <div className="flex flex-col">
                <label htmlFor="service-type" className="text-[10px] uppercase tracking-widest font-bold text-gray-500 mb-2">
                  Service / Package
                </label>
                <select
                  id="service-type"
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                  className="bg-white border border-gray-200 px-4 py-3.5 text-xs text-[#111111] focus:outline-none focus:border-[#c9a35b] transition-colors appearance-none"
                >
                  <option value="Basic Session">Basic Session ($299)</option>
                  <option value="Premium Portfolio Package">Premium Portfolio ($599)</option>
                  <option value="Professional Editorial">Professional Editorial ($999)</option>
                  <option value="Portfolio Shoot">Portfolio Shoot (Service)</option>
                  <option value="Fashion Photography">Fashion Photography (Service)</option>
                  <option value="Product Photography">Product Photography (Service)</option>
                  <option value="Studio Rental Space">Studio Rental Space ($75/hr)</option>
                  <option value="Social Media Content">Social Media Content (Service)</option>
                  <option value="Corporate Headshots">Corporate Headshots (Service)</option>
                </select>
              </div>

              {/* Message */}
              <div className="flex flex-col">
                <label htmlFor="message" className="text-[10px] uppercase tracking-widest font-bold text-gray-500 mb-2">
                  Inquiry Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Share a brief overview of your creative scope, theme details, moodboard link..."
                  className="bg-white border border-gray-200 px-4 py-3.5 text-xs text-[#111111] focus:outline-none focus:border-[#c9a35b] transition-colors resize-none"
                />
              </div>

              {/* Booking Channel Toggle */}
              <div className="flex flex-col pt-2">
                <span className="text-[10px] uppercase tracking-widest font-bold text-gray-500 mb-3">
                  Submit Reservation Via:
                </span>
                <div className="grid grid-cols-2 gap-4">
                  {/* WhatsApp */}
                  <label
                    className={`flex items-center justify-center space-x-2 border p-3.5 cursor-pointer transition-all duration-300 ${
                      contactMethod === "whatsapp"
                        ? "border-[#c9a35b] bg-[#c9a35b]/5 text-[#c9a35b]"
                        : "border-gray-200 bg-white text-gray-500 hover:border-[#111111]"
                    }`}
                  >
                    <input
                      type="radio"
                      name="contactMethod"
                      value="whatsapp"
                      checked={contactMethod === "whatsapp"}
                      onChange={() => setContactMethod("whatsapp")}
                      className="sr-only"
                    />
                    <MessageSquare size={16} />
                    <span className="text-xs uppercase tracking-wider font-semibold">WhatsApp</span>
                  </label>

                  {/* Email */}
                  <label
                    className={`flex items-center justify-center space-x-2 border p-3.5 cursor-pointer transition-all duration-300 ${
                      contactMethod === "email"
                        ? "border-[#c9a35b] bg-[#c9a35b]/5 text-[#c9a35b]"
                        : "border-gray-200 bg-white text-gray-500 hover:border-[#111111]"
                    }`}
                  >
                    <input
                      type="radio"
                      name="contactMethod"
                      value="email"
                      checked={contactMethod === "email"}
                      onChange={() => setContactMethod("email")}
                      className="sr-only"
                    />
                    <Mail size={16} />
                    <span className="text-xs uppercase tracking-wider font-semibold">Email Link</span>
                  </label>
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full text-xs uppercase tracking-[0.2em] font-semibold bg-[#111111] text-white hover:bg-[#c9a35b] py-4 transition-all duration-300 flex justify-center items-center"
              >
                {contactMethod === "whatsapp" ? (
                  <>
                    <MessageSquare size={16} className="mr-2" />
                    Open WhatsApp Reservation
                  </>
                ) : (
                  <>
                    <Mail size={16} className="mr-2" />
                    Send Email Inquiry
                  </>
                )}
              </button>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-xs text-[#c9a35b] font-semibold mt-2"
                >
                  Redirecting your request to chosen application...
                </motion.div>
              )}
            </form>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
