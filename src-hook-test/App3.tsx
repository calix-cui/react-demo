/*
 * @Description: useReducer & immer 的使用。在 react 里，只要涉及到 state 的修改，就必须返回新的对象，不管是 useState 还是 useReducer。
 */
import { produce } from "immer"
import { Reducer, useReducer } from "react";

interface Data {
  result: number;
}

interface Action {
  type: "add" | "minus";
  num: number;
}

function reducer(state: Data, action: Action) {
  switch (action.type) {
    case "add":
      // return {
      //   result: state.result + action.num,
      // };

      // 注意：直接修改 state 并返回，触发不了重新渲染
      // 但是对象很复杂时，创新新对象再返回又很繁琐。这个时候就要用 immer 了
      // immer 依赖 Proxy 实现，监听在函数里对属性的修改
      return produce(state, (state) => {
        state.result += action.num
      })
      // useState 同 useReducer，必须返回新的对象

    case "minus":
      return {
        result: state.result - action.num,
      };
  }
  return state;
}

function App() {
  // Reducer<数据类型, action类型>
  // const [res, dispatch] = useReducer<Reducer<Data, Action>>(reducer, { result: 0 });

  // reducer: Reducer<Data, Action>, initializerArg: string, initializer: (arg: string) => Data
  const [res, dispatch] = useReducer<Reducer<Data, Action>, string>(reducer, "zero", (param) => {
    return {
      result: param === "zero" ? 0 : 1,
    };
  });

  // useState 也可以实现，但是适用于简单场景
  // useReducer 把运算逻辑封装到函数里，适用于复杂逻辑
  return (
    <div>
      <div onClick={() => dispatch({ type: "add", num: 2 })}>加</div>
      <div onClick={() => dispatch({ type: "minus", num: 1 })}>减</div>
      <div>{res.result}</div>
    </div>
  );
}

export default App;
