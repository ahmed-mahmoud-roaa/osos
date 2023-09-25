import Link from 'next/link'
import TopBar from './components/shared/topBar/TopBar'
import { useTranslations } from 'next-intl'

export default function Home() {
  const t = useTranslations('Index')

  return (
    <>
      <h1>{t('title')}</h1>
      <div className="dark:bg-slate-400 rtl:text-red-500">
        <Link href="/en" locale="en">
          in english
        </Link>
        {' / '}
        <Link href="/ar" locale="ar">
          in arabic
        </Link>
        <br />
      </div>
      <TopBar />
    </>
  )
}
