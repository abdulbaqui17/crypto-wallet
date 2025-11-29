# 🔐 Crypto Wallet - Solana Web3 Wallet

A sleek and modern Solana wallet application built with Next.js 14, featuring a stunning black-and-white design with animated spotlights and a glass-morphism UI.

## ✨ Features

- 🔌 **Multi-Wallet Support** - Connect with Phantom, Solflare, or Torus wallets
- 💸 **Send SOL** - Transfer Solana tokens to any wallet address
- 📊 **Transaction History** - View your recent transactions
- 💰 **Balance Display** - Real-time SOL balance tracking
- 🎨 **Modern UI** - Glass-morphism cards with animated spotlight background
- 📱 **Responsive Design** - Works seamlessly on desktop and mobile
- ⚡ **Fast & Secure** - Built with Next.js 14 and Solana Web3.js

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Blockchain:** Solana Web3.js
- **Wallet Adapter:** @solana/wallet-adapter-react
- **State Management:** TanStack React Query
- **Icons:** Lucide React

## 🚀 Getting Started

1. **Clone the repository:**
```bash
git clone https://github.com/abdulbaqui17/crypto-wallet.git
cd crypto-wallet
```

2. **Install dependencies:**
```bash
npm install
```

3. **Create a `.env.local` file:**
```bash
NEXT_PUBLIC_SOLANA_RPC=https://api.devnet.solana.com
```

4. **Run the development server:**
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🌐 Connect Your Wallet

The app supports multiple Solana wallets:
- Phantom
- Solflare
- Torus

Simply click "Select Wallet" and choose your preferred wallet to get started!

## 📁 Project Structure

```
/app
  /page.tsx          # Main dashboard
  /layout.tsx        # Root layout with providers
  /globals.css       # Global styles and animations
/components
  /WalletConnect.tsx       # Wallet connection UI
  /SendSolForm.tsx         # Send SOL form
  /TransactionsList.tsx    # Transaction history
  /Providers.tsx           # App providers wrapper
  /ui
    /Button.tsx            # Button component
    /Card.tsx              # Card component
    /Input.tsx             # Input component
    /Toast.tsx             # Toast notifications
/lib
  /solana.ts              # Solana helper functions
```

## 🔒 Security Notes

- This app is **non-custodial** - wallet adapters handle signing
- Never store private keys in the app
- Always verify transaction details before signing
- Use devnet for testing, mainnet for production

## 📝 License

MIT License - feel free to use this project for learning and development!

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## ⭐ Show Your Support

Give a ⭐️ if you like this project!

---

Built with ❤️ using Next.js 14, Solana Web3.js, and Tailwind CSS
