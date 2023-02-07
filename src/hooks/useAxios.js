import { useEffect, useState } from 'react'
import { axiosApi } from 'api/client'

export const useAxios = ({ method, url = '', config = null }) => {
  const [data, setData] = useState(null)
  const [error, setError] = useState('')
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)

      try {
        const { data: response } = await axiosApi[method](
          url,
          JSON.parse(config),
        )
        setData(response)
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [config, method, url])

  return {
    data,
    error,
    isLoading,
  }
}
