import React,{useState,useEffect} from 'react';
import DateDisplay from "../components/DateDisplay"


export default function Modal(props) {

  const [modal,setModal] = useState(false)
  const [bookConfirm,setBookConfirm] = useState(false)
  const [firstName,setFirstName] = useState()


  function closeModal(){
    setModal(!modal)
    props.modalState(modal)
  }

  function confirmModal(event){
    setBookConfirm(!bookConfirm)
    console.log(event.target)
    console.log(firstName)
    
  }
  
  function test(event){
    console.log(event.target)
    console.log(firstName)
    setFirstName(event.target.value)
  }


  return(
    <div className="overlay">
      <div className={bookConfirm ? "modalForm--disable" : "modalForm"}>
        <h2>Sea Hotel</h2> 
          <form className="modalInput">
            <input onChange={test} className="fName" type="text" placeholder="First Name *" name="firstName" value={firstName}/>
            <input className="lName" type="text" placeholder="Last Name *" name="lastName"></input>
            <p className="modalCheckIn">Check In Date: <DateDisplay checkDate = {props.checkin}/></p>
            <p className="modalCheckOut">Check Out Date: <DateDisplay checkDate = {props.checkOut}/></p>
            <p className="totalBookDays">{props.totalBookDates} days</p>
            <p className="totalBookPrice">{props.totalBookPrice}</p>
          </form>
        <button onClick={closeModal} className="btn-cancel">Cancel</button>
        <button onClick={confirmModal} className="btn-book">Submit</button>
      </div>
      <div className={bookConfirm ? "modalForm" : "modalForm--disable"}>
        <h2>Sea Hotel</h2> 
          <form className="modalInput">
            {/* <input className="fName" type="text" placeholder="First Name *"></input>
            <input className="lName" type="text" placeholder="Last Name *"></input> */}
            <p>First Name</p>
            <p>Last Name</p>
            <p className="modalCheckIn">Check In Date: <DateDisplay checkDate = {props.checkin}/></p>
            <p className="modalCheckOut">Check Out Date: <DateDisplay checkDate = {props.checkOut}/></p>
            <p className="totalBookDays">{props.totalBookDates} days</p>
            <p className="totalBookPrice">{props.totalBookPrice}</p>
          </form>
          <button onClick={confirmModal} className="btn-cancel">Back</button>
          <button onClick={confirmModal} className="btn-book">Book!</button>
      </div>  
    </div>
  )
}