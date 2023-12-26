// import { Routes, Route, Link } from "react-router-dom";
// import ReactPlayer from "react-player";
import { useReducer, useState, createContext, useContext, useEffect, useRef } from "react";
import React from "react";

export default function App() {
  const [month, setMonth] = useState("January")
  const lastMonth = useLastMonth(month)

  function handleClick() {
    if (month === "January") return setMonth("February")
    if (month === "February") return setMonth("March")
    if (month === "March") return setMonth("April")
    if (month === "April") return setMonth("May")
    if (month === "May") return setMonth("June")
    if (month === "June") return setMonth("July")
    if (month === "July") return setMonth("August")
    if (month === "August") return setMonth("September")
    if (month === "September") return setMonth("January")
  }

  function useLastMonth(val) {
    const store = useRef();
    useEffect(() => {
      store.current = val;
    }, [val]);
    return store.current;
  }
  
  return (
    <>
      <h2>Next month is: {month}</h2>
      {lastMonth && (<h2>{lastMonth} is the last month</h2>)}
      <button onClick={handleClick}>Click to see the next month</button>
    </>
  )
}

