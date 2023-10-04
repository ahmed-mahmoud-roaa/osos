import Avatar from '@/app/[locale]/components/elements/avatar/Avatar'
import Image from 'next/image'
import React, { useState } from 'react'
import { BsSend } from 'react-icons/bs'
import { MdOutlineArrowBack } from 'react-icons/md'
import { SlOptionsVertical } from 'react-icons/sl'
import { useSelector } from 'react-redux'

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
        message:
          'Hey Kadry, I’ve finished with the requirements doc! I made some notes in the gdoc as well for Rayaan to look over.',
        time: '5 min ago',
      },

      {
        owner: 'some one',
        status: false,
        message:
          'Hey Kadry, I’ve finished with the requirements doc! I made some notes in the gdoc as well for Rayaan to look over.',
        time: '5 min ago',
      },

      {
        owner: 'some one',
        status: false,
        message:
          'Hey Kadry, I’ve finished with the requirements doc! I made some notes in the gdoc as well for Rayaan to look over.',
        time: '5 min ago',
      },

      {
        owner: 'some one',
        status: false,
        message:
          'Hey Kadry, I’ve finished with the requirements doc! I made some notes in the gdoc as well for Rayaan to look over.',
        time: '5 min ago',
      },

      {
        owner: 'some one',
        status: false,
        message:
          'Hey Kadry, I’ve finished with the requirements doc! I made some notes in the gdoc as well for Rayaan to look over.',
        time: '5 min ago',
      },

      {
        owner: 'some one',
        status: false,
        message:
          'Hey Kadry, I’ve finished with the requirements doc! I made some notes in the gdoc as well for Rayaan to look over.',
        time: '5 min ago',
      },

      {
        owner: 'some one',
        status: false,
        message:
          'Hey Kadry, I’ve finished with the requirements doc! I made some notes in the gdoc as well for Rayaan to look over.',
        time: '5 min ago',
      },

      {
        owner: 'some one',
        status: false,
        message:
          'Hey Kadry, I’ve finished with the requirements doc! I made some notes in the gdoc as well for Rayaan to look over.',
        time: '5 min ago',
      },

      {
        owner: 'some one',
        status: false,
        message:
          'Hey Kadry, I’ve finished with the requirements doc! I made some notes in the gdoc as well for Rayaan to look over.',
        time: '5 min ago',
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
            <div
              key={index}
              className={`message flex mb-3 max-w-[90%]  ${
                message.owner !== 'you'
                  ? 'mr-auto rtl:mr-0 rtl:ml-auto'
                  : 'ml-auto rtl:ml-0 rtl:mr-auto'
              } `}
            >
              {message.owner !== 'you' && (
                <Avatar
                  src={data.users[message.owner].avatar}
                  width={40}
                  height={40}
                  status={message.status}
                  classAttr={'mr-3 rtl:mr-0 rtl:ml-3'}
                />
              )}
              <div>
                <div className="flex justify-between">
                  <div className="name text-sm text-themeGray-700">
                    {message.owner !== 'you'
                      ? data.users[message.owner].name
                      : 'You'}
                  </div>
                  <div className="time text-themeGray-500 text-sm">
                    {message.time}
                  </div>
                </div>
                <div
                  className={`${
                    message.owner !== 'you'
                      ? ' bg-themeGray-100 text-themeGray-900  rounded-tl-[0px] rtl:rounded-tr-[0px] rtl:rounded-tl-xl '
                      : 'bg-primary-600 text-themeWhite-white rounded-tr-[0px]  rtl:rounded-tl-[0px]  rtl:rounded-tr-xl '
                  } message  px-3 py-2 rounded-xl mt-2 text-base`}
                >
                  {message.message}
                </div>
              </div>
            </div>
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
          className="grow h-12 p-2.5 border border-themeGray-200 rounded-md outline-0 text-themeGray-500"
        />
        <button
          className="text-themeWhite-white bg-primary-600 p-3 rounded-md text-xl ml-3"
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
