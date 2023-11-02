import React, { useEffect, useState } from 'react'

export default function PopupContainer({
  className,
  status,
  setStatus,
  children,
}) {
  const [show, setShow] = useState('opacity-0')
  const [hide, setHide] = useState(true)

  const handleEscape = (event) => {
    if (event.key === 'Escape') {
      setStatus(false)
    }
  }

  useEffect(() => {
    setShow(status ? 'opacity-100' : 'opacity-0')
    document.addEventListener('keydown', handleEscape)

    if (status === false) {
      setTimeout(() => {
        setHide(false)
      }, 500)
    } else {
      setHide(true)
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [status])

  return (
    <>
      {hide && (
        <>
          <div
            className={`fixed top-0 left-0 w-full h-full z-50 backdrop-blur-[8px] flex duration-500  ${className} ${show}`}
          >
            <span
              className="bg-themeGray-200 w-full h-full absolute top-0 left-0 z-[-1] opacity-30"
              onClick={() => {
                setStatus(false)
              }}
            ></span>
            {children}
          </div>
        </>
      )}
    </>
  )
}
