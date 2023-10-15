'use client'
import React from 'react'
import Ui from './Ui'
import { useSelector } from 'react-redux'
import Profile from './profile/Profile'
import Feed from './feed/Feed'
import Calendar from './calendar/Calendar'
import Notification from './notification/Notification'
import Chat from './chat/Chat'
import Task from './task/Task'

export default function Drawer() {
  const drawerElements = {
    profile: <Profile />,
    feed: <Feed />,
    calendar: <Calendar />,
    notification: <Notification />,
    chat: <Chat />,
    task: <Task />,
  }
  const currentComponent = useSelector(
    (state) => state.status.drawer
  ).currentComponent
  return <Ui currentComponent={drawerElements[currentComponent]} />
}
