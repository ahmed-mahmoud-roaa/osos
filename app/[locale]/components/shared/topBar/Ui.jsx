'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import squareLogo from '@/public/assets/images/squareLogo.png'
import { BiCommand } from 'react-icons/bi'
import { HiMenuAlt1 } from 'react-icons/hi'
import { PiMagnifyingGlass } from 'react-icons/pi'

import ButtonsGroup from '../../elements/buttonsGroup/ButtonsGroup'
import IconRoundedButton from '../../elements/buttons/iconRoundedButton/IconRoundedButton'
import Activities from '../activities/Activities'
import Search from '../../elements/search/Search'
import PopupContainer from '../../elements/popupContainer/PopupContainer'
import SearchResult from './searchResult/SearchResult'
import { TfiTarget } from 'react-icons/tfi'
import { FiHelpCircle } from 'react-icons/fi'
import Tooltip from '../tooltip/Tooltip'
import { changeHelpStatus } from '@/app/store/slices/main'
import { useDispatch, useSelector } from 'react-redux'
import { BsStars } from 'react-icons/bs'

export default function Ui({ translation, dynamicElements, sidebarToggle }) {
  const dispatch = useDispatch()
  const [searchDetails, setSearchDetails] = useState(false)
  const [focusStatus, setFocusStatus] = useState(false)
  const helpStatus = useSelector((state) => state.main.helpStatus)
  return (
    <>
      {
        <div
          className={`wrapper flex border-b border-themeGray-200 py-3 px-6 justify-between items-center`}
        >
          <div className="firstSide flex items-center  w-[33%]">
            <button
              className="sidebarMenuIcon text-2xl mr-6 rtl:mr-0 rtl:ml-6 transform rtl:rotate-180 text-themeGray-800"
              onClick={() => sidebarToggle()}
            >
              <HiMenuAlt1 />
            </button>
            <div className="brand flex items-center mr-4 rtl:mr-0 rtl:ml-4 ">
              <Image src={squareLogo} alt="osos logo" />
              <h1 className="font-inter text-20 font-semibold leading-30 tracking-tight ml-2 rtl:ml-0 rtl:mr-2 text-primary-950">
                {translation.RoaaPortal}
              </h1>
            </div>

            <ButtonsGroup data={dynamicElements.groupedButtons} />

            <Tooltip text={'Focus'}>
              <IconRoundedButton
                status={focusStatus}
                setStatus={setFocusStatus}
                icon={
                  <span
                    className={`text-themeGray-500 ${
                      focusStatus && 'text-themeWhite-white'
                    }`}
                  >
                    <TfiTarget />
                  </span>
                }
                action={() => {
                  console.log('focus')
                }}
              />
            </Tooltip>
          </div>

          <button
            onClick={() => {
              setSearchDetails(true)
            }}
          >
            <Search
              placeholder={`${translation.Search}...`}
              firstIcon={<PiMagnifyingGlass />}
              className={'w-[33%] md:min-w-[20rem]'}
              inputStyle={'bg-themeWhite-white'}
              lastIcon={
                <>
                  <BiCommand />/
                </>
              }
              roundedFull
            />
          </button>

          <div className=" w-[33%] rightSection flex items-center justify-end">
            <IconRoundedButton
              icon={<BsStars />}
              label={<span className="ClickOut font-normal">AI</span>}
              className={
                'ClickOut magic text-primary-600 mr-3 rtl:mr-0 rtl:ml-3 relative '
              }
              labelClass={'text-primary-700 '}
              action={() => {
                dispatch(changeHelpStatus(!helpStatus))
              }}
            />
            <IconRoundedButton
              icon={<FiHelpCircle />}
              label={<span className="ClickOut font-normal">Help</span>}
              className={'ClickOut text-themeGray-500 mr-5 rtl:mr-0 rtl:ml-5'}
              labelClass={'text-themeGray-700'}
              action={() => {
                dispatch(changeHelpStatus(!helpStatus))
              }}
            />

            <Activities />
          </div>
        </div>
      }

      <PopupContainer
        className={'justify-center items-baseline'}
        status={searchDetails}
        setStatus={setSearchDetails}
      >
        <SearchResult />
      </PopupContainer>
    </>
  )
}
