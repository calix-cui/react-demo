import { memo, useCallback, useEffect, useMemo, useState } from "react";

function Aaa() {
  const [, setNum] = useState(1);

  useEffect(() => {
    setInterval(() => {
      setNum(Math.random());
    }, 2000);
  }, []);

  // 会触发 Memo 重新渲染
  const [count, setCount] = useState(1);

  useEffect(() => {
    setInterval(() => {
      setCount(Math.random());
    }, 2000);
  }, []);

  console.log("aaa");

  // useCallback: 当deps数组不变的时候，始终返回同一个function
  const bbbCallback = useCallback(function () {
    // xxx
  }, [])

  // useMemo: deps变化时，计算新的值返回
  const count2 = useMemo(() => {
    return count * 10
  }, [])


  return (
    <div>
      <MemoBbb count={count2} callback={bbbCallback}></MemoBbb>
    </div>
  );
}

interface BbbProps {
  count: number;
  callback: Function;
}

function Bbb(props: BbbProps) {
  // 如果不使用memo，每两秒 Aaa 就会重新渲染，导致 Bbb 跟着重新渲染
  console.log("bbb render");

  return <h2>{props.count}</h2>;
}

// memo: 只有props变的时候，才会重新渲染被包裹的组件
const MemoBbb = memo(Bbb);

export default Aaa;
