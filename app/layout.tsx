import type { Metadata } from 'next'
import { Inter, Caveat } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const caveat = Caveat({
  subsets: ['latin'],
  variable: '--font-handwriting'
})

export const metadata: Metadata = {
  title: 'TaskFlow - Streamline Your Team\'s Workflow',
  description: 'Modern project management tool for efficient team collaboration',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${caveat.variable}`}>{children}</body>
    </html>
  )
}
