import Image from 'next/image'
import React, { useState } from 'react'
import { BsSend } from 'react-icons/bs'
import { MdOutlineArrowBack } from 'react-icons/md'
import { SlOptionsVertical } from 'react-icons/sl'
import Message from './message/Message'
import { dateInLabel } from '../../../../../func/time/time'

export default function Ui({ setCurrentPage, data }) {
  const [newMessage, setNewMessage] = useState()
  let lastTime,
    setLastTime = (value) => (lastTime = value)
  return (
    <div className="grow flex flex-col justify-between">
      <div>
        <div className="detailsHead flex justify-between p-4 border-b border-b-themeGray-200">
          <button
            className="back text-themeGray-700 text-xl p-2 my-auto border border-themeGray-300 rounded-md  mr-4 rtl:mr-0 rtl:ml-4"
            onClick={() => setCurrentPage('message')}
          >
            <MdOutlineArrowBack />
          </button>
          <div className="info flex-grow flex items-center">
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
          style={{ height: 'calc(100vh - 14.75rem)' }}
        >
          {data.messages.map((message, index) => (
            <span key={index}>
              {lastTime !== dateInLabel(message.time) && (
                <div className="flex items-center  mb-4 justify-center relative after:content-[' '] after:w-full  after:absolute after:top-[50%] after:left-0 after:h-[1px] after:bg-themeGray-200">
                  <span className="bg-themeWhite-white px-2 relative z-10 text-themeGray-700">
                    {setLastTime(dateInLabel(message.time))}
                  </span>
                </div>
              )}
              <Message messageData={message} user={data.users[message.owner]} />
            </span>
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
