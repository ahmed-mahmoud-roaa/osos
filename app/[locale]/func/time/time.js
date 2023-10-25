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

  const isEnglish = Cookies.get('NEXT_LOCALE') === 'en'

  if (dateDifferenceInSeconds < 60) {
    // Less than 1 minute
    // return `${dateDifferenceInSeconds} ${isEnglish ? 'sec' : 'ثانيه'}`
    return `${isEnglish ? 'Just now' : 'حالا'}`
  } else if (dateDifferenceInSeconds < 3600) {
    // Less than 1 hour
    const minutes = Math.floor(dateDifferenceInSeconds / 60)
    return `${minutes} ${isEnglish ? 'min' : 'دقيقه'}`
  } else if (dateDifferenceInSeconds < 86400) {
    // Less than 1 day
    const hours = Math.floor(dateDifferenceInSeconds / 3600)
    return `${hours} ${isEnglish ? 'hour' : 'ساعه'}`
  } else {
    return formatDateString(utcString)
  }
}

// label ==> today , yesterday, yesterday with hour

// } else if (dateDifferenceInSeconds < 86400) {
//   // Less than 1 day
//   const hours = Math.floor(dateDifferenceInSeconds / 3600)
//   return `${hours} ${isEnglish ? 'hour' : 'ساعه'}`
// } else if (dateDifferenceInSeconds < 172800) {
//   // Less than 2 day
//   return `  ${isEnglish ? 'yesterday' : 'البارحه'}`
