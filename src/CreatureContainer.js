import React from 'react';
import { StyledCreatureContainer } from './style/Style';

export class CreatureContainer extends React.Component {
    render() {
        return (
            <StyledCreatureContainer className="container">
                <h1>LEVEL {this.props.level}</h1>
                creature here 
                <div className="feedback">
                    {this.props.correct ? 
                        "you did it!" :
                        "try again"
                    }
                </div>
            </StyledCreatureContainer>
        )
    }
}