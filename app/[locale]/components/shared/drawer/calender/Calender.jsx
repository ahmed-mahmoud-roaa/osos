import React, { useState } from 'react'
import CalendarDate from './calendarDate/CalendarDate'

export default function Calender() {
  const [currentPage, setCurrentPage] = useState('CalendarDate')
  const pages = {
    CalendarDate: <CalendarDate setCurrentPage={setCurrentPage} />,
  }
  return <>{pages[currentPage]}</>
}
