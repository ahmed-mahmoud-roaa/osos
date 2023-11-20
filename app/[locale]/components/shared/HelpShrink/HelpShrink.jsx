'use client'
import Shrink from '@/app/[locale]/components/shared/Shrink/Shrink'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Help from '../topBar/help/Help'
import { directionFun } from '@/app/store/slices/main'

export default function HelpShrink({ direction, children }) {
  const helpStatus = useSelector((state) => state.main.helpStatus)
  const dispatch = useDispatch()
  dispatch(directionFun(direction))

  return (
    <Shrink sideDirection={'right'} status={helpStatus} width={'21.5rem'}>
      {children}
      <Help />
    </Shrink>
  )
}
