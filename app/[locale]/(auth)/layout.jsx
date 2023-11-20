import { useTranslations } from 'next-intl'

import HomeServer from './home/HomeServer/HomeServer'

export default function Layout({ children }) {
  const t = useTranslations('Index')

  const translation = {
    Focus: t('Focus'),
    Search: t('Search'),
    Build: t('Build'),
    Admin: t('Admin'),
    User: t('User'),
    RoaaPortal: t('RoaaPortal'),
  }

  return (
    <div className="flex">
      <HomeServer translation={translation} childrenProp={children} />
    </div>
  )
}
