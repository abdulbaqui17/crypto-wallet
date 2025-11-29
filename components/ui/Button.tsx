"use client"

import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  className?: string
}

export default function Button({ children, className = '', ...props }: ButtonProps) {
  return (
    <button
      className={`px-6 py-3 bg-white text-black font-bold uppercase tracking-wider border-2 border-white hover:bg-black hover:text-white hover:shadow-lg hover:shadow-white/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
