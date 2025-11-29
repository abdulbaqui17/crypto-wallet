"use client"

import React from 'react'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
  className?: string
}

export default function Card({ children, className = '', ...props }: CardProps) {
  return (
    <div className={`glass p-6 rounded-lg text-white ${className}`} {...props}>
      {children}
    </div>
  )
}
