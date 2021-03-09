import React, { Component } from 'react'

export class StatePractice extends Component {

    

    constructor(){
        super()
        this.state = {
            inputText: '',
            imageWidth: ''
        }
        this.handleFocus = this.handleFocus.bind(this)
        this.handleOnLoad = this.handleOnLoad.bind(this)
        
    }

    

    handleFocus = (e) => {
        // console.dir(e.target.value)
        this.setState({
            inputText: "agree?"
        })
    }

    handleMouseEnter = (e) => {
        this.setState({
            inputText: ''
        })
    }

    handleOnLoad = (e) => {

        const imgW = e.target.clientWidth

        if (imgW > 100) {
            this.setState({
                // imageWidth: e.target.clientWidth
                imageWidth: 'Its TOO BIG!!'
            })
        }

        // console.log(this.state.imageWidth > 100)
        // console.log(typeof(this.state.imageWidth))
        // console.log(parseInt(this.state.imageWidth))
    }

    componentDidUpdate = () => {
        console.log(this.state.imageWidth)
    }




    render() {
        return (
            <div>
                <input type="text" onFocus={this.handleFocus}/>
                <h3 onMouseEnter={this.handleMouseEnter}>{this.state.inputText}</h3>
                <img onLoad={this.handleOnLoad} src="https://picsum.photos/200/300" alt=""/>
                {/* <p>{this.handleOnLoad}</p> */}
                <p>{this.state.imageWidth}</p>
            </div>
        )
    }
}

export default StatePractice
