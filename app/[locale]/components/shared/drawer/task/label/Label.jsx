import React from 'react'

export default function Label({ labels }) {
  const labelClass = (status) => {
    if (status == 'white') {
      return 'bg-themeWhite-white text-themeGray-700 border-themeGray-200'
    } else if (status == 'red') {
      return 'bg-error-50 text-error-700 border-error-200'
    } else if (status == 'green') {
      return 'bg-themeGreen-50 text-themeGreen-700 border-themeGreen-200'
    }
  }

  return (
    <div className="labels flex flex-wrap items-center text-xs  border-md">
      {labels.map((label, index) => (
        <span
          className={`label font-semibold mb-0.5 border p-1 rounded-md flex items-center mr-1 rtl:mr-0 rtl:ml-1 ${labelClass(
            label.status
          )}`}
          key={index}
        >
          {label.icon && (
            <span className="icon mr-1 rtl:mr-0 rtl:ml-1">{label.icon}</span>
          )}
          <span className="title">{label.label}</span>
        </span>
      ))}
    </div>
  )
}
