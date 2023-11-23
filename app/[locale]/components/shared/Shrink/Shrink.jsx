import React from 'react'
import Ui from './Ui'

export default function Shrink({
  sideDirection,
  status,
  width,
  staticElement,
  movable,
}) {
  return (
    <Ui
      sideDirection={sideDirection}
      status={status}
      width={width}
      staticElement={staticElement}
      movable={movable}
    />
  )
}
