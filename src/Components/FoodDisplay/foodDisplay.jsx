import React, { useContext } from "react";
import './foodDisplay.css'
import { StoreContext } from "../../Context/StoreContext";
import FoodItems from "../FoodItems/foodItems";

const FoodDisplay = function ({category}) {

    const {food_list} = useContext(StoreContext)

    return (
        <div className="food-display" id="food-display">
            <h2>Vos plats, proches de chez vous!</h2>
            <div className="food-display-list">
                {food_list.map(function(item, index){
                    if (category === "All" || category === item.category) {
                        return <FoodItems key={index} id={item._id} name={item.name}
                        description={item.description} image={item.image} price={item.price}/>
                    }
                   
                })}
            </div>
        </div>
    )
}

export default FoodDisplay