'use client'
import SideBar from '../../../components/shared/sideBar/SideBar'
import React from 'react'
import Shrink from '../../../components/shared/Shrink/Shrink'
import { useSelector } from 'react-redux'
import Cookies from 'js-cookie'

export default function Content({ content, sidebarContent }) {
  const sidebar = useSelector((state) => state.main.sidebar)

  return (
    <Shrink
      sideDirection={'left'}
      status={sidebar == 'opened'}
      width={'19.5rem'}
      direction={Cookies.get('NEXT_LOCALE')}
      staticElement={
        <div className="Content grow flex justify-between">
          <span>{content}</span>
        </div>
      }
      movable={<SideBar sidebarContent={sidebarContent} />}
    />
  )
}
