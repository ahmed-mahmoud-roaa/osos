import React, { useState } from 'react'
import { HiOutlineChevronDown } from 'react-icons/hi'

export default function Accordion({ head, body }) {
  const [status, setStatus] = useState(false)
  return (
    <div className="Wrapper p-4">
      <div
        className="accordionHead flex items-center justify-between"
        onClick={() => setStatus(!status)}
      >
        <div className="w-full mr-3 rtl:ml-3 rtl:mr-0 my-2">{head}</div>
        <div
          className={`chev ${
            status ? 'rotate-180' : 'rotate-0'
          } ease-in-out duration-300 `}
        >
          <HiOutlineChevronDown />
        </div>
      </div>
      <div
        className={`accordionBody overflow-hidden transition-max-h-screen ease-in-out duration-300 ${
          status ? 'max-h-screen' : 'max-h-0'
        } ${status}`}
      >
        {body}
      </div>
    </div>
  )
}
