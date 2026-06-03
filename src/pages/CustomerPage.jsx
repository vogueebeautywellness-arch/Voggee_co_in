import { useState, useEffect, useRef } from 'react';
import { 
  Smartphone, 
  Download, 
  Calendar, 
  Coffee, 
  Clock, 
  Check, 
  ShieldAlert, 
  Sparkles,
  ShieldCheck,
  Zap,
  Gift,
  MapPin,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { services, categories } from '../data/servicesData';

export default function CustomerPage() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const scrollRef = useRef(null);

  const scrollTo = (index) => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const child = container.children[index];
      if (child) {
        container.scrollTo({
          left: child.offsetLeft,
          behavior: 'smooth'
        });
        setActiveIdx(index);
      }
    }
  };

  const handlePrev = () => {
    const nextIdx = (activeIdx - 1 + services.length) % services.length;
    scrollTo(nextIdx);
  };

  const handleNext = () => {
    const nextIdx = (activeIdx + 1) % services.length;
    scrollTo(nextIdx);
  };

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      const nextIdx = (activeIdx + 1) % services.length;
      scrollTo(nextIdx);
    }, 10000); // 10 seconds
    return () => clearInterval(timer);
  }, [activeIdx, isHovered]);
  return (
    <div className="min-h-screen text-gray-800 bg-[#f5f0e8] antialiased">
      
      {/* SECTION 1: HERO */}
      <section className="relative overflow-hidden py-16 md:py-24 bg-gradient-to-br from-[#f5f0e8] via-[#fdfcf7] to-[#c9a84c]/10">
        <div className="absolute top-20 right-[-10%] w-96 h-96 rounded-full bg-[#c9a84c]/10 blur-3xl pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <span className="text-[#2d6a2d] font-bold text-xs uppercase tracking-widest bg-[#2d6a2d]/10 px-3 py-1 rounded-full border border-[#2d6a2d]/25">
                For Customers
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1a4a1a] leading-tight">
                Premium Salon, <br/>
                <span className="text-[#2d6a2d] italic font-normal">At Your Doorstep.</span>
              </h1>
              <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
                No travel, no waiting. Certified beauty professionals come to you equipped with high-end tools and sealed mono-dosage product kits.
              </p>
              
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a
                  href="#download-banner"
                  className="bg-[#1a4a1a] hover:bg-[#2d6a2d] text-[#f5f0e8] hover:text-white px-8 py-4 rounded-full font-bold transition-all shadow-md flex items-center justify-center gap-2 border border-[#c9a84c]/20"
                >
                  <Download size={18} className="text-[#c9a84c]" />
                  <span>Download on Google Play</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[340px]">
                <div className="absolute inset-0 bg-[#c9a84c]/20 rounded-3xl -rotate-6 scale-102 -z-10 shadow-lg"></div>
                <img
                  src="/voguee_app_mockup.png"
                  alt="voguee Mobile App Mockup"
                  className="w-full h-auto rounded-3xl object-cover shadow-2xl border-4 border-white"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2: HOW IT WORKS */}
      <section className="py-16 md:py-24 bg-white border-y border-[#c9a84c]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#1a4a1a]">
              How voguee Works
            </h2>
            <p className="text-gray-500 mt-3 text-sm sm:text-base font-medium">
              Get pampered in 3 simple steps without leaving your living room.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Step 1 */}
            <div className="text-center space-y-4 flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-[#f5f0e8] border-2 border-[#c9a84c] flex items-center justify-center text-[#1a4a1a] shadow-md relative">
                <Smartphone size={28} />
                <span className="absolute -top-2 -right-2 bg-[#2d6a2d] text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold font-mono">1</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-[#1a4a1a]">Download the voguee App</h3>
              <p className="text-sm text-gray-500 max-w-xs font-medium">
                Get our free mobile app for Android and register in seconds with your phone number.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center space-y-4 flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-[#f5f0e8] border-2 border-[#c9a84c] flex items-center justify-center text-[#1a4a1a] shadow-md relative">
                <Calendar size={28} />
                <span className="absolute -top-2 -right-2 bg-[#2d6a2d] text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold font-mono">2</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-[#1a4a1a]">Choose Service & Schedule</h3>
              <p className="text-sm text-gray-500 max-w-xs font-medium">
                Select your preferred services, choose a convenient date and time, and enter your address.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center space-y-4 flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-[#f5f0e8] border-2 border-[#c9a84c] flex items-center justify-center text-[#1a4a1a] shadow-md relative">
                <Coffee size={28} />
                <span className="absolute -top-2 -right-2 bg-[#2d6a2d] text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold font-mono">3</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-[#1a4a1a]">Relax — Expert Comes to You</h3>
              <p className="text-sm text-gray-500 max-w-xs font-medium">
                Our verified, certified professional arrives with all the kits and setup. Sit back and enjoy!
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 3: SERVICES AVAILABLE (INFO ONLY) */}
      <section className="py-16 md:py-24 bg-[#f5f0e8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#2d6a2d] font-bold text-xs uppercase tracking-widest bg-[#2d6a2d]/10 px-3 py-1 rounded-full border border-[#2d6a2d]/25">
              Service Catalog
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#1a4a1a] mt-3">
              Services Available on the App
            </h2>
            <p className="text-gray-500 mt-2 text-sm sm:text-base leading-relaxed">
              Take a look at the comprehensive services you can book. Note: Pricing, bundles, and slots are available exclusively on the mobile app.
            </p>
          </div>

          {/* Mobile Swipe Hint */}
          <div className="text-center md:hidden mb-4 text-[#2d6a2d] text-2xs font-extrabold uppercase tracking-widest flex items-center justify-center gap-1.5 animate-pulse">
            <span>← Swipe left/right to view →</span>
          </div>

          <div 
            ref={scrollRef}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onTouchStart={() => setIsHovered(true)}
            onTouchEnd={() => setIsHovered(false)}
            className="flex overflow-x-auto gap-6 pb-6 md:grid md:grid-cols-2 md:overflow-x-visible md:pb-0 snap-x snap-mandatory scrollbar-none max-w-6xl mx-auto"
          >
            {services.map((service) => {
              const catName = categories.find(c => c.id === service.categoryId)?.name || 'Beauty';
              return (
                <div key={service.id} className="bg-white rounded-3xl p-6 md:p-8 border border-[#c9a84c]/20 shadow-sm hover:shadow-md transition-all flex flex-col justify-between min-w-[280px] sm:min-w-[340px] md:min-w-0 snap-center shrink-0">
                  <div className="space-y-3">
                    <div className="flex justify-between items-start">
                      <span className="bg-[#2d6a2d]/10 text-[#1a4a1a] text-3xs font-extrabold uppercase px-2.5 py-1 rounded border border-[#2d6a2d]/20 tracking-wider">
                        {catName}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-gray-500 font-semibold bg-[#f5f0e8] px-2 py-0.5 rounded">
                        <Clock size={13} /> {service.duration} mins
                      </span>
                    </div>

                    <h3 className="font-serif text-lg md:text-xl font-bold text-[#1a4a1a] leading-tight">
                      {service.name}
                    </h3>
                    
                    <p className="text-gray-600 text-xs sm:text-sm font-medium leading-relaxed">
                      {service.description}
                    </p>

                    <div className="pt-2 border-t border-[#c9a84c]/10">
                      <h4 className="text-3xs font-extrabold text-[#c9a84c] tracking-widest uppercase mb-1.5">What's Included:</h4>
                      <ul className="space-y-1">
                        {service.features.slice(0, 3).map((feat, idx) => (
                          <li key={idx} className="flex items-center gap-1.5 text-2xs sm:text-xs text-gray-500 font-medium">
                            <Check size={12} className="text-[#2d6a2d]" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Arrow Controls (Mobile Only) */}
          <div className="flex md:hidden justify-center items-center gap-4 mt-6">
            <button 
              onClick={handlePrev}
              className="w-10 h-10 rounded-full bg-white border border-[#c9a84c]/30 flex items-center justify-center text-[#1a4a1a] shadow-xs active:bg-[#f5f0e8]"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-1.5">
              {services.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollTo(idx)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${activeIdx === idx ? 'bg-[#2d6a2d] w-4' : 'bg-gray-300'}`}
                />
              ))}
            </div>
            <button 
              onClick={handleNext}
              className="w-10 h-10 rounded-full bg-white border border-[#c9a84c]/30 flex items-center justify-center text-[#1a4a1a] shadow-xs active:bg-[#f5f0e8]"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          <div className="mt-12 text-center">
            <a
              href="#download-banner"
              className="inline-flex items-center gap-2 bg-[#1a4a1a] hover:bg-[#2d6a2d] text-[#f5f0e8] hover:text-white px-8 py-3.5 rounded-full font-bold transition-all shadow-md border border-[#c9a84c]/20"
            >
              <span>Download the App to Book Now</span>
            </a>
          </div>

        </div>
      </section>

      {/* SECTION 4: SAFETY PROMISE */}
      <section className="py-16 md:py-24 bg-white border-t border-[#c9a84c]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#2d6a2d] font-bold text-xs uppercase tracking-widest bg-[#2d6a2d]/10 px-3 py-1 rounded-full border border-[#2d6a2d]/25">
              Hygiene Standard
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#1a4a1a] mt-3">
              The voguee Safety Promise
            </h2>
            <p className="text-gray-500 mt-2 text-sm sm:text-base leading-relaxed">
              We care about your hygiene. We have completely rewritten standard salon safety rules.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Promise 1 */}
            <div className="bg-[#f5f0e8]/50 border border-[#c9a84c]/20 p-8 rounded-3xl text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-[#1a4a1a] text-white flex items-center justify-center mx-auto shadow-md">
                <ShieldCheck size={28} className="text-[#c9a84c]" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#1a4a1a]">Sealed Single-Use Kits</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-medium">
                Every wax, facial sachet, or body gel is in a sealed kit opened only in front of you. Zero contamination.
              </p>
            </div>

            {/* Promise 2 */}
            <div className="bg-[#f5f0e8]/50 border border-[#c9a84c]/20 p-8 rounded-3xl text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-[#1a4a1a] text-white flex items-center justify-center mx-auto shadow-md">
                <Check size={28} className="text-[#c9a84c]" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#1a4a1a]">Disposable Linen</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-medium">
                Fresh, disposable bed sheets, towels, aprons, and headbands are provided for every single booking.
              </p>
            </div>

            {/* Promise 3 */}
            <div className="bg-[#f5f0e8]/50 border border-[#c9a84c]/20 p-8 rounded-3xl text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-[#1a4a1a] text-white flex items-center justify-center mx-auto shadow-md">
                <ShieldAlert size={28} className="text-[#c9a84c]" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#1a4a1a]">Sanitized Tools</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-medium">
                All steel nail cutters, scissors, and combs are sanitized using hospital-grade sanitizers before the session.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 5: APP DOWNLOAD BANNER */}
      <section id="download-banner" className="bg-[#1a4a1a] text-[#f5f0e8] py-16 md:py-24 relative overflow-hidden scroll-mt-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#2d6a2d]/50 via-transparent to-transparent pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Content left */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <span className="bg-[#c9a84c] text-[#1a4a1a] text-2xs font-extrabold uppercase px-3 py-1 rounded-full tracking-wider">
                voguee Mobile App
              </span>
              
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-white animate-fade-in">
                Book in Seconds. <br/>
                <span className="text-[#c9a84c] italic font-normal">Download the voguee App</span>
              </h2>
              
              <p className="text-gray-300 text-sm sm:text-base max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
                Get access to live professional tracking, simple 1-click rescheduling, app-only discounts, and premium pre-bridal booking options.
              </p>

              {/* Features grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto lg:mx-0 text-left pt-2 text-xs sm:text-sm">
                
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#2d6a2d] flex items-center justify-center border border-[#c9a84c]/20">
                    <MapPin size={14} className="text-[#c9a84c]" />
                  </div>
                  <span className="text-white font-medium">Live Therapist Tracking</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#2d6a2d] flex items-center justify-center border border-[#c9a84c]/20">
                    <Zap size={14} className="text-[#c9a84c]" />
                  </div>
                  <span className="text-white font-medium">1-Tap Reschedule</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#2d6a2d] flex items-center justify-center border border-[#c9a84c]/20">
                    <Gift size={14} className="text-[#c9a84c]" />
                  </div>
                  <span className="text-white font-medium">App-Only Deals</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#2d6a2d] flex items-center justify-center border border-[#c9a84c]/20">
                    <Sparkles size={14} className="text-[#c9a84c]" />
                  </div>
                  <span className="text-white font-medium">Pre-Bridal Slots</span>
                </div>

              </div>

              {/* App download button and QR Code */}
              <div className="pt-6 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
                <a
                  href="#"
                  className="bg-[#c9a84c] hover:bg-[#b0913b] text-[#1a4a1a] hover:text-[#1a4a1a] px-8 py-4 rounded-full font-bold transition-all shadow-lg flex items-center justify-center gap-2"
                >
                  <Smartphone size={18} />
                  <span>Download App (Android)</span>
                </a>
                
                {/* QR Code Placeholder */}
                <div className="flex items-center gap-3 bg-white/5 border border-white/10 p-3 rounded-2xl">
                  <div className="w-16 h-16 bg-white p-1 rounded-lg flex items-center justify-center shadow-inner shrink-0">
                    {/* Simulated QR Code using boxes */}
                    <div className="grid grid-cols-4 gap-1 w-full h-full bg-gray-100 p-1">
                      <div className="bg-black"></div>
                      <div className="bg-white"></div>
                      <div className="bg-black"></div>
                      <div className="bg-black"></div>
                      <div className="bg-black"></div>
                      <div className="bg-black"></div>
                      <div className="bg-white"></div>
                      <div className="bg-white"></div>
                      <div className="bg-white"></div>
                      <div className="bg-black"></div>
                      <div className="bg-black"></div>
                      <div className="bg-white"></div>
                      <div className="bg-black"></div>
                      <div className="bg-white"></div>
                      <div className="bg-white"></div>
                      <div className="bg-black"></div>
                    </div>
                  </div>
                  <div className="text-left">
                    <div className="text-2xs text-gray-300 font-extrabold uppercase tracking-wide">Scan to download</div>
                    <div className="text-xs text-white font-bold">Get it on your phone</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mockup right */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[280px]">
                <div className="absolute inset-0 bg-[#c9a84c]/20 rounded-3xl rotate-6 scale-102 -z-10 shadow-lg"></div>
                <img
                  src="/voguee_app_mockup.png"
                  alt="voguee App Mockup"
                  className="w-full h-auto rounded-3xl object-cover shadow-2xl border-4 border-white"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
