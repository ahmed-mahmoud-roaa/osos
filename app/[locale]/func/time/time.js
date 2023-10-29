import Cookies from 'js-cookie'
const arabicLang = Cookies.get('arabicCountry') || 'ar-AE'

export function formatDateString(dateString) {
  const date = new Date(dateString)

  const options = {
    weekday: 'long', // Full day name (e.g., "Monday")
    hour: '2-digit', // 2-digit hour (e.g., "01")
    minute: '2-digit', // 2-digit minute (e.g., "05")
    hour12: true, // Use 12-hour format with "am" and "pm"
  }

  if (Cookies.get('NEXT_LOCALE') === 'ar') {
    options.locale = arabicLang
    return date.toLocaleDateString(arabicLang, options)
  }
  return date.toLocaleDateString('en-US', options)
}

export function weekDayDayMonth(utcDate) {
  const options = { weekday: 'short', day: '2-digit', month: 'short' }
  const isEnglish = Cookies.get('NEXT_LOCALE') === 'en'
  const lang = isEnglish ? 'en-US' : arabicLang
  const formattedDate = new Date(utcDate).toLocaleDateString(lang, options)
  return formattedDate
}

const differenceInSecond = (utcString) => {
  const utcDate = new Date(utcString)
  const currentDate = new Date()
  const dateDifferenceInSeconds = Math.floor((currentDate - utcDate) / 1000) // Calculate the difference in seconds
  const isEnglish = Cookies.get('NEXT_LOCALE') === 'en'
  return { dateDifferenceInSeconds, isEnglish }
}
export function formatTimeDifference(utcString) {
  const { dateDifferenceInSeconds, isEnglish } = differenceInSecond(utcString)

  if (dateDifferenceInSeconds < 60) {
    // Less than 1 minute
    return `${isEnglish ? 'Just now' : 'حالا'}`
  } else if (dateDifferenceInSeconds < 3600) {
    // Less than 1 hour
    const minutes = Math.floor(dateDifferenceInSeconds / 60)
    return `${minutes} ${isEnglish ? 'min' : 'دقيقه'}`
  } else if (dateDifferenceInSeconds < 86400) {
    // Less than 1 day
    const hours = Math.floor(dateDifferenceInSeconds / 3600)
    return `${hours} ${isEnglish ? 'hour' : 'ساعه'}`
  } else if (dateDifferenceInSeconds < 172800) {
    return `${isEnglish ? 'Yesterday' : 'البارحه'} ${formatDateString(utcString)
      .split(' ')[1]
      .toString()}`
  } else {
    return formatDateString(utcString)
  }
}

export function dateInLabel(utcString, withHour) {
  utcString = new Date(utcString)
  const { dateDifferenceInSeconds, isEnglish } = differenceInSecond(utcString)

  let shortDate
  if (dateDifferenceInSeconds < 86400) {
    shortDate = `${isEnglish ? 'Today' : 'اليوم'}`
  } else if (dateDifferenceInSeconds < 172800) {
    shortDate = `${isEnglish ? 'Yesterday' : 'البارحه'}`
  } else {
    shortDate = formatDateString(utcString).split(' ')[0].toString()
  }

  if (withHour) {
    return shortDate + formatDateString(utcString).split(' ')[1].toString()
  } else {
    return shortDate
  }
}
