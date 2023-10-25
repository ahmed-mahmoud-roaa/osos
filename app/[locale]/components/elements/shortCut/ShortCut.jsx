import React from 'react'

export default function ShortCut({ icon, text, shortCut }) {
  return (
    <div className="team text-sm text-themeGray-600 mt-4">
      <div className="flex justify-between">
        <div className="flex items-center  text-themeGray-500  ">
          <span className=" text-base">{icon}</span>
          <span className="ml-2 rtl:ml-0 rtl:mr-2  text-themeGray-800 font-semibold ">
            {text}
          </span>
        </div>
        <div className="text-xs text-themeGray-500">{shortCut}</div>
      </div>
    </div>
  )
}
