import React, { useState } from 'react'
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md'
import { useSelector } from 'react-redux'

const DateNavigator = () => {
  const direction = useSelector((state) => state.main.direction)
  const [currentDate, setCurrentDate] = useState(new Date())

  const handlePrevDate = () => {
    const newDate = new Date(currentDate)
    newDate.setDate(currentDate.getDate() - 1)
    setCurrentDate(newDate)
  }

  const handleNextDate = () => {
    const newDate = new Date(currentDate)
    newDate.setDate(currentDate.getDate() + 1)
    setCurrentDate(newDate)
  }

  const formatLocalizedDate = (date, locale) => {
    const day = date.getDate()
    const month = date.toLocaleString(locale, { month: 'long' })
    const year = date.getFullYear()
    return `${day} ${month} ${year}`
  }

  const formattedDate =
    direction === 'en'
      ? formatLocalizedDate(currentDate, 'en-US').split(' ')
      : formatLocalizedDate(currentDate, 'ar-EG').split(' ')
  return (
    <div className="flex justify-between items-center px-6 py-4 border-t border-themeGray-100 text-themeGray-800">
      <button onClick={handlePrevDate} className="rtl:rotate-180">
        <MdArrowBackIos />
      </button>
      <div className="text-themeGray-700 text-xl">
        <span className="font-semibold">{`${formattedDate[0]} ${formattedDate[1]}`}</span>
        <span className="mx-2">{`${formattedDate[2]}`}</span>
      </div>
      <button onClick={handleNextDate} className="rtl:rotate-180">
        <MdArrowForwardIos />
      </button>
    </div>
  )
}

export default DateNavigator
