'use client'
import SideBar from '@/app/[locale]/components/shared/sideBar/SideBar'
import React from 'react'
import { useSelector } from 'react-redux'
import { Wrapper } from './Content.styled'

export default function Content({ content }) {
  const sidebar = useSelector((state) => state.main.sidebar)

  return (
    <Wrapper
      sidebar={sidebar}
      className={`content max-w-full flex grow overflow-x-hidden`}
    >
      <div
        className={`transition-all ease-in-out duration-500 sidebarWrapper flex relative min-w-full left-[-19.5rem] rtl:left-[19.5rem]`}
      >
        <SideBar />
        <div className="Content grow">{content}</div>
      </div>
    </Wrapper>
  )
}
