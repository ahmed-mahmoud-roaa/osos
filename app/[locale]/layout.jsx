import './globals.scss'
import Cookies from 'js-cookie'
import ReduxProvider from './components/global/reduxProvider/ReduxProvider'
import { notFound } from 'next/navigation'
import { Inter } from 'next/font/google'
import Test from './components/custom/Test'
import Test2 from './components/custom/Test2'
import Link from 'next/link'
export const metadata = {
  title: 'OSOS BASE',
  description: '',
}
const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children, params }) {
  const locales = ['en', 'ar']
  const isValidLocale = locales.some((cur) => cur === params.locale)
  if (!isValidLocale) notFound()

  return (
    <html lang={params.locale} dir={params.locale === 'ar' ? 'rtl' : 'ltr'}>
      <body
        className={
          inter.className + ' ' + Cookies.get('darkMode') === true
            ? 'dark'
            : 'light'
        }
      >
        <ReduxProvider>
          {children}
          <Test />
          <Link href="/ex">EX000</Link>
        </ReduxProvider>
      </body>
    </html>
  )
}
