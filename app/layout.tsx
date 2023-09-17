
import 'react-toastify/dist/ReactToastify.css';
import './globals.css'
import NavBar from '@/ui/Navigation/NavBar/NavBar'
import Providers from '@/lib/providers'
import Footer from '@/ui/Navigation/Footer'
import { getSiteSettings } from '@/lib/providers/sanity/sanity'
import Script from 'next/script'
import { ToastContainer } from 'react-toastify';
import seoKeywords from '@/lib/site/seoKeywords';
import allKeywords from '@/lib/site/seoKeywords';


export const metadata = {
  title: 'CRIB',
  description: 'Connect. Revolutionize. Innovate. Boost.',

  generator: 'Next.js',
  applicationName: 'Next.js',
  referrer: 'origin-when-cross-origin',
  keywords: allKeywords,
  authors: [{ name: 'Randal Herndon' }],
  colorScheme: 'dark',
  creator: 'Jiachi Liu',
  publisher: 'Sebastian Markbåge',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
}



export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const settings = await getSiteSettings()

  if (!settings) {
    return <p>Loading...</p>
  }
  return settings && (
    <html lang="en" suppressHydrationWarning>
      <Script defer src="https://unpkg.com/@tinybirdco/flock.js" data-host="https://api.us-east.tinybird.co" data-token={process.env.NEXT_PUBLIC_TINYBIRD_TRACKER_TOKEN}
      ></Script>      <body className='max-w-screen w-full relative bg-white dark:bg-black'>
        <Providers>
          <NavBar settings={settings} />
          <main className='relative'>
            {children}
            <ToastContainer theme='dark' />

          </main>

          <Footer settings={settings} />
        </Providers></body>
    </html>
  )
}
