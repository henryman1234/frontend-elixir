import React from "react";
import './AppDownload.css'
import { assets } from "../../assets/assets";

const AppDownload = function () {
    return (
        <div className="app-download" id="app-download">
            <p>Pour une meilleure expérience, telecharger <br/> ELIXIR App</p>
            <div className="app-download-platforms">
                <img src= {assets.play_store} alt="" />
                <img src= {assets.app_store} alt="" />
            </div>
        </div>
    )
}

export default AppDownload