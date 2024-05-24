// import Calendar from "./Calendar";
// import dayjs, { Dayjs } from "dayjs";
import "./App.css";
import { Icon } from "./components/Icon";
import { createFromIconfont } from "./components/Icon/createFrontIconfont"
import { IconAdd, IconEmail } from "./components/Icon/icons";

const IconFont = createFromIconfont('//at.alicdn.com/t/c/font_3520073_d8oacpy79dg.js')

function App() {
  return (
    <div className="App">
      {/* <Calendar value={dayjs()}></Calendar> */}
      {/* <Icon></Icon> */}
      <IconAdd size="40px" color="red"></IconAdd>
      <IconAdd size="40px" spin></IconAdd>
      <IconEmail style={{ color: "blue", fontSize: "20px" }} ></IconEmail>
      <div>iconfont</div>
      <IconFont type="icon-config" size="30px"></IconFont>
      <IconFont type="icon-layered-configuration" fill="blue"></IconFont>
    </div>
  );
}

export default App;
