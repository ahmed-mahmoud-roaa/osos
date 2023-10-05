//https://smiley.cool/emoji-list.php
import Avatar from '@/app/[locale]/components/elements/avatar/Avatar'
import Image from 'next/image'
import React, { useState } from 'react'
import { BsSend } from 'react-icons/bs'
import { MdOutlineArrowBack } from 'react-icons/md'
import { SlOptionsVertical } from 'react-icons/sl'
import { useSelector } from 'react-redux'
import Message from './message/Message'
import { formatTimeDifference } from '@/app/[locale]/func/time/time'

export default function Details({ setCurrentPage }) {
  const userInfo = useSelector((state) => state.auth.userInfo)
  const [newMessage, setNewMessage] = useState()

  const data = {
    isGroup: false,
    head: {
      avatar: 'https://www.svgrepo.com/show/61986/avatar.svg',
      name: 'some one',
      position: 'his position',
    },
    users: {
      'some one': {
        avatar: 'https://www.svgrepo.com/show/61986/avatar.svg',
        name: 'some one',
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
        owner: 'some one',
        status: false,
        message:
          'Hey Kadry, I’ve finished with the requirements doc! I made some notes in the gdoc as well for Rayaan to look over.',
        time: formatTimeDifference('Thu Oct 05 2023 13:28:56 GMT+0300'),
        reactions: { 'some one': '🧡', you: '😂' },
      },
    ],
  }

  return (
    <div className="grow flex flex-col justify-between">
      <div>
        <div className="detailsHead flex justify-between p-4 border-b border-b-themeGray-200">
          <button
            className="back text-themeGray-700 text-xl p-2 my-auto border border-themeGray-300 rounded-md"
            onClick={() => setCurrentPage('message')}
          >
            <MdOutlineArrowBack />
          </button>
          <div className="info flex items-center">
            <Image src={data.head.avatar} alt="user" width={48} height={48} />
            <div className="person mx-3 font-medium">
              <h3 className="name text-lg text-themeGray-900">
                {data.head.name}
              </h3>
              <p className="position text-sm text-themeGray-500 ">
                {data.head.position}
              </p>
            </div>
          </div>
          <button className="options text-themeGray-400 mb-auto p-1">
            <SlOptionsVertical />
          </button>
        </div>
        <div
          className="messages p-4 overflow-auto"
          style={{ height: 'calc(100vh - 236px)' }}
        >
          {data.messages.map((message, index) => (
            <Message
              key={index}
              messageData={message}
              user={data.users[message.owner]}
            />
          ))}
        </div>
      </div>

      <div className="sender flex p-3 items-center">
        <textarea
          type="text"
          name=""
          value={newMessage}
          onChange={(e) => setNewMessage(e.value)}
          id=""
          placeholder="Send message"
          className="grow h-12 p-2.5 border border-themeGray-200 rounded-md outline-0 text-themeGray-500 bg-themeWhite-white"
        />
        <button
          className="text-themeWhite-white bg-primary-600 p-3 rounded-md text-xl ml-3 rtl:ml:0 rtl:mr-3"
          onClick={() => {
            setNewMessage('')
          }}
        >
          <BsSend />
        </button>
      </div>
    </div>
  )
}
