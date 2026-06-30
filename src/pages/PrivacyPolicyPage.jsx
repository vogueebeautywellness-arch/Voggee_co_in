import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Shield } from 'lucide-react';

const sections = [
  {
    title: '1. Introduction',
    content: `voguee Beauty & Wellness Pvt. Ltd. ("voguee", "we", "us", or "our") operates the Voguee mobile application and website at voguee.co.in. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our at-home beauty and wellness booking services.`,
  },
  {
    title: '2. Information We Collect',
    content: null,
    list: [
      'Personal information: name, phone number, email address, and profile photo.',
      'Location data: delivery/service address and GPS location (with your permission) to assign therapists.',
      'Booking information: service history, preferences, ratings, and reviews.',
      'Payment information: transaction records processed through secure third-party payment gateways. We do not store full card details on our servers.',
      'Device information: device type, operating system, app version, and push notification tokens.',
      'Communications: messages or support requests you send to us.',
    ],
  },
  {
    title: '3. How We Use Your Information',
    content: null,
    list: [
      'To create and manage your account.',
      'To process and fulfil service bookings.',
      'To connect you with certified beauty and wellness partners.',
      'To send booking confirmations, reminders, and service updates.',
      'To process payments and issue invoices.',
      'To improve our app, services, and customer experience.',
      'To respond to support requests and resolve disputes.',
      'To comply with legal obligations.',
    ],
  },
  {
    title: '4. Sharing of Information',
    content: 'We may share your information with:',
    list: [
      'Service partners (therapists) — only the information needed to fulfil your booking (name, address, contact number, service details).',
      'Payment processors — to securely process transactions.',
      'Technology providers — hosting, analytics, and notification services bound by confidentiality agreements.',
      'Legal authorities — when required by law, court order, or to protect our rights and safety.',
    ],
    footer: 'We do not sell your personal information to third parties.',
  },
  {
    title: '5. Data Retention',
    content: 'We retain your personal information for as long as your account is active or as needed to provide services. When you delete your account, your profile, saved addresses, and notification tokens are removed. Some data — such as payment records or information required for legal, tax, or regulatory purposes — may be retained for the period required by applicable law.',
  },
  {
    title: '6. Your Rights',
    content: 'Depending on applicable law, you may have the right to:',
    list: [
      'Access the personal information we hold about you.',
      'Request correction of inaccurate information.',
      'Request deletion of your account and personal data.',
      'Withdraw consent for optional data processing (such as marketing notifications).',
    ],
    footer: (
      <>
        You can delete your account directly from the app. See our{' '}
        <Link to="/delete-account" className="text-[#2d6a2d] hover:text-[#c9a84c] font-semibold transition-colors">
          Delete Account
        </Link>{' '}
        page for step-by-step instructions.
      </>
    ),
  },
  {
    title: '7. Security',
    content: 'We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.',
  },
  {
    title: '8. Children\'s Privacy',
    content: 'Our services are not intended for individuals under 18 years of age. We do not knowingly collect personal information from children. If you believe we have collected information from a minor, please contact us immediately.',
  },
  {
    title: '9. Changes to This Policy',
    content: 'We may update this Privacy Policy from time to time. We will notify you of significant changes by posting the updated policy on this page and updating the "Last updated" date below.',
  },
  {
    title: '10. Contact Us',
    content: null,
    contact: true,
  },
];

export default function PrivacyPolicyPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen text-gray-800 bg-[#f5f0e8] antialiased">
      <section className="relative overflow-hidden py-16 md:py-24 bg-gradient-to-br from-[#f5f0e8] via-[#fdfcf7] to-[#c9a84c]/10 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#2d6a2d]/10 text-[#1a4a1a] px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide border border-[#2d6a2d]/20">
            <Shield size={16} className="text-[#c9a84c]" />
            <span>Your Privacy Matters</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-extrabold text-[#1a4a1a] leading-tight">
            Privacy Policy
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
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
              {section.footer && (
                <p className="text-gray-700 font-medium leading-relaxed mt-3">{section.footer}</p>
              )}
              {section.contact && (
                <div className="text-gray-700 font-medium leading-relaxed space-y-1">
                  <p><strong>voguee Beauty & Wellness Pvt. Ltd.</strong></p>
                  <p>1106, Alexander Tower, Sai World Empire, opposite Swapnapoorti Mhada colony, valley Shilp Road, Navi Mumbai – 410210, Sector 36, Kharghar.</p>
                  <p>
                    Email:{' '}
                    <a href="mailto:support@voguee.co.in" className="text-[#2d6a2d] hover:text-[#c9a84c] font-semibold transition-colors">
                      support@voguee.co.in
                    </a>
                  </p>
                  <p>
                    Website:{' '}
                    <a href="https://voguee.co.in" className="text-[#2d6a2d] hover:text-[#c9a84c] font-semibold transition-colors">
                      https://voguee.co.in
                    </a>
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
