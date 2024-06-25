import './App.css';
import { useEffect, useRef, useState } from 'react';

// Icon component
// import { IconAdd } from "./components/Icon/icons";

// Space component
// import Space from "./components/Space";
// import { ConfigProvider } from "./components/Space/ConfigProvider";

// Children API
// import Children, { Row, RowList, RowList2 } from "./demos/React.Children";

// Tic-Tac-Toe
// import TicTacToe from "./components/Tic-Tac-Toe";

// components
// import Portal from "./components/Portal";
// import CopyToClipboard from "./components/CopyToClipboard";
// import Watermark from "./components/Watermark";

// hooks
// import { useMountedState } from "react-use"
// import useMountedState from "./hooks/useMountedState"
// import useLifeCycles from "./hooks/useLifeCycles"
// import { useCookie } from "react-use"
// import useCookie from "./hooks/useCookie"
// import { useHover } from "react-use";
// import useHover from "./hooks/useHover";
// import { useScrolling } from 'react-use';
// import useScrolling from './hooks/useScrolling';
// import { useTimeout, useWhyDidYouUpdate } from 'ahooks'
import useWhyDidYouUpdate from './hooks/useWhyDidYouUpdate'

const Demo: React.FC<{ count: number }> = (props) => {
  const [randomNum, setRandomNum] = useState(Math.random());

  useWhyDidYouUpdate('Demo', { ...props, randomNum });

  return (
    <div>
      <div>
        <span>number: {props.count}</span>
      </div>
      <div>
        randomNum: {randomNum}
        <button onClick={() => setRandomNum(Math.random)}>
          设置随机 state
        </button>
      </div>
    </div>
  );
};

export default function App() {
	/*useLifeCycles useMountedState*/
	// useLifeCycles(() => console.log('Mounted'), () => console.log('UnMounted'))

	// const isMounted = useMountedState()
	// const [, setNum] = useState(0)

	// useEffect(() => {
	//   console.log(1)
	//   setTimeout(() => {
	//     setNum(1)
	//   }, 1000);
	// })

	// return <div>{ isMounted() ? 'mounted' : 'pending' }</div>

	/*useCookie*/
	// const [value, updateCookie, deleteCookie] = useCookie("test")

	// useEffect(() => {
	//   deleteCookie()
	// }, [])

	// const updateCookieHandler = () => {
	//   updateCookie("666")
	// }

	// return (
	//   <div>
	//     <p>cookie 值: {value}</p>
	//     <button onClick={updateCookieHandler}>更新 Cookie</button>
	//     <br />
	//     <button onClick={deleteCookie}>删除 Cookie</button>
	//   </div>
	// )

	/*useHover*/
	// const element = (hovered: boolean) => <div>Hover me! {hovered && "Thanks"}</div>;

	// const [hoverable, hovered] = useHover(element);

	// return (
	//   <div>
	//     {hoverable}
	//     <div>{hovered ? "HOVERED" : ""}</div>
	//   </div>
	// );

	/*useScrolling*/
	// const scrollRef = useRef<HTMLDivElement>(null);
	// const scrolling = useScrolling(scrollRef);

	// return (
	// 	<>
	// 		{<div>{scrolling ? '滚动中..' : '没有滚动'}</div>}

	// 		<div ref={scrollRef} style={{ height: '200px', overflow: 'auto' }}>
  //       <div>||---||---||---||</div>
  //       <div>||---||---||---||</div>
  //       <div>||---||---||---||</div>
  //       <div>||---||---||---||</div>
  //       <div>||---||---||---||</div>
  //       <div>||---||---||---||</div>
  //       <div>||---||---||---||</div>
  //       <div>||---||---||---||</div>
  //       <div>||---||---||---||</div>
  //       <div>||---||---||---||</div>
  //       <div>||---||---||---||</div>
  //       <div>||---||---||---||</div>
  //       <div>||---||---||---||</div>
  //       <div>||---||---||---||</div>
  //       <div>||---||---||---||</div>
  //       <div>||---||---||---||</div>
  //       <div>||---||---||---||</div>
  //       <div>||---||---||---||</div>
  //     </div>
	// 	</>
	// );

  /*useWhyDidYouUpdate*/
  const [count, setCount] = useState(0);

  return (
    <div>
      <Demo count={count} />
      <div>
        <button onClick={() => setCount((prevCount) => prevCount - 1)}>减一</button>
        <button onClick={() => setCount((prevCount) => prevCount + 1)}>加一</button>
      </div>
    </div>
  );

	// return (
	// <div>
	//   {/* <ConfigProvider space={{ size: 100 }}>
	//     <Space
	//       style={{ height: 400, width: 400, backgroundColor: "azure" }}
	//       wrap={true}
	//       direction="horizontal"
	//       split={<div>testDiv</div>}
	//       align="start">
	//       <div className="box">111</div>
	//       <div className="box">222</div>
	//       <div className="box">333</div>
	//       <div className="box">444</div>
	//       <div className="box">555</div>
	//     </Space>
	//     <Space
	//       style={{ height: 400, width: 800, backgroundColor: "wheat" }}
	//       wrap={true}
	//       direction="vertical"
	//       split={<IconAdd></IconAdd>}
	//       align="center">
	//       <div className="box">aaa</div>
	//       <div className="box">bbb</div>
	//       <div className="box">ccc</div>
	//       <div className="box">ddd</div>
	//       <div className="box">eee</div>
	//     </Space>
	//   </ConfigProvider> */}

	//   {/* <Children>
	//     <div>111</div>
	//     <div>222</div>
	//     <div>333</div>
	//   </Children>

	//   <RowList>
	//     <Row>111</Row>
	//     <Row>222</Row>
	//     <Row>333</Row>
	//   </RowList>

	//   <RowList2
	//     rows={[
	//       {
	//         id: "1",
	//         content: <p>This is the first item.</p>,
	//       },
	//       {
	//         id: "2",
	//         content: <p>This is the second item.</p>,
	//       },
	//       {
	//         id: "3",
	//         content: <p>This is the third item.</p>,
	//       },
	//     ]}></RowList2> */}

	//   {/* <TicTacToe></TicTacToe> */}

	//   {/* <div className="wrapper">wrapper</div>
	//   <Portal attach=".wrapper">
	//     <div>测试</div>
	//   </Portal> */}

	//   <CopyToClipboard
	//     text="被复制的文字"
	//     onCopy={() => {
	//       console.log("copy");
	//     }}
	//     options={{ debug: true, message: "123" }}>
	//     <button>点击复制</button>
	//   </CopyToClipboard>
	// </div>

	// <Watermark
	//   content={["测试水印", "神说要有光"]}
	//   gap={[0, 0]}
	//   offset={[50, 100]}
	//   fontStyle={{
	//     color: "green",
	//   }}>
	//   <div style={{ height: 800 }}>
	//     <p>
	//       Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos quod deserunt quidem quas in rem ipsam ut
	//       nesciunt asperiores dignissimos recusandae minus, eaque, harum exercitationem esse sapiente? Eveniet, id
	//       provident!
	//     </p>
	//   </div>
	// </Watermark>
	// );
}
