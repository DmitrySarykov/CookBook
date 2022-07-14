import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import Recipes from '../components/Recipes';
import { connect } from "react-redux";

function Category(props) {
    const params = useParams();
    var [category, setCategory] = useState([]);
    async function getCategory(){
        if (category.length == 0){
            const response = await fetch(`/api/category/${params.id}`).then(response => {return response.json()}).then(data => {
                setCategory(data);
            });
        }
    }
    async function getRecipes(){
        if (props.recipes.length == 0){
            const response = await fetch(`/api/category/${params.id}/recipes`).then(response => {return response.json()}).then(data => {
                data.map(item => {
                    props.addRecipe(item);
                })
            });
        }
    }
    useEffect(() => {
        getCategory();
        getRecipes();
        return () => {
            props.deleteList()
        }
    }, [])
    return (
        <div>
            <h2>{category.title}</h2>
            <Recipes recipes={props.recipes} />
        </div>
    );
}
export default connect(
    // mapStateToProps
    state => ({
        recipes: state.recipes,
        categories: state.categories
    }),
    // mapDispatchToProps
    dispatch => ({
        addRecipe: (elem) => {
            dispatch({type: "ADD_RECIPE", payload: elem});
        },
        deleteList: () => {
            dispatch({type: "DELETE_RECIPES_ALL"});
        }
    })
)(Category);
