import Calendar from "./Calendar";
import dayjs, { Dayjs } from "dayjs";
import "./App.css";

function App() {
  const changeHandler = (date: Dayjs) => {
    console.log(date.format('YYYY-MM-DD'))
  };

  return (
    <div className="App">
      <Calendar value={dayjs()} onChange={changeHandler}></Calendar>
    </div>
  );
}

export default App;
