"use client"

import React from 'react'
import { useWallet, useConnection } from '@solana/wallet-adapter-react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import Input from './ui/Input'
import Button from './ui/Button'
import Card from './ui/Card'
import { sendSol } from '../lib/solana'
import { useToast } from './ui/Toast'

export default function SendSolForm() {
  const { publicKey, wallet } = useWallet()
  const { connection } = useConnection()
  const [to, setTo] = React.useState('')
  const [amount, setAmount] = React.useState('')
  const toast = useToast()
  const qc = useQueryClient()

  const { sendTransaction } = useWallet()

  const mutation = useMutation({
    mutationFn: async () => {
      if (!publicKey) throw new Error('Wallet not connected')
      if (!sendTransaction) throw new Error('Wallet does not support transactions')
      const sig = await sendSol(connection, sendTransaction, publicKey, to, Number(amount))
      return sig
    },
    onSuccess: (data: string) => {
      toast?.push(`Transaction sent: ${data}`)
      qc.invalidateQueries({ queryKey: ['balance'] })
      qc.invalidateQueries({ queryKey: ['transactions'] })
      setTo('')
      setAmount('')
    },
    onError: (error: Error) => {
      toast?.push(`Transaction failed: ${error.message}`)
      console.error('Transaction error:', error)
    }
  })

  return (
    <Card className="mt-6 max-w-xl mx-auto">
      <h3 className="text-lg font-bold text-white">Send SOL</h3>
      <div className="mt-4 grid gap-3">
        <Input placeholder="Recipient address" value={to} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTo(e.target.value)} />
        <Input placeholder="Amount (SOL)" value={amount} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAmount(e.target.value)} />
        <div className="flex justify-end">
          <Button 
            onClick={() => mutation.mutate()} 
            disabled={mutation.isPending || !publicKey || !to || !amount}
          >
            {mutation.isPending ? 'Sending...' : 'Send SOL'}
          </Button>
        </div>
      </div>
    </Card>
  )
}
