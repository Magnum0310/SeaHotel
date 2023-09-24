import React from 'react'

export default function RoomType(props) {
  
  const price = {
    'room_A':100,
    'room_B':200,
    'room_C':300,
  }

  function updatePriceRoom(){
    props.roomPrice(price[props.type])
  }

  return (
    <li className = 'dropdownRoom' onClick={updatePriceRoom}>
        <p> {props.type} </p>
    </li>
  )
}
