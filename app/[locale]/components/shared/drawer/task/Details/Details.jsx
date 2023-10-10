import React from 'react'
import { MdOutlineWatchLater } from 'react-icons/md'
import { BsExclamationOctagon, BsExclamationTriangle } from 'react-icons/bs'
import { TbUserCheck } from 'react-icons/tb'
import { RiFlag2Line } from 'react-icons/ri'
import { LiaUserEditSolid } from 'react-icons/lia'
import Ui from './Ui'

export default function Details({ setCurrentPage }) {
  const block = {
    block: {
      check: false,
      status: 'red',
      complete: false,
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
    time: { title: 'Yesterday', status: 'red' },
    details: {
      assignees: {
        icon: <TbUserCheck />,
        title: 'Assignees',
        data: [
          {
            avatar: 'https://www.svgrepo.com/show/61986/avatar.svg',
            name: 'some one 1',
          },
          {
            avatar: 'https://www.svgrepo.com/show/61986/avatar.svg',
            name: 'some one 2',
          },
          {
            avatar: 'https://www.svgrepo.com/show/61986/avatar.svg',
            name: 'some one 2',
          },
        ],
      },

      dueDate: {
        icon: <MdOutlineWatchLater />,
        title: 'Due date',
        data: 'Thu 10 Aug',
      },
      urgency: {
        icon: <BsExclamationOctagon />,
        title: 'Urgency',
      },
      importance: {
        icon: <RiFlag2Line />,
        title: 'Importance',
      },
      author: {
        icon: <LiaUserEditSolid />,
        title: 'Created by',
        data: [
          {
            avatar: 'https://www.svgrepo.com/show/61986/avatar.svg',
            name: 'some one 1',
          },
        ],
      },
    },

    description:
      'As a product designer, I want to design a set of consistent and user-friendly input fields for our design system so that developers can easily implement them across our digital products. <br /> <br /> Acceptance Criteria: <br /> <br /> 1. As a designer, I need to understand the requirements and use cases of different input fields, such as text input, password input, number input, date input, and dropdown/select input. <br /> <br /> 2. I will collaborate with UX researchers and stakeholders to gather insights about user preferences, accessibility requirements, and any specific brand guidelines we need to consider.',
  }

  return <Ui block={block} />
}
