import React,{useState,useEffect} from 'react'
import {NavLink} from 'react-router-dom'
import roomAImage from "../HotelSite/Rooms/Room1.jpg"

/*Pages*/
import RoomType from "../components/RoomType"
import CheckInDate from "../components/InMonthRender"
import CheckOutDate from "../components/OutMonthRender"


/*Icons*/
import HomeIcon from '@mui/icons-material/Home';
import NavigationIcon from '@mui/icons-material/Navigation';
import ForwardIcon from '@mui/icons-material/Forward';


/*Components*/
import DateConverter from "../components/DateConverter"
import RoomPicture from "../components/RoomPicture"
import ButtonForm from "../components/ButtonForm"
import Modal from "../forms/Modal"


/*Forms*/


export default function Book(props) {

  /*///////////////////////
  ///     Room list    ///
  *//////////////////////

  const [book,setBook] = useState(false);
  const [nameRoom,setNameRoom] = useState();
  const [price,setPrice] = useState()


  const roomName = {
    "room_A": "Room A",
    "room_B": "Room B",
    "room_C": "Room C"
  }
  
  /*///////////////////////
  ///     Price list    //
  *//////////////////////

  const roomPriceList = {
    "room_A": 100,
    "room_B": 200,
    "room_C": 300
  }

  /*///////////////////////////////////
  ///CheckIn - CheckOut - TotalDays///
  *//////////////////////////////////

  const [dateIn,setDateIn] = useState();
  const [dateOut, setDateOut] = useState();

  function inDate(date){
    if(date == null)return
    setDateIn(date)
  }

  function outDate(date){
    if(date == null)return
    setDateOut(date)
  }

  const [ totalPrice,setTotalPrice ] = useState();

  const [ totalBookDates,setTotalBookDates] = useState();

  function getTotalPrice(overAllPrice){
    const product = price * overAllPrice
    const sample = product.toString()
    setTotalBookDates(overAllPrice)
    setTotalPrice("₱ " + sample + ".00")
  }

  /*///////////////////////
  ///   Book State     ///
  ///     Open/Close   //
  *//////////////////////


  const [bookState,setBookState] = useState(false);

  function checkState(status){
    setBookState(status)
    console.log(bookState)
  }




  /*///////////////////////
  ///   Load Page @ Top///
  ///      position    //
  *//////////////////////
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(()=>{
    const roomPrice = props.onClick()
    setNameRoom(roomName[roomPrice])
    setPrice(roomPriceList[roomPrice])
    setTotalPrice("N/A")
  },[])


  function showList(){
    setBook(!book)
  }

  return (
    <div className="bookPageWrapper">
      <div className="bookPage">
        <div className="bookNowTitle">Book Now Title</div>
        <div className="month"><RoomPicture roomPicture={roomAImage}/></div>
        <div className="bookDescription">Book Description</div>
        <div className="roomType">{nameRoom}</div>
        <div className="checkIn">
          <div className="gridCheckInOut">Check In/Out</div>
          <div className="gridPerson">Person</div>
          <div className="gridBar"></div>
          
          <div className="gridCheckOutDate"><CheckOutDate in={inDate} out={outDate} totalBill = {getTotalPrice} startDates={dateIn}/>
            <div className="checkText">
              <div className="checkInLabel">Check In</div>
              <div className="checkInText"><DateConverter bookDate={dateIn}/></div>
              <div className="checkOutLabel">Check Out</div>
              <div className="checkOutText"><DateConverter bookDate={dateOut}/></div>
            </div>
          </div>
          
          <div className="gridPersonNumber">2 Adult , 0 Child</div>
        </div>
        <div className="priceRoom">{totalPrice}</div>
        <div className="bookNow" onClick={checkState}><ButtonForm buttonState={checkState}/></div>
        <div className="modalBook">{bookState && <Modal modalState={checkState} checkIn={dateIn} checkOut={dateOut} totalBookDates={totalBookDates} totalBookPrice={totalPrice}/>}</div>
        <div className="homeButton"><NavLink to="/"><HomeIcon/>Home</NavLink></div>   
      </div>
    </div>
  )
}
