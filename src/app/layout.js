import { Nunito } from 'next/font/google'
import './globals.css'

const interFont = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
  weight: ['400', '500', '600', '700'],
})

export const metadata = {
  title: 'Anes Hannachi — Développeur Web & Ingénieur Informatique',
  description: "Portfolio personnel d'Anes Hannachi, étudiant en 1ère année cycle ingénieur à l'ESI Alger.",
}

export const viewport = {
  colorScheme: 'dark',
  themeColor: '#05050f',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${interFont.variable} scroll-smooth`}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="antialiased bg-[#05050f] text-[#e2e8f0]">
        {children}
      </body>
    </html>
  )
}