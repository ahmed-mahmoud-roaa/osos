import CheckBox from '@/app/[locale]/components/elements/checkBox/CheckBox'
import LineTitle from '@/app/[locale]/components/elements/lineTitle/LineTitle'
import React from 'react'

export default function Ui({ checks }) {
  return (
    <div>
      <div className="text-base font-semibold head py-6 px-4 bg-primary-50 border-b border-themeGray-200 shadow-[0_0px_10px_var(--themeGray-200)] rounded-t-3xl after:w-full after:h-full relative after:absolute after:top-0 after:left-0 after:bg-primary-50 after:content-[' '] after:z-[-1]">
        Calendar Setting
      </div>
      <div className="settingWrapper p-4">
        <LineTitle content={'AVAILABLE CALENDARS'} parentClass="pb-2 mb-2" />
        {checks.map((check, index) => (
          <dv className="checkBox" key={index}>
            <CheckBox
              label={check.label}
              status={check.status}
              action={() => check.action()}
            />
          </dv>
        ))}
      </div>
    </div>
  )
}
