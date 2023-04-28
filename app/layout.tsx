import '../style/global.css'
import { Castoro, Jost } from 'next/font/google'
import Head from './head';

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


export const revalidate = 60

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`flex flex-col items-center scroll-smooth ${jost.variable} ${castoro.variable} bg-[#F3F3F3] font-jost`}>
      <link rel='icon' type='image/x-icon'  href='/image/favicon.png' sizes='32x32'/>
      <Head />
      <body className='max-w-[1920px] w-full'>
        {children}
      </body>
    </html>
  )
}
