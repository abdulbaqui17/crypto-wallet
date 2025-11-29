"use client"

import React from 'react'
import { ThemeProvider } from 'next-themes'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import {
  ConnectionProvider,
  WalletProvider
} from '@solana/wallet-adapter-react'
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui'
import {
  PhantomWalletAdapter,
  SolflareWalletAdapter,
  TorusWalletAdapter
} from '@solana/wallet-adapter-wallets'

import '@solana/wallet-adapter-react-ui/styles.css'
import ToastProvider from './ui/Toast'

const queryClient = new QueryClient()

export default function Providers({ children }: { children: React.ReactNode }) {
  const endpoint = process.env.NEXT_PUBLIC_SOLANA_RPC || 'https://api.devnet.solana.com'

  const wallets = React.useMemo(
    () => [new PhantomWalletAdapter(), new SolflareWalletAdapter(), new TorusWalletAdapter()],
    []
  )

  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <QueryClientProvider client={queryClient}>
        <ConnectionProvider endpoint={endpoint}>
          <WalletProvider wallets={wallets} autoConnect>
            <WalletModalProvider>
              <ToastProvider>{children}</ToastProvider>
            </WalletModalProvider>
          </WalletProvider>
        </ConnectionProvider>
      </QueryClientProvider>
    </ThemeProvider>
  )
}
