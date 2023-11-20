'use client'
import React from 'react'
import { Wrapper } from './Shrink.styled'
export default function Ui({
  sideDirection,
  status,
  width,
  direction,
  children,
}) {
  return (
    <>
      <Wrapper
        sideDirection={sideDirection}
        sidebar={status}
        direction={direction}
        width={width}
        className={`content max-w-full flex grow overflow-x-hidden`}
      >
        {sideDirection == 'left' ? (
          <div
            className={`transition-all ease-in-out duration-500 sidebarWrapper flex relative min-w-full `}
          >
            {children}
          </div>
        ) : (
          <div
            className={`transition-all ease-in-out duration-500 sidebarWrapper flex relative min-w-full `}
          >
            {children}
          </div>
        )}
      </Wrapper>
    </>
  )
}
