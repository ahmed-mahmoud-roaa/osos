import React from 'react'
import Search from '../../../../elements/search/Search'
import { PiMagnifyingGlass } from 'react-icons/pi'
import { FiEdit } from 'react-icons/fi'
import Image from 'next/image'
import { useSelector } from 'react-redux'

export default function Message({ setCurrentPage }) {
  const userDate = useSelector((state) => state.auth.userInfo)

  const chatBlocks = [
    {
      avatar: userDate.avatar,
      name: 'some one',
      position: 'his position',
      lastMessage:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam molestiae fugit cum esse magni perferendis quis dolorem laboriosam? Vel accusantium aliquid non repellat enim culpa aspernatur in laborum odit laudantium?',
      time: '5 min ago',
      count: '5',
    },
    {
      avatar: userDate.avatar,
      name: 'some one',
      position: 'his position',
      lastMessage:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam molestiae fugit cum esse magni perferendis quis dolorem laboriosam? Vel accusantium aliquid non repellat enim culpa aspernatur in laborum odit laudantium?',
      time: '5 min ago',
    },
    {
      avatar: userDate.avatar,
      name: 'some one',
      position: 'his position',
      lastMessage:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam molestiae fugit cum esse magni perferendis quis dolorem laboriosam? Vel accusantium aliquid non repellat enim culpa aspernatur in laborum odit laudantium?',
      time: '5 min ago',
      count: '5',
    },
    {
      avatar: userDate.avatar,
      name: 'some one',
      position: 'his position',
      lastMessage:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam molestiae fugit cum esse magni perferendis quis dolorem laboriosam? Vel accusantium aliquid non repellat enim culpa aspernatur in laborum odit laudantium?',
      time: '5 min ago',
    },
    {
      avatar: userDate.avatar,
      name: 'some one',
      position: 'his position',
      lastMessage:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam molestiae fugit cum esse magni perferendis quis dolorem laboriosam? Vel accusantium aliquid non repellat enim culpa aspernatur in laborum odit laudantium?',
      time: '5 min ago',
      count: '5',
    },
    {
      avatar: userDate.avatar,
      name: 'some one',
      position: 'his position',
      lastMessage:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam molestiae fugit cum esse magni perferendis quis dolorem laboriosam? Vel accusantium aliquid non repellat enim culpa aspernatur in laborum odit laudantium?',
      time: '5 min ago',
    },
  ]

  return (
    <div>
      <div className="head bg-primary-50 p-4">
        <div className="chatHead flex items-center justify-between mb-2">
          <h3 className="font-medium text-xl mt-2 mb-4 flex">
            <span>Team chat</span>
            <span className="bg-themeWhite-white text-themeGray-700 text-xs p-1 border border-themeGray-200 rounded-md ml-2 rtl:ml-0 rtl:mr-2">
              40
            </span>
          </h3>
          <button className="bg-themeWhite-white border border-themeGray-200 rounded-md text-xl text-themeGray-700 p-2">
            <FiEdit />
          </button>
        </div>
        <Search
          inputStyle={`bg-themeWhite-white`}
          placeholder={'Search chats'}
          firstIcon={<PiMagnifyingGlass />}
        />
      </div>

      {chatBlocks.map((block, index) => (
        <div
          key={index}
          onClick={() => {
            console.log('getData')
            setCurrentPage('details')
          }}
          className={`chatBlock p-4 border-b ${
            block.count ? 'bg-themeWhite-white' : 'bg-themeGray-50'
          }`}
        >
          <div className="blockHead flex justify-between items-start text-themeGray-700">
            <div className="info flex items-center">
              <Image src={block.avatar} alt="user" width={40} height={40} />
              <div className="person mx-3 font-medium">
                <h3 className="name  text-sm">{block.name}</h3>
                <p className="position  text-xs text-themeGray-500">
                  {block.position}
                </p>
              </div>
            </div>
            <div
              className={`messageTime text-xs   ${
                block.count ? 'text-primary-500' : 'text-themeGray-700'
              }`}
            >
              {block.time}
            </div>
          </div>
          <div className="message flex items-start max-h-[3.5rem] overflow-hidden">
            <div className="lastMessage text-themeGray-500 mt-3 text-sm line-clamp-2">
              {block.lastMessage}
            </div>
            {block.count && (
              <div className="count m-2 py-0.5 px-2 rounded-full text-themeWhite-white bg-primary-500 text-xs">
                {block.count}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
