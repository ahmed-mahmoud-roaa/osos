'use client'
import React from 'react'

import { BsCodeSlash } from 'react-icons/bs'
import { RiUserSettingsLine, RiUserLine } from 'react-icons/ri'

import Ui from './Ui'
import { addUserInfo } from '@/app/store/slices/auth'
import { useDispatch } from 'react-redux'
export default function TopBar({ translation, serverData }) {
  const dispatch = useDispatch()
  dispatch(addUserInfo(serverData))

  const groupedButtons = {
    developer: {
      action: () => {
        console.log('Developer')
      },
      label: translation.Developer,
      icon: <BsCodeSlash />,
    },
    admin: {
      action: () => {
        console.log('Admin')
      },
      label: translation.Admin,
      icon: <RiUserSettingsLine />,
    },
    user: {
      action: () => {
        console.log('user')
      },
      label: translation.User,
      icon: <RiUserLine />,
    },
  }

  const dynamicElements = {
    avatarImage: '',
    groupedButtons,
  }

  return <Ui dynamicElements={dynamicElements} translation={translation} />
}
