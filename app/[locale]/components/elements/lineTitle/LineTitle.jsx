import React from 'react'

export default function LineTitle({ content, parentClass, childClass }) {
  return (
    <div
      className={`detailsTitle text-sm text-themeGray-600 relative  before:content-[' '] before:w-[100%] before:h-[1px] before:absolute before:top-[50%] z-0 before:bg-themeGray-200 ${parentClass}`}
    >
      <span
        className={`text bg-themeWhite-white pr-2 rlt:pr-0 rtl:pl-2 z-10 relative ${childClass}`}
      >
        {content}
      </span>
    </div>
  )
}
