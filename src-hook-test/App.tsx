// useState
import { useState } from 'react'

function App() {
  // setXxx
  // useState(fn)不支持异步计算初始值
  const [num, setNum] = useState(1);
  const [num2, setNum2] = useState(() => {
    // 执行逻辑计算初始值
    const num1 = 1
    const num2 = 2
    return num1 * num2
  });

  return (
    <div>
      <div onClick={() => setNum(num + 1)}>{num}</div>
      <div onClick={() => setNum((preNum) => preNum + 2)}>{num}</div>
    </div>
  )
}

export default App