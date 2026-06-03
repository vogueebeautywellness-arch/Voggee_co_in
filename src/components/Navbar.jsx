import { useState } from 'react';
import { NavLink, Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, Flower2, Smartphone } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleHashLinkClick = (hashId) => {
    setMobileMenuOpen(false);
    if (location.pathname !== '/') {
      navigate(`/#${hashId}`);
    } else {
      const element = document.getElementById(hashId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const navLinkClass = ({ isActive }) =>
    `transition-colors duration-200 font-medium ${
      isActive
        ? 'text-[#2d6a2d] border-b-2 border-[#2d6a2d]'
        : 'text-gray-700 hover:text-[#2d6a2d]'
    } pb-1`;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-[#1a4a1a] text-[#f5f0e8] text-center py-2 px-4 text-xs sm:text-sm font-semibold tracking-wide flex justify-center items-center gap-2">
        <span>✨ India's #1 At-Home Salon | Trusted by 1M+ Customers</span>
      </div>

      {/* Main Navbar */}
      <header className="sticky top-0 z-40 bg-[#f5f0e8]/90 backdrop-blur-md border-b border-[#c9a84c]/20 shadow-sm transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex justify-between items-center">
          
          {/* Logo */}
          <Link to="/" onClick={scrollToTop} className="flex items-center gap-2">
            <img src="/Logo.png" alt="Voggee Logo" className="h-12 w-auto" />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold">
            <NavLink to="/" end onClick={scrollToTop} className={navLinkClass}>
              Home
            </NavLink>
            <NavLink to="/customers" className={navLinkClass}>
              For Customers
            </NavLink>
            <NavLink to="/partners" className={navLinkClass}>
              For Partners
            </NavLink>
            <NavLink to="/safety" className={navLinkClass}>
              Safety Standards
            </NavLink>
            <button
              onClick={() => handleHashLinkClick('reviews-section')}
              className="text-gray-700 hover:text-[#2d6a2d] transition-colors font-semibold cursor-pointer"
            >
              Reviews
            </button>
            <button
              onClick={() => handleHashLinkClick('faq-section')}
              className="text-gray-700 hover:text-[#2d6a2d] transition-colors font-semibold cursor-pointer"
            >
              FAQs
            </button>
          </nav>

          {/* Download App CTA */}
          <div className="hidden sm:flex items-center">
            <a
              href="#download-banner"
              onClick={(e) => {
                e.preventDefault();
                const target = document.getElementById('download-banner');
                if (target) {
                  target.scrollIntoView({ behavior: 'smooth' });
                } else {
                  // Fallback for partner/safety pages where download-banner is not present or at the bottom
                  navigate('/customers#download-banner');
                  setTimeout(() => {
                    document.getElementById('download-banner')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }
              }}
              className="bg-[#1a4a1a] hover:bg-[#2d6a2d] text-[#f5f0e8] hover:text-white px-6 py-2.5 rounded-full flex items-center gap-2 transition-all duration-300 font-semibold text-sm shadow-md border border-[#c9a84c]/20 hover:border-[#c9a84c]/40"
            >
              <Smartphone size={16} className="text-[#c9a84c]" />
              <span>Download App</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#1a4a1a] hover:bg-[#c9a84c]/10 rounded-lg cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#f5f0e8] border-t border-[#c9a84c]/20 px-4 py-4 space-y-4 shadow-inner">
            <div className="flex flex-col gap-3 font-semibold text-gray-700">
              <NavLink
                to="/"
                end
                onClick={() => {
                  setMobileMenuOpen(false);
                  scrollToTop();
                }}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-lg hover:bg-[#c9a84c]/10 ${
                    isActive ? 'text-[#2d6a2d] bg-[#c9a84c]/10' : ''
                  }`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/customers"
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-lg hover:bg-[#c9a84c]/10 ${
                    isActive ? 'text-[#2d6a2d] bg-[#c9a84c]/10' : ''
                  }`
                }
              >
                For Customers
              </NavLink>
              <NavLink
                to="/partners"
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-lg hover:bg-[#c9a84c]/10 ${
                    isActive ? 'text-[#2d6a2d] bg-[#c9a84c]/10' : ''
                  }`
                }
              >
                For Partners
              </NavLink>
              <NavLink
                to="/safety"
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-lg hover:bg-[#c9a84c]/10 ${
                    isActive ? 'text-[#2d6a2d] bg-[#c9a84c]/10' : ''
                  }`
                }
              >
                Safety Standards
              </NavLink>
              <button
                onClick={() => handleHashLinkClick('reviews-section')}
                className="text-left px-3 py-2 rounded-lg hover:bg-[#c9a84c]/10 font-semibold cursor-pointer w-full text-gray-700 hover:text-[#2d6a2d]"
              >
                Reviews
              </button>
              <button
                onClick={() => handleHashLinkClick('faq-section')}
                className="text-left px-3 py-2 rounded-lg hover:bg-[#c9a84c]/10 font-semibold cursor-pointer w-full text-gray-700 hover:text-[#2d6a2d]"
              >
                FAQs
              </button>
            </div>
            
            {/* Mobile CTA */}
            <div className="pt-2 border-t border-[#c9a84c]/20">
              <a
                href="#download-banner"
                onClick={(e) => {
                  e.preventDefault();
                  setMobileMenuOpen(false);
                  const target = document.getElementById('download-banner');
                  if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    navigate('/customers#download-banner');
                    setTimeout(() => {
                      document.getElementById('download-banner')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }
                }}
                className="w-full bg-[#1a4a1a] hover:bg-[#2d6a2d] text-[#f5f0e8] py-3 rounded-xl flex items-center justify-center gap-2 font-bold transition-colors"
              >
                <Smartphone size={18} className="text-[#c9a84c]" />
                <span>Download App</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
