import './globals.css'
import { ReactNode } from 'react'
import Header from '@/app/Header';

export const metadata = {
  title: 'Medical AI',
  description: 'MMCLAB Medical AI Research',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <body className="bg-gray-100 text-gray-800">
        <Header />
        {/* Header 높이만큼 padding-top */}
        <main className="pt-[64px]">{children}</main>
      </body>
    </html>
  )
}
