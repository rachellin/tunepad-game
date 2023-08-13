import React from 'react';
import { StyledContainer } from './style/Style';

import { Recipe } from './Recipe';
import { CreatureContainer } from './CreatureContainer';

export class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            level: 6,
            correct: true,
            recipe: [
                ["for loop", true],
                ["for loop", false],
                ["if statement", true]
            ]
        }
    }

    render() {
        return (
            <StyledContainer>
                <CreatureContainer 
                    level={this.state.level}
                    correct={this.state.correct}/>
                <div className="code-cell container">
                    code cell goes here
                    <button className="submit">submit</button>
                </div>
                <Recipe recipe={this.state.recipe}/>
            </StyledContainer>
        )
    }

}