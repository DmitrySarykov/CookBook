import React from "react";
import { Link } from "react-router-dom";

function Recipes(props) {
    return (
        <div className="recipe-list">
            {props.recipes.map(item => 
              <Link to={`/recipe/${item.id}`} key={item.title} className="recipe-block">
                <img src={item.image} width="100"/>
                <h4>{item.title}</h4>
              </Link>
            )}
        </div>
    );
}

export default Recipes;