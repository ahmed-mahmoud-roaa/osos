import React, { useEffect, useRef, useState } from 'react'
import { FiArrowRight } from 'react-icons/fi'
import { HiOutlineChevronRight } from 'react-icons/hi'
import {
  PiMagnifyingGlass,
  PiArrowDownBold,
  PiArrowBendDownLeftBold,
  PiArrowUpBold,
  PiArrowLeftBold,
} from 'react-icons/pi'
import Avatar from '../../../elements/avatar/Avatar'
import { useSelector } from 'react-redux'
import ArrowNavigation from '../../arrowNavigation/ArrowNavigation'

export default function Ui({ data }) {
  const [current, setCurrent] = useState('home')
  const searchInput = useRef()
  const direction = useSelector((state) => state.main.direction)
  const [show, setShow] = useState('w-[10rem] max-h-10')

  useEffect(() => {
    searchInput.current.focus()
    setShow('w-[40rem] max-h-screen')
    document.addEventListener('keydown', handleBack)
    return () => {
      setShow('w-[10rem] max-h-10')
      document.removeEventListener('keydown', handleBack)
    }
  }, [])

  const DefaultItem = ({ item }) => {
    return (
      <button
        onClick={() => console.log('item clicked')}
        className="itemContent flex w-full items-start p-2.5"
      >
        <div className="icon text-themeGray-700 p-2.5 border border-themeGray-200 items-start rounded-md text-lg shadow-[0_0_5px_0.5px_var(--themeGray-50)] ">
          {item.icon}
        </div>
        <div className="text mx-2 text-left rtl:text-right">
          <div className="title text-themeGray-900 font-semibold">
            {item.title}
          </div>
          <div className="des  text-themeGray-600">{item.des}</div>
        </div>
        <div className="shortCut ml-auto rtl:ml-0 rtl:mr-auto flex items-center text-sm text-themeGray-600 rtl:flex-row-reverse ">
          {item.shortCut &&
            item.shortCut.map((key, index) => (
              <>
                {index > 0 && (
                  <span className="px-1 py-0.5">
                    <FiArrowRight />
                  </span>
                )}
                <span
                  className="rounded-md bg-themeGray-50 px-1 py-0.5 border border-themeGray-100 min-w-[1.5rem]"
                  dir="ltr"
                >
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

  const handleBack = (event) => {
    if (event.key === 'ArrowLeft' && direction == 'en') {
      setCurrent('home')
    }
    if (event.key === 'ArrowRight' && direction == 'ar') {
      setCurrent('home')
    }
  }

  return (
    <ArrowNavigation>
      <div
        className={`searchContainer w-[40rem] m-auto bg-themeWhite-white top-2 relative rounded-xl text-sm shadow-[0_0_5px_1px_var(--themeGray-200)] overflow-hidden duration-1000 max-w-[90vw]  ${show}`}
      >
        <div className="max-h-[90vh] overflow-auto">
          <div className="search p-4 flex items-center text-themeGray-500 border-b border-themeGray-200  font-medium">
            <span className="icon">
              <PiMagnifyingGlass />
            </span>
            <input
              ref={searchInput}
              type="text"
              placeholder="Search"
              className="w-full mx-2 outline-none bg-themeWhite-white"
            />
            <span className="shortCut mr-1 rounded-md bg-themeGray-50 px-1 py-0.5 border border-themeGray-100">
              ⌘/
            </span>
          </div>
          {data[current].info?.return && (
            <div className="navigate flex items-center p-4  border-b border-themeGray-200">
              <button
                className="up p-2  border border-themeGray-200 mx-1 rounded-lg text-lg text-themeGray-700"
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
                        <span className="text-themeGray-500 mr-1 rtl:mr-0 rtl:ml-1">
                          {section.icon}
                        </span>
                      )}
                      <span className="text-themeGray-700">
                        {section.title}
                      </span>
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
          <div className="actions flex align-center px-4 py-1 text-themeGray-500 font-medium text-sm flex-wrap">
            <div className="navigate flex items-center mr-4 rtl:ml-4 rtl:mr-0 py-1">
              <span className="up p-2  border border-themeGray-200 mx-1 rounded-lg">
                <PiArrowUpBold />
              </span>
              <span className="up p-2  border border-themeGray-200 mx-1 rounded-lg">
                <PiArrowDownBold />
              </span>
              <span className="label">to navigate</span>
            </div>
            <div className="navigate flex items-center  mr-4 rtl:ml-4 rtl:mr-0 py-1">
              <span className="up p-2  border border-themeGray-200 mx-1 rounded-lg">
                <PiArrowBendDownLeftBold />
              </span>
              <span className="label">to select</span>
            </div>
            <div className="navigate flex items-center mr-4 rtl:ml-4 rtl:mr-0 py-1">
              <span className="up p-2  border border-themeGray-200 mx-1 rounded-lg leading-4">
                esc
              </span>
              <span className="label">to close</span>
            </div>
            {data[current].info?.return && (
              <div className="navigate flex items-center mr-4 rtl:ml-4 rtl:mr-0 py-1">
                <span className="up p-2  border border-themeGray-200 mx-1 rounded-lg rtl:rotate-180">
                  <PiArrowLeftBold />
                </span>
                <span className="label">return to parent</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </ArrowNavigation>
  )
}
