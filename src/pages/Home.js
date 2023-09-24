import React, {useEffect} from "react"
import Building from "../Building_Facade.jpg"


export default function Home(){

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return(
    <div className="homePage">
        <div className="centerImage">
            <h1>Sea Hotel</h1> 
        </div>
        <div className="aboutUs">
            <h2>Welcome to Sea Hotel</h2>
            <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</h3>
        </div>
        <div className="room">
        </div>
        <div className="hotelRooms">
            <div className="roomDesciption">
                <h3>Rooms</h3>
                <h2>Room description</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p> 
            </div>
            <div className="roomImage"></div>
        </div>
        <div className="dining">
            <div className="dinningImage"></div>
            <div className="dinningDesciption">
                <h3>Dinning</h3>
                <h2>Something about dinning</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p> 
            </div>
        </div>
        <div className="events">
                <div className="wedding"></div>
                <div className="eventDescription">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</div>
                <div className="surf"></div>
        </div>
    </div>
    )

}