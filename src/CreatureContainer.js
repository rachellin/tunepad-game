import React from 'react';
import { StyledCreatureContainer } from './style/Style';

export class CreatureContainer extends React.Component {
    render() {
        return (
            <StyledCreatureContainer className="container">
                <h2>LEVEL {this.props.level}</h2>
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