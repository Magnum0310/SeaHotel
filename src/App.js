import { 
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  NavLink,
  RouterProvider
} from "react-router-dom"
import React,{ useState } from "react"


//Layout//
import RootLayout from "./layouts/RootLayout"
import PageLayout from "./layouts/PageLayout"


//Pages//
import Home from "./pages/Home"
import Room from "./pages/Room"
import Dinning from "./pages/Dinning"
import Event from "./pages/Event"
import Book from "./pages/Book"

//Room Types//

var roomBook = "";

function roomType(type){
  roomBook = type
}

function updateRoomType(){
  return roomBook
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
      <Route index element={<Home/>}/>
      <Route path="room" element={<PageLayout/>}>
        <Route index element={<Room room={roomType}/>}/>
        <Route path="book" element={<Book onClick={updateRoomType}/>}/>
      </Route>
      <Route path="dinning" element={<Dinning/>}/>
      <Route path="event" element={<Event/>}/>
    </Route>
  )
)

function App() {
  return <RouterProvider router={router}/>
    
}

export default App;
