import React from "react";
import './Calendar.css';
import Day from "./Day";

export default function Week({dayOne, activeMonth, cue, handleCue, credits}) {
  const ONEDAYMILSEC = 86400000;
  const days2 = new Array(7).fill(dayOne).map((value, index) => value + ONEDAYMILSEC*index);
  return <div className="week">
    {days2.map((day) => <Day day={day} key={day} activeMonth={activeMonth} cue={cue} handleCue={handleCue} credits={credits}/>)}
  </div>
}