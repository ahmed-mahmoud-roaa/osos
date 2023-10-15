import React, { useState } from 'react'
import CalendarDate from './calendarDate/CalendarDate'
import CalendarSetting from './calendarSetting/CalendarSetting'
import AddEvent from './addEvent/AddEvent'
import CalendarHead from './CalendarHead/CalendarHead'

export default function Calendar() {
  const [currentPage, setCurrentPage] = useState('CalendarDate')
  const pages = {
    CalendarDate: <CalendarDate />,
    CalendarSetting: <CalendarSetting />,
    AddEvent: <AddEvent setCurrentPage={setCurrentPage} />,
  }
  return (
    <>
      <CalendarHead currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {pages[currentPage]}
    </>
  )
}
