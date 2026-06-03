import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CustomerPage from './pages/CustomerPage';
import PartnerPage from './pages/PartnerPage';
import SafetyPage from './pages/SafetyPage';

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
