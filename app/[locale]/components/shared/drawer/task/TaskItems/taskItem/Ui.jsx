import Accordion from '@/app/[locale]/components/elements/accordion/Accordion'
import CheckBox from '@/app/[locale]/components/elements/checkBox/CheckBox'
import React from 'react'
import { MdOutlineWatchLater } from 'react-icons/md'
import { RiFlag2Line } from 'react-icons/ri'
import { TbWeight } from 'react-icons/tb'
import Label from '../../label/Label'
import { dotesColor, dotesRender } from '../../functions'
import { dateInLabel } from '@/app/[locale]/func/time/time'

const head = (head) => (
  <div
    className={`head flex items-center py-2 font-semibold ${
      head.title === 'High'
        ? 'text-error-700'
        : head.title === 'Normal'
        ? 'text-primary-600'
        : 'text-themeGray-600'
    }`}
  >
    {head.icon ? (
      <span
        className={`icon mr-2 rtl:mr-0 rtl:ml-2 text-base  ${
          head.title === 'High'
            ? 'text-error-400 '
            : head.title === 'Normal'
            ? 'text-primary-400 '
            : 'text-themeGray-400'
        }`}
      >
        {head.icon}
      </span>
    ) : (
      ''
    )}
    <span className={`title mr-2 rtl:mr-0 rtl:ml-2 text-base `}>
      {head.title}
    </span>
    <span
      className={`count py-0.5 px-1.5 text-xs rounded-full ${
        head.title === 'High'
          ? ' bg-error-50 border-error-200 border'
          : 'border-themeGray-200 border'
      }`}
    >
      {head.count}
    </span>
  </div>
)

const body = (body, setCurrentPage) => (
  <>
    {body.map((block, index) => (
      <div
        key={index}
        className={`flex rounded-xl border border-themeGray-100 overflow-hidden my-3 ${
          block.block.status == 'red' ? 'bg-error-25' : ''
        }`}
      >
        <div
          className={`check py-4 px-2  ${
            block.block.status == 'red'
              ? 'bg-error-100'
              : block.block.status == 'green'
              ? 'bg-themeGreen-200'
              : 'bg-themeGray-200'
          }`}
        >
          <CheckBox status={false} />
        </div>
        <div className="details p-3">
          <Label labels={block.labels} />

          <div
            onClick={() => setCurrentPage('details')}
            className={`title text-base my-1 text-themeGray-800 cursor-pointer font-semibold ${
              block.block.status === 'green' && 'line-through'
            }`}
          >
            {block.title}
          </div>
          <div className="from text-xs text-themeGray-600 mb-3">
            {block.from}
          </div>
          <div className="info flex items-center text-xs justify-between">
            <span className="points flex items-center">
              <span
                className="count"
                style={{ color: dotesColor(block.points) }}
              >
                {block.points}
              </span>
              <span className="dotesGroup flex m-1">
                {dotesRender(block.points)}
              </span>
            </span>
            <div
              className={`level flex items-center ${
                block.level === 'high' ? 'text-error-700' : 'text-themeGray-600'
              }`}
            >
              <RiFlag2Line />
              <span className={`ml-1 rtl:mr-1 rtl:ml-0 `}>{block.level}</span>
            </div>
            <div className="flag flex items-center text-themeGray-700">
              <TbWeight />
              <span className="ml-1 rtl:mr-1 rtl:ml-0">{block.weight}</span>
            </div>
            <div
              className={`time flex items-center ${
                block.time.status == 'red'
                  ? 'text-error-700'
                  : 'text-themeGray-600'
              }`}
            >
              <MdOutlineWatchLater />
              <span className="ml-1 rtl:mr-1 rtl:ml-0">
                {dateInLabel(new Date(block.time.title), false)}
              </span>
            </div>
          </div>
        </div>
      </div>
    ))}
  </>
)

export default function Ui({ taskData, setCurrentPage }) {
  return (
    <>
      {taskData.map((item, index) => (
        <div key={index} className="border-b border-themeGray-100 px-4">
          <Accordion
            head={head(item.head)}
            body={body(item.body, setCurrentPage)}
          />
        </div>
      ))}
    </>
  )
}
