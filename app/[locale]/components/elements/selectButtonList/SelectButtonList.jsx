import React, { useState } from 'react'
import { SelectButton } from 'primereact/selectbutton'
import { Wrapper } from './SelectButtonList.styled'
import { useSelector } from 'react-redux'

export default function SelectButtonList({ options, width }) {
  const [value, setValue] = useState(
    options.options && options.options[options.selected].value
  )
  const direction = useSelector((state) => state.main.direction)

  return (
    <Wrapper
      direction={direction}
      width={width}
      background={'var(--themeWhite-white)'}
      className={`card flex justify-content-center selectButtonList`}
    >
      <SelectButton
        value={value}
        onChange={(e) => {
          if (e.value) {
            options.options
              .filter((option) => option.value === e.value)[0]
              .action()
            return setValue(e.value)
          } else {
            return value
          }
        }}
        optionLabel="name"
        options={options.options}
      />
    </Wrapper>
  )
}
