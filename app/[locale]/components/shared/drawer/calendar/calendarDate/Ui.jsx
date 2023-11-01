import React, { useState } from 'react'
import DateNavigator from './dateNavigator/DateNavigator'
import CalendarEvent from './calendarEvent/CalendarEvent'
import CalendarSelect from '../../../../elements/calendarSelect/CalendarSelect'
import CustomCalendar from '@/app/[locale]/components/elements/customCalendar/CustomCalendar'

export default function Ui({ EventsDatesString, eventData }) {
  const [selected, setSelected] = useState(new Date())
  // new Date('Wed Oct 11 2023 00:00:00 GMT+0300 (Eastern European Summer Time)')
  const EventsDates = EventsDatesString.map((item) => new Date(item))
  const [datesData, setDatesData] = useState(EventsDates)

  const dateTemplate = (date) => {
    const check = (checkDate, component) => {
      const year = checkDate?.getFullYear()
      const month = checkDate?.getMonth()
      const day = checkDate?.getDate()
      if (date.year == year && date.month == month && date.day == day) {
        return component
      }
    }

    const selectedDay = check(
      selected,
      <div className="bg-primary-600 text-themeWhite-white flex items-center justify-center w-full h-full">
        {date.day}
      </div>
    )

    const checkEvent = datesData.map((eventData, index) => {
      return check(
        eventData,
        <div key={index} className="flex justify-center">
          <span className="absolute w-1 h-1 bg-primary-500 top-8 rounded-full"></span>
          {date.day}
        </div>
      )
    })

    const filteredEvent = checkEvent.filter((value) => value !== undefined)[0]

    return selectedDay || filteredEvent || date.day
  }

  return (
    <>
      {/* <CalendarSelect
        EventsDatesString={EventsDatesString}
        inline={true}
        onSelect={(e) => {
          setSelected(e.value)
        }}
        dateTemplate={dateTemplate}
        selectionMode="multiple"
      /> */}
      <CustomCalendar currentDate={selected} setCurrentDate={setSelected} />
      <div className="pb-4">
        <DateNavigator setSelected={setSelected} selected={selected} />
        <CalendarEvent eventData={eventData} />
      </div>
    </>
  )
}
