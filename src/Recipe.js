import React from 'react';
import { Ingredient } from './Ingredient';
import { StyledRecipe } from './style/Style';

export class Recipe extends React.Component {
    constructor(props) {
        super(props);
    }

    renderIngredients(recipe) {
        let ingredientNames = recipe.map(ingredient => ingredient[0])
        let ingredientUsed = recipe.map(ingredient => ingredient[1])

        let arr = [];
        let ingredient;
        for (let i = 0; i < ingredientNames.length; i++) {
            ingredient = <Ingredient
                name={ingredientNames[i]}
                color={ingredientUsed[i] ? "#2F9AEF" : "#95C0E2"} // second color is lighter 
            />
            arr.push(ingredient)
        }
        return arr;
    }

    render() {
        return (
            <StyledRecipe className="container">
                <h1>RECIPE</h1>
                <div className="ingredient-list">{this.renderIngredients(this.props.recipe)}</div>
            </StyledRecipe>
        )
    }
}