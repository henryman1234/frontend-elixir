import React, { useState }  from "react";
import './LoginPopup.css'
import { assets } from "../../assets/assets";

const LoginPopup = function ({setShowLogin}) {
    
    const [currState, setCurrState] = useState("Se connecter")

    return (
        <div className="login-popup">
            <form className="login-group-container">
                <div className="login-popup-title">
                    <h2>{currState}</h2>
                    <img src= {assets.cross_icon} alt="" onClick={function(){
                        setShowLogin(false)
                    }} />
                </div>
                <div className="login-popup-inputs">
                    {currState === "Se connecter" ? <></>: <input type = "text" placeholder="Votre nom" required/>}
                    <input type="email" placeholder="Votre email" required/>
                    <input type="password" placeholder="Mot de passe" required/>
                </div>
                <button>{currState  === "S'inscrire" ? "Creer un compte": "Se connecter"}</button>
                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>En continuant, j'accepte les termes d'utilisations et de politiques de confidentialité</p>
                </div>
                {
                    currState === "Se connecter" ? <p>Voulez-vous créer un nouveau compte? <span onClick={function(){
                        setCurrState("S'inscrire")
                    }}>Cliquez ici</span> </p> : <p>Avez-vous déja un compte? <span onClick={function(){
                        setCurrState("Se connecter")
                    }}>Connectez-vous ici</span> </p>
                }
            </form>
        </div>
    )
}

export default LoginPopup