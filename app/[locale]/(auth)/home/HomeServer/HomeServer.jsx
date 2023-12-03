import React from 'react'

import TopBar from '@/app/[locale]/components/shared/topBar/TopBar'
import Drawer from '@/app/[locale]/components/shared/drawer/Drawer'
import HelpShrink from '@/app/[locale]/components/shared/HelpShrink/HelpShrink'
import { cookies } from 'next/headers'
import Content from '../content/Content'

export default async function HomeServer({ translation, childrenProp }) {
  const cookieStore = cookies()
  const direction = cookieStore.get('NEXT_LOCALE').value

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

  return (
    <>
      <div className="w-full">
        <HelpShrink direction={direction}>
          <div className="flex flex-col h-screen  relative flex-grow w-1">
            <TopBar
              translation={translation}
              serverData={serverData.userInfo}
            />
            <Drawer content="drawerAi" />
            <Drawer content="drawer" />
            <Content content={childrenProp} />
          </div>
        </HelpShrink>
      </div>
    </>
  )
}
