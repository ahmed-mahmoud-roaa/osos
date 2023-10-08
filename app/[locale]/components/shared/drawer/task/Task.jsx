import { TabPanel, TabView } from 'primereact/tabview'
import React, { useState } from 'react'
import { MdAdd, MdOutlineWatchLater, MdPlaylistAdd } from 'react-icons/md'
import FakeTabs from '../../../elements/fakeTabs/FakeTabs'
import Search from '../../../elements/search/Search'
import { Dropdown } from 'primereact/dropdown'
import { PiFunnelSimpleBold } from 'react-icons/pi'
import DropDownInput from '../../../elements/dropDownInput/DropDownInput'
import { BiSolidAlarmExclamation } from 'react-icons/bi'
import { BsBox, BsExclamationOctagon } from 'react-icons/bs'
import { RiFlag2Line } from 'react-icons/ri'
import { LiaWeightHangingSolid, LiaWeightSolid } from 'react-icons/lia'
import { TbWeight } from 'react-icons/tb'

export default function Task() {
  const orderTask = {
    options: [
      {
        name: 'Due date',
        code: 'Due-date',
        icon: <MdOutlineWatchLater />,
        action: () => {},
      },
      {
        name: 'Urgency',
        code: 'Urgency',
        icon: <BsExclamationOctagon />,
        action: () => {},
      },
      {
        name: 'Importance',
        code: 'Importance',
        icon: <RiFlag2Line />,
        action: () => {},
      },
      {
        name: 'Weight',
        code: 'Weight',
        icon: <TbWeight />,
        action: () => {},
      },
      {
        name: 'Application',
        code: 'Application',
        icon: <BsBox />,
        action: () => {},
      },
    ],
  }

  const [currentCat, setCurrentCat] = useState(0)
  const cats = [
    {
      text: 'pending',
      count: 5,
    },
    {
      text: 'Done',
      count: 0,
    },
    {
      text: 'Overview',
    },
  ]

  return (
    <div>
      <div className="head bg-primary-50 py-2 px-4">
        <div className="chatHead flex items-center justify-between mb-2">
          <h3 className="font-medium text-xl mt-2 mb-4 flex">
            <span>My Tasks</span>
          </h3>
          <button className="bg-themeWhite-white border border-themeGray-200 rounded-md text-lg text-themeGray-700 p-1.5">
            <MdAdd />
          </button>
        </div>
        <FakeTabs
          currentCat={currentCat}
          setCurrentCat={setCurrentCat}
          data={cats}
        />
        <div className="search mt-3  mb-1 flex">
          <Search
            placeholder="Search tasks"
            className={'mr-3 rtl:mr-0 rtl:ml-3'}
            inputStyle={'w-full bg-themeWhite-white'}
          />

          <DropDownInput
            optionStyle={'text-sm'}
            options={orderTask}
            className="noArrow   w-36"
            placeholder="Order tasks by"
          />
        </div>
      </div>
      <div className="content p-4"></div>
    </div>
  )
}
