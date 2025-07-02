import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [dayinMonth, setDayinMoth] = useState([]);
  const [startDay, setStartDay] = useState(0);
  const [selectedDate, setSelectedDate] = useState(null);
  // console.log(currentDate);
  // console.log(dayinMonth, selectedDate, startDay);

  useEffect(() => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const date = new Date(year, month, 1);
    const days = [];
    while (date.getMonth() === month) {
      days.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
    setDayinMoth(days);
    setStartDay(new Date(year, month, 1).getDay());
  }, [currentDate]);

  const dayMonth = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() - 1)));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + 1)));
  };
  const handleDateClick = (date) => {
    setSelectedDate(date);
  };
  return (
    <div className="calender">
      <div className="header">
        <button onClick={prevMonth}>&lt;</button>
        <span>
          {currentDate.toLocaleString("default", { month: "long" })}
          {currentDate.getFullYear()}
        </span>
        <button onClick={nextMonth}>&gt;</button>
      </div>
      <div className="days-names">
        {dayMonth.map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>
      <div className="days">
        {Array.from({ length: startDay }).map((_, index) => (
          <div key={index} className="empty-day"></div>
        ))}
        {dayinMonth.map((day) => (
          <div
            key={day}
            className={`day ${
              day.getDate() === new Date().getDate() &&
              day.getMonth() === new Date().getDate()
                ? "today"
                : ""
            } ${
              selectedDate && day.toDateString() === selectedDate.toDateString()
                ? "selected"
                : ""
            }`}
            onClick={() => handleDateClick(day)}
          >
            {day.getDate()}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
