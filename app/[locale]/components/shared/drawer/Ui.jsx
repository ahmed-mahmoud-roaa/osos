'use client'
import { ChangeDrawerStatus } from '../../../../store/slices/main'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Activities from '../activities/Activities'
import { Wrapper } from './Drawer.styled'

export default function Ui({ currentComponent, type, width = '21.5' }) {
  const dispatch = useDispatch()

  const drawerStatus = useSelector((state) => state.main[type]).status
  const direction = useSelector((state) => state.main.direction)
  const [hideDrawer, setHideDrawer] = useState()
  useEffect(() => {
    if (drawerStatus === true) {
      setHideDrawer(`w-[${width}rem]`)
    } else {
      setTimeout(() => {
        setHideDrawer('w-0')
      }, 500)
    }
  }, [drawerStatus])

  return (
    <>
      {
        <Wrapper
          type={type}
          className={` shadow-[0_0px_0.2rem_var(--themeGray-200)] drawer absolute top-0 ease-linear duration-500 ${
            direction === 'ar' ? 'leftDrawer ' : ' '
          }  
          ${
            drawerStatus === true
              ? 'right-0 rtl:right-auto rtl:left-0'
              : `right-[-${width}rem] rtl:right-auto rtl:left-[-${width}rem]`
          }
          ${hideDrawer}
          `}
        >
          {type == 'drawer' && (
            <span
              className={`${
                drawerStatus == true ? 'w-screen' : 'w-0'
              } background fixed top-0 left-0 h-full backdrop-blur-[1px]`}
              onClick={() => dispatch(ChangeDrawerStatus(false))}
            ></span>
          )}
          <div
            className={`wrapper h-full overflow-y-auto relative z-20 `}
            style={{ scrollbarGutter: 'stable both-edges' }}
          >
            <div className="flex flex-col min-h-full bg-themeWhite-white">
              {type == 'drawer' && (
                <div className="h-20 flex items-center bg-primary-50 justify-end pr-4 rtl:pl-4 rtl:pr-0">
                  <Activities />
                </div>
              )}
              {currentComponent}
            </div>
          </div>
        </Wrapper>
      }
    </>
  )
}
