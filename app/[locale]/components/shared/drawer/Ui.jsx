'use client'
import { ChangeDrawerStatus } from '@/app/store/slices/status'
import { Sidebar } from 'primereact/sidebar'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Activities from '../activities/Activities'

export default function Ui({ currentComponent }) {
  const dispatch = useDispatch()

  const drawerStatus = useSelector((state) => state.status.drawer).status
  const CurrentMode = useSelector((state) => state.main.CurrentMode)
  const direction = useSelector((state) => state.main.direction)

  return (
    <>
      {drawerStatus === true && (
        <Sidebar
          className={`
             ${direction === 'ar' ? 'leftDrawer ' : ' '}  
            ${
              CurrentMode !== 'dark'
                ? 'bg-themeBlack-black'
                : 'bg-themeWhite-white'
            }
            `}
          visible={drawerStatus}
          position={direction === 'en' ? 'right' : 'left'}
          onHide={() => dispatch(ChangeDrawerStatus(false))}
        >
          <div className="flex flex-col h-full">
            <div className="h-20 flex items-center bg-primary-50 justify-end pr-6 rtl:pl-6 rtl:pr-0">
              <Activities />
            </div>

            {currentComponent}
          </div>
        </Sidebar>
      )}
    </>
  )
}
