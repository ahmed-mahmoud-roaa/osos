import React from 'react'
import { PiMagnifyingGlass } from 'react-icons/pi'
import Ui from './Ui'

export default function Help() {
  const helpData = [
    {
      title: 'Resource center',
      blocks: [
        {
          icon: <PiMagnifyingGlass />,
          title: 'Documentation',
          desc: 'New to OSOS? Learn the best practices in getting your Workspace set up for success!',
        },
        {
          icon: <PiMagnifyingGlass />,
          title: 'Documentation',
          desc: 'New to OSOS? Learn the best practices in getting your Workspace set up for success!',
        },
        {
          icon: <PiMagnifyingGlass />,
          title: 'Documentation',
          desc: 'New to OSOS? Learn the best practices in getting your Workspace set up for success!',
        },
      ],
    },
    {
      title: 'Resource center',
      blocks: [
        {
          icon: <PiMagnifyingGlass />,
          title: 'Documentation',
          desc: 'New to OSOS? Learn the best practices in getting your Workspace set up for success!',
        },
        {
          icon: <PiMagnifyingGlass />,
          title: 'Documentation',
          desc: 'New to OSOS? Learn the best practices in getting your Workspace set up for success!',
        },
        {
          icon: <PiMagnifyingGlass />,
          title: 'Documentation',
          desc: 'New to OSOS? Learn the best practices in getting your Workspace set up for success!',
        },
      ],
    },
  ]

  return <Ui helpData={helpData} />
}
