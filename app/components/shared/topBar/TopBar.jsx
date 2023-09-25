'use client'

import Image from 'next/image'
import logo from '../../../../public/images/logo-mark-icon.svg'
import { useState } from 'react'
import Link from 'next/link'
import { clx } from '../../../utils/helpers'
import Button from '../../elements/button/Button'
import Drawer from '../../elements/drawer/Drawer'

import Avatar from '../../elements/avatar/Avatar'
import InputSearch from '../../elements/inputs/inputSearch/InputSearch'
// Icons
import { TbCalendarFilled } from 'react-icons/tb'
import { GoBell, GoSignOut } from 'react-icons/go'
import { BsChatLeftText, BsListCheck, BsCodeSlash } from 'react-icons/bs'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineClose, AiOutlineUser } from 'react-icons/ai'
import { BiCommand } from 'react-icons/bi'
import { MdOutlineCenterFocusStrong } from 'react-icons/md'
import { GrUserSettings } from 'react-icons/gr'
import { HiMenuAlt1 } from 'react-icons/hi'
import { FiSettings } from 'react-icons/fi'

import { Navbar, Dropdown } from 'flowbite-react';
import React from 'react';

const TopBar = () => {
  const [navbar, setNavbar] = useState(false)
  const [showDrawer, setShowDrawer] = useState(false)
  const [active, setActive] = useState(false)

  const userItems = [
    {
      id: '1',
      label: 'Developer',
      icon: <BsCodeSlash />,
    },
    {
      id: '2',
      label: 'Admin',
      icon: <GrUserSettings />,
    },
    {
      id: '3',
      label: 'User',
      icon: <AiOutlineUser />,
    },
  ]

  const toggleDrawer = () => {
    setShowDrawer(!showDrawer)
  }

  return (
    <nav className="w-full bg-white dark:bg-gray-800 border-b border-solid border-gray-200 h-17">
      <div className="xl:flex items-center justify-between">
        <div className="flex items-center justify-between py-3 xl:py-5 ps-8">
          <Button
            isIconOnly
            icon={<HiMenuAlt1 />}
            variant="light"
            className="me-6"
          />

          <a href="/" className={clx('brand flex items-center')}>
            <Image src={logo} alt="osos-logo" />
            <span className="ms-2 font-semibold text-xl text-primary-950 dark:text-primary-25">
              Roaa Portal
            </span>
          </a>

          <div className="xl:hidden pe-8">
            <Button
              onClick={() => setNavbar(!navbar)}
              isIconOnly
              icon={navbar ? <AiOutlineClose /> : <GiHamburgerMenu />}
              color="secondary"
            />
          </div>
        </div>

        <div
          className={clx(
            [
              'flex-grow items-center xl:flex xl:pb-0 xl:mt-0 justify-between bg-gray-200 xl:bg-transparent space-y-3 xl:space-y-0 p-8 xl:p-0 relative',
            ],
            navbar ? 'lg:flex' : 'hidden'
          )}
        >
          <div className="flex flex-wrap items-center gap-3 xl:ms-8">
            <div
              class="inline-flex gap-1 py-2 rounded-full bg-gray-50 border border-solid border-gray-300 px-2 h-9"
              role="group"
            >
              {userItems.map((item) => (
                <Button
                  key={item.id}
                  label={item.label}
                  startContent={item.icon}
                  radius="full"
                  variant="light"
                />
              ))}
            </div>

            <Button
              label={'Focus'}
              onClick={() => {}}
              startContent={<MdOutlineCenterFocusStrong />}
              variant="bordered"
              color="secondary"
              size="sm"
              radius="full"
              className="h-9 w-24 items-center justify-center"
            />
          </div>

          <div>
            <InputSearch
              radius="full"
              inputClassName={'h-[2.75rem] xl:w-[22.5rem]'}
              placeholder={'search...'}
              endContent={<BiCommand />}
            />
          </div>

          <div
            className={clx(['md:flex pe-8'], {
              'absolute z-30 right-0 top-[-15px] py-[13px] flex items-center justify-end bg-primary-50 w-[22.5rem] ':
                showDrawer,
            })}
          >
            <ul className="items-center justify-center md:flex gap-2 xl:space-y-0 me-4">
              <li>
                <Button
                  isIconOnly
                  icon={<TbCalendarFilled />}
                  radius="full"
                  variant="bordered"
                  color="secondary"
                  className={clx('!text-gray-500',
                  // {
                  //   'bg-primary-600 !border-4 border-solid !border-primary-300 !text-white hover:!bg-primary-700':
                  //     active,
                  // }
                  )}
                />
              </li>
              <li>
                <Button
                  onClick={() => {}}
                  isIconOnly
                  icon={<GoBell />}
                  radius="full"
                  variant="bordered"
                  color="secondary"
                  className={clx('!text-gray-500', { active: active })}
                />
              </li>
              <li>
                <Button
                  onClick={() => {}}
                  isIconOnly
                  icon={<BsChatLeftText />}
                  radius="full"
                  variant="bordered"
                  color="secondary"
                  className={clx('!text-gray-500', { active: active })}
                />
              </li>
              <li>
                <Button
                  onClick={() => {}}
                  isIconOnly
                  icon={<BsListCheck />}
                  radius="full"
                  variant="bordered"
                  color="secondary"
                  className={clx('!text-gray-500', { active: active })}
                />
              </li>
            </ul>

            <button

              onClick={() => {
                toggleDrawer()
                setActive(!active)
              }}
            >
              <Avatar
                src={
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQelDnncSRloUYdFRM0IIhZ-vhdQcG_VKKG6Q&usqp=CAU'
                }
                hasBorder
                isActive={active}
                // containerClassName={clx({
                //   'bg-primary-600 !border-4 border-solid !border-primary-300 !text-white hover:!bg-primary-700':
                //     active,
                // })}
              />
            </button>
          </div>
        </div>

        <Drawer
          placement="right"
          showDrawer={showDrawer}
          setShowDrawer={setShowDrawer}
        >
          <div className="bg-primary-50 mt-14 h-17 flex justify-center relative">
            <Avatar
              src={
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQelDnncSRloUYdFRM0IIhZ-vhdQcG_VKKG6Q&usqp=CAU'
              }
              size="lg"
              isOnline
              showUserState
              containerClassName="absolute inset-x-0 z-10 bottom-[-30px]"
            />
          </div>
          <div className="mt-9 text-center">
            <h3 className="text-md text-gray-800 font-semibold ">
              Ahmed Kadry
            </h3>

            <ul className="mb-5">
              <li className="text-sm font-Regular text-gray-500">
                Head of UI/UX Dept. • OSOS
              </li>
              <li className="text-xs font-Regular text-gray-500">
                ahmed.kadry@roaa.tech
              </li>
              <li className="text-xs font-Regular text-gray-500">
                +20 122 976 6664 • +20 122 976 6664
              </li>
            </ul>

            <ul className="items-center justify-center md:flex gap-2 xl:space-y-0 me-4 mb-4">
              <li>
                <Button
                  isIconOnly
                  icon={<AiOutlineUser />}
                  radius="full"
                  variant="bordered"
                  color="secondary"
                  className={clx('!text-gray-500')}
                />
              </li>
              <li>
                <Button
                  onClick={() => {}}
                  isIconOnly
                  icon={<FiSettings />}
                  radius="full"
                  variant="bordered"
                  color="secondary"
                  className={clx('!text-gray-500', { active: active })}
                />
              </li>
              <li>
                <Button
                  onClick={() => {}}
                  isIconOnly
                  icon={<GoSignOut />}
                  radius="full"
                  variant="bordered"
                  color="secondary"
                  className={clx('!text-gray-500', { active: active })}
                />
              </li>
            </ul>
            <hr />
            <div>

              </div>

          </div>
        </Drawer>
      </div>
    </nav>

  )
}

export default TopBar
