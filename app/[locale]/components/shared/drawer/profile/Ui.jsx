'use client'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Avatar from '../../../elements/avatar/Avatar'
import NotificationButton from '../../../elements/buttons/notificationButton/NotificationButton'
import { FiHelpCircle, FiSettings, FiUsers } from 'react-icons/fi'
import ShortCut from '../../../elements/shortCut/ShortCut'
import { RiUserAddLine } from 'react-icons/ri'
import { MdOutlineElectricBolt } from 'react-icons/md'
import { BsStars } from 'react-icons/bs'
import SelectButtonList from '../../../elements/selectButtonList/SelectButtonList'
// import DropDownInput from '../../../elements/dropDownInput/dropDownInput'
import SliderInput from '../../../elements/slider/Slider'
import DropDownInput from '../../../elements/dropDownInput/DropDownInput'

export default function Ui({
  notificationButtonsData,
  changeFontSize,
  zoomSlider,
  langOptions,
  modeOptions,
  interFace,
}) {
  const userData = useSelector((state) => state.auth.userInfo)
  const [value, setValue] = useState(modeOptions[0])
  return (
    <>
      <div>
        <div className="profileData p-4 relative  after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-1/2 after:bg-primary-50">
          <Avatar
            src={userData.avatar}
            width={64}
            height={64}
            status={true}
            classAttr={'z-10'}
          />
        </div>

        <div className="userInfo items-center flex flex-col text-themeGray-500">
          <p className="userName font-bold text-themeGray-800 text-base mb-1">
            {userData.name}
          </p>
          <p className="position text-sm mb-1">{userData.position}</p>
          <p className="email text-14 text-xs mb-1">{userData.email}</p>
          <ul className="flex items-center text-xs">
            {userData.phone.map((item, index) => (
              <li key={index} className="pr-3 rtl:pr-0 rtl:pl-3 last:pr-0">
                {item}
              </li>
            ))}
          </ul>
          <div className="actions activities flex items-center mt-4 ">
            {Object.values(notificationButtonsData).map((button, index) => (
              <NotificationButton
                key={index}
                icon={button.icon}
                label={button.label}
                action={button.action}
                number={button.number}
              />
            ))}
          </div>
        </div>
        <div className="org p-4 mt-4 w-full border-y">
          <div className="orgName flex items-center">
            <div className="flex mr-4 rtl:mr-0 rtl:ml-4 border bg-themeGray-100 py-2 px-2.5 rounded-full text-themeGray-500 text-lx">
              RT
            </div>
            <div className="info">
              <p className="text-xs text-themeGray-600">Organization</p>
              <p className="font-bold text-sm">Roaa Tech</p>
            </div>
          </div>
          <ShortCut icon={<FiUsers />} shortCut={'⌘K->T'} text={'Team'} />
          <ShortCut
            icon={<RiUserAddLine />}
            shortCut={'⌘I'}
            text={'Invite colleagues'}
          />
        </div>

        <div className="p-4 w-full border-b ">
          <div className="title text-themeGray-500  text-xs">
            DISPLAY SETTINGS
          </div>
          <div className="flex justify-between items-center mt-2">
            <p className="text-sm text-themeGray-800 ">Interface</p>

            <SelectButtonList
              value={value}
              onChange={(e) => setValue(e.value)}
              options={interFace}
              width={80}
            />
          </div>

          <div className="flex justify-between items-center mt-2">
            <p className="text-sm  text-themeGray-800 ">Display mode</p>
            <SelectButtonList
              value={value}
              onChange={(e) => setValue(e.value)}
              options={modeOptions}
              width={53}
            />
          </div>
          <div className="flex justify-between items-center mt-2">
            <p className="text-sm  text-themeGray-800 ">Language</p>
            <DropDownInput options={langOptions} className={'w-[9.9rem]'} />
          </div>
          <div className="flex justify-between items-center mt-2">
            <p className="text-sm text-themeGray-800 ">Font size</p>
            <SliderInput
              setValueInput={changeFontSize}
              valueInput={zoomSlider}
            />
          </div>
        </div>

        <div className="p-4 pt-0 w-full border-b text-xs ">
          <ShortCut icon={<FiSettings />} shortCut={'⌘S'} text={'Settings'} />
          <ShortCut
            icon={<MdOutlineElectricBolt />}
            shortCut={'?'}
            text={'Keyboard shortcuts'}
          />
          <ShortCut icon={<BsStars />} shortCut={'⌘K->C'} text={'What’s new'} />
          <ShortCut icon={<FiHelpCircle />} shortCut={'⌘/'} text={'Support'} />
        </div>
      </div>
      <div className="flex justify-center flex-col py-4 mt-auto ">
        <div className="title text-themeGray-500  text-xs w-fit m-auto">
          Copyright © 2023
        </div>
        <div className="title text-themeGray-500  text-xs  w-fit m-auto">
          Roaa Information Technology
        </div>
      </div>
    </>
  )
}
