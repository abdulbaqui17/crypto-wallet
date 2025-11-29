// Type declarations for CSS imports
declare module '*.css' {
  const content: { [className: string]: string }
  export default content
}

// Solana wallet adapter styles
declare module '@solana/wallet-adapter-react-ui/styles.css'

// Allow CSS modules
declare module '*.module.css' {
  const classes: { [key: string]: string }
  export default classes
}
