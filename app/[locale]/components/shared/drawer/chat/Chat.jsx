'use client'
import { useState } from 'react'
import MessageHistory from './messageHistory/MessageHistory'
import Details from './details/Details'

export default function Chat() {
  const [currentPage, setCurrentPage] = useState('message')
  const pages = {
    message: <MessageHistory setCurrentPage={setCurrentPage} />,
    details: <Details setCurrentPage={setCurrentPage} />,
  }
  return <>{pages[currentPage]}</>
}
