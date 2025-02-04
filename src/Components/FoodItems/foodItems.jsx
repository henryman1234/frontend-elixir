import React, { useContext, useState } from "react";
import './foodItems.css'
import { assets } from "../../assets/assets";
import { StoreContext } from "../../Context/StoreContext";

const FoodItems = function({id, name, price, description, image}) {

    // const [itemCount, setItemCount] = useState(0)
    const {food_list,cartItems,addToCart,removeFromCart}= useContext(StoreContext)


    return (
        <div className="food-item">
            <div className="food-item-img-container">
                <img src= {image} alt="" className="food-item-image" />
                {!cartItems[id] ? <img src= {assets.add_icon_white} className="add" onClick={function(){
                    return addToCart(id)
                }}/> :
                <div className="food-item-counter">
                    <img src= {assets.remove_icon_red} onClick={function() {
                        return removeFromCart(id)
                    }} />
                    <p>{cartItems[id]}</p>
                    <img src = {assets.add_icon_green} onClick={function(){
                        return addToCart(id)
                    }} />
                </div> }
            </div>
            <div className="food-item-info">
                <div className="food-item-name-rating">
                    <p>{name}</p>
                    <img src= {assets.rating_starts} alt="" />
                </div>
                <p className="food-item-desc">{description}</p>
                <p className="food-item-price"><strong>{price}</strong> XAF</p>
            </div>

        </div>
    )
}

export default FoodItems