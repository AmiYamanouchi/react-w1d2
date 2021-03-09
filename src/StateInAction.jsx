import React, { Component } from 'react';

class StateInAction extends Component {
    constructor(){
        super()
        this.state = {
            text: 'State is now in action'
        }
        setTimeout(() => {
            // this.state.text = 'State has changed....'
            this.setState({
                text: 'State has Changed'
            })
        }, 2000)
    }

    render() {
        return (
            <div>
                <h1>{this.state.text}</h1>
            </div>
        );
    }
}

export default StateInAction;