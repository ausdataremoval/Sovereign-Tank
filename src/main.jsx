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
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
