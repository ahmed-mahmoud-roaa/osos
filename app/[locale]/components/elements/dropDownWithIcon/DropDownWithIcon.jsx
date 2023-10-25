import React, { useState } from 'react'
import { Dropdown } from 'primereact/dropdown'
import Image from 'next/image'
import { BsCheck2 } from 'react-icons/bs'
import { IoMdFunnel } from 'react-icons/io'

// import './DropDownWithIcon.scss'
export default function DropDownWithIcon({
  options,
  staticIcon = true,
  label,
}) {
  const [selected, setSelected] = useState({})
  const [optionStatus, setOptionStatus] = useState(false)

  return (
    <div
      className={`flex bg-themeWhite-white text-themeGray-800 relative`}
      onBlur={() => {
        setTimeout(() => {
          setOptionStatus(false)
        }, 200)
      }}
    >
      <button
        className="py-2 px-4 flex items-center border border-themeGray-300 rounded-md text-sm"
        onClick={() => {
          setOptionStatus(!optionStatus)
        }}
      >
        <span className="icon">
          {staticIcon ? (
            <span className="text-themeGray-700">
              <IoMdFunnel />
            </span>
          ) : (
            selected?.icon
          )}
        </span>
        {selected.name && (
          <span className="label whitespace-nowrap  pl-2 rtl:pr-2 rtl:pl-0 text-themeGray-700">
            {selected.name}
          </span>
        )}
      </button>

      {optionStatus && (
        <div className="menu absolute z-10 w-max bg-themeWhite-white border border-themeGray-200 mt-2 top-full rounded-lg right-0 rtl:right-auto rtl:left-0">
          {label && (
            <div className="label font-bold text-themeGray-700 text-sm px-4 py-3 border-b border-themeGray-200">
              {label}
            </div>
          )}
          <div className="items">
            {options.options.map((option, index) => (
              <>
                <div
                  onClick={() => {
                    setSelected(option)
                    option.action()
                  }}
                  key={index}
                  className="item p-2.5 mx-1.5 my-0.5 flex justify-between items-center hover:bg-themeGray-50 rounded-md cursor-pointer"
                >
                  <div className="context flex items-center">
                    {option?.icon && (
                      <span className="icon mr-2 w-4 h-4 rtl:mr-0 rtl:ml-2 text-themeGray-500">
                        {option.icon}
                      </span>
                    )}
                    <div className="text">{option?.name}</div>
                  </div>
                  {option?.name == selected?.name && (
                    <div className="select ml-2 rtl:ml-0 rtl:mr-2 text-primary-600 text-xl">
                      <BsCheck2 />
                    </div>
                  )}
                </div>
              </>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
