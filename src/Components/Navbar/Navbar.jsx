
import React, { useContext, useState } from "react";
import {assets} from '../../assets/assets'
import './Navbar.css'
import { Link } from "react-router-dom";
import { StoreContext } from "../../Context/StoreContext";

const Navbar = function ({setShowLogin}) {

    const [menu , setMenu] = useState("home")
        const {getTotalCartAmount} = useContext(StoreContext)

    return (
        <div className="navbar">
            <Link to = "/"><img src= {assets.logo} alt=""  className="logo"/></Link>
            <ul className="navbar-menu">
                <Link to = "/" onClick={()=> setMenu("home")} className= {menu === 'home' ? 'active' : ""}>home</Link>
                <a href="#explore-menu" onClick={()=> setMenu("menu")} className= {menu === 'menu' ? 'active' : ""} >menu</a>
                <a href="#app-download" onClick={()=> setMenu("app-mobile")} className= {menu === 'app-mobile' ? 'active' : ""}>app-mobile</a>
                <a href="#footer" onClick={()=> setMenu("contactez-nous")} className= {menu === 'contactez-nous' ? 'active' : ""}>contactez-nous</a>
            </ul>

            <div className="navbar-right">
                <img src={assets.search_icon} alt="" />
                <div className="navbar-right-icon">
                    <Link to = "/cart"><img src= {assets.basket_icon} alt="" /></Link>
                    <div className= {getTotalCartAmount() === 0 ? "" : "dot"}></div>
                </div>
                <button onClick={function() {
                    setShowLogin(true)
                }}>S'inscrire</button>

            </div>
        </div>
    )
}

export default Navbar