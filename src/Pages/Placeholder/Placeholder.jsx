import React, { useContext } from "react";
import './Placeholder.css'
import { StoreContext } from "../../Context/StoreContext";

const Placehoder = function () {


    const {getTotalCartAmount} = useContext(StoreContext)

    return (
        <div className="place-order">
            <div className="place-order-left">
                <p className="title">Infos de livraison</p>
                <div className="multi-fields">
                    <input type="text" placeholder="Fisrt name" />
                    <input type="text" placeholder="Last name" />
                </div>
                <input type="text" placeholder="Adresse Email" />
                <input type="text" placeholder="Rue" />
                <div className="multi-fields">
                    <input type="text" placeholder="Ville" />
                    <input type="text" placeholder="Etat" />
                </div>
                <div className="multi-fields">
                    <input type="text" placeholder="Zip code" />
                    <input type="text" placeholder="Pays" />
                </div>
                <input type="text" placeholder="Telephone" />
            </div>
            <div className="place-order-right">
                <div className="cart-total">
                    <h2>Total du panier</h2>
                    <div className="cart-total-details">
                        <p>Subtotal</p>
                        <p>{getTotalCartAmount()} XAF </p>
                    </div>
                    <hr />
                    <div className="cart-total-details">
                        <p>Frais de livraison</p>
                        <p>{getTotalCartAmount() === 0 ? 0 : 2} XAF</p>
                    </div>
                    <hr />
                    <div className="cart-total-details">
                        <b>Total</b>
                        <b>{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2} XAF</b>
                    </div>
                    <button >PROCEDER AU PAIEMENT</button>
                </div>
            </div>
        </div>
    )
}

export default Placehoder