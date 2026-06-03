import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Sparkles, 
  Flower2, 
  HeartHandshake, 
  Hand, 
  Scissors, 
  UserCheck, 
  Star, 
  Award, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Smartphone, 
  ChevronDown, 
  ChevronUp,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { categories, testimonials, faqs } from '../data/servicesData';

// Icon Helper mapping
const CategoryIcon = ({ iconName, className }) => {
  const icons = {
    Sparkles: Sparkles,
    Flower2: Flower2,
    HeartHandshake: HeartHandshake,
    Hand: Hand,
    Scissors: Scissors,
    UserCheck: UserCheck
  };
  const IconComponent = icons[iconName] || Sparkles;
  return <IconComponent className={className} />;
};

export default function HomePage() {
  const [faqOpenIndex, setFaqOpenIndex] = useState(null);
  const navigate = useNavigate();

  // Carousel State & Effects
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
    const nextIdx = (activeIdx - 1 + categories.length) % categories.length;
    scrollTo(nextIdx);
  };

  const handleNext = () => {
    const nextIdx = (activeIdx + 1) % categories.length;
    scrollTo(nextIdx);
  };

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      const nextIdx = (activeIdx + 1) % categories.length;
      scrollTo(nextIdx);
    }, 10000); // 10 seconds
    return () => clearInterval(timer);
  }, [activeIdx, isHovered]);

  const toggleFaq = (index) => {
    setFaqOpenIndex(faqOpenIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen text-gray-800 bg-[#f5f0e8] antialiased">
      
      {/* SECTION 1: HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#f5f0e8] via-[#fdfcf7] to-[#c9a84c]/10 pt-10 pb-20 md:py-28">
        {/* Ambient background glows */}
        <div className="absolute top-20 right-[-10%] w-96 h-96 rounded-full bg-[#c9a84c]/10 blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-10 left-[-5%] w-80 h-80 rounded-full bg-[#2d6a2d]/5 blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Hero Left Content */}
            <div className="lg:col-span-7 text-center lg:text-left space-y-6 animate-fade-in">
              <div className="inline-flex items-center gap-2 bg-[#2d6a2d]/10 text-[#1a4a1a] px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide border border-[#2d6a2d]/20">
                <Sparkles size={16} className="text-[#c9a84c]" />
                <span>India's Premium Home Salon & Spa</span>
              </div>
              
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1a4a1a] leading-tight">
                Luxury Salon Services, <br/>
                <span className="text-[#2d6a2d] italic font-normal">Delivered at Home.</span>
              </h1>
              
              <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
                Skip the salon rush. Verified professionals, sealed single-use kits, premium hygiene — at your doorstep. Experience the gold standard of at-home pampering.
              </p>

              {/* CTAs */}
              <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link 
                  to="/customers"
                  className="bg-[#1a4a1a] hover:bg-[#2d6a2d] text-[#f5f0e8] hover:text-white px-8 py-4 rounded-full font-bold text-center shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer text-sm border border-[#c9a84c]/20"
                >
                  Book via App (Download Now)
                </Link>
                <Link
                  to="/partners"
                  className="bg-white hover:bg-[#f5f0e8] text-[#1a4a1a] border-2 border-[#1a4a1a] px-8 py-4 rounded-full font-bold text-center transition-all flex items-center justify-center gap-2 cursor-pointer text-sm shadow-sm"
                >
                  Join as a Partner
                </Link>
              </div>
            </div>

            {/* Hero Right Media */}
            <div className="lg:col-span-5 relative flex justify-center items-center">
              <div className="relative w-full max-w-[420px] lg:max-w-none">
                {/* Decorative Frame */}
                <div className="absolute inset-0 bg-[#c9a84c]/30 rounded-3xl rotate-3 scale-102 -z-10 shadow-lg"></div>
                
                {/* Hero Image */}
                <img 
                  src="/hero_salon_service.png" 
                  alt="Woman getting premium at-home facial service" 
                  className="w-full h-auto rounded-3xl object-cover shadow-2xl border-4 border-white transform hover:rotate-0 transition-transform duration-500" 
                />

                {/* Floating Service Badge */}
                <div className="absolute -bottom-4 -left-4 bg-[#fdfcf7] p-4 rounded-2xl shadow-xl border border-[#c9a84c]/30 flex items-center gap-3 animate-float">
                  <div className="bg-[#2d6a2d] text-[#f5f0e8] p-2 rounded-xl">
                    <ShieldCheck size={24} className="text-[#c9a84c]" />
                  </div>
                  <div>
                    <div className="text-2xs font-extrabold text-[#c9a84c] tracking-wider uppercase">SAFETY FIRST</div>
                    <div className="text-sm font-extrabold text-[#1a4a1a]">100% Sealed Kits</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2: TRUST STATS */}
      <section className="bg-[#1a4a1a] text-[#f5f0e8] py-8 border-y border-[#c9a84c]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-[#c9a84c]/20">
            <div className="py-4 md:py-0">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#c9a84c]">4.8 ★</div>
              <div className="text-xs sm:text-sm text-gray-300 font-semibold mt-1 tracking-wider uppercase">Average Rating</div>
            </div>
            <div className="py-4 md:py-0">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#c9a84c]">1M+</div>
              <div className="text-xs sm:text-sm text-gray-300 font-semibold mt-1 tracking-wider uppercase">Bookings Served</div>
            </div>
            <div className="py-4 md:py-0">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#c9a84c]">2,500+</div>
              <div className="text-xs sm:text-sm text-gray-300 font-semibold mt-1 tracking-wider uppercase">Expert Therapists</div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: WHY voguee */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#2d6a2d] font-bold text-xs uppercase tracking-widest bg-[#2d6a2d]/10 px-3 py-1 rounded-full border border-[#2d6a2d]/25">
              The voguee Standard
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#1a4a1a] mt-3">
              Why Choose voguee?
            </h2>
            <p className="text-gray-500 mt-3 text-sm sm:text-base leading-relaxed">
              We have elevated home wellness by removing standard salon challenges and ensuring strict hygiene protocols.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Card 1 */}
            <div className="bg-[#f5f0e8]/50 border border-[#c9a84c]/20 hover:border-[#c9a84c] p-6 rounded-3xl hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-[#1a4a1a] flex items-center justify-center text-white mb-4">
                <UserCheck size={24} className="text-[#c9a84c]" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#1a4a1a] mb-2">Verified Therapists</h3>
              <p className="text-sm text-gray-600 leading-relaxed font-medium">
                Background-checked, certified professionals with intensive hands-on experience and training.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#f5f0e8]/50 border border-[#c9a84c]/20 hover:border-[#c9a84c] p-6 rounded-3xl hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-[#1a4a1a] flex items-center justify-center text-white mb-4">
                <Award size={24} className="text-[#c9a84c]" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#1a4a1a] mb-2">Mono-dosage Products</h3>
              <p className="text-sm text-gray-600 leading-relaxed font-medium">
                Sealed single-use brand kits opened right in front of you. No refilling or contamination.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#f5f0e8]/50 border border-[#c9a84c]/20 hover:border-[#c9a84c] p-6 rounded-3xl hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-[#1a4a1a] flex items-center justify-center text-white mb-4">
                <ShieldCheck size={24} className="text-[#c9a84c]" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#1a4a1a] mb-2">Premium Hygiene</h3>
              <p className="text-sm text-gray-600 leading-relaxed font-medium">
                Fresh disposable sheets, towels, aprons, and deep sanitization of all tool kits before work.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-[#f5f0e8]/50 border border-[#c9a84c]/20 hover:border-[#c9a84c] p-6 rounded-3xl hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-[#1a4a1a] flex items-center justify-center text-white mb-4">
                <CheckCircle2 size={24} className="text-[#c9a84c]" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#1a4a1a] mb-2">Transparent Pricing</h3>
              <p className="text-sm text-gray-600 leading-relaxed font-medium">
                Clear per-minute service pricing and authentic material rates. Zero hidden costs or surprise surcharges.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 4: SERVICES WE OFFER (INFO ONLY) */}
      <section className="py-16 md:py-24 bg-[#f5f0e8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#2d6a2d] font-bold text-xs uppercase tracking-widest bg-[#2d6a2d]/10 px-3 py-1 rounded-full border border-[#2d6a2d]/25">
              Service Offerings
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#1a4a1a] mt-3">
              Premium At-Home Services
            </h2>
            <p className="text-gray-500 mt-2 text-sm sm:text-base leading-relaxed">
              Explore our wide range of professional grooming and wellness services, custom-delivered in your space.
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
            className="flex overflow-x-auto gap-6 pb-6 md:grid md:grid-cols-2 lg:grid-cols-3 md:overflow-x-visible md:pb-0 snap-x snap-mandatory scrollbar-none"
          >
            {categories.map((cat) => (
              <div key={cat.id} className="bg-white rounded-3xl p-8 border border-[#c9a84c]/20 shadow-sm hover:shadow-md transition-all min-w-[280px] sm:min-w-[340px] md:min-w-0 snap-center shrink-0">
                <div className="w-12 h-12 rounded-2xl bg-[#f5f0e8] flex items-center justify-center text-[#2d6a2d] mb-5 border border-[#c9a84c]/20">
                  <CategoryIcon iconName={cat.icon} className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-[#1a4a1a] mb-2">{cat.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 font-medium">{cat.description}</p>
                <div className="text-xs text-[#2d6a2d] font-bold tracking-wide uppercase italic">
                  "{cat.tagline}"
                </div>
              </div>
            ))}
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
              {categories.map((_, idx) => (
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
            <Link 
              to="/customers"
              className="inline-flex items-center gap-2 bg-[#1a4a1a] hover:bg-[#2d6a2d] text-[#f5f0e8] hover:text-white px-8 py-3.5 rounded-full font-bold transition-all shadow-md group border border-[#c9a84c]/20"
            >
              <span>Explore all services on the App</span>
              <ArrowRight size={16} className="text-[#c9a84c] group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

        </div>
      </section>

      {/* SECTION 5: DUAL CTA SPLIT SECTION */}
      <section className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#c9a84c]/25 border-y border-[#c9a84c]/30">
        
        {/* Left Half: Customer */}
        <div className="bg-[#f5f0e8] py-16 px-8 md:px-16 text-center space-y-6 flex flex-col justify-center items-center">
          <div className="w-12 h-12 rounded-full bg-[#2d6a2d]/10 flex items-center justify-center text-[#2d6a2d]">
            <Smartphone size={24} className="text-[#1a4a1a]" />
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-[#1a4a1a]">Are you a Customer?</h3>
          <p className="text-gray-600 max-w-sm text-sm sm:text-base font-medium leading-relaxed">
            Get salon-quality treatments at the comfort of your home. Download the voguee App on Google Play Store.
          </p>
          <Link 
            to="/customers"
            className="bg-[#1a4a1a] hover:bg-[#2d6a2d] text-[#f5f0e8] hover:text-white px-8 py-3.5 rounded-full font-bold shadow-md transition-all"
          >
            Download App
          </Link>
        </div>

        {/* Right Half: Therapist */}
        <div className="bg-[#1a4a1a] text-[#f5f0e8] py-16 px-8 md:px-16 text-center space-y-6 flex flex-col justify-center items-center">
          <div className="w-12 h-12 rounded-full bg-[#f5f0e8]/10 flex items-center justify-center text-white">
            <UserCheck size={24} className="text-[#c9a84c]" />
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-white">Are you a Therapist?</h3>
          <p className="text-gray-300 max-w-sm text-sm sm:text-base font-medium leading-relaxed">
            Partner with India's fastest growing at-home salon network. Earn more and control your schedule.
          </p>
          <Link 
            to="/partners"
            className="bg-[#f5f0e8] hover:bg-white text-[#1a4a1a] px-8 py-3.5 rounded-full font-bold shadow-md transition-all"
          >
            Join as Partner
          </Link>
        </div>

      </section>

      {/* SECTION 6: CUSTOMER REVIEWS */}
      <section id="reviews-section" className="py-16 md:py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#2d6a2d] font-bold text-xs uppercase tracking-widest bg-[#2d6a2d]/10 px-3 py-1 rounded-full border border-[#2d6a2d]/25">
              Testimonials
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#1a4a1a] mt-3">
              Loved by 1M+ Customers
            </h2>
            <p className="text-gray-500 mt-2 text-sm sm:text-base leading-relaxed">
              Read how voguee has transformed home grooming for people across India.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((review) => (
              <div 
                key={review.id} 
                className="bg-[#f5f0e8]/50 border border-[#c9a84c]/20 hover:border-[#c9a84c] rounded-3xl p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={16} className="fill-[#c9a84c] text-[#c9a84c]" />
                    ))}
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed mb-6 font-medium italic">
                    "{review.text}"
                  </p>
                </div>
                
                <div className="flex items-center gap-3 pt-4 border-t border-[#c9a84c]/20">
                  <img 
                    src={review.avatar} 
                    alt={review.name} 
                    className="w-11 h-11 rounded-full object-cover border border-[#c9a84c]/40" 
                  />
                  <div>
                    <h4 className="font-bold text-[#1a4a1a] text-sm">{review.name}</h4>
                    <span className="text-xs text-gray-500 font-semibold">{review.city}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 7: FAQs */}
      <section id="faq-section" className="py-16 md:py-24 bg-[#f5f0e8] border-t border-[#c9a84c]/20 scroll-mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <span className="text-[#2d6a2d] font-bold text-xs uppercase tracking-widest bg-[#2d6a2d]/10 px-3 py-1 rounded-full border border-[#2d6a2d]/25">
              Got Questions?
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#1a4a1a] mt-3">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = faqOpenIndex === idx;
              return (
                <div 
                  key={idx}
                  className="bg-white border border-[#c9a84c]/25 rounded-2xl overflow-hidden transition-all duration-300 shadow-sm"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left px-6 py-5 flex justify-between items-center gap-4 text-[#1a4a1a] hover:text-[#2d6a2d] font-bold text-sm sm:text-base transition-colors"
                  >
                    <span>{faq.question}</span>
                    {isOpen ? <ChevronUp size={18} className="text-[#c9a84c]" /> : <ChevronDown size={18} className="text-[#c9a84c]" />}
                  </button>
                  
                  {isOpen && (
                    <div className="px-6 pb-5 text-gray-600 text-xs sm:text-sm leading-relaxed border-t border-[#f5f0e8] pt-3 font-medium">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

    </div>
  );
}
