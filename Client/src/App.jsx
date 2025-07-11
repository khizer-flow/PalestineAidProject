import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Navbar from './Components/Navbar';
import DonationIntentHandler from './Components/DonationIntentHandler';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import LandingPage from './pages/LandingPage/LandingPage';
import CreateSuperAdmin from './pages/CreateSuperAdmin/CreateSuperAdmin';
import RecieverDashboard from './pages/RecieverDashboard/RecieverDashboard';
import AdminDashboard from './pages/AdminDashboard/AdminDashboard';
import DonaterDashboard from './pages/DonaterDashboard/DonaterDashboard';
import Profile from './pages/Profile/Profile';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Tracking from './pages/Tracking';
import NewsPage from './pages/NewsPage';
import Volunteer from './pages/Volunteer/Volunteer';
import Resources from './pages/Resources/Resources';
import EmergencyDonate from './pages/EmergencyDonate/EmergencyDonate';
import EmergencyContact from './pages/EmergencyContact/EmergencyContact';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div className="app">
          <Navbar />
          <DonationIntentHandler />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/tracking" element={<Tracking />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/create-first-super-admin" element={<CreateSuperAdmin />} />
              <Route path="/dashboard" element={<RecieverDashboard />} />
              <Route path="/reciever-dashboard" element={<RecieverDashboard />} />
              <Route path="/admin-dashboard" element={<AdminDashboard />} />
              <Route path="/donater-dashboard" element={<DonaterDashboard />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/news" element={<NewsPage />} />
              <Route path="/volunteer" element={<Volunteer />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/emergency-donate" element={<EmergencyDonate />} />
              <Route path="/emergency-contact" element={<EmergencyContact />} />
              {/* Add more routes here as needed */}
            </Routes>
          </main>
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
