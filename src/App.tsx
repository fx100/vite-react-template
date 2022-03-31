import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p>Hello Vite + React!</p>
      <p>
        <button type="button" onClick={() => setCount((count) => count + 1)}>
          count is: {count}
        </button>
      </p>
    </>
  )
}

export default App
