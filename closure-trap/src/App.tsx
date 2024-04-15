import { Reducer, useEffect, useReducer, useState } from "react";

interface Action {
  type: "add" | "minus";
  num: number;
}

function reducer(state: number, action: Action) {
  switch (action.type) {
    case "add":
      return state + action.num;
    case "minus":
      return state - action.num;
  }
}

function App() {
  // const [count,setCount] = useState(0);
  // useEffect(() => {
  //     setInterval(() => {
  //         // 此处的 count 是 effect 第一次执行时的 count，始终为0。闭包导致
  //         console.log(count);
  //         // 解法1：setCount的函数写法
  //         setCount(count => count + 1);
  //     }, 1000);
  // }, []);

  // useReducer
  // const [count, dispatch] = useReducer<Reducer<number, Action>>(reducer, 0);
  // useEffect(() => {
  //   console.log(count);
  //   setInterval(() => {
  //     dispatch({ type: 'add', num: 10 })
  //   }, 2000)
  // }, [])

  // // 解法二: useEffect 的依赖。但会削弱定时器的作用
  // const [count, setCount] = useState(0);
  // useEffect(() => {
  //   console.log(count);

  //   const timer = setInterval(() => {
  //     setCount(count + 1);
  //   }, 1000);

  //   return () => {
  //     clearInterval(timer)
  //   }
  // }, [count]);

  const [count,setCount] = useState(0);

  const update = () => {
    setCount(count + 1)
  }

  useEffect(() => {
      setInterval(() => {
        update()
      }, 1000);
  }, []);

  return <div>{count}</div>;
}

export default App;
