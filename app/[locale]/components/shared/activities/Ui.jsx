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
          className={`avatarButton border-4 rounded-full ml-3 rtl:ml-0 rtl:mr-3  ${
            profileActive
              ? 'border-primary-600'
              : ' border-themeGray-200 hover:border-primary-200'
          }`}
          onClick={() => openDrawer('profile')}
        >
          <Image src={avatar} alt={'user avatar'} width="40" height="40" />
        </button>
      </span>
    </div>
  )
}
