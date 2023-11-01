import React, { useState } from 'react'
import { Wrapper } from './CustomCalendar.styled'
import { HiOutlineChevronRight, HiOutlineChevronLeft } from 'react-icons/hi'

const Calendar = ({ currentDate, setCurrentDate }) => {
  const specialDates = [
    new Date('2023-10-31T10:16:41'),
    new Date('2023-10-30T10:16:41'),
    new Date('2023-10-27T10:16:41'),
  ]

  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate()
  const firstDay = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  ).getDay()

  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const getDaysInPrevMonth = () => {
    const prevMonthLastDay = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      0
    ).getDate()
    const days = []
    for (let i = firstDay - 1; i >= 0; i--) {
      days.push({
        day: prevMonthLastDay - i,
        date: new Date(
          currentDate.getFullYear(),
          currentDate.getMonth() - 1,
          prevMonthLastDay - i
        ),
      })
    }
    return days
  }

  const getDaysInNextMonth = () => {
    const totalDays = daysInMonth + firstDay
    const remainingDays = totalDays % 7
    const days = []
    if (remainingDays > 0) {
      for (let i = 1; i <= 7 - remainingDays; i++) {
        days.push({
          day: i,
          date: new Date(
            currentDate.getFullYear(),
            currentDate.getMonth() + 1,
            i
          ),
        })
      }
    }
    return days
  }

  const prevMonth = () => {
    const prevMonthDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() - 1,
      1
    )
    setCurrentDate(prevMonthDate)
  }

  const nextMonth = () => {
    const nextMonthDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      1
    )
    setCurrentDate(nextMonthDate)
  }

  const getDaysInCurrentMonth = () => {
    const days = []

    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        i
      )
      const isSpecial = specialDates.some((specialDate) =>
        isSameDate(specialDate, date)
      )
      days.push({
        day: i,
        special: isSpecial,
        date: new Date(currentDate.getFullYear(), currentDate.getMonth(), i),
      })
    }
    return days
  }

  const isSameDate = (date1, date2) => {
    return (
      date1.getDate() === date2.getDate() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getFullYear() === date2.getFullYear()
    )
  }

  return (
    <Wrapper>
      <div className="calendar-header flex align-center justify-between mx-5 mb-4">
        <div className="control flex w-full items-center justify-between mr-4 rtl:mr-0 rtl:ml-4">
          <button onClick={prevMonth}>
            <HiOutlineChevronLeft />
          </button>
          <h2>
            <span className="month font-semibold text-xl">
              {monthNames[currentDate.getMonth()]}{' '}
            </span>
            <span className="year">{currentDate.getFullYear()}</span>
          </h2>
          <button onClick={nextMonth}>
            <HiOutlineChevronRight />
          </button>
        </div>
        <div className="label text-themeGray-700 text-sm border border-themeGray-300 rounded-md bg-themeWhite-white px-3 py-2">
          Today
        </div>
      </div>
      <div className="calendar-body">
        <div className="days flex justify-center mb-4">
          <span className="text-sm font-medium text-themeGray-700">Su</span>
          <span className="text-sm font-medium text-themeGray-700">Mo</span>
          <span className="text-sm font-medium text-themeGray-700">Tu</span>
          <span className="text-sm font-medium text-themeGray-700">We</span>
          <span className="text-sm font-medium text-themeGray-700">Th</span>
          <span className="text-sm font-medium text-themeGray-700">Fr</span>
          <span className="text-sm font-medium text-themeGray-700">Sa</span>
        </div>
        <div className="body flex flex-wrap">
          {getDaysInPrevMonth().map((day, index) => (
            <span
              key={index}
              className={`other-month text-center text-xs text-themeGray-500 ${
                day.date.toString() == currentDate?.toString() ? 'clicked' : ''
              }`}
              onClick={(e) => {
                setCurrentDate(day.date)
              }}
            >
              {day.day}
            </span>
          ))}
          {getDaysInCurrentMonth().map((day, index) => (
            <span
              key={index}
              className={` text-center text-xs text-themeGray-700 ${
                day.special ? 'special' : ''
              } 
              ${
                new Date().toString().slice(0, 15) ===
                day.date.toString().slice(0, 15)
                  ? 'today'
                  : ''
              }
                ${
                  day.date.toString() == currentDate?.toString()
                    ? 'clicked'
                    : ''
                } `}
              onClick={() => {
                setCurrentDate(day.date)
              }}
            >
              {day.day}
            </span>
          ))}
          {getDaysInNextMonth().map((day, index) => (
            <span
              key={index}
              className={`other-month text-center text-xs text-themeGray-500 ${
                day.date.toString() == currentDate?.toString() ? 'clicked' : ''
              } `}
              onClick={() => {
                setCurrentDate(day.date)
              }}
            >
              {day.day}
            </span>
          ))}
        </div>
      </div>
    </Wrapper>
  )
}

export default Calendar
