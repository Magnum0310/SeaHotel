import React from 'react'

export default function DateDisplay(props) {
    
    let bookDate = props.checkDate
    if(bookDate == null){
        bookDate = new Date()
    }
    let date = bookDate.getDate();
    let month = bookDate.getMonth();
    let year = bookDate.getFullYear();

    const months  = ["Jan","Feb","March","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]


  return (
    <div className="modalDateDisplay">
      <p>{months[month]} {date}, {year}</p>
    </div>
  )
}
