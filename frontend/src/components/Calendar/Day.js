import React, {useState} from "react";
import './Calendar.css';

export default function Day({day, activeMonth, cue, handleCue, credits}) {
  const ONEDAYMILSEC = 86400000;
  const [picked, setPicked] = useState(cue.includes(day));
  const togglePick = (day) => {
    let today = new Date().getTime();
    if (day > today - ONEDAYMILSEC) {
      if (cue.includes(day))
        { 
          let newCue = cue.filter(number => number !== day);
          handleCue(newCue);
          setPicked(false);
        }
        else
        {
          if (cue.length < credits) {
            handleCue([...cue, day]);
            setPicked(true);
          } else {
            alert('All out of cretis');
          }

        }
    }
  };
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const thisDay = new Date(day);
  const classes = (day) => {
    let className = "day "
    const today = new Date();
    if (day.getMonth() === today.getMonth() && day.getDate() === today.getDate()) {className += "today "}
    if (day < today.getTime() - ONEDAYMILSEC) {className += "pastDay "}
    if (day.getMonth() !== activeMonth) {className += "outDay "}
    return className; 
  }

  return <div className={picked ? classes(thisDay) + "picked" : classes(thisDay)} onClick={()=> togglePick(day)}>
    <div>{days[thisDay.getDay()].slice(0, 3)}</div>
    <div>{thisDay.getDate()}</div>
  </div>
}