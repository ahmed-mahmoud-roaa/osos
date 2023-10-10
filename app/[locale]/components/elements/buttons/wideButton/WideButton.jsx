import React from 'react'

export default function WideButton({
  className,
  iconR,
  content,
  iconL,
  action,
}) {
  return (
    <button
      className={`${className} w-full my-2 flex items-center justify-center p-2 rounded-md `}
      onClick={() => action && action()}
    >
      {iconL && iconL}
      <span className="text px-2">{content}</span>
      {iconR && iconR}
    </button>
  )
}
