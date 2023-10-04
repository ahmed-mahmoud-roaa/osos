import { useState } from 'react'
import Message from './message/Message'
import Details from './details/Details'

export default function Chat() {
  const [currentPage, setCurrentPage] = useState('message')
  const pages = {
    message: <Message setCurrentPage={setCurrentPage} />,
    details: <Details setCurrentPage={setCurrentPage} />,
  }
  return <>{pages[currentPage]}</>
}
