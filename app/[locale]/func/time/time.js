import Cookies from 'js-cookie'
export function formatDateString(dateString) {
  const date = new Date(dateString)

  const options = {
    weekday: 'long', // Full day name (e.g., "Monday")
    hour: '2-digit', // 2-digit hour (e.g., "01")
    minute: '2-digit', // 2-digit minute (e.g., "05")
    hour12: true, // Use 12-hour format with "am" and "pm"
  }

  if (Cookies.get('NEXT_LOCALE') === 'ar') {
    options.locale = 'ar-EG'
    return date.toLocaleDateString('ar-SA', options)
  }
  return date.toLocaleDateString('en-US', options)
}

export function formatTimeDifference(utcString) {
  const utcDate = new Date(utcString)
  const currentDate = new Date()
  const dateDifferenceInSeconds = Math.floor((currentDate - utcDate) / 1000) // Calculate the difference in seconds

  if (dateDifferenceInSeconds < 60) {
    // Less than 1 minute
    return `${dateDifferenceInSeconds} ${
      Cookies.get('NEXT_LOCALE') === 'en' ? 'sec' : 'ثانيه'
    }`
  } else if (dateDifferenceInSeconds < 3600) {
    // Less than 1 hour
    const minutes = Math.floor(dateDifferenceInSeconds / 60)
    return `${minutes} ${Cookies.get('NEXT_LOCALE') === 'en' ? 'min' : 'دقيقه'}`
  } else if (dateDifferenceInSeconds < 86400) {
    // Less than 1 day
    const hours = Math.floor(dateDifferenceInSeconds / 3600)
    return `${hours} ${Cookies.get('NEXT_LOCALE') === 'en' ? 'hour' : 'ساعه'}`
  } else {
    return formatDateString(utcString)
  }
}
