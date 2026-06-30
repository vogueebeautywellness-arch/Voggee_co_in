import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CustomerPage from './pages/CustomerPage';
import PartnerPage from './pages/PartnerPage';
import SafetyPage from './pages/SafetyPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsPage from './pages/TermsPage';
import DeleteAccountPage from './pages/DeleteAccountPage';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-[#f5f0e8] text-gray-800 antialiased font-sans">
        
        {/* Shared Navbar */}
        <Navbar />

        {/* Page Content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/customers" element={<CustomerPage />} />
            <Route path="/partners" element={<PartnerPage />} />
            <Route path="/safety" element={<SafetyPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/delete-account" element={<DeleteAccountPage />} />
            {/* Fallback routing */}
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>

        {/* Shared Footer */}
        <Footer />
        
      </div>
    </Router>
  );
}
