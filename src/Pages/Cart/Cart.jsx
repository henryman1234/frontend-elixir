import React, { useContext } from "react";
import './Cart.css'
import { StoreContext } from "../../Context/StoreContext";
import { useNavigate } from "react-router-dom";


const Cart = function () {

        const {food_list,cartItems,addToCart,removeFromCart, getTotalCartAmount } = useContext(StoreContext)

        const navigate = useNavigate()

    return (
        <div className="cart">
            <div className="cart-items">
                <div className="cart-items-title">
                    <p>Article</p>
                    <p>Nom</p>
                    <p>Prix</p>
                    <p>Quantité</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div>
                <br/>
                <hr />
                {food_list.map(function(item, index){
                    if (cartItems[item._id] > 0) {
                        return (
                            <div>
                                <div className="cart-items-title cart-items-item">
                                    <img src= {item.image} alt="" />
                                    <p>{item.name}</p>
                                    <p>{item.price} XAF</p>
                                    <p>{cartItems[item._id]}</p>
                                    <p>{cartItems[item._id]*item.price} XAF</p>
                                    <p className="cross" onClick={function(){
                                        return removeFromCart(item._id)
                                    }}>x</p>
                                </div>
                                <hr />
                            </div>
                        )
                    }
                })}
            </div>
            <div className="cart-bottom">
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
                    <button onClick={function(){
                        return navigate('/order')
                    }}>PROCEDER AU PAIEMENT</button>
                </div>
                <div className="cart-promo-code">
                    <p>Si vous avez un code promo, entrer le ici</p>
                    <div className="cart-promocode-input">
                        <input type="text" placeholder="Ton code promo" />
                        <button>Envoyer</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart