import { Route, Routes } from "react-router-dom"
import Navbar from "./Components/Navbar/Navbar"
import Home from "./Pages/Home/Home"
import Footer from "./Components/Footer/footer"
import Cart from "./Pages/Cart/Cart"
import Placehoder from "./Pages/Placeholder/Placeholder"
import { useState } from "react"
import LoginPopup from "./Components/LoginPopup/LoginPopup"


function App () {

    const [showLogin, setShowLogin] = useState(false)

    return (
        <>
            {showLogin ? <LoginPopup setShowLogin = {setShowLogin}/> : <></>}
            <div className="app">
                <Navbar setShowLogin = {setShowLogin}/>
                <Routes>
                    <Route path ="/"  element  = {<Home/>} />
                    <Route path="/cart" element = {<Cart/>}/>
                    <Route path="/order" element = {<Placehoder/>} />
                </Routes>
            </div>
            <Footer/> 
        </>
    )
}

export default App