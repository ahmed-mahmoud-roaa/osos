import React, { useState } from 'react'
import { Dropdown } from 'primereact/dropdown'
import Image from 'next/image'
import './dropDownInput.scss'
export default function DropDownInput({
  options,
  className,
  placeholder,
  optionStyle,
}) {
  const [selected, setSelected] = useState(null)

  const optionTemplate = (option, props) => {
    return (
      <>
        <div className={`flex items-center text-themeGray-800 ${optionStyle}`}>
          {option ? (
            <>
              {option?.img?.src && (
                <Image
                  alt={option.name}
                  src={option.img.src}
                  className="mr-2 w-4 h-4 rtl:mr-0 rtl:ml-2"
                  width={20}
                  height={20}
                />
              )}
              {option?.icon && (
                <span className="mr-2 w-4 h-4 rtl:mr-0 rtl:ml-2">
                  {option.icon}
                </span>
              )}
              <div>{option?.name}</div>
            </>
          ) : (
            <div> {props.placeholder}</div>
          )}
        </div>
      </>
    )
  }

  return (
    <div
      className={`dropDownInput bg-themeWhite-white text-themeGray-800 ${className}`}
    >
      {console.log({ options })}
      <Dropdown
        value={
          selected ||
          (options.selected >= 0 && options.options[options.selected]) ||
          null
        }
        onChange={(e) => {
          e.value.action(e.value.code)
          setSelected(e.value)
        }}
        options={options.options}
        optionLabel="name"
        placeholder={placeholder ? placeholder : '  '}
        valueTemplate={optionTemplate}
        itemTemplate={optionTemplate}
      />
    </div>
  )
}
