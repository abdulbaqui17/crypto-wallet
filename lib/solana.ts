import { Connection, PublicKey, LAMPORTS_PER_SOL, SystemProgram, Transaction } from '@solana/web3.js'

const RPC = process.env.NEXT_PUBLIC_SOLANA_RPC || 'https://api.devnet.solana.com'

export const getConnection = () => new Connection(RPC, 'confirmed')

export async function getBalance(address: string) {
  const conn = getConnection()
  const pub = new PublicKey(address)
  const lamports = await conn.getBalance(pub)
  return lamports / LAMPORTS_PER_SOL
}

export async function sendSol(
  connection: Connection,
  sendTransaction: any,
  fromPubkey: PublicKey,
  to: string,
  amountSol: number
) {
  if (!fromPubkey) throw new Error('Wallet not connected')
  if (!to) throw new Error('Recipient address required')
  if (!amountSol || amountSol <= 0) throw new Error('Invalid amount')

  const toPub = new PublicKey(to)
  const lamports = Math.round(amountSol * LAMPORTS_PER_SOL)

  const transaction = new Transaction().add(
    SystemProgram.transfer({ 
      fromPubkey, 
      toPubkey: toPub, 
      lamports 
    })
  )

  const { blockhash, lastValidBlockHeight } = await connection.getLatestBlockhash('confirmed')
  transaction.recentBlockhash = blockhash
  transaction.feePayer = fromPubkey

  // Send transaction using wallet adapter
  const signature = await sendTransaction(transaction, connection)
  
  // Wait for confirmation
  await connection.confirmTransaction({
    signature,
    blockhash,
    lastValidBlockHeight
  }, 'confirmed')
  
  return signature
}

export async function getRecentTransactions(address: string, limit = 10) {
  const conn = getConnection()
  const pub = new PublicKey(address)
  const sigs = await conn.getSignaturesForAddress(pub, { limit })
  const txs = []
  for (const s of sigs) {
    const parsed = await conn.getParsedTransaction(s.signature)
    txs.push({ signature: s.signature, slot: s.slot, parsed })
  }
  return txs
}
