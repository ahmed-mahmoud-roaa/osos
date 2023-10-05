import React from 'react'
import { useSelector } from 'react-redux'
import { formatTimeDifference } from '@/app/[locale]/func/time/time'
import Ui from './Ui'

export default function MessageHistory({ setCurrentPage }) {
  const userDate = useSelector((state) => state.auth.userInfo)

  const chatBlocks = [
    {
      avatar: userDate.avatar,
      name: 'some one',
      position: 'his position',
      lastMessage:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam molestiae fugit cum esse magni perferendis quis dolorem laboriosam? Vel accusantium aliquid non repellat enim culpa aspernatur in laborum odit laudantium?',
      time: formatTimeDifference('Thu Oct 02 2023 13:28:56 GMT+0300'),
      count: '5',
    },
    {
      avatar: userDate.avatar,
      name: 'some one',
      position: 'his position',
      lastMessage:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam molestiae fugit cum esse magni perferendis quis dolorem laboriosam? Vel accusantium aliquid non repellat enim culpa aspernatur in laborum odit laudantium?',
      time: formatTimeDifference('Thu Oct 05 2023 13:28:56 GMT+0300'),
    },
    {
      avatar: userDate.avatar,
      name: 'some one',
      position: 'his position',
      lastMessage:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam molestiae fugit cum esse magni perferendis quis dolorem laboriosam? Vel accusantium aliquid non repellat enim culpa aspernatur in laborum odit laudantium?',
      time: formatTimeDifference('Thu Oct 05 2023 13:28:56 GMT+0300'),
      count: '5',
    },
    {
      avatar: userDate.avatar,
      name: 'some one',
      position: 'his position',
      lastMessage:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam molestiae fugit cum esse magni perferendis quis dolorem laboriosam? Vel accusantium aliquid non repellat enim culpa aspernatur in laborum odit laudantium?',
      time: formatTimeDifference('Thu Oct 05 2023 13:28:56 GMT+0300'),
    },
    {
      avatar: userDate.avatar,
      name: 'some one',
      position: 'his position',
      lastMessage:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam molestiae fugit cum esse magni perferendis quis dolorem laboriosam? Vel accusantium aliquid non repellat enim culpa aspernatur in laborum odit laudantium?',
      time: formatTimeDifference('Thu Oct 05 2023 13:28:56 GMT+0300'),
      count: '5',
    },
    {
      avatar: userDate.avatar,
      name: 'some one',
      position: 'his position',
      lastMessage:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam molestiae fugit cum esse magni perferendis quis dolorem laboriosam? Vel accusantium aliquid non repellat enim culpa aspernatur in laborum odit laudantium?',
      time: formatTimeDifference('Thu Oct 05 2023 13:28:56 GMT+0300'),
    },
  ]

  return <Ui chatBlocks={chatBlocks} setCurrentPage={setCurrentPage} />
}
