import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Ui from './Ui'

export default function AddEvent({ setCurrentPage }) {
  const dateTemplate = (date) => {
    // if (date.day > 10 && date.day < 15) {
    //   return (
    //     <strong style={{ textDecoration: 'line-through' }}>{date.day}</strong>
    //   )
    // }

    return date.day
  }

  const initialValues = {
    title: '',
    date: '',
    from: '',
    to: '',
    attendees: '',
  }

  const validationSchema = Yup.object().shape({
    title: Yup.string().required('This field is required'),
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

  function handleRemove(item) {
    const updatedItems = multiValues.filter(
      (selectedItem) => selectedItem.name !== item.name
    )
    formik.setFieldValue('attendees', updatedItems)
    setMultiValues(updatedItems)
  }

  // end multi select

  return (
    <Ui
      dateTemplate={dateTemplate}
      formik={formik}
      setMultiValues={setMultiValues}
      multiValues={multiValues}
      users={users}
      setCurrentPage={setCurrentPage}
      handleRemove={handleRemove}
    />
  )
}
