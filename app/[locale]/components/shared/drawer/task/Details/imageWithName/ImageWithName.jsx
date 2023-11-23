import Avatar from '@/app/[locale]/components/elements/avatar/Avatar'
import React from 'react'

export default function ImageWithName({ user }) {
  return (
    <div className="p-0.5 m-0.5 flex items-center w-fit text-themeGray-700 bg-themeGray-50 border border-themeGray-200 rounded-full">
      <span className="avatar">
        <Avatar src={user.avatar} width={1} height={1} />
      </span>
      <span className="name text-xs px-1">{user.name}</span>
    </div>
  )
}
