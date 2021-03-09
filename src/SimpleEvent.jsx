import React, { Component } from 'react'

export class SimpleEvent extends Component {
    constructor(){
        super()
        this.state = {
            btnText: 'Click Meeeee',
            inputText: ''
        }
        // this.handleChange = this.handleChange.bind(this)
        // this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleClick(){
        console.log('clicked~!')
    }

    handleChange = (e) => {
        // console.dir(e.target.value)
        this.setState({
            inputText: e.target.value
        })
    }

    handleSubmit(e){
        e.preventDefault()
        console.log('Form submitted: ', this.state.inputText)
    }
    
    render() {
    
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <button className="btn" type="submit" >{this.state.btnText}</button>
                    <input type="text" placeholder="Enter some text" onChange={this.handleChange} />
                </form>
            </div>
        )
    }
}

export default SimpleEvent
