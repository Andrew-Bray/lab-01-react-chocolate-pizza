import React, { Component } from 'react'
import IngredientItem from './IngredientItem.js';
import { recipes } from './ingredientData.js';

let recipeMap = recipes.map( i => 
    <IngredientItem amount={i.amount} name={i.name}/>
);

export default class IngredientList extends Component {
    render() {
        return (
            <div className="recipe-section">
                <ul className="recipe-list">
                {recipeMap}
                </ul>
            </div>
        );
    }
}