import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from "@/providers/theme-provider"
import ToastProvider from '@/providers/toast-provider'
import NavMenu from '@/components/NavMenu'
import ScrollToTopButton from '@/components/ScrollToTopButton'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  openGraph:  {
    type: "website",
    url: "https://www.pjleblanc.dev/",
    title: "PJ LeBlanc - web dev",
    description: "A web developer based in Ontario, Canada",
    siteName: "pjleblanc.dev",
    images: [{
      url: "https://www.pjleblanc.dev/_next/image?url=%2Fimages%2Fhero.jpeg&w=640&q=75",
    }],
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        <main className=' bg-white px-10 md:px-20 lg:px-10 dark:bg-gray-800 text-teal-500 mt-2'>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
        <ToastProvider />
        <NavMenu />
          {children}
          <ScrollToTopButton />
        </ThemeProvider>
        </main>
      </body>
    </html>
  )
}
