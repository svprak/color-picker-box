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
        const style = {

            textDecoration: !this.props.done ? "" : "line-through"
        }
        console.log(this.props.done)
        return (
            <div className="Todo">
                <div className="Todo-item" style={style} onClick={this.handleDone}>
                    {this.props.item}
                </div>
                <div className="Todo-btn">
                    <button onClick={this.handleRemove}><i className="fas fa-pen"></i></button>
                    <button onClick={this.handleRemove}><i className="fas fa-trash"></i></button>
                </div>
            </div>
        )
    }
}
