import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

export default function AutoRun() {
  const zoomSlider = useSelector((state) => state.main.zoomSlider)

  useEffect(() => {
    document.documentElement.style.fontSize = 12 + (zoomSlider * 8) / 100 + 'px'
  }, [])

  return <></>
}
