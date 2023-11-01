import React, { useState } from 'react'
import { FiArrowRight, FiUser } from 'react-icons/fi'
import { HiOutlineChevronRight } from 'react-icons/hi'
import { LuUsers } from 'react-icons/lu'
import {
  PiMagnifyingGlass,
  PiArrowDownBold,
  PiArrowBendDownLeftBold,
  PiArrowUpBold,
  PiArrowLeftBold,
} from 'react-icons/pi'
import Avatar from '../../../elements/avatar/Avatar'

export default function SearchResult() {
  const [current, setCurrent] = useState('home')
  const data = {
    home: {
      info: {
        return: false,
      },
      sections: [
        {
          title: 'Recent',
          type: 'default',
          items: [
            {
              icon: <FiUser />,
              title: 'My profile',
              des: 'View and edit your personal profile',
              shortCut: ['⌘K', 'P'],
            },
            {
              icon: <FiUser />,
              title: 'My profile',
              des: 'View and edit your personal profile',
            },
            {
              icon: <FiUser />,
              title: 'My profile',
              des: 'View and edit your personal profile',
              shortCut: ['⌘K'],
            },
          ],
        },
        {
          type: 'default',
          items: [
            {
              icon: <FiUser />,
              title: 'My profile',
              des: 'View and edit your personal profile',
              shortCut: ['⌘K', 'P'],
            },
          ],
        },
        {
          icon: <LuUsers />,
          title: 'User',
          type: 'user',
          viewAll: 'users',
          items: [
            {
              src: 'https://www.svgrepo.com/show/61986/avatar.svg',
              name: 'Lea Smith',
              mention: '@lea.s',
            },
            {
              src: 'https://www.svgrepo.com/show/61986/avatar.svg',
              name: 'Lea Smith',
              mention: '@lea.s',
            },
          ],
        },
      ],
    },

    users: {
      info: {
        return: true,
        title: 'Users',
        icon: <LuUsers />,
      },
      sections: [
        {
          type: 'user',
          return: true,
          items: [
            {
              src: 'https://www.svgrepo.com/show/61986/avatar.svg',
              name: 'Lea Smith',
              mention: '@lea.s',
            },
            {
              src: 'https://www.svgrepo.com/show/61986/avatar.svg',
              name: 'Lea Smith',
              mention: '@lea.s',
            },
          ],
        },
      ],
    },
  }

  const DefaultItem = ({ item }) => {
    return (
      <button
        onClick={() => console.log('item clicked')}
        className="itemContent flex w-full items-start p-2.5"
      >
        <div className="icon text-themeGray-700 p-2.5 border border-themeGray-200 items-start rounded-md text-lg shadow-[0_0_5px_0.5px_var(--themeGray-50)] ">
          {item.icon}
        </div>
        <div className="text mx-2 text-left">
          <div className="title text-themeGray-900 font-semibold">
            {item.title}
          </div>
          <div className="des  text-themeGray-600">{item.des}</div>
        </div>
        <div className="shortCut ml-auto flex items-center text-sm text-themeGray-600 ">
          {item.shortCut &&
            item.shortCut.map((key, index) => (
              <>
                {index > 0 && (
                  <span className="px-1 py-0.5">
                    <FiArrowRight />
                  </span>
                )}
                <span className="rounded-md bg-themeGray-50 px-1 py-0.5 border border-themeGray-100 min-w-[1.5rem] text-center">
                  {key}
                </span>
              </>
            ))}
        </div>
      </button>
    )
  }

  const UserItem = ({ item }) => {
    return (
      <button
        onClick={() => console.log('item clicked')}
        className="itemContent flex w-full items-center px-2.5  py-1.5"
      >
        <Avatar src={item.src} shape="circle" width={24} height={24} />
        <div className="text mx-2 text-left flex">
          <div className="title text-themeGray-900 font-semibold">
            {item.name}
          </div>
          <div className="des mx-2 text-themeGray-600">{item.mention}</div>
        </div>
      </button>
    )
  }

  return (
    <div className="searchContainer w-[40rem] w-max-[90%] bg-themeWhite-white top-4 relative rounded-xl text-sm shadow-[0_0_5px_1px_var(--themeGray-200)]">
      <div className="search p-4 flex items-center text-themeGray-500 border-b border-themeGray-200  font-medium">
        <span className="icon">
          <PiMagnifyingGlass />
        </span>
        <input
          type="text"
          placeholder="Search"
          className="w-full mx-2 outline-none"
        />
        <span className="shortCut mr-1 rounded-md bg-themeGray-50 px-1 py-0.5 border border-themeGray-100">
          ⌘/
        </span>
      </div>
      {data[current].info?.return && (
        <div className="navigate flex items-center p-4  border-b border-themeGray-200">
          <button
            className="up p-2  border border-themeGray-200 mx-1 rounded-lg text-lg"
            onClick={() => setCurrent('home')}
          >
            <PiArrowLeftBold />
          </button>
          <span className="flex items-center mx-3 text-base">
            <span className="text-themeGray-500 mr-1 rtl:mr-0 rlt:ml-1">
              {data[current].info?.icon}
            </span>

            <span> {data[current].info?.title}</span>
          </span>
        </div>
      )}
      <div className="sections py-4 border-b border-themeGray-200">
        {data[current].sections.map((section, index) => (
          <div
            className="content border-b border-themeGray-200 mb-4 pb-2  px-2.5 last:pb-0 last:mb-0 last:border-0"
            key={index}
          >
            {section.title && (
              <span className="head flex items-center justify-between px-2.5 mb-2">
                <span className="flex items-center">
                  {section.icon && (
                    <span className="text-themeGray-500 mr-1 rtl:mr-0 rlt:ml-1">
                      {section.icon}
                    </span>
                  )}
                  <span>{section.title}</span>
                </span>
                {section.viewAll && (
                  <button
                    className="viewAll text-primary-700 flex items-center font-medium text-sm"
                    onClick={() => setCurrent(section.viewAll)}
                  >
                    View All
                    <span className="px-2 rtl:rotate-180">
                      <HiOutlineChevronRight />
                    </span>
                  </button>
                )}
              </span>
            )}
            {section.items.map((item, index) =>
              section.type === 'default' ? (
                <DefaultItem item={item} key={index} />
              ) : section.type === 'user' ? (
                <UserItem item={item} />
              ) : (
                ''
              )
            )}
          </div>
        ))}
      </div>
      <div className="actions flex align-center px-4 py-2 text-themeGray-500 font-medium text-sm">
        <div className="navigate flex items-center mr-4 rtl:ml-4 rtl:mr-0">
          <button className="up p-2  border border-themeGray-200 mx-1 rounded-lg">
            <PiArrowUpBold />
          </button>
          <button className="up p-2  border border-themeGray-200 mx-1 rounded-lg">
            <PiArrowDownBold />
          </button>
          <span className="label">to navigate</span>
        </div>
        <div className="navigate flex items-center  mr-4 rtl:ml-4 rtl:mr-0">
          <button className="up p-2  border border-themeGray-200 mx-1 rounded-lg">
            <PiArrowBendDownLeftBold />
          </button>
          <span className="label">to select</span>
        </div>
        <div className="navigate flex items-center mr-4 rtl:ml-4 rtl:mr-0">
          <button className="up p-2  border border-themeGray-200 mx-1 rounded-lg leading-4">
            esc
          </button>
          <span className="label">to close</span>
        </div>
        {data[current].info?.return && (
          <div className="navigate flex items-center mr-4 rtl:ml-4 rtl:mr-0">
            <button className="up p-2  border border-themeGray-200 mx-1 rounded-lg">
              <PiArrowLeftBold />
            </button>
            <span className="label">return to parent</span>
          </div>
        )}
      </div>
    </div>
  )
}
