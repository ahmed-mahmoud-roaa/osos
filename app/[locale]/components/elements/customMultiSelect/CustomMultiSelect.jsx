import React from 'react'
import { MultiSelect } from 'primereact/multiselect'
import { Wrapper } from './CustomMutiSelect.styled'

export default function CustomMultiSelect({
  multiValues,
  users,
  optionTemplate,
  placeholder,
  name,
  onChange,
}) {
  return (
    <Wrapper>
      <div className="card flex justify-content-center border rounded-lg border-themeGray-200 overflow-hidden min-h-[2.75rem]">
        <MultiSelect
          value={multiValues}
          options={users}
          onChange={onChange}
          optionLabel="name"
          itemTemplate={optionTemplate}
          selectedItemTemplate={optionTemplate}
          className="w-full md:w-20rem"
          display="chip"
          name={name}
          placeholder={placeholder}
        />
      </div>
    </Wrapper>
  )
}
