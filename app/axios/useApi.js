import axios from 'axios'
import { useDispatch } from 'react-redux'
import { changePreloader } from '../store/slices/main'
import { addUserInfo } from '../store/slices/auth'
import Cookies from 'js-cookie'
import { baseURL } from '../const/request'
import { noAuthRoutes } from '../const/request'
import { roles } from '../const/request'

const useApi = () => {
  let axiosObject = {
    // baseURL: process.env.REACT_APP_API_URL,
    baseURL,
  }

  const mainInstance = axios.create(axiosObject)

  const dispatch = useDispatch()

  mainInstance.interceptors.request.use(
    function (config) {
      dispatch(changePreloader(true))
      //* add auth
      if (!noAuthRoutes.includes(config.url)) {
        const cookieToken = Cookies.get('token')
        config.headers.Authorization = cookieToken
          ? `Bearer ${cookieToken}`
          : ''
      } else {
        // config.headers['Client-Id'] = Client_id
      }
      //* end auth
      return config
    },
    (error) => {
      //if err don't do any thing and i will handel it in my global handel error
    }
  )

  mainInstance.interceptors.response.use(
    async (res) => {
      dispatch(changePreloader(false))
      res.data?.data?.token?.accessToken &&
        Cookies.set('token', res.data?.data?.token?.accessToken)

      if (res.data?.data?.userAccount?.email) {
        dispatch(
          addUserInfo({
            email: res.data?.data?.userAccount?.email,
            role: roles[res.data?.data?.userAccount?.userType],
          })
        )
        Cookies.set('userData', {
          email: res.data?.data?.userAccount?.email,
          role: roles[res.data?.data?.userAccount?.userType],
        })
      }

      return res
    },
    async (err) => {
      dispatch(changePreloader(false))
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
    }
  )
  return mainInstance
}

export default useApi
