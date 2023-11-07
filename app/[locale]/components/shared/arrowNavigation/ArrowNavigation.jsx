import React, { useState, useEffect } from 'react'
import { Wrapper } from './ArrowNavigation.styled'

export default function ArrowNavigation({ children }) {
  const [activeButtonIndex, setActiveButtonIndex] = useState(-1)

  useEffect(() => {
    const buttons = document.querySelectorAll('.parent button')

    const handleKeyDown = (e) => {
      if (e.key === 'ArrowDown') {
        setActiveButtonIndex((prevIndex) => (prevIndex + 1) % buttons.length)
        buttons[activeButtonIndex]?.focus()
      } else if (e.key === 'ArrowUp') {
        setActiveButtonIndex(
          (prevIndex) => (prevIndex - 1 + buttons.length) % buttons.length
        )
        buttons[activeButtonIndex]?.focus()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [activeButtonIndex])

  return <Wrapper className="parent">{children}</Wrapper>
}
