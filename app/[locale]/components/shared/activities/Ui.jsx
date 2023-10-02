import React from 'react'
import NotificationButton from '../../elements/buttons/notificationButton/NotificationButton'
import Image from 'next/image'

export default function Ui({ avatar, dynamicElements, openDrawer }) {
  return (
    <div className="activities flex items-center ">
      {Object.values(dynamicElements).map((button, index) => (
        <NotificationButton
          key={index}
          icon={button.icon}
          label={button.label}
          action={button.action}
          number={button.number}
        />
      ))}

      <button
        className={`avatarButton border-4 border-themeGray-300 rounded-full ml-2 rtl:ml-0 rtl:mr-2 hover:border-primary-200`}
        onClick={() => openDrawer('profile')}
      >
        <Image src={avatar} alt={'user avatar'} width="40" height="40" />
      </button>
    </div>
  )
}
