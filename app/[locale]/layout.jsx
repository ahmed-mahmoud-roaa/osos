import './globals.scss'
import Cookies from 'js-cookie'
import ReduxProvider from './components/global/reduxProvider/ReduxProvider'
import { notFound } from 'next/navigation'
import { Inter } from 'next/font/google'
import Provider from '../_trpc/Provider'
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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700"
        />
      </head>
      <ReduxProvider>
        <body
          className={
            inter.className + ' ' + Cookies.get('darkMode') === true
              ? 'dark'
              : 'light'
          }
        >
          <Provider>{children}</Provider>
        </body>
      </ReduxProvider>
    </html>
  )
}
