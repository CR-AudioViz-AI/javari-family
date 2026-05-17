// app/layout.tsx — Javari Family
// Fortune 50 quality — uses AppShell for full ecosystem integration
// May 17, 2026 — CR AudioViz AI, LLC
import type { Metadata } from 'next'
import './globals.css'
export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Javari Family | Javari by CR AudioViz AI',
  description: 'AI family planning and parenting resources',
  keywords: 'Javari Family, Javari, AI, CR AudioViz AI',
}

import AppShell from '@/components/AppShell'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>
        <AppShell
          appName="Javari Family"
          appColor="#f59e0b"
          appEmoji="👨‍👩‍👧"
          appDesc="AI family planning and parenting resources"
        >
          {children}
        </AppShell>
      </body>
    </html>
  )
}
