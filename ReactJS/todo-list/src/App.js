import React, { Component } from 'react'
import './App.css';
import axios from 'axios'
import Header from './components/layout/Header'
import AddTodo from './components/pages/AddTodo'
import Todos from './components/pages/Todos'

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: []
        }
    }

    getData = () => {
        axios.get('https://btm-rn.herokuapp.com/api/v1/todo')
            .then(res => this.setState({ todos: res.data.results }))
    }

    componentDidMount() {
        this.getData()
        setInterval(this.getData, 100)
    }

    delTodo = (id) => {
        axios.delete(`https://btm-rn.herokuapp.com/api/v1/todo/${id}`)
            .then(res => console.log('deleting', res.data))
            // .then(res => res.data)
    }

    addTodo = (title) => {
        axios.post('https://btm-rn.herokuapp.com/api/v1/todo/', {
            title: title,
            isComplete: false
        })
            // this.setState({
            //     todos: [...this.state.todos, res.data.results]
            // })
            // .then(res => {
            //     console.log('addTodo', res.data.results)
            // })
            // .then(res => res.data.results)
    }

    updateData = (id, title) => {
        axios.put(`https://btm-rn.herokuapp.com/api/v1/todo/${id}`, {
            title: title
        })
            .then(res => {
                console.log('update', res.data.results)
            })
            // .then(res => res.data.results)
    }

    markComplete = (id) => {
            this.state.todos.map(todo => {
                if (todo._id === id) {
                    console.log(todo._id, "todo is complete", todo.isComplete)
                    axios.put(`https://btm-rn.herokuapp.com/api/v1/todo/${id}`, {
                        isComplete: !todo.isComplete
                    })
                    .then(res => (console.log(res.data.results)))
                    // .then(res => res.data.results)
                }  
                return todo
            })
    }

    render() {
        return (
            <div className="App">
                <div className="container">
                    <Header />
                    <React.Fragment>
                        <AddTodo addTodo={this.addTodo} />
                        <Todos 
                            todos={this.state.todos} 
                            markComplete={this.markComplete} 
                            delTodo={this.delTodo} 
                            updateData={this.updateData} 
                        />
                    </React.Fragment>
                </div>
            </div>
        )
    }
}
