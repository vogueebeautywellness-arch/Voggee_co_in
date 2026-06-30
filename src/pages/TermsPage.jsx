import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FileText } from 'lucide-react';

const sections = [
  {
    title: '1. Acceptance of Terms',
    content: `By downloading, accessing, or using the Voguee mobile application or website (voguee.co.in), you agree to be bound by these Terms of Service ("Terms"). If you do not agree, please do not use our services. These Terms apply to all users, including customers and service partners.`,
  },
  {
    title: '2. About Our Services',
    content: `voguee Beauty & Wellness Pvt. Ltd. provides a platform that connects customers with certified beauty and wellness professionals for at-home salon and spa services. voguee facilitates booking, scheduling, and payment but the actual services are performed by independent partner professionals.`,
  },
  {
    title: '3. User Accounts',
    content: null,
    list: [
      'You must provide accurate and complete information when creating an account.',
      'You are responsible for maintaining the confidentiality of your login credentials.',
      'You must be at least 18 years old to use our services.',
      'You may delete your account at any time from the app. See our Delete Account page for details.',
    ],
  },
  {
    title: '4. Bookings & Cancellations',
    content: null,
    list: [
      'Service availability depends on your location and partner availability.',
      'Bookings are confirmed once payment is successfully processed.',
      'Cancellation and rescheduling policies, including any applicable fees, are displayed at the time of booking.',
      'voguee reserves the right to cancel or reschedule bookings due to unforeseen circumstances, with appropriate notice and refund where applicable.',
    ],
  },
  {
    title: '5. Payments',
    content: 'All prices are displayed in Indian Rupees (INR) and include applicable taxes unless stated otherwise. Payments are processed through secure third-party payment gateways. Refunds, where eligible, will be processed to the original payment method within the timeframe specified in our refund policy.',
  },
  {
    title: '6. User Conduct',
    content: 'You agree not to:',
    list: [
      'Provide false or misleading information.',
      'Harass, abuse, or threaten service partners or voguee staff.',
      'Use the platform for any unlawful purpose.',
      'Attempt to circumvent the platform to book partners directly to avoid fees.',
      'Misuse promotional offers or referral programs.',
    ],
  },
  {
    title: '7. Service Quality & Liability',
    content: 'voguee verifies partner credentials and maintains hygiene standards, but individual service experiences may vary. To the maximum extent permitted by law, voguee shall not be liable for indirect, incidental, or consequential damages arising from the use of our services. Our total liability for any claim shall not exceed the amount paid for the specific booking in question.',
  },
  {
    title: '8. Intellectual Property',
    content: 'All content on the Voguee app and website — including logos, text, graphics, and software — is the property of voguee Beauty & Wellness Pvt. Ltd. and is protected by applicable intellectual property laws. You may not reproduce or distribute any content without our written permission.',
  },
  {
    title: '9. Privacy',
    content: null,
    footer: (
      <>
        Your use of our services is also governed by our{' '}
        <Link to="/privacy-policy" className="text-[#2d6a2d] hover:text-[#c9a84c] font-semibold transition-colors">
          Privacy Policy
        </Link>, which describes how we collect and use your personal information.
      </>
    ),
  },
  {
    title: '10. Modifications',
    content: 'We may update these Terms at any time. Continued use of the app after changes are posted constitutes acceptance of the revised Terms. We encourage you to review this page periodically.',
  },
  {
    title: '11. Governing Law',
    content: 'These Terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Mumbai, Maharashtra.',
  },
  {
    title: '12. Contact Us',
    content: null,
    contact: true,
  },
];

export default function TermsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen text-gray-800 bg-[#f5f0e8] antialiased">
      <section className="relative overflow-hidden py-16 md:py-24 bg-gradient-to-br from-[#f5f0e8] via-[#fdfcf7] to-[#c9a84c]/10 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#2d6a2d]/10 text-[#1a4a1a] px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide border border-[#2d6a2d]/20">
            <FileText size={16} className="text-[#c9a84c]" />
            <span>Legal</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-extrabold text-[#1a4a1a] leading-tight">
            Terms of Service
          </h1>
          <p className="text-gray-500 text-sm font-semibold">Last updated: June 30, 2026</p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white border-y border-[#c9a84c]/20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="font-serif text-xl font-bold text-[#1a4a1a] mb-3">{section.title}</h2>
              {section.content && (
                <p className="text-gray-700 font-medium leading-relaxed">{section.content}</p>
              )}
              {section.list && (
                <ul className={`space-y-2 text-gray-700 font-medium list-disc list-inside ${section.content ? 'mt-3' : ''}`}>
                  {section.list.map((item) => (
                    <li key={item}>
                      {item.includes('Delete Account') ? (
                        <>
                          You may delete your account at any time from the app. See our{' '}
                          <Link to="/delete-account" className="text-[#2d6a2d] hover:text-[#c9a84c] font-semibold transition-colors">
                            Delete Account
                          </Link>{' '}
                          page for details.
                        </>
                      ) : (
                        item
                      )}
                    </li>
                  ))}
                </ul>
              )}
              {section.footer && (
                <p className="text-gray-700 font-medium leading-relaxed mt-3">{section.footer}</p>
              )}
              {section.contact && (
                <div className="text-gray-700 font-medium leading-relaxed space-y-1">
                  <p>For questions about these Terms, contact us at:</p>
                  <p>
                    Email:{' '}
                    <a href="mailto:support@voguee.co.in" className="text-[#2d6a2d] hover:text-[#c9a84c] font-semibold transition-colors">
                      support@voguee.co.in
                    </a>
                  </p>
                  <p>Phone: +91 7506176999</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
