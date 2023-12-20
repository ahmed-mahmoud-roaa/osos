import React, { useState } from 'react'
import Ui from './Ui'

export default function SideBar({ sidebarContent }) {
  const routeData = { panels: sidebarContent }

  return <Ui routeData={routeData} />
}
