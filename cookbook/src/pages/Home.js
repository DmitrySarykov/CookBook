import React, { useState, useEffect } from "react";
import Categories from "../components/Categories";
import { connect } from "react-redux";

function Home(props) {
    async function getCategories(){
        if (props.categories.length == 0){
            const response = await fetch(`/api/categories/`).then(response => {return response.json()}).then(data => {
                data.map(item => {
                    props.addCategory(item);
                })  
            });
        }
    }
    useEffect(() => {
        getCategories();
    }, [])
    return (
        <>
            <h2>Категории</h2>
            <Categories categories={props.categories}/>
        </>
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
        addCategory: (elem) => {
            dispatch({type: "ADD_CATEGORY", payload: elem});
        },
    })
)(Home);
