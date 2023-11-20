import React from 'react'
import GlobalStyle from './globalStyles'
import { useSelector } from 'react-redux'
import Override from './override'
import './clientTheme.scss'

export default function GlobalStyleComponent({ children }) {
  const currentMode = useSelector((state) => state.main.currentMode)
  const direction = useSelector((state) => state.main.direction)
  const borderRound = useSelector((state) => state.main.borderRound)

  return (
    <>
      <GlobalStyle
        currentMode={currentMode}
        direction={direction}
        borderRound={borderRound}
      />
      <Override direction={direction} currentMode={currentMode} />
      {children}
    </>
  )
}
