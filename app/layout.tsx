import '../style/global.css'
import { Castoro, Jost } from 'next/font/google'

const castoro = Castoro({
  variable: '--font-castoro',
  display: 'swap',
  subsets: ['latin'],
  weight: '400'
});

const jost = Jost({
  variable: '--font-jost',
  display: 'swap',
  subsets: ['latin']
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`scroll-smooth ${jost.variable} ${castoro.variable} bg-[#F3F3F3] font-jost`}>
      <head />
      <body>
        {children}
      </body>
    </html>
  )
}
