import React, { useState,useEffect } from 'react'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
// import "../index.css"


export default function MonthRender(props) {

  const [inSelectedDate,setInSelectedDate]=useState(props.state)

  useEffect(()=>{
    if(inSelectedDate == null) return 
    const bookDate = inSelectedDate.getDate();
    const bookMonth = inSelectedDate.getMonth()+1;
    const bookYear = inSelectedDate.getFullYear();
    const checkDateDetails = bookYear + ", " + bookMonth + ", " + bookDate
    props.in(checkDateDetails)
  },[inSelectedDate])

  return (
    <div className="monthRender">
      <div className="gridCheckInDate">
      <DatePicker
        showIcon
        selected={inSelectedDate}
        onChange={date => setInSelectedDate(date)}
        minDate={new Date()}
        inline
        />
      </div>
    </div>
  )
}

