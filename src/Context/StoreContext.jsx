import React, { useEffect, useState } from "react";
import { food_list } from "../assets/assets";


export const StoreContext = React.createContext(null)

const StoreContextProvider = function (props) {

    const [cartItems, setCartItems] = useState({})

    const addToCart = function(itemId){
        if (!cartItems[itemId]) {
            setCartItems(function(prev){
                return {...prev, [itemId]: 1}
            })
        } else {
            setCartItems(function(prev){
                return {...prev,  [itemId]: prev[itemId] + 1}
            })
        }
    }

    const removeFromCart = function(itemId) {
        setCartItems(function(prev){
            return {...prev, [itemId]: prev[itemId] -1}
        })
    }

    useEffect(function(){
        console.log(cartItems)
    }, [cartItems])

    const getTotalCartAmount = function () {
        let totalAmount = 0
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = food_list.find(function(product){
                    return product._id === item
                })
                totalAmount += itemInfo.price*cartItems[item]
            }
        }
        return totalAmount;
    }

    const contextValue = {
        food_list,
        cartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount
    }

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider