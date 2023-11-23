'use client'
import React, { useEffect, useState } from 'react'
import Search from '../../../elements/search/Search'
import { PiMagnifyingGlass } from 'react-icons/pi'
import { MdClose } from 'react-icons/md'
import { changeHelpStatus } from '@/app/store/slices/main'
import { useDispatch, useSelector } from 'react-redux'
export default function Ui({ helpData }) {
  const dispatch = useDispatch()
  const helpStatus = useSelector((state) => state.main.helpStatus)

  // const [hide, setHide] = useState(false)
  // useEffect(() => {
  //   if (helpStatus === false) {
  //     setTimeout(() => {
  //       setHide(false)
  //     }, 500)
  //   } else {
  //     setHide(true)
  //   }
  // }, [helpStatus])
  return (
    <div
      className={`helpMenu  w-[21.5rem] overflow-auto h-full z-50 bg-themeWhite-white  right-0 rtl:left-0 rtl:right-auto absolute    transition-all duration-500 bottom-0 shadow-[0_0px_0.62rem_var(--themeGray-200)] `}
      // ${
      //   helpStatus
      //     ? 'right-0 rtl:right-auto rtl:left-0 '
      //     : 'right-[-21.5rem] rtl:right-auto rtl:left-[-21.5rem]  '
      // }
      // ${hide == true ? 'w-[21.5rem]' : 'w-[0]'}
    >
      <div className="">
        <div className="head bg-themeGray-200 p-4">
          <div className="head flex items-center justify-between">
            <h3 className="font-medium text-xl mt-2 mb-4">Help & tips</h3>
            <button
              className="text-themeGray-400  border border-themeGray-300 bg-themeWhite-white p-1 rounded-md font-bold text-xl"
              onClick={() => dispatch(changeHelpStatus(false))}
            >
              <MdClose />
            </button>
          </div>
          <Search
            inputStyle={`bg-themeWhite-white py-2.5 rounded-lg`}
            placeholder={'Search help center'}
            firstIcon={<PiMagnifyingGlass />}
          />
        </div>
        <div className="helpBody p-4">
          {helpData.map((item, index) => (
            <div key={index} className="helpBlock mb-8">
              <h3 className="font-medium text-base mb-2 text-themeGray-700">
                {item.title}
              </h3>

              {item.blocks.map((block, blockIndex) => (
                <div
                  key={blockIndex}
                  className="helpItem flex border border-themeGray-200 rounded-xl p-4 mt-1 mb-3 shadow-[0_0px_0.19rem_var(--themeGray-200)] items-start"
                >
                  <div className="icon p-3  border border-themeGray-200 mr-4 rtl:mr-auto rtl:ml-4 rounded-xl shadow-[0_0px_0.19rem_var(--themeGray-200)] text-primary-600 text-2xl">
                    {block.icon}
                  </div>
                  <div className="content">
                    <div className="head text-themeGray-700 text-base font-medium">
                      {block.title}
                    </div>
                    <div className="desc text-themeGray-500 text-sm ">
                      {block.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
