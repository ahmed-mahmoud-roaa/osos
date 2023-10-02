import React, { useState } from 'react'
import { Dropdown } from 'primereact/dropdown'
import './dropDownInput.scss'
import Image from 'next/image'
export default function DropDownInput({ options }) {
  const [selected, setSelected] = useState(null)

  const optionTemplate = (option) => {
    return (
      <div className="flex items-center text-themeGray-800">
        {option?.img.src && (
          <Image
            alt={option.name}
            src={option.img.src}
            className="mr-2 w-4 h-4 rtl:mr-0 rtl:ml-2"
            width={20}
            height={20}
          />
        )}
        <div>{option?.name}</div>
      </div>
    )
  }

  return (
    <div className="dropDownInput bg-themeWhite-white text-themeGray-800">
      <Dropdown
        value={selected || options.options[options.selected]}
        onChange={(e) => {
          const selectedOption = options.options.filter(
            (option) => option.name === e.value.name
          )[0]

          selectedOption.action(selectedOption.code)
          return setSelected(e.value)
        }}
        options={options.options}
        optionLabel="name"
        valueTemplate={optionTemplate}
        itemTemplate={optionTemplate}
      />
    </div>
  )
}
