import React, { useState } from 'react'

export function Counter() {
  const [count, setCount] = useState(0)

  function handleDecrease() {
    setCount(count - 1)
  }

  function handleIncrease() {
    setCount(count + 1)
  }

  return (
    <div>
      <h1>Hello CodeSandbox</h1>
      <h2>You clicked {count} times!</h2>
      <button onClick={handleDecrease}>Decrement</button>
      <button onClick={handleIncrease}>Increment</button>
    </div>
  )
}
