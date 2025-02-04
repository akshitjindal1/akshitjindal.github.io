// src/pages/_app.tsx
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import '../styles/globals.css'

// This is our main App component that wraps all pages
function MyApp({ Component, pageProps }: AppProps) {
  return (
    // ThemeProvider enables dark mode functionality throughout the app
    <ThemeProvider attribute="class" defaultTheme="system">
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

// Make sure to export the component as the default export
export default MyApp