
import React, { Component } from 'react';

class Form extends Component {

    constructor() {
        super() // sets this.props
        this.state = {
            name: '',
            calories: '',
            image: ''
        }
    }

    handleChange(event) {
        let { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleSubmit(event) {
        event.preventDefault();
        alert('yes')
        this.props.addAFood(this.state);
        this.setState({
            name: '',
            calories: '',
            image: ''
        })
    }

    render() {
        return (
            <form onSubmit={(e) => this.handleSubmit(e)}>
                <label>name:</label>
                <input onChange={(e) => this.handleChange(e)} type="text" value={this.state.name} name="name" />
                <label>calories:</label>
                <input onChange={(e) => this.handleChange(e)} type="text" value={this.state.calories} name="calories" />
                <label>image:</label>
                <input onChange={(e) => this.handleChange(e)} type="text" value={this.state.image} name="image" />
                <button>Submit!</button>
            </form>
        )
    }
}

export default Form;