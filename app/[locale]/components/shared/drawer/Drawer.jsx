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

export default function Drawer({ content }) {
  const drawerElements = {
    drawer: {
      profile: <Profile />,
      feed: <Feed />,
      calendar: <Calendar />,
      notification: <Notification />,
      chat: <Chat />,
      task: <Task />,
    },
    drawerAi: {
      chatBot: <div>ai helper</div>,
    },
  }

  const currentComponent = useSelector(
    (state) => state.main[content]
  ).currentComponent

  return (
    <>
      <Ui
        currentComponent={drawerElements[content][currentComponent]}
        type={content}
      />
    </>
  )
}
