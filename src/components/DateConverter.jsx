import React from 'react'

export default function DateConverter(props) {
    
    let bookDate = props.bookDate
    if(bookDate == null){
        bookDate = new Date()
    }
    let date = bookDate.getDate();
    let month = bookDate.getMonth();
    let year = bookDate.getFullYear();

    const months  = ["Jan","Feb","March","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]


  return (
    <div className="dateDisplay">
      <div className="monthIcon">{months[month]}</div>
      <div className="dateIcon">{date}</div>
    </div>
  )
}
