import Image from 'next/image'
import React from 'react'

export default function Avatar({ src, width, height, status, classAttr }) {
  return (
    <div
      style={{ minWidth: `${width}px` }}
      className={`avatarWrapper relative  w-c w-fit  ${classAttr}`}
    >
      <Image src={src} alt="avatar" width={width} height={height} />
      {status && (
        <span
          className={`status rounded-full absolute w-[30%] h-[30%] bottom-[-5%] right-[-5%] border border-themeWhite-white ${
            status ? 'bg-success-500' : 'bg-themeGray-500'
          }`}
        ></span>
      )}
    </div>
  )
}
