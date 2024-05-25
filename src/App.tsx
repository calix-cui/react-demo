// import { ConfigProvider, Space } from "antd";
import "./App.css";
import { IconAdd } from "./components/Icon/icons";
import Space from "./components/Space";
import { ConfigProvider } from "./components/Space/ConfigProvider";

export default function App() {
  return (
    <div>
      <ConfigProvider space={{ size: 100 }}>
        <Space
          style={{ height: 400, width: 400, backgroundColor: "azure" }}
          wrap={true}
          direction="horizontal"
          split={<div>testDiv</div>}
          align="start">
          <div className="box">111</div>
          <div className="box">222</div>
          <div className="box">333</div>
          <div className="box">444</div>
          <div className="box">555</div>
        </Space>
        <Space
          style={{ height: 400, width: 800, backgroundColor: "wheat" }}
          wrap={true}
          direction="vertical"
          split={<IconAdd></IconAdd>}
          align="center">
          <div className="box">aaa</div>
          <div className="box">bbb</div>
          <div className="box">ccc</div>
          <div className="box">ddd</div>
          <div className="box">eee</div>
        </Space>
      </ConfigProvider>
    </div>
  );
}
