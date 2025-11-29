"use client"

import React from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export default function Input(props: InputProps) {
  return (
    <input
      className="w-full px-4 py-3 bg-black text-white font-semibold border-2 border-white/30 focus:outline-none focus:border-white focus:shadow-lg focus:shadow-white/30 placeholder-gray-400 transition-all duration-300"
      {...props}
    />
  )
}
