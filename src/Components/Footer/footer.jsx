import React from "react";
import './footer.css'
import { assets } from "../../assets/assets";

const Footer = function () {
    return (
        <div className="footer" id="footer">
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src= {assets.logo} alt="" className="logo"/>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis eos fuga repellendus amet dolor veniam blanditiis eum quidem animi voluptates eligendi consequatur</p>
                    <div className="footer-social-icons">
                        <img src= {assets.facebook_icon} alt="" />
                        <img src= {assets.linkedin_icon} alt="" />
                        <img src= {assets.twitter_icon} alt="" />
                    </div>
                </div>

                <div className="footer-content-center">
                    <h2>ELIXIR</h2>
                    <ul>
                        <li>Accueil</li>
                        <li>A propos de nous</li>
                        <li>Livraison</li>
                        <li>Politiques de confidentialité</li>
                    </ul>
                </div>

                <div className="footer-content-right">
                    <h2>INFOS</h2>
                    <ul>
                        <li>(+237) 650-876-954</li>
                        <li>henrynomo68@gmail.com</li>
                    </ul>
                </div>
            </div>
            <hr />
			<p className="footer-copyright">Copyright &copy; 2024 ELIXIR | Developpé par <a href="http://www.henry-euloge.web.app">Henry Euloge</a></p>
        </div>
    )
}

export default Footer