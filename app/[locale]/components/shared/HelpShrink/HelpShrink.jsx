'use client'
import Shrink from '@/app/[locale]/components/shared/Shrink/Shrink'
import React from 'react'
import { useSelector } from 'react-redux'
import Help from '../topBar/help/Help'

export default function HelpShrink({ direction, children }) {
  const helpStatus = useSelector((state) => state.main.helpStatus)
  return (
    <Shrink
      sideDirection={'right'}
      status={helpStatus}
      width={'21.5rem'}
      direction={direction}
    >
      {children}
      <Help />
    </Shrink>
  )
}
