import React from 'react'

export default function Search({
  placeholder,
  firstIcon,
  lastIcon,
  roundedFull,
  className,
  inputStyle,
}) {
  return (
    <div className={`relative text-themeGray-500 ${className}`}>
      <input
        type="text"
        placeholder={placeholder}
        className={`${inputStyle} md:min-w-full relative w-full ${
          roundedFull ? 'rounded-full' : 'rounded-md'
        } border border-themeGray-300 focus-visible:outline-0 py-2 px-2 ${
          firstIcon ? 'pl-8 rtl:pr-8' : 'pl-2 rtl:pr-2'
        }  ${
          lastIcon ? 'pr-10 rtl:pl-10' : 'pr-2 rtl:pl-2'
        }  flex items-center `}
      />
      <span className="icon absolute left-3 rtl:left-auto rtl:right-3 top-[50%] translate-y-[-50%]">
        {firstIcon}
      </span>

      {lastIcon && (
        <span
          className={`icon absolute right-3 rtl:left-3 rtl:right-auto   top-2 flex items-center rtl:flex-row-reverse rounded-md border border-themeGray-100 bg-themeGray-50 mix-blend-multiply px-0.5`}
        >
          {lastIcon}
        </span>
      )}
    </div>
  )
}
