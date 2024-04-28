import { Dayjs } from "dayjs";

interface HeaderProps {
  curMonth: Dayjs;
  prevMonthHandler: () => void;
  nextMonthHandler: () => void;
}

function Header(props: HeaderProps) {
  const { curMonth, nextMonthHandler, prevMonthHandler } = props;

  return (
    <div className="calendar-header">
      <div className="calendar-header-left">
        <div className="calendar-header-icon" onClick={prevMonthHandler}>
          &lt;
        </div>
        <div className="calendar-header-value">{curMonth.format("YYYY 年 MM 月")}</div>
        <div className="calendar-header-icon" onClick={nextMonthHandler}>
          &gt;
        </div>
        <div className="calendar-header-btn">今天</div>
      </div>
    </div>
  );
}

export default Header;
