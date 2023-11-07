'use client'
import { ChangeDrawerStatus } from '@/app/store/slices/main'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Activities from '../activities/Activities'

export default function Ui({ currentComponent }) {
  const dispatch = useDispatch()

  const drawerStatus = useSelector((state) => state.main.drawer).status
  const CurrentMode = useSelector((state) => state.main.CurrentMode)
  const direction = useSelector((state) => state.main.direction)
  const [hideDrawer, setHideDrawer] = useState()
  useEffect(() => {
    if (drawerStatus === true) {
      setHideDrawer('w-[22.5rem]')
    } else {
      setTimeout(() => {
        setHideDrawer('w-0')
      }, 500)
    }
  }, [drawerStatus])

  return (
    <>
      {
        <div
          className={` shadow-[0_0px_3px_var(--themeGray-200)] h-full drawer absolute top-0 transition-position ease-linear z-10 duration-500 ${
            direction === 'ar' ? 'leftDrawer ' : ' '
          }  
          ${
            drawerStatus === true
              ? 'right-0 rtl:right-auto rtl:left-0'
              : 'right-[-22.5rem] rtl:right-auto rtl:left-[-22.5rem]'
          }
          ${
            CurrentMode !== 'dark'
              ? 'bg-themeBlack-black'
              : 'bg-themeWhite-white'
          }
          ${hideDrawer}
          `}
        >
          <span
            className={`${
              drawerStatus == true ? 'w-screen' : 'w-0'
            } background fixed top-0 left-0 h-full backdrop-blur-[1px]`}
            onClick={() => dispatch(ChangeDrawerStatus(false))}
          ></span>
          <div className={`wrapper h-full overflow-y-auto relative z-20`}>
            <div className="flex flex-col min-h-full">
              <div className="h-20 flex items-center bg-primary-50 justify-end pr-6 rtl:pl-6 rtl:pr-0">
                <Activities />
              </div>
              {currentComponent}
            </div>
          </div>
        </div>
      }
    </>
  )
}
