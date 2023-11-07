'use client'
import React, { useState } from 'react'
import Gbutton from './Gbutton/Gbutton'

export default function ButtonsGroup({ data }) {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div
      className={`buttonGroup flex items-center mx-4 py-[0.2rem] px-[0.2rem] rounded-full border border-themeGray-300 bg-themeGray-50`}
    >
      {Object.values(data).map((button, index) => (
        <Gbutton
          key={index}
          index={index}
          button={button}
          setActiveIndex={setActiveIndex}
          activeIndex={activeIndex}
        />
      ))}
    </div>
  )
}
