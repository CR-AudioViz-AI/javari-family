import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Javari Family | Parenting Resources & Support',
  description: 'Expert parenting advice, family activities, childcare resources, and community support for parents at every stage.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
