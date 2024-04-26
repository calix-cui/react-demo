import { useEffect, useRef } from "react"
import Calendar from "./Calendar"

interface CalendarRef {
  getDate: () => Date,
  setDate: (data: Date) => void
}

function App() {
  const calendarRef = useRef<CalendarRef>(null)

  // useEffect(() => {
  //   console.log(calendarRef.current?.getDate().toLocaleDateString())

  //   setTimeout(() => {
  //     calendarRef.current?.setDate(new Date(2024, 4, 26))
  //   }, 3000);
  // }, [])

  return <div>
    {/* <Calendar value={new Date('2022-03-05')} onChange={(date: Date) => {
      console.log(date.toLocaleDateString())
    }}></Calendar> */}
    <Calendar ref={calendarRef} value={new Date('2024-04-26')}></Calendar>
  </div>
}

export default App