import AvatarGroupeImage from '@/app/[locale]/components/elements/avatarGroupeImage/AvatarGroupeImage'
import React from 'react'
import { HiOutlineChevronRight } from 'react-icons/hi'
import { MdOutlineWatchLater } from 'react-icons/md'

export default function CalendarEvent({ eventData }) {
  return (
    <>
      {eventData.map((data, index) => (
        <div
          key={index}
          className="p-3 border-l-8 border-primary-200  text-themeGray-800 bg-themeWhite-white shadow-[0_0px_0.3rem_var(--themeGray-200)] mx-4 mt-1 mb-2 rounded-lg"
        >
          <div className="eventTitle text-base text-themeGray-800 font-semibold">
            {data.title}
          </div>
          <div className="eventTime text-themeGray-600 flex items-center text-xs">
            <MdOutlineWatchLater />
            <span className="timeFrom m-1 ">{data.from}</span>
            <span className="rtl:rotate-180">
              <HiOutlineChevronRight />
            </span>
            <span className="timeFrom ml-1 rtl:ml-0 rtl:mr-1 ">{data.to}</span>
          </div>
          <AvatarGroupeImage
            images={data.avatars}
            size="1.5rem"
            count={5}
            fontSize={'0.75rem'}
          />
        </div>
      ))}
    </>
  )
}
