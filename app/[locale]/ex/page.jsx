'use client'
import { useRouter } from 'next-intl/client'
import React from 'react'

const Ex = () => {
  const router = useRouter()

  return (
    <div>
      <button onClick={() => router.push('/', { locale: 'ar' })}>ddss</button>
    </div>
  )
}

export default Ex
