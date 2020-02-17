import React, {Component} from 'react'

class TodoForm extends Component{
    constructor() {
        super();
        this.state = {
            todo: "",
        }
    }
    handleChanges = e => {
        this.setState({[e.target.name]:e.target.value})

    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.addTodo(e, this.state.todo)
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text"></input>
                <button>Add</button>
                <button onClick={this.props.clearPurchased}>Clear All</button>
            </form>
        )
    }
}
export default TodoForm