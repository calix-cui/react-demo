import React, { useImperativeHandle, useState } from "react";
import "./index.css";

const monthNames = ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"];

const daysOfMonth = (year:number, month:number) => {
  return new Date(year, month + 1, 0).getDate()
}

const firstDayOfMonth = (year:number, month:number) => {
  return new Date(year, month, 1).getDay()
}

const lastDayOfMonth = (year:number, month:number) => {
  return new Date(year, month + 1, 0).getDay()
}

interface CalendarProps {
  value?: Date,
  onChange?: (data: Date) => void
}

interface CalendarRef {
  getDate: () => Date,
  setDate: (data: Date) => void
}

const InternalCalendar: React.ForwardRefRenderFunction<CalendarRef, CalendarProps> = (props, ref) => {
  const {
    value = new Date(),
    onChange,
  } = props

  const [date, setDate] = useState(value);

  useImperativeHandle(ref, () => {
    return {
      getDate() {
        return date
      },
      setDate(date: Date) {
        setDate(date)
      }
    }
  })

  // setTimeout(() => {
  //   setDate(new Date(2024, 4, 26))
  // }, 5000);

  const handlePrevMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() + 1, 1));
  };

  const renderDays = () => {
    const days = []

    const daysCount = daysOfMonth(date.getFullYear(), date.getMonth())
    const firstDay = firstDayOfMonth(date.getFullYear(), date.getMonth())
    const lastDay = lastDayOfMonth(date.getFullYear(), date.getMonth())

    for (let i = 1; i <= firstDay; i++) {
      let i_date = new Date(date.getFullYear(), date.getMonth(), i - firstDay).getDate()
      days.push(<div key={`last-${i_date}`} className="day other">{i_date}</div>)
      // days.push(<div key={`empty-${i}`} className="empty"></div>)
    }

    for (let i = 1; i <= daysCount; i++) {
      const clickHandler = onChange?.bind(null, new Date(date.getFullYear(), date.getMonth(), i))
      if (i === date.getDate()) {
        days.push(<div key={i} className="day selected" onClick={clickHandler}>{i}</div>)
      } else {
        days.push(<div key={i} className="day" onClick={clickHandler}>{i}</div>)
      }
    }

    console.log(lastDay)

    for (let i = 0; i < 6 - lastDay; i++) {
      let i_date = new Date(date.getFullYear(), date.getMonth() + 1, i + 1).getDate()
      days.push(<div key={`next-${i_date}`} className="day other">{i_date}</div>)
      // days.push(<div key={`empty-${i}`} className="empty"></div>)
    }

    return days
  }

  return (
    <div className="calendar">
      <div className="header">
        <button onClick={handlePrevMonth}>&lt;</button>
        <div>
          {date.getFullYear()} 年 {monthNames[date.getMonth()]}
        </div>
        <button onClick={handleNextMonth}>&gt;</button>
      </div>
      <div className="days">
        <div className="day">日</div>
        <div className="day">一</div>
        <div className="day">二</div>
        <div className="day">三</div>
        <div className="day">四</div>
        <div className="day">五</div>
        <div className="day">六</div>
        {renderDays()}
      </div>
    </div>
  );
}

const Calendar = React.forwardRef(InternalCalendar)

export default Calendar;
