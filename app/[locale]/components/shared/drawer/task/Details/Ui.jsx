import React from 'react'
import { MdOutlineArrowBack } from 'react-icons/md'
import { SlOptionsVertical } from 'react-icons/sl'
import Label from '../label/Label'
import { BsCheckCircle } from 'react-icons/bs'
import ImageWithName from './imageWithName/ImageWithName'
import { RiFlag2Line } from 'react-icons/ri'
import { dotesColor, dotesRender } from '../functions'
import LineTitle from '../../../../../components/elements/lineTitle/LineTitle'
import { HiMiniArrowUpRight } from 'react-icons/hi2'
import WideButton from '../../../../../components/elements/buttons/wideButton/WideButton'
import { weekDayDayMonth } from '../../../../../func/time/time'

const Assignees = ({ data }) => (
  <div className="flex flex-wrap">
    {data.map((user, index) => (
      <ImageWithName key={index} user={user} />
    ))}
  </div>
)

export default function Ui({ setCurrentPage, block }) {
  const detailsComponents = {
    assignees: <Assignees data={block.details.assignees.data} />,

    dueDate: (
      <div className={`level text-xs flex items-center text-error-700 `}>
        {weekDayDayMonth(new Date(block.details.dueDate.data))}
      </div>
    ),
    importance: (
      <div
        className={`level text-xs flex items-center  w-fit py-0.5 px-2 rounded-full border ${
          block.level === 'high'
            ? 'text-error-700 bg-error-100 border-error-200 '
            : 'text-themeGray-600 bg-themeGray-100 border-themeGray-200 '
        }`}
      >
        <RiFlag2Line />
        <span className={`ml-1 rtl:mr-1 rtl:ml-0`}>{block.level}</span>
      </div>
    ),
    author: <Assignees data={block.details.author.data} />,
    urgency: (
      <span className="points flex items-center">
        <span
          className="count text-xs"
          style={{ color: dotesColor(block.points) }}
        >
          {block.points}
        </span>
        <span className="dotesGroup flex m-1">{dotesRender(block.points)}</span>
      </span>
    ),
  }

  return (
    <div className="">
      <div className="detailsHead flex justify-between p-4 border-b border-b-themeGray-200">
        <button
          className="mb-auto back text-themeGray-700 text-xl p-2   border border-themeGray-300 rounded-md mr-4 rtl:mr-0 rtl:ml-4"
          onClick={() => setCurrentPage('TaskItems')}
        >
          <MdOutlineArrowBack />
        </button>
        <div className="info flex-grow">
          <Label labels={block.labels} />
          <div
            className={`title text-base text-themeGray-800 font-semibold ${
              block.block.status === 'green' && 'line-through'
            }`}
          >
            {block.title}
          </div>
          <div className="from text-xs text-themeGray-700 ">{block.from}</div>
        </div>
        <button className="options text-themeGray-400 mb-auto p-1">
          <SlOptionsVertical />
        </button>
      </div>

      <div className="detailsBody p-3">
        <LineTitle content={'Task details'} parentClass={'mb-2'} />
        <div className="taskDetails">
          <table>
            {Object.keys(block.details).map((key, index) => (
              <tr key={index}>
                <td className="inline-flex items-center text-themeGray-500 text-xs mr-2 rtl:mr-0 rtl:ml-2 my-2">
                  <span className="icon mr-1 rtl:mr-0 rtl:ml-1">
                    {block.details[key].icon}
                  </span>
                  <span className="text">{block.details[key].title}</span>
                </td>
                <td>{detailsComponents[key]}</td>
              </tr>
            ))}
          </table>
        </div>
        <LineTitle content={'Description'} parentClass={'mb-2'} />
        <div
          className="description text-themeGray-700 text-sm"
          dangerouslySetInnerHTML={{ __html: block.description }}
        />
        <div className="actions my-3">
          <WideButton
            className={`${
              block.complete
                ? 'bg-themeWhite-white text-themeGray-700 border-themeGray-300 border opacity-50 pointer-events-none'
                : 'bg-primary-600 text-themeWhite-white'
            }`}
            iconL={<BsCheckCircle />}
            content={'Mark as complete'}
          />

          <WideButton
            className="border bg-themeWhite-white  text-themeGray-700 border-themeGray-300"
            iconR={<HiMiniArrowUpRight />}
            content={'Go to Task'}
            action={() => setCurrentPage('TaskItems')}
          />
        </div>
      </div>
    </div>
  )
}
