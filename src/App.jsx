// src/App.jsx
import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'

// Tes pages
import HomePage from './components/HomePage'
import FeaturesPage from './components/FeaturesPage'
import PricingPage from './components/PricingPage'
import AboutPage from './components/AboutPage'
import ContactPage from './components/contactPage'
import AuthPage from './components/AuthPage'
import PrivacyPolicy from './components/PrivacyPolicy'
import TermsOfService from './components/TermsOfService'

export default function App() {
  return (
    <Routes>
      {/* Layout global */}
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
      </Route>

      {/* Redirection si route inconnue */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
