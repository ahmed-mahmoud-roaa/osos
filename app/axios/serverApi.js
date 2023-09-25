import Cookies from 'js-cookie'
import { baseURL } from '../const/request'
import { noAuthRoutes } from '../const/request'
import { roles } from '../const/request'

const serverApi = (endPoint, type) => {
  const headers = new Headers()

  headers.append('Content-Type', 'application/json') // Set the Content-Type header as an example

  if (!noAuthRoutes.includes(endPoint)) {
    const cookieToken = Cookies.get('token')
    headers.append('Authorization', cookieToken ? `Bearer ${cookieToken}` : '')
  }

  const options = {
    cache: type ? type : 'force-cache',
    method: 'GET', // HTTP request method (e.g., GET, POST, PUT, DELETE)
    headers: headers, // Pass the Headers object here
    // You can also set other options like body, mode, cache, etc.
  }

  return fetch(baseURL + endPoint, options)
    .then((response) => {
      // Handle the response here
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }

      return response.json() // Parse the response as JSON
    })
    .then((res) => {
      console.log({ res })
      // Handle the JSON data here
      res.data?.data?.token?.accessToken &&
        Cookies.set('token', res.data?.data?.token?.accessToken)
      if (res.data?.data?.userAccount?.email) {
        Cookies.set('userData', {
          email: res.data?.data?.userAccount?.email,
          role: roles[res.data?.data?.userAccount?.userType],
        })
      }

      return res
    })
    .catch((err) => {
      // Handle errors here
      if (err?.response?.status == 401) {
        Cookies.remove('userData')
        Cookies.remove('token')
        //route to login
      }

      if (err?.response?.data?.metadata) {
        //when the Access Token is expired
        // err.response.data.metadata.errors.map((element) => {
        //   toast.error(element.message, {
        //     position: toast.POSITION.TOP_CENTER,
        //   })
        // })
      }
      console.error('Fetch error:', err)
    })
}

export default serverApi
