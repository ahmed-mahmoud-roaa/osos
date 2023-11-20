'use client'
import React, { useState } from 'react'
import TaskItems from './TaskItems/TaskItems'
import Details from './Details/Details'

export default function Task() {
  const [currentPage, setCurrentPage] = useState('TaskItems')
  const pages = {
    TaskItems: <TaskItems setCurrentPage={setCurrentPage} />,
    details: <Details setCurrentPage={setCurrentPage} />,
  }
  return <>{pages[currentPage]}</>
}
