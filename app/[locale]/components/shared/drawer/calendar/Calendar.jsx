'use client'
import React, { useState } from 'react'
import CalendarDate from './calendarDate/CalendarDate'
import CalendarSetting from './calendarSetting/CalendarSetting'
import AddEvent from './addEvent/AddEvent'
import CalendarHead from './CalendarHead/CalendarHead'

export default function Calendar() {
  const [currentPage, setCurrentPage] = useState('CalendarDate')
  const pages = {
    CalendarDate: { title: 'My Calendar', component: <CalendarDate /> },
    CalendarSetting: {
      title: 'Calendar Settings',
      component: <CalendarSetting />,
    },
    AddEvent: {
      title: 'Add Event',
      component: <AddEvent setCurrentPage={setCurrentPage} />,
    },
  }
  return (
    <>
      <CalendarHead
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        title={pages[currentPage].title}
      />
      {pages[currentPage].component}
    </>
  )
}
