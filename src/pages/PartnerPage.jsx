import {
  Briefcase,
  DollarSign,
  Calendar,
  GraduationCap,
  ShieldCheck,
  Smartphone,
  Award,
  Star,
  Download,
  FileText,
  TrendingUp,
  ShieldAlert
} from 'lucide-react';

export default function PartnerPage() {
  const scrollToDownload = (e) => {
    e.preventDefault();
    const element = document.getElementById('partner-download-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen text-gray-800 bg-[#f5f0e8] antialiased">

      {/* SECTION 1: HERO */}
      <section className="relative overflow-hidden py-16 md:py-24 bg-gradient-to-br from-[#f5f0e8] via-[#fdfcf7] to-[#c9a84c]/10">
        <div className="absolute top-20 right-[-10%] w-96 h-96 rounded-full bg-[#c9a84c]/10 blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-10 left-[-5%] w-80 h-80 rounded-full bg-[#2d6a2d]/5 blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Hero Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <span className="text-[#2d6a2d] font-bold text-xs uppercase tracking-widest bg-[#2d6a2d]/10 px-3 py-1 rounded-full border border-[#2d6a2d]/25">
                Join our Network
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1a4a1a] leading-tight">
                Grow Your Career <br />
                <span className="text-[#2d6a2d] italic font-normal">with voguee.</span>
              </h1>
              <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
                Join India's fastest-growing home salon network. Earn higher margins, enjoy complete work schedule flexibility, and serve premium clients.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a
                  href="#partner-download-section"
                  onClick={scrollToDownload}
                  className="bg-[#1a4a1a] hover:bg-[#2d6a2d] text-[#f5f0e8] hover:text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg flex items-center justify-center gap-2 border border-[#c9a84c]/20"
                >
                  <Smartphone size={18} className="text-[#c9a84c]" />
                  <span>Download Partner App to Register</span>
                </a>
              </div>
            </div>

            {/* Hero Right Graphic */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[420px]">
                {/* Decorative Frame */}
                <div className="absolute inset-0 bg-[#c9a84c]/20 rounded-3xl rotate-6 scale-102 -z-10 shadow-lg"></div>

                {/* Professional Therapist Image Card */}
                <div className="bg-[#1a4a1a] rounded-3xl p-8 border-4 border-white shadow-2xl text-white space-y-6">
                  <div className="w-16 h-16 rounded-2xl bg-[#c9a84c]/20 flex items-center justify-center border border-[#c9a84c]/30">
                    <Award size={32} className="text-[#c9a84c]" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold">voguee Academy Certified</h3>
                  <p className="text-gray-300 text-sm font-medium leading-relaxed">
                    "Every professional joining voguee undergoes verified quality checks and training to guarantee premium client safety and high service quality."
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-[#c9a84c]/20">
                    <div className="text-xs">
                      <div className="font-bold text-white">voguee Partnership Program</div>
                      <div className="text-gray-400">Join 2,500+ happy beauticians</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2: WHY JOIN voguee */}
      <section className="py-16 md:py-24 bg-white border-y border-[#c9a84c]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#1a4a1a]">
              Benefits of Joining voguee
            </h2>
            <p className="text-gray-500 mt-3 text-sm sm:text-base font-medium">
              We empower our therapists to succeed by providing unmatched financial benefits and continuous learning.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1 */}
            <div className="bg-[#f5f0e8]/50 border border-[#c9a84c]/20 p-6 rounded-3xl hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-[#1a4a1a] flex items-center justify-center text-white mb-4 shadow-md">
                <DollarSign size={24} className="text-[#c9a84c]" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#1a4a1a] mb-2">Earn More</h3>
              <p className="text-sm text-gray-600 leading-relaxed font-medium">
                Earn competitive per-minute payouts plus keep 100% of client tips. Top performers earn over ₹45,000/month.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#f5f0e8]/50 border border-[#c9a84c]/20 p-6 rounded-3xl hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-[#1a4a1a] flex items-center justify-center text-white mb-4 shadow-md">
                <Calendar size={24} className="text-[#c9a84c]" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#1a4a1a] mb-2">Flexible Schedule</h3>
              <p className="text-sm text-gray-600 leading-relaxed font-medium">
                Be your own boss. Work when you want and accept booking requests in the localities you prefer.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#f5f0e8]/50 border border-[#c9a84c]/20 p-6 rounded-3xl hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-[#1a4a1a] flex items-center justify-center text-white mb-4 shadow-md">
                <GraduationCap size={24} className="text-[#c9a84c]" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#1a4a1a] mb-2">Free Training</h3>
              <p className="text-sm text-gray-600 leading-relaxed font-medium">
                Advance your skills with free, certified training programs covering luxury wellness and hospitality standards.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-[#f5f0e8]/50 border border-[#c9a84c]/20 p-6 rounded-3xl hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-[#1a4a1a] flex items-center justify-center text-white mb-4 shadow-md">
                <ShieldCheck size={24} className="text-[#c9a84c]" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#1a4a1a] mb-2">Safety & Support</h3>
              <p className="text-sm text-gray-600 leading-relaxed font-medium">
                We supply all kits, tools, disposable linen, and provide a 24/7 dedicated support team for partner safety.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 3: HOW IT WORKS FOR PARTNERS */}
      <section className="py-16 md:py-24 bg-[#f5f0e8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#1a4a1a]">
              Three Steps to Start Earning
            </h2>
            <p className="text-gray-500 mt-3 text-sm sm:text-base font-medium">
              We have designed a quick, mobile-first onboarding process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto text-center md:text-left">
            {/* Step 1 */}
            <div className="bg-white rounded-3xl p-8 border border-[#c9a84c]/20 shadow-sm relative flex flex-col justify-between">
              <div>
                <div className="text-xs font-bold text-[#c9a84c] tracking-widest uppercase mb-2">Step 01</div>
                <h3 className="font-serif text-xl font-bold text-[#1a4a1a] mb-3">Download Partner App</h3>
                <p className="text-sm text-gray-600 font-medium leading-relaxed">
                  Get the voguee Partner App on your Android device to register your profile.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-3xl p-8 border border-[#c9a84c]/20 shadow-sm relative flex flex-col justify-between">
              <div>
                <div className="text-xs font-bold text-[#c9a84c] tracking-widest uppercase mb-2">Step 02</div>
                <h3 className="font-serif text-xl font-bold text-[#1a4a1a] mb-3">Get Verified & Certified</h3>
                <p className="text-sm text-gray-600 font-medium leading-relaxed">
                  Upload documents on the app, attend our brief quality training, and get certified.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-3xl p-8 border border-[#c9a84c]/20 shadow-sm relative flex flex-col justify-between">
              <div>
                <div className="text-xs font-bold text-[#c9a84c] tracking-widest uppercase mb-2">Step 03</div>
                <h3 className="font-serif text-xl font-bold text-[#1a4a1a] mb-3">Start Booking & Earning</h3>
                <p className="text-sm text-gray-600 font-medium leading-relaxed">
                  Turn on your partner app status, accept client requests in your area, and get paid.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 4: PARTNER STATS */}
      <section className="bg-[#1a4a1a] text-[#f5f0e8] py-12 border-y border-[#c9a84c]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">

            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#c9a84c]">2,500+</div>
              <div className="text-xs font-bold text-gray-300 uppercase tracking-widest">Active Therapists</div>
            </div>

            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#c9a84c]">₹25,000+</div>
              <div className="text-xs font-bold text-gray-300 uppercase tracking-widest">Avg Monthly Earnings</div>
            </div>

            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#c9a84c]">4.8 ★</div>
              <div className="text-xs font-bold text-gray-300 uppercase tracking-widest">Partner Satisfaction</div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 5: APP DOWNLOAD BANNER FOR PARTNERS */}
      <section id="partner-download-section" className="bg-[#1a4a1a] text-[#f5f0e8] py-16 md:py-24 relative overflow-hidden scroll-mt-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#2d6a2d]/50 via-transparent to-transparent pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Content left */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <span className="bg-[#c9a84c] text-[#1a4a1a] text-2xs font-extrabold uppercase px-3 py-1 rounded-full tracking-wider">
                voguee Partner App
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-white animate-fade-in">
                Register in Minutes. <br />
                <span className="text-[#c9a84c] italic font-normal">Download the Partner App</span>
              </h2>

              <p className="text-gray-300 text-sm sm:text-base max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
                We have moved registration completely to the app for a faster onboarding experience. Upload documents and manage your verification status directly from your phone.
              </p>

              {/* Features grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto lg:mx-0 text-left pt-2 text-xs sm:text-sm">

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#2d6a2d] flex items-center justify-center border border-[#c9a84c]/20">
                    <Smartphone size={14} className="text-[#c9a84c]" />
                  </div>
                  <span className="text-white font-medium">Easy App Onboarding</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#2d6a2d] flex items-center justify-center border border-[#c9a84c]/20">
                    <FileText size={14} className="text-[#c9a84c]" />
                  </div>
                  <span className="text-white font-medium">Secure Document Upload</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#2d6a2d] flex items-center justify-center border border-[#c9a84c]/20">
                    <TrendingUp size={14} className="text-[#c9a84c]" />
                  </div>
                  <span className="text-white font-medium">Daily Earnings Tracking</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#2d6a2d] flex items-center justify-center border border-[#c9a84c]/20">
                    <ShieldAlert size={14} className="text-[#c9a84c]" />
                  </div>
                  <span className="text-white font-medium">24/7 Helpline Support</span>
                </div>

              </div>

              {/* App download button and QR Code */}
              <div className="pt-6 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
                <a
                  href="#"
                  className="bg-[#c9a84c] hover:bg-[#b0913b] text-[#1a4a1a] hover:text-[#1a4a1a] px-8 py-4 rounded-full font-bold transition-all shadow-lg flex items-center justify-center gap-2 text-sm"
                >
                  <Smartphone size={18} />
                  <span>Download Partner App (Android)</span>
                </a>

                {/* QR Code Placeholder */}
                <div className="flex items-center gap-3 bg-white/5 border border-white/10 p-3 rounded-2xl">
                  <div className="w-16 h-16 bg-white p-1 rounded-lg flex items-center justify-center shadow-inner shrink-0">
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
                    <div className="text-xs text-white font-bold">Apply on your phone</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mockup right */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[280px]">
                <div className="absolute inset-0 bg-[#c9a84c]/20 rounded-3xl rotate-6 scale-102 -z-10 shadow-lg"></div>
                <img
                  src="/voggee_app_mockup.png"
                  alt="voguee Partner App Mockup"
                  className="w-full h-auto rounded-3xl object-cover shadow-2xl border-4 border-white"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 6: PARTNER TESTIMONIALS */}
      <section className="py-16 md:py-24 bg-[#f5f0e8] border-t border-[#c9a84c]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#2d6a2d] font-bold text-xs uppercase tracking-widest bg-[#2d6a2d]/10 px-3 py-1 rounded-full border border-[#2d6a2d]/25">
              Success Stories
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#1a4a1a] mt-3">
              Hear From Our Partners
            </h2>
            <p className="text-gray-500 mt-2 text-sm sm:text-base font-medium">
              Join thousands of beauty specialists who have found career growth and flexible work with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Review 1 */}
            <div className="bg-white border border-[#c9a84c]/20 rounded-3xl p-8 space-y-4 shadow-sm hover:shadow-md transition-all">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-[#c9a84c] text-[#c9a84c]" />
                ))}
              </div>
              <p className="text-gray-600 text-sm italic font-medium leading-relaxed">
                "Joining voguee was the best decision for my career. I downloaded the Partner App, completed my registration, and uploaded my certification. Everything was so fast. Now I choose my own hours and get paid daily."
              </p>
              <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
                <div className="w-10 h-10 rounded-full bg-[#c9a84c]/20 flex items-center justify-center font-bold text-[#1a4a1a] text-xs">
                  SS
                </div>
                <div>
                  <h4 className="font-bold text-[#1a4a1a] text-sm">Sunita Sharma</h4>
                  <span className="text-2xs text-gray-400 font-bold uppercase tracking-wider">Beauty Partner, Mumbai</span>
                </div>
              </div>
            </div>

            {/* Review 2 */}
            <div className="bg-white border border-[#c9a84c]/20 rounded-3xl p-8 space-y-4 shadow-sm hover:shadow-md transition-all">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-[#c9a84c] text-[#c9a84c]" />
                ))}
              </div>
              <p className="text-gray-600 text-sm italic font-medium leading-relaxed">
                "The partner app is extremely easy to use. I can track how much I've earned per minute and customer tips are updated instantly. The document uploader is safe, and support is available in just one click."
              </p>
              <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
                <div className="w-10 h-10 rounded-full bg-[#c9a84c]/20 flex items-center justify-center font-bold text-[#1a4a1a] text-xs">
                  RD
                </div>
                <div>
                  <h4 className="font-bold text-[#1a4a1a] text-sm">Reena Devi</h4>
                  <span className="text-2xs text-gray-400 font-bold uppercase tracking-wider">Therapist, Bangalore</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
