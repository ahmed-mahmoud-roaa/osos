import React, { useState } from 'react'
import { clx } from '../../../utils/helpers'

const Drawer = ({
  placement = 'left',
  showDrawer,
  setShowDrawer,
  hasClose = false,
  children
}) => {
  const toggleDrawer = () => {
    setShowDrawer(!showDrawer)
  }

  const PLACEMENT_DRAWER = {
    left: 'left-0 rtl:right-0 rtl:left-auto  ',
    right: 'right-0 rtl:left-0 rtl:right-auto  ',
  }

  return (
    <div
      className={clx(
        [
          "fixed z-10 h-screen w-[22.5rem] shadow-['0px 2px 4px -2px #1018280F'] bg-white border border-solid border-gray-200 dark:bg-gray-800 text-gray-700 overflow-y-auto transition-transform top-0",
        ],
        showDrawer ? 'visible' : 'invisible',
        PLACEMENT_DRAWER[placement]
      )}
      tabindex="-1"
    >
      {hasClose && (
        <button onClick={toggleDrawer}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      )}
      {children}
    </div>
  )
}

export default Drawer
