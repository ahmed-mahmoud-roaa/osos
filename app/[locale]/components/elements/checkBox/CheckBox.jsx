import React from 'react'
import { Wrapper } from './CheckBox.style'
export default function CheckBox({ label }) {
  return (
    <Wrapper>
      {label && label}
      <input type="checkbox" />
      <span class="checkmark"></span>
    </Wrapper>
  )
}
