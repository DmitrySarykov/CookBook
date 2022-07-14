import React, { useState, useEffect }  from "react";
import { useParams } from 'react-router-dom';


function Recipe() {
    var [recipe, setRecipe] = useState({});
    const params = useParams();
    async function getRecipe(){
        if (recipe){
            const response = fetch(`/api/recipe/${params.id}`).then(response => {return response.json()}).then(data => {
                const ingredients = data.ingredients.split('\n') 
                data.ingredients = ingredients.map((obj) =>  <li>{obj}</li>);
                const recipe = data.recipe.split('\n') 
                data.recipe = recipe.map((obj) =>  <li>{obj}</li>);
                setRecipe(data);
            });
        }
    }
    useEffect(() => {
        getRecipe();
    }, [])
    return(
        <div>
            <h2>{recipe.title}</h2>
            <section className="recipe">
                <img src={recipe.image} width="400"></img>
                <div>
                    <h3>Ингредиенты:</h3>
                    <ul>{recipe.ingredients}</ul>
                    <h3>Рецепт:</h3>
                    <ul>{recipe.recipe}</ul>
                </div>
            </section>
        </div>
    );
}
export default Recipe;