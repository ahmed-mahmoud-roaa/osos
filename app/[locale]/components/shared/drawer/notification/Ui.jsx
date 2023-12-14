import React from 'react'
import { FiUsers } from 'react-icons/fi'
import { MdPlaylistAdd } from 'react-icons/md'
import Accordion from '../../../elements/accordion/Accordion'
import { IoCheckmarkDoneCircleOutline } from 'react-icons/io5'
import { formatTimeDifference } from '../../../../func/time/time'
import Tooltip from '../../tooltip/Tooltip'

export default function Ui({ data, asRead }) {
  return (
    <div className="text-themeGray-800">
      <div className="head bg-primary-50 py-2 px-4">
        <div className="chatHead flex items-center justify-between mb-2">
          <h3 className=" font-semibold text-xl mt-2 mb-4 flex">
            <span>Notifications</span>
            <span className="bg-themeWhite-white text-themeGray-700 text-xs py-1 px-1.5 border border-themeGray-200 rounded-md ml-2 rtl:ml-0 rtl:mr-2 flex items-center">
              5
            </span>
          </h3>
          <button className="bg-themeWhite-white border border-themeGray-200 rounded-md text-xl text-themeGray-700 p-2">
            <MdPlaylistAdd />
          </button>
        </div>
      </div>

      <div className="content p-4">
        {data.map((item, index) => (
          <Accordion
            key={index}
            head={
              <div className="headCont flex justify-between items-center grow">
                <div className="flex items-center">
                  <div
                    className={`icon border border-themeGray-200 p-1.5 mr-4 rtl:mr-0 rtl:ml-4 rounded-md text-lg ${item.className}`}
                  >
                    {item.icon}
                  </div>
                  <div className=" text-sm font-semibold mr-4 rtl:ml-4 rtl:mr-0">
                    {item.text}
                  </div>
                  <div className="count rounded-full bg-error-50 text-error-700 border border-error-200 px-1.5 text-xs">
                    {item.count}
                  </div>
                </div>
                {item.markAsRead && (
                  <>
                    <Tooltip
                      text={'Mark group as read'}
                      className={'w-[8rem] break-word'}
                    >
                      <button
                        className="view text-2xl text-gray-800 bg-themeWhite-white border border-themeGray-200 rounded-md p-1.5"
                        onClick={(e) => asRead(e)}
                      >
                        <IoCheckmarkDoneCircleOutline />
                      </button>
                    </Tooltip>
                  </>
                )}
              </div>
            }
            body={
              <>
                {item.notifications.map((notification, index) => (
                  <div
                    key={index}
                    className="flex items-start justify-between my-3"
                  >
                    <div className="flex items-start">
                      <div className="icon text-themeWhite-white rounded-md p-2.5 bg-themeGreen-600 text-lg mr-3 rtl:mr-0 rtl:ml-3">
                        <FiUsers />
                      </div>
                      <div className="info">
                        <div className="title font-semibold text-sm">
                          {notification.text}
                        </div>
                        <div className="from text-xs text-themeGray-500">
                          {notification.from}
                        </div>
                        <div className="time  text-xs  text-themeGray-500">
                          {formatTimeDifference(notification.time)}
                        </div>
                      </div>
                    </div>
                    {notification.status && (
                      <div className="readStatus">
                        <div className="w-2 h-2 rounded-full bg-themeGreen-600"></div>
                      </div>
                    )}
                  </div>
                ))}
              </>
            }
          />
        ))}
      </div>
    </div>
  )
}
