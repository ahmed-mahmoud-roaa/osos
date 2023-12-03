import React, { useEffect, useState } from 'react'

const Tooltip = ({ children, text, className, direction }) => {
  const [showTooltip, setShowTooltip] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setShowTooltip(false)
    }, 1000)
  }, [showTooltip])

  return (
    <div
      className="tooltip-container relative inline-block"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {children}
      {showTooltip && (
        <div
          className={`${
            showTooltip ? 'block' : 'hidden'
          } absolute bg-themeGray-900 text-themeWhite-white p-2 rounded-lg z-30 text-center text-sm left-[50%] translate-x-[-50%] w-max 
          before:content-[""] before:absolute before:w-0 before:h-0 before:border-x-8
          before:left-[50%] before:translate-x-[-50%] before:border-x-transparent  ${
            direction === 'top'
              ? 'before:border-t-themeGray-900 before:border-t-8  before:bottom-0 before:mb-[-0.5rem]  bottom-full mb-2'
              : 'before:border-b-themeGray-900 before:border-b-8  before:top-0 before:mt-[-0.5rem]  top-full mt-2'
          } ${className}`}
        >
          {text}
        </div>
      )}
    </div>
  )
}

export default Tooltip
