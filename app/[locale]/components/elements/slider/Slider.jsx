import React, { useState } from 'react'

import './slider.scss'
import { useSelector } from 'react-redux'
export default function SliderInput({
  className = 'fontSize',
  setValueInput,
  valueInput,
}) {
  const borderRound = useSelector((state) => state.main.borderRound)

  return (
    <div
      className={`flex items-center text-themeGray-600 w-full sliderInput ${className}`}
    >
      <span className="text-xs">A</span>

      <input
        className={`slider ${!borderRound && 'notRounded'} `}
        type="range"
        min="1"
        max="100"
        onChange={(e) => {
          setValueInput(e.target.value)
        }}
        value={valueInput}
      />

      <span className="text-xl">A</span>
    </div>
  )
}
