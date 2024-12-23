import React from "react";
import './Header.css'

const Header = function() {
    return (
        <div className="header">
            <div className="header-contents">
                <h2>Commandez vos plats ici !</h2>
                <p>Nous sommes un restaurant dans la ville de Yaoundé; nous vous offrons les mets traditionels du continent et beaucoup d'autres encore! Vous avez également la possibilité de commander vos plats!</p>
                <button>Voir le Menu</button>
            </div>
        </div>
    )
}

export default Header