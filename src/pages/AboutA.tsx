import { useEffect, useState } from 'react'
import axios from 'axios'

const AboutA = () => {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<Record<string, string>>({})

  const fetchData = async () => {
    setLoading(true)
    try {
      const res = await axios.get('/api/user/1')
      setData(res.data)
    } catch (err) {
      setData({
        error: (err as Error)?.message,
      })
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <div>AboutA</div>
      <button disabled={loading} onClick={fetchData}>
        刷新
      </button>
      <div>状态：{loading ? '加载中' : data?.error ? '失败' : '成功'}</div>
      <div>数据：{!loading && JSON.stringify(data)}</div>
    </>
  )
}

export default AboutA
