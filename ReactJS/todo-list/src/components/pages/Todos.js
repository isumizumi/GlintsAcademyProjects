import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TodoItem from './TodoItem';

class Todos extends Component {
    render() {
        // const todos = this.state.todos.map((todo) => {
        //     return (
        //         <div>
        //             {todo.title}
        //             <button onClick={this.delTodo.bind(this, todo._id)} style={{ float: 'right' }}>
        //                 <i className="fa fa-trash" aria-hidden="true"></i>
        //             </button>
        //         </div>
        //     )todo
        // })
        return this.props.todos.map((todo) => (
            <TodoItem
                key={todo._id}
                todo={todo}
                markComplete={this.props.markComplete}
                delTodo={this.props.delTodo}
                updateData={this.props.updateData}
            />
        ))
    }
}

Todos.propTypes = {
    todos: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}

export default Todos
