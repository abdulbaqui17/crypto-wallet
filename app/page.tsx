'use client'

import dynamic from 'next/dynamic'

const WalletConnect = dynamic(() => import('../components/WalletConnect'), { ssr: false })
const AirdropForm = dynamic(() => import('../components/AirdropForm'), { ssr: false })
const SendSolForm = dynamic(() => import('../components/SendSolForm'), { ssr: false })
const TransactionsList = dynamic(() => import('../components/TransactionsList'), { ssr: false })

export default function Page() {
  return (
    <main className="min-h-screen flex items-center justify-center py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          <WalletConnect />
          <AirdropForm />
          <SendSolForm />
          <TransactionsList address={undefined} />
        </div>
      </div>
    </main>
  )
}
