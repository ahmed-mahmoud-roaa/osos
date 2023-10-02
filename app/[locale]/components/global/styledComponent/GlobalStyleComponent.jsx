import React from 'react'
import GlobalStyle from './globalStyles'
import { useSelector } from 'react-redux'
import Override from './override'
export default function GlobalStyleComponent({ children }) {
  const currentMode = useSelector((state) => state.main.currentMode)

  return (
    <>
      <GlobalStyle currentMode={currentMode} />
      <Override />
      {children}
    </>
  )
}
