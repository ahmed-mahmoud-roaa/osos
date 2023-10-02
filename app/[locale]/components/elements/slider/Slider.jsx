import React, { useState } from 'react'

import './slider.scss'
export default function SliderInput({
  className = 'fontSize',
  setValueInput,
  valueInput,
}) {
  return (
    <div
      className={`flex items-center text-themeGray-600 w-full sliderInput ${className}`}
    >
      <span className="text-xs">A</span>

      <input
        className="slider"
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
