import { 
  ShieldCheck, 
  Sparkles, 
  Trash2, 
  Scissors, 
  Heart,
  BadgeAlert,
  ThumbsUp
} from 'lucide-react';

export default function SafetyPage() {
  return (
    <div className="min-h-screen text-gray-800 bg-[#f5f0e8] antialiased">
      
      {/* SECTION 1: HERO */}
      <section className="relative overflow-hidden py-20 md:py-28 bg-gradient-to-br from-[#f5f0e8] via-[#fdfcf7] to-[#c9a84c]/10 text-center">
        <div className="absolute top-20 right-[-10%] w-96 h-96 rounded-full bg-[#c9a84c]/10 blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-10 left-[-5%] w-80 h-80 rounded-full bg-[#2d6a2d]/5 blur-3xl pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative space-y-6">
          <div className="inline-flex items-center gap-2 bg-[#2d6a2d]/10 text-[#1a4a1a] px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide border border-[#2d6a2d]/20">
            <ShieldCheck size={16} className="text-[#c9a84c]" />
            <span>100% Secure & Hygienic</span>
          </div>
          
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1a4a1a] leading-tight">
            The voguee <br/>
            <span className="text-[#2d6a2d] italic font-normal">Safety Shield.</span>
          </h1>
          
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-medium">
            We deliver the cleanest at-home salon experience in the country. Our standards are designed to protect both our valued clients and our expert therapists.
          </p>
        </div>
      </section>

      {/* SECTION 2: 3 SAFETY STANDARDS */}
      <section className="py-16 md:py-24 bg-white border-y border-[#c9a84c]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 max-w-6xl mx-auto">
            
            {/* Standard 1 */}
            <div className="bg-[#f5f0e8]/50 border border-[#c9a84c]/20 rounded-3xl p-8 space-y-6 relative overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="absolute top-0 right-0 bg-[#c9a84c]/20 text-[#1a4a1a] w-16 h-16 rounded-bl-3xl flex items-center justify-center font-serif text-xl font-extrabold">
                01
              </div>
              <div className="w-12 h-12 rounded-2xl bg-[#1a4a1a] flex items-center justify-center text-white shadow-md">
                <Sparkles size={22} className="text-[#c9a84c]" />
              </div>
              <h3 className="font-serif text-xl font-extrabold text-[#1a4a1a]">100% Sealed Single-Use Kits</h3>
              <p className="text-sm text-gray-600 font-medium leading-relaxed">
                Every facial, cleanup, and waxing product is packaged in a certified single-dose sachet. The sealed kit is opened right in front of you. This prevents contamination and guarantees authentic brand products.
              </p>
            </div>

            {/* Standard 2 */}
            <div className="bg-[#f5f0e8]/50 border border-[#c9a84c]/20 rounded-3xl p-8 space-y-6 relative overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="absolute top-0 right-0 bg-[#c9a84c]/20 text-[#1a4a1a] w-16 h-16 rounded-bl-3xl flex items-center justify-center font-serif text-xl font-extrabold">
                02
              </div>
              <div className="w-12 h-12 rounded-2xl bg-[#1a4a1a] flex items-center justify-center text-white shadow-md">
                <Trash2 size={22} className="text-[#c9a84c]" />
              </div>
              <h3 className="font-serif text-xl font-extrabold text-[#1a4a1a]">Completely Disposable Linen</h3>
              <p className="text-sm text-gray-600 font-medium leading-relaxed">
                No reused towels or sheets. We provide brand new disposable bed sheets, towels, headbands, and aprons for every single client session. After your treatment, these are bagged and discarded.
              </p>
            </div>

            {/* Standard 3 */}
            <div className="bg-[#f5f0e8]/50 border border-[#c9a84c]/20 rounded-3xl p-8 space-y-6 relative overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="absolute top-0 right-0 bg-[#c9a84c]/20 text-[#1a4a1a] w-16 h-16 rounded-bl-3xl flex items-center justify-center font-serif text-xl font-extrabold">
                03
              </div>
              <div className="w-12 h-12 rounded-2xl bg-[#1a4a1a] flex items-center justify-center text-white shadow-md">
                <Scissors size={22} className="text-[#c9a84c]" />
              </div>
              <h3 className="font-serif text-xl font-extrabold text-[#1a4a1a]">Sanitized Tools & Cleanup</h3>
              <p className="text-sm text-gray-600 font-medium leading-relaxed">
                Therapists use surgical-grade sanitizers to sterilize all tools (scissors, combs, nail cutters) before every session. Post-service cleanup is included: we ensure your home is left spotless and hair-free.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ADDITIONAL HIGHLIGHTS SECTION */}
      <section className="py-16 md:py-24 bg-[#f5f0e8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-5xl mx-auto">
            
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-full bg-[#2d6a2d]/10 flex items-center justify-center mx-auto text-[#2d6a2d]">
                <Heart size={20} className="text-[#1a4a1a]" />
              </div>
              <h4 className="font-serif font-bold text-[#1a4a1a] text-lg">Therapist Well-being</h4>
              <p className="text-xs text-gray-500 font-semibold max-w-xs mx-auto leading-relaxed">
                We monitor our partner temperatures daily and provide health insurance benefits for all active partners.
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-10 h-10 rounded-full bg-[#2d6a2d]/10 flex items-center justify-center mx-auto text-[#2d6a2d]">
                <BadgeAlert size={20} className="text-[#1a4a1a]" />
              </div>
              <h4 className="font-serif font-bold text-[#1a4a1a] text-lg">Background Verified</h4>
              <p className="text-xs text-gray-500 font-semibold max-w-xs mx-auto leading-relaxed">
                Every therapist undergoes strict professional background checks and credentials verification before joining.
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-10 h-10 rounded-full bg-[#2d6a2d]/10 flex items-center justify-center mx-auto text-[#2d6a2d]">
                <ThumbsUp size={20} className="text-[#1a4a1a]" />
              </div>
              <h4 className="font-serif font-bold text-[#1a4a1a] text-lg">100% Quality Assured</h4>
              <p className="text-xs text-gray-500 font-semibold max-w-xs mx-auto leading-relaxed">
                If the hygiene standard is compromised, we promise a complete re-treatment voucher for free.
              </p>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
