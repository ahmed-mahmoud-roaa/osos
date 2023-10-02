'use client'
import './Drawer.scss'
import React from 'react'
import Ui from './Ui'
import { useSelector } from 'react-redux'
import Profile from './profile/Profile'
import Feed from './feed/Feed'
import Calender from './calender/Calender'
import Notification from './notification/Notification'
import Chat from './chat/Chat'
import Task from './task/Task'

export default function Drawer() {
  const drawerElements = {
    profile: <Profile />,
    feed: <Feed />,
    calender: <Calender />,
    notification: <Notification />,
    chat: <Chat />,
    task: <Task />,
  }
  const currentComponent = useSelector(
    (state) => state.status.drawer
  ).currentComponent
  return <Ui currentComponent={drawerElements[currentComponent]} />
}