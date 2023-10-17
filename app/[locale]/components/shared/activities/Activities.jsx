'useClient'
import React from 'react'
import Ui from './Ui'
import { TbCalendarFilled } from 'react-icons/tb'
import { GoBell } from 'react-icons/go'
import { BsChatLeftText, BsListCheck } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { TfiLayoutListThumb } from 'react-icons/tfi'
import {
  ChangeDrawerStatus,
  changeCurrentComponent,
} from '@/app/store/slices/main'

export default function Activities() {
  const dispatch = useDispatch()

  const openDrawer = (action) => {
    dispatch(changeCurrentComponent(action))
    dispatch(ChangeDrawerStatus(true))
  }

  const userDate = useSelector((state) => state.auth.userInfo)
  const drawer = useSelector((state) => state.main.drawer)
  const NotificationButtons = {
    feed: {
      icon: <TfiLayoutListThumb />,
      action: () => openDrawer('feed'),
      label: 'toolTip',
      active: 'feed' === drawer.currentComponent && drawer.status,
    },
    calendar: {
      icon: <TbCalendarFilled />,
      action: () => openDrawer('calendar'),
      label: 'toolTip',
      active: 'calendar' === drawer.currentComponent && drawer.status,
    },
    notification: {
      icon: <GoBell />,
      action: () => openDrawer('notification'),
      label: 'toolTip',
      active: 'notification' === drawer.currentComponent && drawer.status,
    },
    chat: {
      icon: <BsChatLeftText />,
      action: () => openDrawer('chat'),
      label: 'toolTip',
      active: 'chat' === drawer.currentComponent && drawer.status,
    },
    task: {
      icon: <BsListCheck />,
      action: () => openDrawer('task'),
      label: 'toolTip',
      active: 'task' === drawer.currentComponent && drawer.status,
    },
  }

  Object.keys(NotificationButtons).map((item) => {
    NotificationButtons[item].number = userDate.activities[item]
  })

  return (
    <>
      <Ui
        profileActive={'profile' === drawer.currentComponent && drawer.status}
        dynamicElements={NotificationButtons}
        avatar={userDate.avatar}
        openDrawer={openDrawer}
      />
    </>
  )
}
