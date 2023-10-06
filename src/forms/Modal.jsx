import React,{useState,useEffect} from 'react';
import DateDisplay from "../components/DateDisplay"
import checkIcon from "../HotelSite/checkIcon.svg"


export default function Modal(props) {

  const [modal,setModal] = useState(false)
  const [bookConfirm,setBookConfirm] = useState(false)
  const [confirmMessage,setconfirmMessage] = useState(false)
  const [success,setSuccess] = useState(false)

  const [confirmDetails,setconfirmDetails] = useState({
      firstName:"",
      lastName:"",
      email:"",
      telephone:"",
  })

  const roomType = props.roomType;
  const checkIn = props.checkIn;
  const checkOut = props.checkOut;
  const totalBookDates = props.totalBookDates;
  const totalBookPrice = props.totalBookPrice;


  function closeModal(){
    setModal(!modal)
    props.modalState(modal)
  }

  function confirmModal(event){
    setconfirmMessage(!confirmMessage)
    setBookConfirm(!bookConfirm)
    console.log("confirm Message " + confirmMessage)
    console.log("success " + success)
  }

  function closewConfirmMessage(){
    setSuccess(!success)
    setBookConfirm(!bookConfirm)
  }

  function showSuccessMessage(){
    setconfirmMessage(!confirmMessage)
    setSuccess(!success)
    console.log("confirm Message " + confirmMessage)
    console.log("success " + success)
    
  }
  
  function checkOutDetails(event){
    const {name,value} = event.target

    setconfirmDetails((prevItems)=>{
      return{...prevItems,[name]:value}
    })
  }


  return(
    <div className="overlay">
      <div className={bookConfirm ? "modalForm--disable" : "modalForm"}>
        <h2>Sea Hotel</h2>
        <h3>{roomType}</h3> 
          <form className="modalInput">
            <input onChange={checkOutDetails} className="fName" type="text" placeholder="First Name *" name="firstName" value={confirmDetails.firstName}/>
            <input onChange={checkOutDetails} className="lName" type="text" placeholder="Last Name *" name="lastName" value={confirmDetails.lastName}></input>
            <input onChange={checkOutDetails} className="email" type="email" placeholder="Email Address*" name="email" value={confirmDetails.email} />
            <input onChange={checkOutDetails} className="telephone" type="text" placeholder="Mobile Number" name="telephone" value={confirmDetails.telephone}></input>
            <p className="modalCheckIn"><span>Check In Date: </span><DateDisplay checkDate = {checkIn}/></p>
            <p className="modalCheckOut"><span>Check Out Date: </span><DateDisplay checkDate = {checkOut}/></p>
            <p className="totalBookDays">{totalBookDates} day(s)</p>
            <p className="totalBookPrice">{totalBookPrice}</p>
          </form>
        <button onClick={closeModal} className="btn-cancel">Cancel</button>
        <button onClick={confirmModal} className="btn-book">Submit</button>
      </div>
      <div className={confirmMessage ? "modalFormConfirm" : "modalForm--disable"}>
        <div className="hotelNameBook">
          <h2>Confirm booking details</h2>
          <div className="bookingDetails">
            <h2>Sea Hotel</h2>
            <div className="bookingNumber">
              <h4>Booking Number</h4>
              <h5>999999</h5>
            </div>
          </div>
        </div>
        <div className="modalInput">
          <div className="modalOverlay">
            <div className="bookTag">
              <p className="fName fNameConfirm">Full Name</p>
              <p className="email emailConfirm">Email</p>
              <p className="telephone telephoneConfirm">Mobile Number</p>
            </div>
            <div className="centerBar"></div>
            <div className="bookTagDetails">
              <p className="fName fNameConfirm">{confirmDetails.firstName} {confirmDetails.lastName}</p>
              <p className="email emailConfirm">{confirmDetails.email}</p>
              <p className="telephone telephoneConfirm">{confirmDetails.telephone}</p>
            </div>
          </div>
          <div className="totalBookDates">
            <p className="modalCheckIn modalCheckInConfirm">Check In Date: <span><DateDisplay checkDate = {checkIn}/></span></p>
            <p className="modalCheckOut modalCheckOutConfirm">Check Out Date: <span><DateDisplay checkDate = {checkOut}/></span></p>
            <p className="totalBookDays totalBookDaysConfirm">{totalBookDates} day(s)</p>
          </div>  
          <div className="confirmBookPrice">
            <p className="totalBookPrice totalBookPriceConfirm">{totalBookPrice}</p>
          </div>
          <div className="bookButtons">
            <button onClick={confirmModal} className="btn-cancel">Back</button>
            <button onClick={showSuccessMessage} className="btn-book">Book!</button>
          </div>
        </div>
          <div className="confirmRoomType">
            <p className="totalBookPrice totalBookPriceConfirm">{roomType}</p>
          </div>
        </div>
        <div className={success ? "successMessage" : "successMessage-disable"}>
          <div className="checkLogo">
            <img src={checkIcon}/>
          </div>
          <h3>Book successfully!</h3>
          <h4>Booking details have been sent to your email address</h4>
            {/* <button onClick={showSuccessMessage} className="btn-cancel">Cancel</button> */}
            <button onClick={closewConfirmMessage} className="btn-book">Close</button>
        </div>  
    </div>
  )
}