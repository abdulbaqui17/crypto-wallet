"use client"

import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { useWallet } from '@solana/wallet-adapter-react'
import Card from './ui/Card'
import { getRecentTransactions } from '../lib/solana'

interface Transaction {
  signature: string
  slot: number
  parsed: any
}

export default function TransactionsList({ address }: { address?: string | null }) {
  const { publicKey } = useWallet()
  const resolved = address ?? publicKey?.toBase58()

  const { data, isLoading } = useQuery<Transaction[]>({
    queryKey: ['transactions', resolved],
    queryFn: () => (resolved ? getRecentTransactions(resolved, 10) : []),
    enabled: !!resolved
  })

  return (
    <Card className="mt-6 max-w-3xl mx-auto">
      <h3 className="text-lg font-bold text-white">Recent Transactions</h3>
      {isLoading && <div className="mt-4 text-sm text-gray-300">Loading...</div>}
      {!isLoading && (!data || data.length === 0) && <div className="mt-4 text-sm text-gray-300">No recent transactions</div>}

      <ul className="mt-4 space-y-3">
        {data?.map((tx: Transaction) => (
          <li key={tx.signature} className="flex items-center justify-between border-b border-white/20 pb-2 hover:border-white/40 transition-colors">
            <div className="text-sm font-mono font-semibold text-white">{tx.signature.slice(0, 8)}...{tx.signature.slice(-8)}</div>
            <div className="text-xs font-semibold text-gray-400">slot {tx.slot}</div>
          </li>
        ))}
      </ul>
    </Card>
  )
}
