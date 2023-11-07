'use client'
import React from 'react'

import { BsCodeSlash } from 'react-icons/bs'

import Ui from './Ui'
import { addUserInfo } from '@/app/store/slices/auth'
import { useDispatch, useSelector } from 'react-redux'
import { ChangeSideBar } from '@/app/store/slices/main'
import { LiaToolsSolid } from 'react-icons/lia'
import { FiUser } from 'react-icons/fi'

export default function TopBar({ translation, serverData }) {
  const sidebar = useSelector((state) => state.main.sidebar)

  const dispatch = useDispatch()
  dispatch(addUserInfo(serverData))

  const groupedButtons = {
    build: {
      action: () => {
        console.log('Build')
      },
      label: translation.Build,
      icon: <BsCodeSlash />,
    },
    admin: {
      action: () => {
        console.log('Admin')
      },
      label: translation.Admin,
      icon: <LiaToolsSolid />,
    },
    user: {
      action: () => {
        console.log('user')
      },
      label: translation.User,
      icon: <FiUser />,
    },
  }

  const dynamicElements = {
    avatarImage: '',
    groupedButtons,
  }

  const sidebarToggle = () => {
    const status = sidebar === 'closed' ? 'opened' : 'closed'
    dispatch(ChangeSideBar(status))
  }
  return (
    <Ui
      dynamicElements={dynamicElements}
      translation={translation}
      sidebarToggle={sidebarToggle}
    />
  )
}
