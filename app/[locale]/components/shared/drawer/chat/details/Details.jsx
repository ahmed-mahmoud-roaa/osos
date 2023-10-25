//https://smiley.cool/emoji-list.php
import React from 'react'
import { useSelector } from 'react-redux'
import { formatTimeDifference } from '@/app/[locale]/func/time/time'
import Ui from './Ui'

export default function Details({ setCurrentPage }) {
  const userInfo = useSelector((state) => state.auth.userInfo)

  const data = {
    isGroup: false,
    head: {
      avatar: 'https://www.svgrepo.com/show/61986/avatar.svg',
      name: 'Some One',
      position: 'his position',
    },
    users: {
      'Some One': {
        avatar: 'https://www.svgrepo.com/show/61986/avatar.svg',
        name: 'Some One',
      },
      you: {
        avatar: userInfo.avatar,
        name: userInfo.name,
      },
    },

    messages: [
      {
        owner: 'you',
        status: false,
        time: formatTimeDifference('Thu Oct 05 2023 13:28:56 GMT+0300'),
        message:
          'Hey Kadry, I’ve finished with the requirements doc! I made some notes in the gdoc as well for Rayaan to look over.',
        reactions: {},
      },

      {
        owner: 'Some One',
        status: false,
        message:
          'Hey Kadry, I’ve finished with the requirements doc! I made some notes in the gdoc as well for Rayaan to look over.',
        time: formatTimeDifference('Thu Oct 05 2023 13:28:56 GMT+0300'),
        reactions: { 'Some One': '🧡', you: '😂' },
      },
    ],
  }

  return <Ui data={data} setCurrentPage={setCurrentPage} />
}
