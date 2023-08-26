import React from 'react';
import { StyledContainer } from './style/Style';

import { Recipe } from './Recipe';
import { CreatureContainer } from './CreatureContainer';
import { PianoRoll } from './PianoRoll';

import { trace } from './trace';

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
            ],
            trace: trace
        }
    }

    // componentDidUpdate for constantly updating the feedback message?
    componentDidMount() {
        //console.log(this.state.trace)
        this.readTrace();
    }

    readTrace() {
        return this.state.trace.filter(obj => obj['command'] == 'play' | obj['command'] == 'rest')
    }

    render() {
        return (
            <StyledContainer>
                <CreatureContainer 
                    level={this.state.level}
                    correct={this.state.correct}/>
                <div className="container code-container">
                    <PianoRoll trace={this.readTrace(this.state.trace)}/>
                    <div className="code-cell">
                        <iframe className="tunepad-cell" src="http://localhost:8080/project/65773?embedded=true"></iframe>
                    </div>
                    <button className="submit">submit</button>
                </div>
                <Recipe recipe={this.state.recipe}/>
                {/* <button className="help">?</button> */}
            </StyledContainer>
        )
    }

}