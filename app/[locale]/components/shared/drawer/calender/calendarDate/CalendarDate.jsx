import React, { useState } from 'react'
import { Calendar } from 'primereact/calendar'
import { Wrapper } from './CalendarDate.styled'

export default function CalendarDate() {
  const [date, setDate] = useState([
    'Tue Nov 07 2023 00:00:00 GMT+0200 (Eastern European Standard Time)',
  ])

  return (
    <Wrapper>
      <Calendar
        value={date}
        onChange={(e) => {
          console.log(e.value)
          //   setDate(e.value)
        }}
        inline
        selectionMode="multiple"
        showWeek
      />
    </Wrapper>
  )
}
