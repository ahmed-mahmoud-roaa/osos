import React, { useState } from 'react'
import { Calendar } from 'primereact/calendar'
import { Wrapper } from './CalendarSelect.styled'
import { useSelector } from 'react-redux'
import { addLocale } from 'primereact/api'

export default function CalendarSelect({ EventsDatesString }) {
  console.log({ EventsDatesString }, '000000000000000')
  const direction = useSelector((state) => state.main.direction)
  const [selected, setSelected] = useState()
  addLocale('ar', {
    firstDayOfWeek: 0, // In Arabic, the week typically starts with Sunday
    showMonthAfterYear: true,
    dayNames: [
      'الأحد',
      'الإثنين',
      'الثلاثاء',
      'الأربعاء',
      'الخميس',
      'الجمعة',
      'السبت',
    ],
    dayNamesShort: ['أحد', 'إثنين', 'ثلاثاء', 'أربعاء', 'خميس', 'جمعة', 'سبت'],
    dayNamesMin: ['أ', 'إ', 'ث', 'أ', 'خ', 'ج', 'س'],
    monthNames: [
      'يناير',
      'فبراير',
      'مارس',
      'إبريل',
      'مايو',
      'يونيو',
      'يوليو',
      'أغسطس',
      'سبتمبر',
      'أكتوبر',
      'نوفمبر',
      'ديسمبر',
    ],
    monthNamesShort: [
      'ينا',
      'فبر',
      'مار',
      'إبر',
      'ماي',
      'يون',
      'يول',
      'أغس',
      'سبت',
      'أكت',
      'نوف',
      'ديس',
    ],
    today: 'اليوم',
    clear: 'مسح',
  })

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
    <Wrapper direction={direction}>
      <Calendar
        onSelect={(e) => setSelected(e.value)}
        inline
        selectionMode="multiple"
        dateTemplate={dateTemplate}
        locale={direction === 'ar' && 'ar'}
      />
    </Wrapper>
  )
}
