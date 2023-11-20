import React from 'react'
import Ui from './Ui'

export default function Shrink({ sideDirection, status, width, children }) {
  return (
    <Ui sideDirection={sideDirection} status={status} width={width}>
      {children}
    </Ui>
  )
}
