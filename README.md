# Solana Web Wallet (Next.js + Tailwind + shadcn)

This repository is a starter scaffold for a modern, non-custodial Solana web wallet using Next.js (App Router), Tailwind CSS and simple shadcn-like UI components.

## What's Included

- ✅ **package.json** with all required dependencies
- ✅ **Tailwind/PostCSS config** with glass effect styles
- ✅ **TypeScript configuration** (Next.js 14 compatible)
- ✅ **Providers** wiring (next-themes, react-query v5, solana wallet adapters)
- ✅ **Components**: WalletConnect, SendSolForm, TransactionsList
- ✅ **Solana helpers** in `lib/solana.ts`
- ✅ **Environment variables** template (.env.example)

## Quick Start

1. **Install dependencies:**

```bash
cd /Users/abdul/crypto-wallet
npm install
```

2. **(Optional) Initialize shadcn UI** to replace placeholder UI components:

```bash
npx shadcn-ui init
npx shadcn-ui add button card input dialog toast
```

3. **Configure environment** (optional):

Copy `.env.example` to `.env.local` and configure your RPC endpoint:

```bash
cp .env.example .env.local
```

4. **Run dev server:**

```bash
npm run dev
```

Visit `http://localhost:3000` to see your wallet!

## Features

- 🔐 **Non-custodial** - No private keys stored, uses wallet adapters
- 💼 **Multi-wallet support** - Phantom, Solflare, and Torus
- 💰 **Balance display** - Real-time SOL balance via React Query
- 📤 **Send SOL** - Simple form to send SOL to any address
- 📜 **Transaction history** - View recent transactions
- 🎨 **Modern UI** - Glass morphism effects with Tailwind
- 🌓 **Theme support** - Dark/light mode ready (via next-themes)
- ⚡ **Animated** - Framer Motion for smooth transitions

## Configuration

### RPC Endpoint

By default, the app uses Solana devnet. To change:

- **Devnet** (testing): `https://api.devnet.solana.com` (default)
- **Mainnet**: `https://api.mainnet-beta.solana.com`
- **Custom RPC**: Use Helius, Alchemy, or your own endpoint

Set `NEXT_PUBLIC_SOLANA_RPC` in `.env.local`

## Security Notes

- This app is **non-custodial** - wallet adapters handle signing
- Never store private keys in the app
- Always verify transaction details before signing
- Use devnet for testing, mainnet for production

## Project Structure

```
/app
  /page.tsx          # Main dashboard
  /layout.tsx        # Root layout with providers
  /globals.css       # Global styles and glass effects
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

## Bugs Fixed

✅ Fixed TypeScript configuration for Next.js 14 App Router  
✅ Fixed React Query v5 API (queryKey/queryFn object syntax)  
✅ Added proper TypeScript interfaces for all components  
✅ Fixed implicit `any` types throughout  
✅ Added `next-env.d.ts` for JSX types  
✅ Added webpack config to handle Solana dependencies  
✅ Fixed mutation API (`isPending` instead of `isLoading`)  

## Next Steps

- Replace placeholder UI with real shadcn components
- Add theme toggle button to header
- Enhance transaction display (amounts, direction, Solscan links)
- Add input validation for send form
- Add unit tests
- Deploy to Vercel

## Troubleshooting

**"Cannot find module 'react'"**: Run `npm install`  
**JSX errors**: Make sure `next-env.d.ts` exists (auto-generated after install)  
**Wallet not connecting**: Check browser extension is installed  
**Transaction fails**: Ensure sufficient SOL balance and correct network

---

Built with ❤️ using Next.js 14, Solana Web3.js, and Tailwind CSS
