import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [dayinMonth, setDayinMoth] = useState([]);
  const [startDay, setStartDay] = useState(0);
  const [selectedDate, setSelectedDate] = useState(null);
  console.log(currentDate);
  console.log(dayinMonth, selectedDate, startDay);

  useEffect(() => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const date = new Date(year, month, 1);
    const days = [];
    while (date.getMonth() === month) {
      days.push(new Date(date));
      date.setDate(date.getDate() - 1);
    }
    setDayinMoth(days);
    setCurrentDate(new Date(year, month, 1).getDay());
  }, [currentDate]);

  const dayMonth = ["MON", "Tue", "Web", "Thu", "Fri", "Sat", "Sun"];
  return (
    <div className="calender">
      <div className="header">&lt;</div>
    </div>
  );
}

export default App;
