import React from 'react';

export function Ingredient(props) {
    return (
        <div
            className="ingredient"
            style={{background: props.color}}>
            {props.name}
        </div>
    )
}