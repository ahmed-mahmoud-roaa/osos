import React from 'react'
import { BsCalendar2Plus } from 'react-icons/bs'
import { FiSettings } from 'react-icons/fi'
import { MdClose } from 'react-icons/md'

export default function CalendarHead({ currentPage, setCurrentPage }) {
  return (
    <div className="head bg-primary-50 py-2 px-4">
      <div className="chatHead flex items-center justify-between mb-2">
        <h3 className="font-medium text-xl mt-2 mb-4 flex">
          <span>My Calendar</span>
        </h3>
        <div>
          {currentPage === 'CalendarSetting' ? (
            <button
              className="bg-themeWhite-white border border-primary-200 rounded-md text-lg text-primary-700 p-1.5 mr-2 rtl:mr-0 rtl:ml-2"
              onClick={() => {
                setCurrentPage('CalendarDate')
              }}
            >
              <MdClose />
            </button>
          ) : (
            <button
              className="bg-themeWhite-white border border-themeGray-200 rounded-md text-lg text-themeGray-700 p-1.5 mr-2 rtl:mr-0 rtl:ml-2"
              onClick={() => {
                setCurrentPage('CalendarSetting')
              }}
            >
              <BsCalendar2Plus />
            </button>
          )}

          {currentPage === 'AddEvent' ? (
            <button
              className="bg-themeWhite-white border border-primary-200 rounded-md text-lg text-primary-700 p-1.5 mr-2 rtl:mr-0 rtl:ml-2"
              onClick={() => {
                setCurrentPage('CalendarDate')
              }}
            >
              <MdClose />
            </button>
          ) : (
            <button
              className="bg-themeWhite-white border border-themeGray-200 rounded-md text-lg text-themeGray-700 p-1.5 mr-2 rtl:mr-0 rtl:ml-2"
              onClick={() => {
                setCurrentPage('AddEvent')
              }}
            >
              <FiSettings />
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
