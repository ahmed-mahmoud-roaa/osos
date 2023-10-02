'use client'
import React, { useState } from 'react'

export default function IconRoundedButton({ icon, label, action }) {
  const [status, setStatus] = useState(false)
  return (
    <button
      onClick={() => {
        setStatus(!status)
        action()
      }}
      className={
        `roundedButtonInGroup flex rtl:mr-0 rtl:ml-1 mr-1 py-2 px-3 last:mr-0 justify-center items-center rounded-full text-sm shadow-sm border border-themeGray-300 text-themeGray-800 ` +
        (status && `bg-primary-600  text-themeWhite-white`)
      }
    >
      <span className="icon  mr-1  rtl:mr-0 rtl:ml-1">{icon}</span>
      <span className="label">{label}</span>
    </button>
  )
}
