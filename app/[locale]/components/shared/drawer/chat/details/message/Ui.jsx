import Avatar from '@/app/[locale]/components/elements/avatar/Avatar'
import React, { useState } from 'react'
import MessageReact from './messageReact/MessageReact'
import { Tooltip } from 'primereact/tooltip'

export default function Ui({ messageData, user, handleEmoji }) {
  const [showReact, setShowReact] = useState(false)
  const [emoji, setEmoji] = useState(messageData.reactions)

  return (
    <div
      className={`message flex ${
        messageData.owner !== 'you'
          ? 'mr-auto rtl:mr-0 rtl:ml-auto max-w-[90%] '
          : 'ml-auto rtl:ml-0 rtl:mr-auto max-w-[70%] '
      } ${Object.keys(emoji).length > 0 ? 'mb-10' : 'mb-5'} `}
    >
      {console.log(Object.keys(emoji).length > 0, '2222222222222')}
      {messageData.owner !== 'you' && (
        <Avatar
          src={user.avatar}
          width={40}
          height={40}
          status={messageData.status}
          classAttr={'mr-3 rtl:mr-0 rtl:ml-3'}
        />
      )}
      <div>
        <div className="flex justify-between">
          <div className="name text-sm text-themeGray-700 font-semibold">
            {messageData.owner !== 'you' ? user.name : 'You'}
          </div>
          <div className="time text-themeGray-500 text-sm">
            {messageData.time}
          </div>
        </div>
        <div
          onClick={() => setShowReact(!showReact)}
          className={` cursor-pointer ${
            messageData.owner !== 'you'
              ? ' bg-themeGray-100 text-themeGray-900  rounded-tl-[0px] rtl:rounded-tr-[0px] rtl:rounded-tl-xl '
              : 'bg-primary-600 text-themeWhite-white rounded-tr-[0px]  rtl:rounded-tl-[0px]  rtl:rounded-tr-xl '
          } message relative px-3 py-2 rounded-xl mt-2 text-base`}
        >
          {messageData.message}
          <div className="react absolute right-0 rtl:right-auto rtl:left-0 text-base bottom-[-2rem] ">
            {emoji &&
              Object.keys(handleEmoji(emoji)).map((react, index) => (
                <>
                  <Tooltip target={`.emoji-${index}`}>
                    <div className="w-max break-normal">
                      {handleEmoji(emoji)[react].author.join(' , ')}
                    </div>
                  </Tooltip>
                  <span
                    key={index}
                    className={`emoji-${index} px-2 py-1 bg-themeGray-50 rounded-full ml-1 rtl:ml-0 rtl:mr-1`}
                  >
                    {handleEmoji(emoji)[react].count > 1 && (
                      <span className="count text-xs text-themeGray-400">
                        {handleEmoji(emoji)[react].count}
                      </span>
                    )}
                    {react}
                  </span>
                </>
              ))}
          </div>
          <MessageReact setEmoji={setEmoji} emoji={emoji} show={showReact} />
        </div>
      </div>
    </div>
  )
}
