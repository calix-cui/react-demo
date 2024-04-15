import { useEffect, useState, useRef, useLayoutEffect } from 'react';
import { useInterval } from './interval'

function App() {
    const [count, setCount] = useState(0);
    const updateCount = () => {
        setCount(count + 1);
    };
    // const ref = useRef(updateCount);

    // useLayoutEffect(() => {
    //     ref.current = updateCount;
    // });

    // useEffect(() => {
    //     const timer = setInterval(() => {
    //       ref.current()
    //     }, 1000);

    //     return () => {
    //         clearInterval(timer);
    //     }
    // }, []);

    // return <div>{count}</div>;

    // 封装 useInterval
    useInterval(updateCount, 1000)

    return <div>{ count }</div>
}

export default App;
