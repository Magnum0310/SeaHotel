import {NavLink,Outlet} from "react-router-dom"

export default function RootLayout(){

    function getYear(){
        return new Date().getFullYear()
    }

    return(
        <div className="root-layout">
            <header>
                <nav>
                    <ul>
                        <NavLink to="room" className="roomHightlight">Rooms</NavLink>
                        <NavLink to="dinning" className="dinningHightlight">Dinning</NavLink>
                        <NavLink to="event" className="eventHightlight">Events</NavLink>
                    </ul>
                </nav>
            </header>
        <nav className="sideBar">
            <li className="sideBarLogo instagram"><span></span></li>
            <li className="sideBarLogo facebook"><span></span></li>
            <li className="sideBarLogo pinterest"><span></span></li>
        </nav>

            <main>
                <Outlet/>
            </main>

            <footer>
                <div className="footerArea">
                    <div className="hotelLogo"><h1>Sea Hotel</h1></div>
                    <div className="hotelContactDetails">
                        <ul>
                            <li>Main address Plus Street</li>
                            <li>+99 9 9999 9999</li>
                            <li>+99 9 9999 9999</li>
                            <li>site@seahotel.com</li>
                        </ul>
                    </div>
                    <div className="copyright">© Copyright {getYear()}</div>
                </div>
            </footer>
        </div>
    )
} 