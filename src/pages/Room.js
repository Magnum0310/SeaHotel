import {NavLink} from "react-router-dom"
import HomeIcon from '@mui/icons-material/Home';

export default function Room(props) {

  function checkRoom(event){
    console.log("checkRoom clicked!")
    console.log(event.target.name)
    props.room(event.target.name)

  }

  return (
    <div className="roomPage">
    
    <div className="roomWrapper">
      <div className="roomBannerText">Room</div>
      <div className="roomBannerImage">Room Image</div>
      <div className="roomDescription">Room Description</div>
      <div className="roomDescriptionImage">Room Description Image</div>
      <div className="roomFirst">
        <div className="roomFirst--active">
          <NavLink to="book" className="bookButton" onClick={checkRoom} name="room_A">Book</NavLink>
        </div>
      </div>
      <div className="roomSecond">
        <div className="roomSecond--active">
          <NavLink to="book" className="bookButton" onClick={checkRoom} name="room_B">Book</NavLink>
        </div>
      </div>
      <div className="roomThird">
        <div className="roomThird--active">
          <NavLink to="book" className="bookButton" onClick={checkRoom} name="room_C">Book</NavLink>
        </div>
      </div>
    </div>
</div>
  )
}




