import React, { Component } from 'react'
import "./NewTodoForm.css"
export default class NewTodoForm extends Component {
    constructor(props) {
        super(props)
        this.state = { item: "" }
        this.handleAddItem = this.handleAddItem.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(evt) {
        evt.preventDefault()
        this.props.addItem(this.state)
        this.setState({
            item: ""
        })
    }
    handleAddItem(evt) {
        this.setState(
            { [evt.target.name]: evt.target.value }
        )
    }
    render() {
        // console.log(this.state)
        return (
            <div className="NewTodoForm">
                <form className="NewTodoForm-form" onSubmit={this.handleSubmit}>

                    <label htmlFor="item">New Todo</label>
                    <div>
                        <input id="item" name="item" value={this.state.item} placeholder="New Todo" onChange={this.handleAddItem} />
                        <button>Add Todo</button>
                    </div>

                </form>
            </div>
        )
    }
}
