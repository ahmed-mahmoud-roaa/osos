'use client'
import SideBar from '@/app/[locale]/components/shared/sideBar/SideBar'
import React from 'react'
import { useSelector } from 'react-redux'

export default function Content({ content }) {
  const sidebar = useSelector((state) => state.main.sidebar)
  const left = sidebar === 'opened' ? '0rem' : ''
  const minWidth = sidebar === 'opened' ? '100%' : 'calc(100% + 19.5rem)'

  return (
    <div className="content max-w-full flex grow overflow-x-hidden">
      <div
        className={`transition-all ease-in-out duration-500 sidebarWrapper flex relative min-w-full left-[-19.5rem] rtl:left-[19.5rem]`}
        style={{ left, minWidth }}
      >
        <SideBar />
        <div className="Content grow">{content}</div>
      </div>
    </div>
  )
}
