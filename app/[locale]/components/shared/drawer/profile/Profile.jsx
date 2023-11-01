'use client'
import React from 'react'
import Ui from './Ui'

import { FiSettings } from 'react-icons/fi'
import { BiUser } from 'react-icons/bi'
import { MdOutlineLogout } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { ChangeZoomSlider } from '@/app/store/slices/main'
import english from '@/public/assets/images/english.png'
import { useRouter } from 'next/navigation'
import {
  changeMode,
  directionFun,
  ChangeInterface,
} from '@/app/store/slices/main'
import Cookies from 'js-cookie'

export default function Profile() {
  const router = useRouter()
  const dispatch = useDispatch()
  const zoomSlider = useSelector((state) => state.main.zoomSlider)
  const direction = useSelector((state) => state.main.direction)
  const changeFontSize = (value) => {
    document.documentElement.style.zoom = value / 4 + 87.5 + '%'
    dispatch(ChangeZoomSlider(value))
  }
  const currentMode = useSelector((state) => state.main.currentMode)
  const interfaceState = useSelector((state) => state.main.interface)
  // const interface = useSelector((state) => state.main.interface)

  const notificationButtons = {
    user: {
      icon: <BiUser />,
      action: () => console.log('user'),
    },
    setting: {
      icon: <FiSettings />,
      action: () => console.log('user'),
    },
    logOut: {
      icon: <MdOutlineLogout />,
      action: () => console.log('user'),
    },
  }

  const changeLang = (lang) => {
    let newPathName
    if (lang === 'en' && location.pathname.includes('/ar/')) {
      newPathName = '/en' + location.pathname.substring(3)
      dispatch(directionFun(lang))
      router.push(newPathName, { scroll: false })
    } else if (lang === 'ar' && !location.pathname.includes('/ar/')) {
      newPathName = '/ar' + location.pathname
      dispatch(directionFun(lang))
      router.push(newPathName, { scroll: false })
    }
  }
  const langOptions = {
    selected: direction === 'en' ? 0 : 1,
    options: [
      { name: 'English', code: 'en', img: english, action: changeLang },
      { name: 'Arabic', code: 'ar', img: english, action: changeLang },
    ],
  }

  const lightMode = () => {
    document.body.classList.remove('dark')
    dispatch(changeMode('light'))
  }

  const darkMode = () => {
    document.body.classList.add('dark')
    dispatch(changeMode('dark'))
  }

  const modeOptions = {
    selected: currentMode === 'light' ? 0 : 1,
    options: [
      { name: 'Light', value: 'Light', action: lightMode },
      { name: 'Dark', value: 'Dark', action: darkMode },
      { name: 'Auto', value: 'Auto', action: () => {} },
    ],
  }

  const interFace = {
    selected: interfaceState === 'Comfy' ? 0 : 1,
    options: [
      {
        name: 'Comfy',
        value: 'Comfy',
        action: () => {
          dispatch(ChangeInterface('Comfy'))
        },
      },
      {
        name: 'Dense',
        value: 'Dense',
        action: () => {
          dispatch(ChangeInterface('Dense'))
        },
      },
    ],
  }

  return (
    <Ui
      notificationButtonsData={notificationButtons}
      changeFontSize={changeFontSize}
      zoomSlider={zoomSlider}
      langOptions={langOptions}
      modeOptions={modeOptions}
      interFace={interFace}
    />
  )
}
