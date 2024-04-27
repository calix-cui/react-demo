import Calendar from './Calendar';
import dayjs from 'dayjs'
import './App.css';

function App() {
  return (
    <div className="App">
      <Calendar value={dayjs()}></Calendar>
    </div>
  );
}

export default App;
