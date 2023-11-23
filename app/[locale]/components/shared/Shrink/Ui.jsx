'use client'
import React, { useEffect, useState } from 'react'
import { Wrapper } from './Shrink.styled'
import { useSelector } from 'react-redux'

export default function Ui({
  sideDirection,
  status,
  width,
  staticElement,
  movable,
}) {
  const [movementState, setMovementState] = useState(status)
  const direction = useSelector((state) => state.main.direction)

  useEffect(() => {
    if (status == true) {
      setMovementState(status)
    } else {
      setTimeout(() => {
        setMovementState(status)
      }, 500)
    }
  }, [status])

  return (
    <>
      <Wrapper
        sideDirection={sideDirection}
        sidebar={status}
        direction={direction}
        width={width}
        className={`content max-w-full flex grow overflow-x-hidden`}
      >
        <div className={`sidebarWrapper flex relative min-w-full`}>
          {sideDirection !== 'left' ? (
            <>
              {staticElement}
              <div
                className={`relative  transition-all ease-in-out duration-700`}
                style={{
                  width: !status ? '0' : width,
                }}
              >
                <div
                  className={`w-[${width}] relative  
                    ${movementState && 'h-full'}
                  `}
                >
                  {movable}
                </div>
              </div>
            </>
          ) : (
            <>
              <div
                className={`relative  transition-all ease-in-out duration-700 `}
                style={{
                  width: !status ? '0' : width,
                  direction: direction == 'en' ? 'rtl' : 'ltr',
                }}
              >
                <div
                  className={`w-[${width}] relative  
                  ${movementState && 'h-screen'}
                  `}
                  style={{ direction: direction == 'en' ? 'ltr' : 'rtl' }}
                >
                  {movable}
                </div>
              </div>
              {staticElement}
            </>
          )}
        </div>
      </Wrapper>
    </>
  )
}
