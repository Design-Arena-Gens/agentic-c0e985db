import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Premium Car Sales - Find Your Dream Car',
  description: 'Browse our extensive collection of quality used and new cars',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
