import React, { Component } from 'react'

class Introduction extends Component {
    constructor(props){
        super(props);

        this.state = {
            message: 'Hello Nasim how are you what are you doing',
            userInput: '',
        }
        this.handleInput = this.handleInput.bind(this);
    }
    handleInput= (e) => {
        const { value } = e;
         this.setState({ userInput: value })
        }
    render(){
        return (
            <div>
            <input value={this.state.userInput} onChange={this.handleInput.bind(this)} />
                <h1>{this.state.message}</h1>
            </div>
        )
    }
}

export default Introduction;