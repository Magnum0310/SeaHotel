import React, { useState,useEffect } from 'react'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";

export default function MonthRender(props) {

//  const startDate = new Date(props.startDates)

 const [endDate,setEndDate] = useState(new Date())
 const [startDate,setStartDate] = useState(new Date());
 const [startPrice,setStartPrice] = useState(0);

  useEffect(()=>{
    if(endDate == null || startDate == null) return
  
    const date1 = new Date(startDate);
    const date2 = new Date(endDate);

    // One day in milliseconds
    const oneDay = 1000 * 60 * 60 * 24;

    // Calculating the time difference between two dates
    const diffInTime = date2.getTime() - date1.getTime();

    // Calculating the no. of days between two dates
    const totalDays = Math.round(diffInTime / oneDay);
    setStartPrice(totalDays)

    props.in(startDate)
    props.out(endDate)
    props.totalBill(startPrice)
    
  },[endDate,startDate,startPrice])

  function onChange(dates){
    const [start,end] = dates;
    setStartDate(start);
    setEndDate(end);
  }

  return (
    <div className="monthRender">
      <div className="gridCheckOut">
        <DatePicker
          showIcon
          selected={startDate}
          onChange={onChange}
          startDate={startDate}
          endDate={endDate}
          minDate={new Date()}
          selectsRange
          inline
        />
      </div>
    </div>
  )
}
