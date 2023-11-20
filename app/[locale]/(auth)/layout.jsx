import { useTranslations } from 'next-intl'
import TopBar from '../components/shared/topBar/TopBar'
import Drawer from '../components/shared/drawer/Drawer'
import Content from './home/content/Content'
import HelpShrink from '../components/shared/HelpShrink/HelpShrink'
import { cookies } from 'next/headers'

export default function Layout({ children }) {
  const t = useTranslations('Index')

  const serverData = {
    userInfo: {
      avatar: 'https://www.svgrepo.com/show/61986/avatar.svg',
      activities: {
        feed: 5,
        calendar: 5,
        notification: 5,
        chat: 5,
        task: 5,
      },
      name: 'Ahmed Kadry',
      position: 'Head of UI/UX Dept. • OSOS',
      email: 'ahmed.kadry@roaa.tech',
      phone: ['+20 122 976 6664', '+20 122 976 6664'],
    },
  }

  const translation = {
    Focus: t('Focus'),
    Search: t('Search'),
    Build: t('Build'),
    Admin: t('Admin'),
    User: t('User'),
    RoaaPortal: t('RoaaPortal'),
  }

  const cookieStore = cookies()
  const direction = cookieStore.get('NEXT_LOCALE').value
  console.log(direction, '8888888888888777')
  return (
    <div className="flex">
      <HelpShrink direction={direction}>
        <div className="flex flex-col h-screen  relative flex-grow">
          <TopBar translation={translation} serverData={serverData.userInfo} />
          <Drawer />
          <Content content={children} />
        </div>
      </HelpShrink>
    </div>
  )
}
