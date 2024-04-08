/*
 * useRef: 保存DOM引用
 * forwardRef + useImperativeHandle: ref 传递
 */
import React, { useEffect, useImperativeHandle, useRef } from "react";

interface RefProps {
  aaa: () => void;
}

const ElInput: React.ForwardRefRenderFunction<RefProps> = (props, ref) => {
  // console.log(props);
  const inputRef = useRef<HTMLInputElement>(null)

  // 自定义了暴露出去的ref对象
  useImperativeHandle(ref, () => {
    return {
      aaa() {
        inputRef.current?.focus()
      }
    }
  }, [inputRef])

  return <div>
    <input type="text" ref={inputRef} />
  </div>
}

// forwardRef 就是将父组件的ref转发到组件内部
const WrappedElInput = React.forwardRef(ElInput)

function App() {
  const ref = useRef<RefProps>(null)

  useEffect(() => {
    console.log('ref', ref.current);
    ref.current?.aaa()
  }, [])

  return (
    <div>
      {/* <input type="text" ref={ref} /> */}
      <WrappedElInput ref={ref}></WrappedElInput>
    </div>
  );
}

export default App;
