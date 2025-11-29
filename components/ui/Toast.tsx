"use client"

import React from 'react'

type Toast = { id: number; message: string }

const ToastContext = React.createContext<any>(null)

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = React.useState<Toast[]>([])

  const push = (message: string) => {
    const t = { id: Date.now(), message }
    setToasts((s: Toast[]) => [t, ...s])
    setTimeout(() => setToasts((s: Toast[]) => s.filter((x: Toast) => x.id !== t.id)), 4000)
  }

  return (
    <ToastContext.Provider value={{ push }}>
      {children}
      <div className="fixed top-6 right-6 space-y-2 z-50">
        {toasts.map((t: Toast) => (
          <div key={t.id} className="px-4 py-2 bg-slate-800/80 text-white rounded-md shadow-md">
            {t.message}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  )
}

export const useToast = () => React.useContext(ToastContext)

export default ToastProvider
