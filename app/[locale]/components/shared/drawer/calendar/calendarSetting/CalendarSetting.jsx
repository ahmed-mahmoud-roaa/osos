import React from 'react'
import Ui from './Ui'

export default function CalendarSetting() {
  const checks = [
    {
      label: (
        <div className="ml-2 rtl:ml-0 rtl:mr-2 text-sm text-themeGray-700 font-medium">
          <p>Personal Calendar</p>
          <p className="text-themeGray-600 font-normal">
            ahmed.kadry@roaa.tech
          </p>
        </div>
      ),
      status: true,
      action: () => {},
    },
    {
      label: (
        <div className="ml-2 rtl:ml-0 rtl:mr-2 text-sm text-themeGray-700 font-medium">
          Company Events Calendar
        </div>
      ),
      status: true,
      action: () => {},
    },
    {
      label: (
        <div className="ml-2 rtl:ml-0 rtl:mr-2 text-sm text-themeGray-700 font-medium">
          Employees Birthdays
        </div>
      ),
      status: true,
      action: () => {},
    },
    {
      label: (
        <div className="ml-2 rtl:ml-0 rtl:mr-2 text-sm text-themeGray-700 font-medium">
          Holidays in Egypt
        </div>
      ),
      status: false,
      action: () => {},
    },
    {
      label: (
        <div className="ml-2 rtl:ml-0 rtl:mr-2 text-sm text-themeGray-700 font-medium">
          Holidays in United Arab Emirates
        </div>
      ),
      status: false,
      action: () => {},
    },
  ]
  return <Ui checks={checks} />
}
