import React from 'react'

export default function PopupContainer({ className, children }) {
  return (
    <div
      className={`fixed top-0 left-0 w-screen h-screen z-50 backdrop-blur-[8px] flex after:bg-themeGray-200 after:content-[" "] after:w-full after:h-full after:absolute after:top-0 after:left-0 after:z-[-1] after:opacity-30 ${className}`}
    >
      {children}
    </div>
  )
}
