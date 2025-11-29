"use client"

import React from 'react'
import { useWallet, useConnection } from '@solana/wallet-adapter-react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import Input from './ui/Input'
import Button from './ui/Button'
import Card from './ui/Card'
import { useToast } from './ui/Toast'
import { LAMPORTS_PER_SOL } from '@solana/web3.js'

export default function AirdropForm() {
  const { publicKey } = useWallet()
  const { connection } = useConnection()
  const [amount, setAmount] = React.useState('')
  const toast = useToast()
  const qc = useQueryClient()

  const mutation = useMutation({
    mutationFn: async () => {
      if (!publicKey) throw new Error('Wallet not connected')
      const solAmount = Number(amount)
      if (!solAmount || solAmount < 1 || solAmount > 5) {
        throw new Error('Amount must be between 1 and 5 SOL')
      }
      
      const signature = await connection.requestAirdrop(
        publicKey,
        solAmount * LAMPORTS_PER_SOL
      )
      
      await connection.confirmTransaction(signature, 'confirmed')
      return signature
    },
    onSuccess: (signature: string) => {
      toast?.push(`Airdrop successful! Signature: ${signature.slice(0, 8)}...`)
      qc.invalidateQueries({ queryKey: ['balance'] })
      setAmount('')
    },
    onError: (error: Error) => {
      toast?.push(`Airdrop failed: ${error.message}`)
      console.error('Airdrop error:', error)
    }
  })

  return (
    <Card className="h-full">
      <h3 className="text-lg font-bold text-white">Airdrop SOL</h3>
      <p className="text-sm text-gray-300 mt-1">Request test SOL on devnet</p>
      <div className="mt-4 grid gap-3">
        <Input 
          placeholder="Enter amount (1-5 SOL)" 
          type="number"
          min="1"
          max="5"
          value={amount} 
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAmount(e.target.value)} 
        />
        <Button 
          onClick={() => mutation.mutate()} 
          disabled={mutation.isPending || !publicKey || !amount}
        >
          {mutation.isPending ? 'Requesting...' : 'Request Airdrop'}
        </Button>
        <p className="text-xs text-gray-400 text-center">
          If airdrop fails, visit{' '}
          <a 
            href="https://faucet.solana.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:underline"
          >
            faucet.solana.com
          </a>
        </p>
      </div>
    </Card>
  )
}
