'use client'
import React, { useState } from 'react'
import { Wrapper } from './IconRoundedButton.styled'

export default function IconRoundedButton({
  icon,
  label,
  action,
  className,
  labelClass,
  clickOut,
  status,
  setStatus,
}) {
  return (
    <Wrapper
      onClick={() => {
        setStatus && setStatus(!status)
        action()
      }}
      className={
        `${className} ${
          clickOut && 'ClickOut'
        } roundedButtonInGroup flex rtl:mr-0 rtl:ml-1 mr-1 py-2 px-3 last:mr-0 justify-center items-center rounded-full text-sm shadow-sm border border-themeGray-300 ` +
        (status && `bg-primary-600  text-themeWhite-white`)
      }
    >
      <span
        className={`icon ${clickOut && 'ClickOut'} ${
          label && 'mr-1  rtl:mr-0 rtl:ml-1'
        }`}
      >
        {icon}
      </span>
      {label && (
        <span
          className={`label ${clickOut && 'ClickOut'} ${labelClass} ${
            status && 'text-themeWhite-white'
          }`}
        >
          {label}
        </span>
      )}
    </Wrapper>
  )
}
