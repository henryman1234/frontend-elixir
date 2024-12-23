import React from "react";
import './ExploreMenu.css'
import { menu_list } from "../../assets/assets";

const ExploreMenu = function ({category, setCategory}) {
    return (
        <div className="explore-menu" id="explore-menu">
            <h1>Explorez notre menu</h1>
            <p className="explore-menu-text">Nous proposons toutes variétés de plats; nous avons également des plats traditionnels du Cameroun avec des boissons et des jus naturels</p>
            <div className="explore-menu-list">
                {menu_list.map(function(item, index){
                    return <div onClick={function(){
                        setCategory(function(prev){
                            return prev === item.menu_name ? "All" : item.menu_name
                        })
                    }} key={index}>
                        <img src={item.menu_image} className= {category === item.menu_name ? "active" : ""}  />
                        <p>{item.menu_name}</p>
                    </div>
                })}
            </div>
            <hr/>
        </div>
    )
}

export default ExploreMenu