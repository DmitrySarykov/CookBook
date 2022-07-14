import React from "react";
import { Link } from "react-router-dom";

function Categories(props) {
  
    return (
        <section className="category-list">
            {props.categories.map(item => 
              <div key={item.title} className="category-block">
                <img src={item.image} width="100"/>
                <Link to={`/category/${item.id}`}>{item.title}</Link>
              </div>
            )}
        </section>
    );
}
export default Categories;