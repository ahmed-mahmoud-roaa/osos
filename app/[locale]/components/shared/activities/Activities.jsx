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
} from '@/app/store/slices/status'

export default function Activities() {
  const dispatch = useDispatch()

  const openDrawer = (action) => {
    dispatch(changeCurrentComponent(action))
    dispatch(ChangeDrawerStatus(true))
  }

  const userDate = useSelector((state) => state.auth.userInfo)
  const NotificationButtons = {
    feed: {
      icon: <TfiLayoutListThumb />,
      action: () => openDrawer('feed'),
      label: 'toolTip',
    },
    calender: {
      icon: <TbCalendarFilled />,
      action: () => openDrawer('calender'),
      label: 'toolTip',
    },
    notification: {
      icon: <GoBell />,
      action: () => openDrawer('notification'),
      label: 'toolTip',
    },
    chat: {
      icon: <BsChatLeftText />,
      action: () => openDrawer('chat'),
      label: 'toolTip',
    },
    task: {
      icon: <BsListCheck />,
      action: () => openDrawer('task'),
      label: 'toolTip',
    },
  }

  Object.keys(NotificationButtons).map((item) => {
    NotificationButtons[item].number = userDate.activities[item]
  })

  return (
    <Ui
      dynamicElements={NotificationButtons}
      avatar={userDate.avatar}
      openDrawer={openDrawer}
    />
  )
}
