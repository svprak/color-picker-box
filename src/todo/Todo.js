import React, { Component } from 'react'
import './Todo.css'

export default class Todo extends Component {
    constructor(props) {
        super(props)
        this.handleRemove = this.handleRemove.bind(this)
    }
    handleRemove() {
        //call remove form the parent
        //this.props.removeItem(this.props.id)
        this.props.removeItem(this.props.id)
    }
    render() {
        return (

            <div className="Todo-item">{this.props.item} <button onClick={this.handleRemove}>x</button></div>

        )
    }
}
