import "./App.css";
import Watermark from "./components/Watermark";
import CopyToClipboard from "./utils/CopyToClipboard";

// Icon component
// import { IconAdd } from "./components/Icon/icons";

// Space component
// import Space from "./components/Space";
// import { ConfigProvider } from "./components/Space/ConfigProvider";

// Children API
// import Children, { Row, RowList, RowList2 } from "./demos/React.Children";

// Tic-Tac-Toe
// import TicTacToe from "./components/Tic-Tac-Toe";

// import Portal from "./utils/Portal";

export default function App() {
  return (
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
    <Watermark
      content={["测试水印", "神说要有光"]}
      gap={[0, 0]}
      offset={[50, 100]}
      fontStyle={{
        color: "green",
      }}>
      <div style={{ height: 800 }}>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos quod deserunt quidem quas in rem ipsam ut
          nesciunt asperiores dignissimos recusandae minus, eaque, harum exercitationem esse sapiente? Eveniet, id
          provident!
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos quod deserunt quidem quas in rem ipsam ut
          nesciunt asperiores dignissimos recusandae minus, eaque, harum exercitationem esse sapiente? Eveniet, id
          provident!
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos quod deserunt quidem quas in rem ipsam ut
          nesciunt asperiores dignissimos recusandae minus, eaque, harum exercitationem esse sapiente? Eveniet, id
          provident!
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos quod deserunt quidem quas in rem ipsam ut
          nesciunt asperiores dignissimos recusandae minus, eaque, harum exercitationem esse sapiente? Eveniet, id
          provident!
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos quod deserunt quidem quas in rem ipsam ut
          nesciunt asperiores dignissimos recusandae minus, eaque, harum exercitationem esse sapiente? Eveniet, id
          provident!
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos quod deserunt quidem quas in rem ipsam ut
          nesciunt asperiores dignissimos recusandae minus, eaque, harum exercitationem esse sapiente? Eveniet, id
          provident!
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos quod deserunt quidem quas in rem ipsam ut
          nesciunt asperiores dignissimos recusandae minus, eaque, harum exercitationem esse sapiente? Eveniet, id
          provident!
        </p>
      </div>
    </Watermark>
  );
}
