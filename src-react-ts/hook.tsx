// hook 的类型
import { useRef, useState } from "react";

function App() {
  // useState 可以手动声明类型
  const [num, setNum] = useState<number>(1);

  // useRef 用于保存 dom 引用的时候，参数需要传个 null。useRef 返回 RefObject, 它的current只读
  const ref = useRef<HTMLDivElement>(null);

  // 保存别的内容时，不能传null，否则会报错（current只读）。返回 MutableRefObject
  const ref2 = useRef<{ num: number }>();
  ref2.current = { num: 2 };

  

  return <div ref={ref}>hook type</div>;
}

export default App;
