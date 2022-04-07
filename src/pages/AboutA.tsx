import { useEffect, useState } from 'react'
import request from '~/utils/request'

const AboutA = () => {
  const [userId, setUserId] = useState(1)
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<Record<string, string>>({})

  const fetchData = async (userId: number) => {
    setLoading(true)
    try {
      const res = await request(`/api/user/${userId}`)
      setData(res.data)
    } catch (err) {
      console.log(err)
      setData({
        error: (err as Error)?.message,
      })
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchData(userId)
  }, [userId])

  return (
    <>
      <div>AboutA</div>
      <button
        disabled={loading}
        onClick={() => {
          setUserId((userId) => userId + 1)
        }}
      >
        刷新
      </button>
      <div>状态：{loading ? '加载中' : data?.error ? '失败' : '成功'}</div>
      <div>数据：{!loading && JSON.stringify(data)}</div>
    </>
  )
}

export default AboutA
