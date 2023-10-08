import React from 'react'
import { MdNotificationsNone } from 'react-icons/md'
import { LiaBullhornSolid } from 'react-icons/lia'
import Ui from './Ui'

export default function Notification() {
  const data = [
    {
      icon: <MdNotificationsNone />,
      className: 'text-primary-500 bg-primary-50',
      text: 'Notifications',
      count: '5',
      markAsRead: true,
      notifications: [
        {
          text: 'New Annual Leave Request',
          from: 'HR > Leave Requests',
          time: 'Thu Oct 05 2023 13:28:56 GMT+0300',
          status: true,
        },
        {
          text: 'New Annual Leave Request',
          from: 'HR > Leave Requests',
          time: 'Thu Oct 05 2023 13:28:56 GMT+0300',
          status: true,
        },
        {
          text: 'New Annual Leave Request',
          from: 'HR > Leave Requests',
          time: 'Thu Oct 05 2023 13:28:56 GMT+0300',
          status: false,
        },
      ],
    },
    {
      icon: <MdNotificationsNone />,
      className: 'text-primary-500 bg-primary-50',
      text: 'badges',
      count: '2',
      markAsRead: false,
      notifications: [
        {
          text: 'New Annual Leave Request',
          from: 'HR > Leave Requests',
          time: 'Thu Oct 05 2023 13:28:56 GMT+0300',
          status: true,
        },
        {
          text: 'New Annual Leave Request',
          from: 'HR > Leave Requests',
          time: 'Thu Oct 05 2023 13:28:56 GMT+0300',
          status: true,
        },
        {
          text: 'New Annual Leave Request',
          from: 'HR > Leave Requests',
          time: 'Thu Oct 05 2023 13:28:56 GMT+0300',
          status: false,
        },
      ],
    },
    {
      icon: <LiaBullhornSolid />,
      className: 'text-themeGreen-800 bg-themeGreen-50',
      text: 'Leads',
      count: '2',
      markAsRead: false,
      notifications: [
        {
          text: 'New Annual Leave Request',
          from: 'HR > Leave Requests',
          time: 'Thu Oct 05 2023 13:28:56 GMT+0300',
          status: true,
        },
        {
          text: 'New Annual Leave Request',
          from: 'HR > Leave Requests',
          time: 'Thu Oct 05 2023 13:28:56 GMT+0300',
          status: true,
        },
        {
          text: 'New Annual Leave Request',
          from: 'HR > Leave Requests',
          time: 'Thu Oct 05 2023 13:28:56 GMT+0300',
          status: false,
        },
      ],
    },
  ]

  const asRead = (e) => {}

  return <Ui asRead={asRead} data={data} />
}
