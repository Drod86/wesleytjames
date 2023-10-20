import React, {useState} from "react";
import './Calendar.css';
import Week from "./Week";

export default function Calendar() {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Augustu', 'Sepetember', 'October', 'November', 'December']
  const [today, setToday] = useState(new Date());
  const [credits, setCredits] = useState(4);
  const [cue, setCue] = useState([]);
  const year = today.getFullYear();
  const month = today.getMonth();
  const ONEDAYMILSEC = 86400000;
  const ONEWEEKMILSEC = ONEDAYMILSEC*7;
  const firstDay = new Date(year, month, 1);
  const dayOne = firstDay.getTime() - ONEDAYMILSEC*firstDay.getDay();
  const thisWeek = new Array(5).fill(dayOne);
  const weeks = thisWeek.map((value, index) => value + ONEWEEKMILSEC*index);
  
  const toggleCal = (direction) => {
    if (direction === 'prev') {setToday(new Date(year, month-1, 1))};
    if (direction === 'next') {setToday(new Date(year, month+1, 1))};
    if (direction === 'today') {setToday(new Date())};
  };

  return <div className="calendar">
    <div className="calendarHeading">
      <button onClick={() => toggleCal('prev')}>prev</button>
      <h2>{months[month]}</h2>
      <button className={month === new Date().getMonth() ? 'todayBtn hidden' : 'todayBtn'} onClick={() => toggleCal('today')} >today</button>
      <button onClick={() => toggleCal('next')} >next</button>
    </div>
    {weeks.map((week, index) => <Week dayOne={week} key={week} activeMonth={month} cue={cue} handleCue={setCue} credits={credits}/>)}
  </div>
}

/**
 * 35 days
 */