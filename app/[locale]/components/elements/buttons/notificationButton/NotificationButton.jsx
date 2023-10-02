'use client'
import React from 'react'

export default function NotificationButton({ icon, number, action }) {
  return (
    <div>
      <button
        onClick={() => {
          {
            action && action()
          }
        }}
        className={`relative circleButton rounded-full text-xl text-themeGray-500 border border-themeGray-300  mx-1.5 px-2 py-2 flex items-center hover:text-primary-600 hover:border-primary-300 hover:bg-primary-50`}
      >
        {icon}
        {number && (
          <span className="notification absolute text-xs rounded-full text-themeWhite-white top-[-14px] left-5 py-0.5 px-2 bg-error-700">
            {number}
          </span>
        )}
      </button>
    </div>
  )
}
