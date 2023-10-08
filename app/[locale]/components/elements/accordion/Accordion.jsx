import React, { useState } from 'react'
import { HiOutlineChevronDown } from 'react-icons/hi'

export default function Accordion({ head, body }) {
  const [status, setStatus] = useState(false)
  return (
    <div className="Wrapper">
      <div className="accordionHead flex items-center justify-between">
        <div className="w-full mr-2 rtl:ml-2 rtl:mr-0 my-2">{head}</div>
        <button
          onClick={() => setStatus(!status)}
          className={`chev ${
            status ? 'rotate-180' : 'rotate-0'
          } ease-in-out duration-300 text-xl text-themeGray-500 p-2`}
        >
          <HiOutlineChevronDown />
        </button>
      </div>
      <div
        className={`accordionBody overflow-hidden transition-max-h-screen ease-in-out duration-500 ${
          status ? 'max-h-screen' : 'max-h-0'
        } ${status}`}
      >
        {body}
      </div>
    </div>
  )
}
