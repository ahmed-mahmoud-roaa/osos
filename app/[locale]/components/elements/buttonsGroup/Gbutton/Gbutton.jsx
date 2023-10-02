'use client'
import React from 'react'

export default function Gbutton({
  index,
  button,
  activeIndex,
  setActiveIndex,
}) {
  return (
    <button
      className={
        'roundedButtonInGroup flex  rtl:mr-0 rtl:ml-1 mr-1 py-1 px-3 last:mr-0 rtl:last:ml-0 rtl:last:mr-1 justify-center items-center rounded-full text-sm text-themeGray-800' +
        ' ' +
        (activeIndex === index &&
          `shadow-sm bg-primary-600 text-themeWhite-white`)
      }
      onClick={() => {
        setActiveIndex(index)
        button.action()
      }}
    >
      <span className="icon mr-1  rtl:mr-0 rtl:ml-1">{button.icon}</span>
      <span className="label">{button.label}</span>
    </button>
  )
}
