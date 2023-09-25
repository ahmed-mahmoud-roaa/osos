import React from 'react'
import serverApi from '@/app/axios/serverApi'
export default async function Test() {
  const y = await serverApi('api/items', 'no-store') //   const y = await x.json()
  console.log({ y })
  return <div>{'y.data.userId : ' + y[0].name}</div>
}
// import React from 'react'
// import serverApi from '@/app/axios/serverApi'
// export default async function Test() {
//   const x = serverApi()
//   const y = await x.get('posts/1') //   const y = await x.json()
//   return <div>{'y.data.userId : ' + y.data.userId}</div>
// }
