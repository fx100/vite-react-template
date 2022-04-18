import { useState } from 'react'
import useSWR from 'swr'

const AboutA = () => {
  const [userId, setUserId] = useState(1)

  const { data: user, error: userErr } = useSWR(`/api/user/${userId}`)

  return (
    <>
      <div>AboutA</div>
      <button
        disabled={!userErr && !user}
        onClick={() => {
          setUserId((userId) => userId + 1)
        }}
      >
        刷新 {userId}
      </button>
      <div>
        状态：{!userErr && !user ? '加载中' : userErr ? '失败' : '成功'}
      </div>
      <div>
        数据：
        {(userErr?.message &&
          JSON.stringify({
            error: userErr?.message,
          })) ||
          (user && JSON.stringify(user.data))}
      </div>
    </>
  )
}

export default AboutA
