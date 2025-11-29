"use client"

import React from 'react'
import { useWallet, useConnection } from '@solana/wallet-adapter-react'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import { useQuery } from '@tanstack/react-query'
import Card from './ui/Card'
import Button from './ui/Button'
import { getBalance } from '../lib/solana'
import { Copy, Check } from 'lucide-react'

export default function WalletConnect() {
  const { publicKey, connected } = useWallet()
  const { connection } = useConnection()

  const address = publicKey?.toBase58() || null

  const { data: balance, isLoading } = useQuery({
    queryKey: ['balance', address],
    queryFn: async () => (address ? getBalance(address) : 0),
    enabled: !!address
  })

  const copy = async () => {
    if (!address) return
    await navigator.clipboard.writeText(address)
    // visual feedback could be provided by a toast
  }

  return (
    <Card className="h-full">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-white">Wallet</h2>
          <p className="text-sm text-gray-300">Connect with Phantom, Solflare or Torus</p>
        </div>
        <WalletMultiButton />
      </div>

      {connected && (
        <div className="mt-4 flex items-center justify-between">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-gray-400">Address</div>
            <div className="flex items-center gap-2">
              <div className="font-mono text-sm text-white">{address?.slice(0, 6)}...{address?.slice(-6)}</div>
              <Button onClick={copy} className="px-2 py-1 text-sm">
                <Copy size={14} />
              </Button>
            </div>
          </div>

          <div className="text-right">
            <div className="text-xs font-semibold uppercase tracking-wider text-gray-400">SOL Balance</div>
            <div className="text-lg font-bold text-white">{isLoading ? 'Loading...' : (balance ?? 0).toFixed(4)} SOL</div>
          </div>
        </div>
      )}
    </Card>
  )
}
