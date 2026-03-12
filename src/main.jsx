import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Start from './components/Start.jsx'
import Success from './components/Success.jsx'
import CheckoutAudit from './components/CheckoutAudit.jsx'
import CheckoutFoundingMember from './components/CheckoutFoundingMember.jsx'
import CheckoutCleanup from './components/CheckoutCleanup.jsx'
import CheckoutDIY from './components/CheckoutDIY.jsx'
import DIYDownload from './components/DIYDownload.jsx'
import Resources from './components/Resources.jsx'
import Members from './components/Members.jsx'
import Support from './components/Support.jsx'
import ExposureRadar from './components/ExposureRadar.jsx'
import Checklist from './components/Checklist.jsx'
import OperatingPrinciples from './components/OperatingPrinciples.jsx'
import PrivacyPolicy from './components/PrivacyPolicy.jsx'
import Terms from './components/Terms.jsx'
import Disclaimer from './components/Disclaimer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/start" element={<Start />} />
        <Route path="/success" element={<Success />} />
        <Route path="/checkout/audit" element={<CheckoutAudit />} />
        <Route path="/checkout/founding-member" element={<CheckoutFoundingMember />} />
        <Route path="/checkout/cleanup" element={<CheckoutCleanup />} />
        <Route path="/checkout/diy-roadmap" element={<CheckoutDIY />} />
        <Route path="/diy-download" element={<DIYDownload />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/members" element={<Members />} />
        <Route path="/support" element={<Support />} />
        <Route path="/exposure-radar" element={<ExposureRadar />} />
        <Route path="/checklist" element={<Checklist />} />
        <Route path="/operating-principles" element={<OperatingPrinciples />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
