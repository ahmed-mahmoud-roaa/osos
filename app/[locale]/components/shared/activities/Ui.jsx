/* eslint-disable @next/next/no-img-element */
import React from 'react'
import NotificationButton from '../../elements/buttons/notificationButton/NotificationButton'
import Image from 'next/image'

export default function Ui({
  avatar,
  dynamicElements,
  openDrawer,
  profileActive,
}) {
  return (
    <div className="activities flex items-center ">
      <span className="flex items-center">
        {Object.values(dynamicElements).map((button, index) => (
          <NotificationButton
            key={index}
            icon={button.icon}
            label={button.label}
            action={button.action}
            number={button.number}
            active={button.active}
          />
        ))}
      </span>
      <span>
        <button
          className={`avatarButton border-[0.25rem] fullRound ml-3 rtl:ml-0 rtl:mr-3  ${
            profileActive
              ? 'border-primary-600'
              : ' border-themeGray-200 hover:border-primary-200'
          }`}
          onClick={() => openDrawer('profile')}
        >
          <img
            src={avatar}
            alt={'user avatar'}
            style={{ width: '2.5rem', height: '2.5rem' }}
          />
        </button>
      </span>
    </div>
  )
}
