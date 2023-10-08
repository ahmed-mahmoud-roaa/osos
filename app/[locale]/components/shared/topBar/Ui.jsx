'use client'
import Image from 'next/image'
import React from 'react'
import squareLogo from '@/public/assets/images/squareLogo.png'
import { BiCommand } from 'react-icons/bi'
import { HiMenuAlt1 } from 'react-icons/hi'
import { PiMagnifyingGlass } from 'react-icons/pi'
import { LuFocus } from 'react-icons/lu'
import ButtonsGroup from '../../elements/buttonsGroup/ButtonsGroup'
import IconRoundedButton from '../../elements/buttons/iconRoundedButton/IconRoundedButton'
import Activities from '../activities/Activities'
import Search from '../../elements/search/Search'

export default function Ui({ translation, dynamicElements }) {
  return (
    <>
      {
        <div
          className={`wrapper flex border-b border-themeGray-200 py-4 px-6 justify-between items-center`}
        >
          <div className="firstSide flex items-center">
            <button className="sidebarMenuIcon text-2xl mr-6 rtl:mr-0 rtl:ml-6 transform rtl:rotate-180 text-themeGray-800">
              <HiMenuAlt1 />
            </button>
            <div className="brand flex items-center mr-4 rtl:mr-0 rtl:ml-4 ">
              <Image src={squareLogo} alt="osos logo" />
              <h1 className="font-inter text-20 font-semibold leading-30 tracking-tight ml-2 rtl:ml-0 rtl:mr-2 text-primary-950">
                {translation.RoaaPortal}
              </h1>
            </div>

            <ButtonsGroup data={dynamicElements.groupedButtons} />

            <IconRoundedButton
              icon={<LuFocus />}
              label={translation.Focus}
              action={() => {
                console.log('focus')
              }}
            />
          </div>

          <Search
            placeholder={`${translation.Search}...`}
            firstIcon={<PiMagnifyingGlass />}
            className={'md:min-w-[20rem]'}
            inputStyle={'bg-themeGray-50'}
            lastIcon={
              <>
                <BiCommand />/
              </>
            }
            roundedFull
          />

          <Activities />
        </div>
      }
    </>
  )
}
