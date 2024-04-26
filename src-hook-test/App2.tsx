// useEffect, useLayoutEffect
import { useState, useEffect, useLayoutEffect } from "react";
import "./App.css";

async function queryData() {
  const data = await new Promise<number>((resolve) => {
    setTimeout(() => {
      resolve(555);
    }, 2000);
  });
  return data;
}

function App() {
  const [num, setNum] = useState(1);

  // useEffect 回调函数不支持 async，因为其本身就是异步执行的
  // dependencies 不传的时候，每次都会重新执行 effect
  useEffect(() => {
    console.log("effect");

    // const timer = setInterval(() => {
    //   console.log(num);
    // }, 1000);

    // // cleanup function 当deps变了，重新执行effect之前，先执行。组件销毁时也会调用cleanup
    // return () => {
    //   console.log("clean up");
    //   clearInterval(timer);
    // };

    queryData()
      .then((data) => {
        setNum(data);
      })
      .catch((err) => {});
  }, []);

  // useLayoutEffect 的回调是同步执行的. 使用 useLayoutEffect 要注意长任务
  useLayoutEffect(() => {
    console.log('useLayoutEffect');
  }, [])

  return (
    <div>
      <div onClick={() => setNum((preNum) => preNum + 2)}>{num}</div>
    </div>
  );
}

export default App;
