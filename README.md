# 🛡️ Sovereign Tank - Phase 1 MVP

Sovereign Tank is a premium digital autonomy platform designed to offer "Data Eradication as a Service." This MVP, known as "The Lab," validates the core mission through secure payment processing, industrial-grade UX micro-interactions, and high-fidelity certification (The Deed of Digital Sovereignty).

---

## 🏗️ Tech Stack
- **Frontend**: Vite + React
- **Styling**: Vanilla CSS (Industrial Metallic Design System)
- **Audio**: Web Speech API (Voice Synthesis for Aria)
- **Integration**: Paperform + Stripe (Restricted API Keys)
- **Deployment**: Vercel ready

---

## 🛠️ Key Features

### 1. The Laboratory (Operator Aria)
- Interactive zone featuring **Aria**, an ADR-certified operator.
- **Voice Triggers**: Secure connection validation and post-transaction welcoming.

### 2. The Arsenal (Boutique Hardware)
- Minimalist industrial store layout featuring high-end digital sovereignty tools.
- Dynamic Paperform integration with unique checkout flows per product.

### 3. Watchdog Security Layer
- Real-time [WATCHDOG: SECURE] pulse reflecting the active CSP/HSTS security layer.
- Bot prevention via specialized Paperform honeypots.

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- npm

### Local Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/miansalman78/Sovereign-Tank.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Sovereign-Tank
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

---

## ⚙️ Configuration & Deployment

### Paperform Setup
- Update `data-paperform-id` in the code with your production slug.
- Configure **Redirect URL** in Paperform to `https://[your-domain].com/?success=true` for automatic Deed triggering.

### Stripe Integration
- Use **Restricted API Keys** with `PaymentIntents` and `Customers` write permissions.
- Ensure currency is set to **AUD** with tax-inclusive pricing.

### Vercel Deployment
1. Import this repository into Vercel.
2. Vercel will automatically detect the Vite build settings.
3. Once deployed, update your Paperform redirect URL to the new live domain.

---

## ⚖️ License
Proprietary - Sovereign Tank Operations.
