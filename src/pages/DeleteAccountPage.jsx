import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { UserX, Mail } from 'lucide-react';

export default function DeleteAccountPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen text-gray-800 bg-[#f5f0e8] antialiased">
      <section className="relative overflow-hidden py-16 md:py-24 bg-gradient-to-br from-[#f5f0e8] via-[#fdfcf7] to-[#c9a84c]/10 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#2d6a2d]/10 text-[#1a4a1a] px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide border border-[#2d6a2d]/20">
            <UserX size={16} className="text-[#c9a84c]" />
            <span>Account Deletion</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-extrabold text-[#1a4a1a] leading-tight">
            Delete Your Voguee Account
          </h1>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-medium">
            You can permanently delete your Voguee account directly from the app.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white border-y border-[#c9a84c]/20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div>
            <h2 className="font-serif text-2xl font-bold text-[#1a4a1a] mb-4">Steps</h2>
            <ol className="space-y-3 text-gray-700 font-medium">
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#1a4a1a] text-white text-sm font-bold flex items-center justify-center">1</span>
                <span className="pt-0.5">Open the Voguee app.</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#1a4a1a] text-white text-sm font-bold flex items-center justify-center">2</span>
                <span className="pt-0.5">Login to your account.</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#1a4a1a] text-white text-sm font-bold flex items-center justify-center">3</span>
                <span className="pt-0.5">Go to Profile → Delete Account.</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#1a4a1a] text-white text-sm font-bold flex items-center justify-center">4</span>
                <span className="pt-0.5">Confirm the deletion request.</span>
              </li>
            </ol>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-[#1a4a1a] mb-4">What happens after deletion?</h2>
            <ul className="space-y-2 text-gray-700 font-medium list-disc list-inside">
              <li>Your profile information is deleted.</li>
              <li>Your saved addresses are deleted.</li>
              <li>Your notification token is deleted.</li>
              <li>Your personal information is removed from the app.</li>
            </ul>
          </div>

          <div className="bg-[#f5f0e8]/70 border border-[#c9a84c]/20 rounded-2xl p-6">
            <h2 className="font-serif text-xl font-bold text-[#1a4a1a] mb-3">Data retained</h2>
            <p className="text-gray-700 font-medium leading-relaxed">
              Some information, such as payment transactions or records required by law, may be retained for the legally required period.
            </p>
          </div>

          <div className="bg-[#1a4a1a] text-[#f5f0e8] rounded-2xl p-6 space-y-3">
            <h2 className="font-serif text-xl font-bold text-white">For support</h2>
            <p className="text-gray-300 text-sm font-medium">
              If you need help deleting your account or have questions about your data, contact us:
            </p>
            <a
              href="mailto:support@voguee.co.in"
              className="inline-flex items-center gap-2 text-[#c9a84c] hover:text-white transition-colors font-semibold"
            >
              <Mail size={18} />
              support@voguee.co.in
            </a>
          </div>

          <p className="text-sm text-gray-500 font-medium">
            For more details on how we handle your data, see our{' '}
            <Link to="/privacy-policy" className="text-[#2d6a2d] hover:text-[#c9a84c] font-semibold transition-colors">
              Privacy Policy
            </Link>.
          </p>
        </div>
      </section>
    </div>
  );
}
