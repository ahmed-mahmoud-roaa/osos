import React, { useState, useRef, useEffect } from 'react'

export default function ClickOut({
  isComponentOpen,
  setIsComponentOpen,
  children,
}) {
  const componentRef = useRef(null)

  const openComponent = () => {
    setIsComponentOpen(true)
  }

  const closeComponent = () => {
    setIsComponentOpen(false)
  }

  const handleOutsideClick = (event) => {
    if (
      componentRef.current &&
      !componentRef.current.contains(event.target) &&
      !(
        event.target.classList.contains('ClickOut') ||
        event.target.parentElement.classList.contains('ClickOut') ||
        event.target.parentElement.parentElement.classList.contains('ClickOut')
      )
    ) {
      closeComponent()
    }
  }

  useEffect(() => {
    if (isComponentOpen) {
      document.addEventListener('mousedown', handleOutsideClick)
    } else {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [isComponentOpen])

  return (
    <>
      <div className="component" ref={componentRef}>
        {children}
      </div>
    </>
  )
}
