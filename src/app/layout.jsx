// 'use client'

import './globals.css'
export const metadata = {
  title: 'Next.js App',
  description: 'Modern Next.js application',
}

export default function RootLayout({ children }) {
  return (
    <>
      {children}
    </>
  )
}