import React from 'react'
import Search from '../../../../elements/search/Search'
import { PiMagnifyingGlass } from 'react-icons/pi'
import { FiEdit } from 'react-icons/fi'
import Image from 'next/image'

export default function Ui({ setCurrentPage, chatBlocks }) {
  return (
    <div>
      <div className="head bg-primary-50 p-4">
        <div className="chatHead flex items-center justify-between mb-2">
          <h3 className=" font-semibold text-xl mt-2 mb-4 flex">
            <span>Team chats</span>
            <span className="bg-themeWhite-white text-themeGray-700 text-xs py-1 px-1.5 border border-themeGray-200 rounded-md ml-2 rtl:ml-0 rtl:mr-2">
              40
            </span>
          </h3>
          <button className="bg-themeWhite-white border border-themeGray-200 rounded-md text-xl text-themeGray-700 p-2">
            <FiEdit />
          </button>
        </div>
        <Search
          inputStyle={`bg-themeWhite-white py-2.5 rounded-lg`}
          placeholder={'Search chats'}
          firstIcon={<PiMagnifyingGlass />}
        />
      </div>

      {chatBlocks.map((block, index) => (
        <div
          key={index}
          onClick={() => {
            setCurrentPage('details')
          }}
          className={`chatBlock p-4 border-b cursor-pointer hover:bg-themeGray-50 ${
            block.count ? 'bg-themeWhite-white' : 'bg-themeGray-50'
          }`}
        >
          <div className="blockHead flex justify-between items-start text-themeGray-700">
            <div className="info flex items-center">
              <Image src={block.avatar} alt="user" width={40} height={40} />
              <div className="person mx-3 font-medium">
                <h3 className="name  text-sm text-themeGray-700">
                  {block.name}
                </h3>
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
