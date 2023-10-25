import React from 'react'
import { MdOutlineWatchLater } from 'react-icons/md'
import {
  BsBox,
  BsCheckLg,
  BsExclamationOctagon,
  BsExclamationTriangle,
} from 'react-icons/bs'
import { RiFlag2Line } from 'react-icons/ri'
import { TbWeight } from 'react-icons/tb'
import Ui from './Ui'

export default function TaskItems({ setCurrentPage }) {
  const orderTask = {
    options: [
      {
        name: 'Due date',
        code: 'Due-date',
        icon: <MdOutlineWatchLater />,
        action: () => {},
      },
      {
        name: 'Urgency',
        code: 'Urgency',
        icon: <BsExclamationOctagon />,
        action: () => {},
      },
      {
        name: 'Importance',
        code: 'Importance',
        icon: <RiFlag2Line />,
        action: () => {},
      },
      {
        name: 'Weight',
        code: 'Weight',
        icon: <TbWeight />,
        action: () => {},
      },
      {
        name: 'Application',
        code: 'Application',
        icon: <BsBox />,
        action: () => {},
      },
    ],
  }

  const cats = [
    {
      text: 'Pending',
      count: 5,
    },
    {
      text: 'Done',
      count: 0,
    },
    {
      text: 'Overview',
    },
  ]

  const taskData = [
    {
      head: { icon: <RiFlag2Line />, title: 'High', count: '2' },
      body: [
        {
          block: {
            check: false,
            status: 'red',
          },
          labels: [
            {
              icon: '',
              status: 'white',
              label: 'Service Request',
            },
            {
              icon: <BsExclamationTriangle />,
              status: 'red',
              label: 'Overdue',
            },
          ],
          title: 'Leave Request - Jasmin ELsayed',
          from: 'HR > Leaves',
          points: '2',
          level: 'high',
          weight: '2',
          time: {
            title:
              'Thu Oct 20 2023 00:56:20 GMT+0300 (Eastern European Summer Time)',
            status: 'red',
          },
        },
        {
          block: {
            check: true,
            status: 'gray',
          },
          labels: [
            {
              icon: '',
              status: 'white',
              label: 'Service Request',
            },
            {
              icon: <BsExclamationTriangle />,
              status: 'red',
              label: 'Overdue',
            },
          ],
          title: 'Leave Request - Jasmin ELsayed',
          from: 'HR > Leaves',
          points: '2',
          level: 'low',
          weight: '2',
          time: {
            title:
              'Thu Oct 20 2023 00:56:20 GMT+0300 (Eastern European Summer Time)',
            status: 'red',
          },
        },
      ],
    },
    {
      head: { icon: <RiFlag2Line />, title: 'Normal', count: '5' },
      body: [
        {
          block: {
            check: false,
            status: 'green',
          },
          labels: [
            {
              icon: '',
              status: 'white',
              label: 'Service Request',
            },
            {
              icon: <BsCheckLg />,
              status: 'green',
              label: 'Completed',
            },
          ],
          title: 'Leave Request - Jasmin ELsayed',
          from: 'HR > Leaves',
          points: '2',
          level: 'high',
          weight: '2',
          time: {
            title:
              'Thu Oct 25 2023 00:56:20 GMT+0300 (Eastern European Summer Time)',

            status: 'gray',
          },
        },
        {
          block: {
            check: false,
            status: 'red',
          },
          labels: [
            {
              icon: '',
              status: 'white',
              label: 'Service Request',
            },
            {
              icon: <BsExclamationTriangle />,
              status: 'red',
              label: 'Overdue',
            },
          ],
          title: 'Leave Request - Jasmin ELsayed',
          from: 'HR > Leaves',
          points: '3',
          level: 'low',
          weight: '2',
          time: {
            title:
              'Thu Oct 20 2023 00:56:20 GMT+0300 (Eastern European Summer Time)',
            status: 'red',
          },
        },
      ],
    },
  ]

  return (
    <Ui
      setCurrentPage={setCurrentPage}
      orderTask={orderTask}
      cats={cats}
      taskData={taskData}
    />
  )
}
