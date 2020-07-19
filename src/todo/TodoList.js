import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Todo from './Todo'
import NewTodoForm from './NewTodoForm'
import './TodoList.css'
export default class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [{ item: "Clean Kitchen", id: "1234", done: false }]
        }
        this.addItem = this.addItem.bind(this)
        this.removeItem = this.removeItem.bind(this)
    }
    removeItem(id) {
        // console.log("Removing item", id)
        this.setState(prevState => {
            return {
                items: prevState.items.filter(item => item.id !== id)
            }
        })
    }
    addItem(item) {
        const newItem = { ...item, id: uuidv4() }
        this.setState(prevState => {
            return {
                items: [...prevState.items, newItem]
            }
        })
    }
    render() {
        // console.log('current state', this.state.items)
        let todoItems = this.state.items.map(item => <Todo key={item.id} id={item.id} done={item.done} item={item.item} removeItem={this.removeItem} />)

        return (
            <div className="TodoList">
                <div className="TodoList-title">
                    <h1>Todo List</h1>
                    <p>A Simple React Todo List App.</p>
                </div>
                {todoItems}
                <NewTodoForm addItem={this.addItem} />
            </div>
        )
    }
}
