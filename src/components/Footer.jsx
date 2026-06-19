import { Mail, Phone, MapPin, ArrowUp } from "lucide-react";
import logoImg from "../assets/images/logo.png";

export default function Footer() {
  const scrollToSection = (targetId) => {
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#111111] text-white pt-20 pb-10 px-6 md:px-12 border-t border-[#222222]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

        {/* Logo & Description */}
        <div className="flex flex-col space-y-6">
          <button
            onClick={() => scrollToSection("hero")}
            className="flex items-center cursor-pointer focus:outline-none self-start"
            aria-label="RGB Studio Home"
          >
            <img
              src={logoImg}
              alt="RGB Studio"
              className="h-16 md:h-20 w-auto object-contain invert brightness-200 mix-blend-screen"
            />
          </button>
          <p className="text-gray-400 text-xs leading-relaxed max-w-xs pt-2">
            A premium visual production and photography space, telling genuine stories through shadows, light, and luxury design.
          </p>
          {/* Social Icons */}
          <div className="flex space-x-4 pt-2">
            <a href="https://www.instagram.com/rgbstudiomumbai/?hl=en" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#c9a35b] transition-colors duration-300" aria-label="Instagram">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
              </svg>
            </a>
            <a href="https://www.facebook.com/rgbstudiomumbai" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#c9a35b] transition-colors duration-300" aria-label="Facebook">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a href="https://pin.it/1xL2lJvFj" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#c9a35b] transition-colors duration-300" aria-label="Pinterest">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.41 7.61 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.906 2.17-2.906 1.024 0 1.517.768 1.517 1.686 0 1.029-.656 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.204 0 1.03.399 2.137.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.162 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.27 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.621 0 11.988-5.366 11.988-11.987C23.971 5.367 18.636 0 12.017 0z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-serif text-sm font-semibold tracking-[0.2em] uppercase mb-6 text-[#c9a35b]">Quick Links</h4>
          <ul className="space-y-3 text-xs">
            <li>
              <button onClick={() => scrollToSection("hero")} className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">Home</button>
            </li>
            <li>
              <button onClick={() => scrollToSection("details")} className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">Studio Details</button>
            </li>
            <li>
              <button onClick={() => scrollToSection("equipments")} className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">Equipments</button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("gallery")}
                className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
              >
                Studio Gallery
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("guidelines")} className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">Guidelines</button>
            </li>
            <li>
              <button onClick={() => scrollToSection("rent")} className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">Studio on Rent</button>
            </li>
            <li>
              <button onClick={() => scrollToSection("about")} className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">About Us</button>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-serif text-sm font-semibold tracking-[0.2em] uppercase mb-6 text-[#c9a35b]">Contact Us</h4>
          <ul className="space-y-4 text-xs">
            <li className="flex items-start space-x-3 text-gray-400">
              <MapPin size={16} className="text-[#c9a35b] shrink-0 mt-0.5" />
              <a
                href="https://maps.app.goo.gl/i6M9ZR2zqBkD898b9"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors duration-300 leading-relaxed"
              >
                FIRST FLOOR, 01, Rd Number 6, near GLOW STUDIO, Motilal Nagar I, Goregaon West, Mumbai, Maharashtra 400104
              </a>
            </li>
            <li className="flex items-center space-x-3 text-gray-400">
              <Phone size={14} className="text-[#c9a35b] shrink-0" />
              <a href="tel:+919619666066" className="hover:text-white transition-colors duration-300">
                +91 96196 66066
              </a>
            </li>
            <li className="flex items-center space-x-3 text-gray-400">
              <Mail size={14} className="text-[#c9a35b] shrink-0" />
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=rgbstudio.mumbai@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors duration-300"
              >
                rgbstudio.mumbai@gmail.com
              </a>
            </li>
          </ul>

          {/* Premium Google Maps Embed */}
          <div className="mt-6 flex flex-col space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-[9px] uppercase tracking-widest text-[#c9a35b] font-semibold">Location Map</span>
              <a
                href="https://maps.app.goo.gl/i6M9ZR2zqBkD898b9"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[9px] uppercase tracking-widest text-gray-400 hover:text-[#c9a35b] transition-colors duration-300 font-semibold"
              >
                Open in Google Maps →
              </a>
            </div>
            <div className="overflow-hidden rounded-2xl border border-[#2a2a2a] shadow-lg group">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.8317580083153!2d72.8361657!3d19.1588404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7553aaf4fc3%3A0x615b427a482d42ea!2sRGB%20STUDIO%20%7C%20Photography%20studio%20on%20rent%20%7C%20Photoshoot%20space%20for%20rent%20%7C%20Photography%20%26%20Videography%20rental%20studio%20in%20Mumbai!5e0!3m2!1sen!2sin!4v1779995769989!5m2!1sen!2sin"
                width="100%"
                height="150"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-[150px] grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-out"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Studio Hours */}
        <div>
          <h4 className="font-serif text-sm font-semibold tracking-[0.2em] uppercase mb-6 text-[#c9a35b]">Studio Hours</h4>
          <ul className="space-y-3 text-xs text-gray-400">
            <li className="flex justify-between border-b border-[#222222] pb-1.5">
              <span>Monday - Friday</span>
              <span>09:00 AM - 08:00 PM</span>
            </li>
            <li className="flex justify-between border-b border-[#222222] pb-1.5">
              <span>Saturday</span>
              <span>10:00 AM - 06:00 PM</span>
            </li>
            <li className="flex justify-between pb-1.5">
              <span>Sunday</span>
              <span className="text-[#c9a35b]">By Appointment</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Gold Divider */}
      <div className="gold-line mb-8 opacity-25"></div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <p className="text-gray-500 text-xs tracking-wider">
          &copy; {new Date().getFullYear()} RGB Studio. All Rights Reserved. Crafted for premium storytellers.
        </p>

        {/* Back to top */}
        <button
          onClick={scrollToTop}
          className="flex items-center space-x-2 text-xs uppercase tracking-widest text-[#c9a35b] hover:text-white transition-colors duration-300 cursor-pointer"
        >
          <span>Back to top</span>
          <ArrowUp size={14} className="animate-bounce" />
        </button>
      </div>
    </footer>
  );
}
