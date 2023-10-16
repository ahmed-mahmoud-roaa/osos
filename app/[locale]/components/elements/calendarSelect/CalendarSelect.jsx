import React from 'react'
import { Calendar } from 'primereact/calendar'
import { Wrapper } from './CalendarSelect.styled'
import { useSelector } from 'react-redux'
import { addLocale } from 'primereact/api'

export default function CalendarSelect({
  inline,
  onChange,
  onSelect,
  dateTemplate,
  value,
  name,
  id,
  selectionMode,
}) {
  const direction = useSelector((state) => state.main.direction)
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

  return (
    <Wrapper direction={direction}>
      <Calendar
        onSelect={onSelect && onSelect}
        onChange={onChange && onChange}
        inline={inline}
        selectionMode={selectionMode}
        dateTemplate={dateTemplate}
        locale={direction === 'ar' && 'ar'}
        value={value && value}
        name={name && name}
        id={id && id}
      />
    </Wrapper>
  )
}
