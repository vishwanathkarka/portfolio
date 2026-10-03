import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import { ScrollToTop } from "@/components/ui/ScrollAnimations"
import GradualBlur from "@/components/GradualBlur"

const hkGrotesk = localFont({
  src: [
    { path: '../fonts/ClashDisplay-Regular.woff2', weight: '400', style: 'normal' },
    { path: '../fonts/ClashDisplay-Semibold.woff2', weight: '600', style: 'normal' },
    { path: '../fonts/ClashDisplay-Bold.woff2', weight: '700', style: 'normal' },
  ],
  variable: '--font-hk-grotesk',
  display: 'swap',
})

const instrumentSerif = localFont({
  src: '../fonts/ClashDisplay-Regular.woff2',
  variable: '--font-instrument-serif'
})

export const metadata: Metadata = {
  metadataBase: new URL('https://vishwanathkarka.com'),
  title: 'Vishwanath Reddy — Full-stack Developer',
  description: 'Full-stack developer building useful web products, from thoughtful interfaces to dependable backend systems.',
  icons: {
    icon: '/vishwanath.png',
  },
  openGraph: {
    url: 'https://vishwanathkarka.com/',
    siteName: 'Vishwanath Reddy Portfolio',
    locale: 'en_US',
    type: 'website',
    images: [{
      url: '/vishwanath.png',
      width: 1200,
      height: 1200,
      alt: 'Vishwanath Reddy'
    }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/vishwanath.png" />
      </head>
      <body className={`${hkGrotesk.className} ${instrumentSerif.variable}`} suppressHydrationWarning={true}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative z-10">
            {children}
          </div>
          <GradualBlur 
            position="bottom" 
            height="5rem" 
            target="page" 
            zIndex={1}
            strength={2}
            divCount={5}
          />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
