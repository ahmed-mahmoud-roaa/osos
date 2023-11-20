import React, { useState } from 'react'
import { Wrapper } from './CheckBox.style'
import { useSelector } from 'react-redux'

export default function CheckBox({ label, status = false, action }) {
  const borderRound = useSelector((state) => state.main.borderRound)
  const [checkStatus, setCheckStatus] = useState(status)
  return (
    <Wrapper borderRound={borderRound}>
      {label && label}
      <input
        type="checkbox"
        checked={checkStatus}
        onChange={() => {
          setCheckStatus(!checkStatus)
          action && action()
        }}
      />
      <span className="checkmark"></span>
    </Wrapper>
  )
}
