import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Calendar } from 'primereact/calendar'
import { Wrapper } from './AddEvent.styled'
import { BiCalendar } from 'react-icons/bi'
import { BsCalendar4 } from 'react-icons/bs'
import { MdClose, MdOutlineWatchLater } from 'react-icons/md'
import CustomMultiSelect from '@/app/[locale]/components/elements/customMultiSelect/CustomMultiSelect'
import WideButton from '@/app/[locale]/components/elements/buttons/wideButton/WideButton'
import Avatar from '@/app/[locale]/components/elements/avatar/Avatar'

export default function AddEvent({ setCurrentPage }) {
  const [date, setDate] = useState(null)
  const [from, setFrom] = useState(null)
  const [to, setTo] = useState(null)
  const dateTemplate = (date) => {
    // if (date.day > 10 && date.day < 15) {
    //   return (
    //     <strong style={{ textDecoration: 'line-through' }}>{date.day}</strong>
    //   )
    // }

    return date.day
  }

  const initialValues = {
    name: '',
    date: '',
    from: '',
    to: '',
    attendees: '',
  }

  function isSameDay(date1, date2) {
    return (
      date1.getDate() === date2.getDate() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getFullYear() === date2.getFullYear()
    )
  }
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('This field is required'),
    date: Yup.date()
      .required('Date is required')
      .test('is-in-future', 'Date must be in the future', (value) => {
        if (!value) return true // Skip validation if the date is not provided
        const currentDate = new Date()
        currentDate.setHours(0, 0, 0, 0) // Set the time to midnight
        return value >= currentDate // Validate that the date is not in the past
      }),
    from: Yup.string().required('This field is required'),
    to: Yup.string().required('This field is required'),
    attendees: Yup.array()
      .min(1, 'This field is required')
      .required('This field is required'),
  })

  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      console.log('vaues', values)
    },
  })

  // multi select
  const [multiValues, setMultiValues] = useState(null)

  const users = [
    {
      name: 'Australia',
      code: 'AU',
      avatar: 'https://www.svgrepo.com/show/61986/avatar.svg',
    },
    {
      name: 'Brazil',
      code: 'BR',
      avatar: 'https://www.svgrepo.com/show/61986/avatar.svg',
    },
    {
      name: 'China',
      code: 'CN',
      avatar: 'https://www.svgrepo.com/show/61986/avatar.svg',
    },
    {
      name: 'Egypt',
      code: 'EG',
      avatar: 'https://www.svgrepo.com/show/61986/avatar.svg',
    },
    {
      name: 'France',
      code: 'FR',
      avatar: 'https://www.svgrepo.com/show/61986/avatar.svg',
    },
    {
      name: 'Germany',
      code: 'DE',
      avatar: 'https://www.svgrepo.com/show/61986/avatar.svg',
    },
    {
      name: 'India',
      code: 'IN',
      avatar: 'https://www.svgrepo.com/show/61986/avatar.svg',
    },
    {
      name: 'Japan',
      code: 'JP',
      avatar: 'https://www.svgrepo.com/show/61986/avatar.svg',
    },
    {
      name: 'Spain',
      code: 'ES',
      avatar: 'https://www.svgrepo.com/show/61986/avatar.svg',
    },
    {
      name: 'United States',
      code: 'US',
      avatar: 'https://www.svgrepo.com/show/61986/avatar.svg',
    },
  ]

  const optionTemplate = (option) => {
    return (
      option && (
        <div className="flex align-items-center">
          <div className="py-1 px-1 m-0.5 flex items-center w-fit text-themeGray-700 bg-themeWhite-white border border-themeGray-200 rounded-md">
            <span className="avatar">
              <Avatar src={option.avatar} width={16} height={16} />
            </span>
            <span className="name text-xs px-1">{option.name}</span>
            <span
              className="text-themeGray-400 text-sm"
              onClick={() => handleRemove(option)}
            >
              <MdClose />
            </span>
          </div>
        </div>
      )
    )
  }

  function handleRemove(item) {
    const updatedItems = multiValues.filter(
      (selectedItem) => selectedItem.name !== item.name
    )
    formik.setFieldValue('attendees', updatedItems)
    setMultiValues(updatedItems)
  }

  // end multi select

  return (
    <Wrapper>
      <form onSubmit={formik.handleSubmit} className="p-4  text-themeGray-800">
        <div className="inputWrapper mb-2">
          <label className="text-sm mb-2 block">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
            className="block border border-themeGray-200 p-2 bg-themeWhite-white text-themeGray-800 rounded-lg w-full text-base outline-none"
          />

          {formik.touched.name && formik.errors.name && (
            <span
              type="invalid"
              style={{ display: 'block' }}
              className="validationError text-xs text-error-700 mt-1"
            >
              {formik.errors.name}
            </span>
          )}
        </div>
        <div className="inputWrapper mb-2 mt-4">
          <label className="text-sm mb-2 block">Date</label>
          <span className="calendarWrapper relative  block border border-themeGray-200  bg-themeWhite-white text-themeGray-800 rounded-lg w-full text-base outline-none">
            <span className="icon absolute left-3 top-3 z-10 ">
              <BsCalendar4 />
            </span>
            <div className="pl-7 rtl:pl-0 rtl:pr-7">
              <Calendar
                value={date}
                onChange={(e) => {
                  formik.setFieldValue('date', e.value)
                  setDate(e.value)
                }}
                dateTemplate={dateTemplate}
                name="date"
                id="date"
              />
            </div>
          </span>

          {formik.touched.date && formik.errors.date && (
            <span
              type="invalid"
              style={{ display: 'block' }}
              className="validationError text-xs text-error-700 mt-1"
            >
              {formik.errors.date}
            </span>
          )}
        </div>
        <div className="timeSelector flex justify-between">
          <div className="inputWrapper mt-4 text-themeGray-700 w-[48%]">
            <label className="text-sm mb-2 block">From</label>
            <span className="calendarWrapper relative  block border border-themeGray-200  bg-themeWhite-white text-themeGray-800 rounded-lg w-full text-base outline-none">
              <span className="icon absolute left-3 top-2 z-10 text-2xl">
                <MdOutlineWatchLater />
              </span>
              <div className="pl-8 rtl:pl-0 rtl:pr-8">
                <Calendar
                  timeOnly
                  showTime
                  hourFormat="12"
                  onChange={(e) => {
                    formik.setFieldValue('from', e.value)
                    setFrom(e.value)
                  }}
                  onBlur={(e) => {
                    if (!e.target.value) {
                      formik.setFieldValue('from', null)
                    }
                  }}
                  name="from"
                />
              </div>
            </span>

            {formik.touched.from && formik.errors.from && (
              <span
                type="invalid"
                style={{ display: 'block' }}
                className="validationError text-xs text-error-700 mt-1"
              >
                {formik.errors.from}
              </span>
            )}
          </div>
          <div className="inputWrapper mt-4 text-themeGray-700 w-[48%]">
            <label className="text-sm mb-2 block">To</label>
            <span className="calendarWrapper relative  block border border-themeGray-200  bg-themeWhite-white text-themeGray-800 rounded-lg w-full text-base outline-none">
              <span className="icon absolute left-3 top-2 z-10 text-2xl">
                <MdOutlineWatchLater />
              </span>
              <div className="pl-8 rtl:pl-0 rtl:pr-8">
                <Calendar
                  timeOnly
                  showTime
                  hourFormat="12"
                  onChange={(e) => {
                    formik.setFieldValue('to', e.value)
                    setTo(e.value)
                  }}
                  onBlur={(e) => {
                    if (!e.target.value) {
                      formik.setFieldValue('to', null)
                    }
                  }}
                />
              </div>
            </span>

            {formik.touched.to && formik.errors.to && (
              <span
                type="invalid"
                style={{ display: 'block' }}
                className="validationError text-xs text-error-700 mt-1"
              >
                {formik.errors.to}
              </span>
            )}
          </div>
        </div>
        <div className="inputWrapper mb-2 mt-4 text-themeGray-700">
          <label className="text-sm mb-2 block ">Attendees</label>
          <CustomMultiSelect
            multiValues={multiValues}
            users={users}
            optionTemplate={optionTemplate}
            name={'attendees'}
            placeholder=" "
            onChange={(e) => {
              console.log('multiValues', e.value)
              formik.setFieldValue('attendees', e.value)
              setMultiValues(e.value)
            }}
          />
          {formik.touched.attendees && formik.errors.attendees && (
            <span
              type="invalid"
              style={{ display: 'block' }}
              className="validationError text-xs text-error-700 mt-1"
            >
              {formik.errors.attendees}
            </span>
          )}
          <div className="actions">
            <WideButton
              content={'Save'}
              className={'bg-primary-500 my-4 text-themeWhite-white'}
              type={'submit'}
            />
            <WideButton
              content={'Cancel'}
              className={'border-themeGray-200 border my-4 text-themeGray-800'}
              action={() => setCurrentPage('CalendarDate')}
            />
          </div>
        </div>
      </form>
    </Wrapper>
  )
}
