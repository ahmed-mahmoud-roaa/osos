'use client'
import React from 'react'
import Tooltip from '../../../shared/tooltip/Tooltip'

export default function NotificationButton({
  icon,
  number,
  action,
  active,
  label,
}) {
  const Button = () => (
    <button
      onClick={() => {
        {
          action && action()
        }
      }}
      className={`relative circleButton rounded-full text-xl text-themeGray-500 mx-1.5 px-2 py-2 flex items-center ${
        active
          ? 'bg-primary-600 text-themeWhite-white  outline outline-[0.25rem] outline-primary-300 border border-primary-300 '
          : ' border border-themeGray-300 hover:text-primary-600 hover:border-primary-300 hover:bg-primary-50 '
      }`}
    >
      {icon}
      {number && (
        <span className="notification absolute text-xs rounded-full text-themeWhite-white top-[-0.8rem] left-5 py-0.5 px-2 bg-error-700">
          {number}
        </span>
      )}
    </button>
  )

  return (
    <div>
      {label ? (
        <Tooltip text={label}>
          <Button />
        </Tooltip>
      ) : (
        <Button />
      )}
    </div>
  )
}
