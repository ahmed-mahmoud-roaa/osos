import React, { useState } from 'react'
import { Wrapper } from './CheckBox.style'
export default function CheckBox({ label, status = false, action }) {
  const [checkStatus, setCheckStatus] = useState(status)
  return (
    <Wrapper>
      {label && label}
      <input
        type="checkbox"
        checked={checkStatus}
        onChange={() => {
          setCheckStatus(!checkStatus)
          action && action()
        }}
      />
      <span class="checkmark"></span>
    </Wrapper>
  )
}
