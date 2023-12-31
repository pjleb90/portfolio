import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from "@/providers/theme-provider"
import ToastProvider from '@/providers/toast-provider'
import NavMenu from '@/components/NavMenu'
import ScrollToTopButton from '@/components/ScrollToTopButton'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL("https://www.pjleblanc.dev/"),
  openGraph:  {
    type: "website",
    url: "https://www.pjleblanc.dev/",
    title: "PJ LeBlanc - A web developer based in Ontario, Canada",
    description: "a freelancer providing services for web design and development. Looking forward to hearing from you!",
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
        <main className=' bg-white px-2 dark:bg-gray-900 text-teal-500 mt-2'>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
        <ToastProvider />
          <NavMenu />
            {children}
          <Footer />
          <ScrollToTopButton />
        </ThemeProvider>
        </main>
      </body>
    </html>
  )
}
