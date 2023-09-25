'use client'
import React, { useEffect, useState } from 'react'
import useApi from '@/app/axios/useApi'
export default function Test2() {
  const [first, setFirst] = useState('')
  const api = useApi()
  useEffect(() => {
    ;(async () => {
      const y = await api.get('posts/1') //   const y = await x.json()
      setFirst(y.data.userId)
    })()
  }, [])

  return <div>{'y.data.userId : ' + first}</div>
}
