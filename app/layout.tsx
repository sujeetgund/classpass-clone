import { Navbar } from '@/components'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ClassPass | Book Fitness Classes & Salon Appointments',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <link rel="icon" href="./favicon.ico" />
      <body className={inter.className}>
        <div className='absolute top-0 left-0 w-full'>
        <Navbar />
        </div>
        {children}
        </body>
    </html>
  )
}
