import Image from 'next/image'
import React from 'react'
import { FiEdit, FiSettings, FiUsers } from 'react-icons/fi'
import { MdNotificationsNone, MdPlaylistAdd } from 'react-icons/md'
import Accordion from '../../../elements/accordion/Accordion'
import { IoCheckmarkDoneCircleOutline } from 'react-icons/io5'
import { formatTimeDifference } from '@/app/[locale]/func/time/time'

export default function Notification() {
  return (
    <div>
      <div className="head bg-primary-50 p-4">
        <div className="chatHead flex items-center justify-between mb-2">
          <h3 className="font-medium text-xl mt-2 mb-4 flex">
            <span>Notifications</span>
            <span className="bg-themeWhite-white text-themeGray-700 text-xs py-1 px-1.5 border border-themeGray-200 rounded-md ml-2 rtl:ml-0 rtl:mr-2">
              5
            </span>
          </h3>
          <button className="bg-themeWhite-white border border-themeGray-200 rounded-md text-xl text-themeGray-700 p-2">
            <MdPlaylistAdd />
          </button>
        </div>
      </div>

      <div className="content">
        <Accordion
          head={
            <div className="headCont flex justify-between items-center grow">
              <div className="flex items-center">
                <div className="icon border border-themeGray-200 p-2 mr-4 rlt:mr-0 rtl:ml-4 text-primary-500 bg-primary-50 rounded-md text-xl">
                  <MdNotificationsNone />
                </div>
                <div className=" text-sm font-semibold mr-4 rtl:ml-4 rtl:mr-0">
                  Notifications
                </div>
                <div className="count rounded-full bg-error-50 text-error-700 border border-error-200 px-2">
                  5
                </div>
              </div>
              <button className="view text-2xl text-gray-800 bg-themeWhite-white border border-themeGray-200 rounded-md p-2">
                <IoCheckmarkDoneCircleOutline />
              </button>
            </div>
          }
          body={
            <div className="flex items-start justify-between my-3">
              <div className="flex items-start">
                <div className="icon text-themeWhite-white rounded-md p-3 bg-themeGreen-600 text-xl mr-3 rtl:mr-0 rtl:ml-3">
                  <FiUsers />
                </div>
                <div className="info">
                  <div className="title font-semibold text-sm">
                    New Annual Leave Request
                  </div>
                  <div className="from text-xs">{'HR > Leave Requests'}</div>
                  <div className="time  text-xs">
                    {formatTimeDifference('Thu Oct 05 2023 13:28:56 GMT+0300')}
                  </div>
                </div>
              </div>
              <div className="readStatus">
                <div className="w-2 h-2 rounded-full bg-themeGreen-600"></div>
              </div>
            </div>
          }
        />
      </div>
    </div>
  )
}
