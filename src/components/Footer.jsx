import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Flower2, Facebook, Instagram, Twitter, Linkedin, Mail, Phone } from 'lucide-react';

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleHashLinkClick = (hashId) => {
    if (location.pathname !== '/') {
      navigate(`/#${hashId}`);
    } else {
      const element = document.getElementById(hashId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1a4a1a] text-[#f5f0e8] border-t border-[#c9a84c]/20 pt-16 pb-8 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-[#2d6a2d]/10 blur-3xl pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-80 h-80 rounded-full bg-[#c9a84c]/5 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 pb-12 border-b border-[#c9a84c]/20">

          {/* Logo and Tagline */}
          <div className="col-span-1 md:col-span-5 space-y-4">
            <Link to="/" onClick={scrollToTop} className="flex items-center gap-2">
              <div className="bg-[#2d6a2d] text-[#f5f0e8] p-2 rounded-xl flex items-center justify-center border border-[#c9a84c]/30 shadow-md">
                <Flower2 size={24} className="text-[#c9a84c]" />
              </div>
              <span className="font-serif text-3xl font-extrabold tracking-tight text-white">
                Voggee<span className="text-[#c9a84c]">.</span>
              </span>
            </Link>
            <p className="text-gray-300 text-sm max-w-sm leading-relaxed">
              Luxury Salon Services, Delivered at Home. Experience premium grooming with background-checked therapists and single-use sealed kits.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-[#2d6a2d] hover:bg-[#c9a84c]/20 flex items-center justify-center text-[#c9a84c] hover:text-white transition-all border border-[#c9a84c]/20">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#2d6a2d] hover:bg-[#c9a84c]/20 flex items-center justify-center text-[#c9a84c] hover:text-white transition-all border border-[#c9a84c]/20">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#2d6a2d] hover:bg-[#c9a84c]/20 flex items-center justify-center text-[#c9a84c] hover:text-white transition-all border border-[#c9a84c]/20">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#2d6a2d] hover:bg-[#c9a84c]/20 flex items-center justify-center text-[#c9a84c] hover:text-white transition-all border border-[#c9a84c]/20">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1 md:col-span-3 space-y-4">
            <h4 className="font-serif text-lg font-bold text-white border-b border-[#c9a84c]/20 pb-2">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-300 font-semibold">
              <li>
                <Link to="/customers" className="hover:text-[#c9a84c] transition-colors">For Customers</Link>
              </li>
              <li>
                <Link to="/partners" className="hover:text-[#c9a84c] transition-colors">For Partners</Link>
              </li>
              <li>
                <Link to="/safety" className="hover:text-[#c9a84c] transition-colors">Safety Standards</Link>
              </li>
              <li>
                <button onClick={() => handleHashLinkClick('reviews-section')} className="hover:text-[#c9a84c] transition-colors cursor-pointer text-left font-semibold">Reviews</button>
              </li>
              <li>
                <button onClick={() => handleHashLinkClick('faq-section')} className="hover:text-[#c9a84c] transition-colors cursor-pointer text-left font-semibold">FAQs</button>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="col-span-1 md:col-span-4 space-y-4">
            <h4 className="font-serif text-lg font-bold text-white border-b border-[#c9a84c]/20 pb-2">Get in Touch</h4>
            <ul className="space-y-3 text-sm text-gray-300 font-semibold">
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-[#c9a84c]" />
                <a href="tel:+919876543210" className="hover:text-[#c9a84c] transition-colors">+91 7506176999</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-[#c9a84c]" />
                <a href="mailto:[EMAIL_ADDRESS]" className="hover:text-[#c9a84c] transition-colors">vogueebeautywellness@gmail.com</a>
              </li>
              <li className="text-xs text-gray-400 font-normal leading-relaxed pt-1">
                Voggee Corporate Office: <br />
                Suite 402, Green Oasis Towers, <br />
                Koramangala, Bangalore - 560034
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <span>© 2026 Voggee Wellness Pvt. Ltd. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#c9a84c] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#c9a84c] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
