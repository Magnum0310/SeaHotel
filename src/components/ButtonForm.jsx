import React,{useState} from 'react'

export default function ButtonForm(props) {

  const [buttonState, setButtonState] = useState(false)


  function onClick(){
    setButtonState(!setButtonState)
    props.buttonState(buttonState)
  }

  return (
    
    <div>
        <button onClick={onClick}>Book now!</button>
    </div>
  
    )
}
