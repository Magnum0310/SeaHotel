import React from 'react'
export default function RoomPicture(props) {
  return (
    <div >
        {/* {console.log(props)} */}
        <img src={props.roomPicture}/>
    </div>
  )
}
