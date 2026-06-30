import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

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
              <img src="/navbar.png" alt="voguee Logo" className="h-12 w-auto" />
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
              <li>
                <Link to="/delete-account" className="hover:text-[#c9a84c] transition-colors">Delete Account</Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="col-span-1 md:col-span-4 space-y-4">
            <h4 className="font-serif text-lg font-bold text-white border-b border-[#c9a84c]/20 pb-2">Contact Us</h4>
            <ul className="space-y-3 text-sm text-gray-300 font-semibold">
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-[#c9a84c] flex-shrink-0" />
                <a href="tel:+917506176999" className="hover:text-[#c9a84c] transition-colors">+91 7506176999</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-[#c9a84c] flex-shrink-0" />
                <a href="mailto:vogueebeautywellness@gmail.com" className="hover:text-[#c9a84c] transition-colors">vogueebeautywellness@gmail.com</a>
              </li>
              <li className="pt-2 space-y-3">
                <p className="text-xs text-[#c9a84c] font-bold uppercase tracking-wide">Shop Address</p>
                <div className="flex gap-3">
                  <MapPin size={16} className="text-[#c9a84c] flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-gray-400 font-normal leading-relaxed">
                    <span className="text-gray-300 font-semibold">1.</span> 9th Floor, City R Club, Runwal Garden, Dombivli, Bhadra Nagar, Kalyan, Maharashtra 421204
                  </p>
                </div>
                <div className="flex gap-3">
                  <MapPin size={16} className="text-[#c9a84c] flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-gray-400 font-normal leading-relaxed">
                    <span className="text-gray-300 font-semibold">2.</span> Ground Floor, Ladkabai Nanji Chawl, Shop No. 115, Dr Mascarenhas Rd, Anjeer Wadi, Mazgaon, Mumbai, Maharashtra 400010
                  </p>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <span>© 2026 voguee Beauty & Wellness Pvt. Ltd. All rights reserved.</span>
          <div className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6">
            <Link to="/privacy-policy" className="hover:text-[#c9a84c] transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-[#c9a84c] transition-colors">Terms of Service</Link>
            <Link to="/delete-account" className="hover:text-[#c9a84c] transition-colors">Delete Account</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
