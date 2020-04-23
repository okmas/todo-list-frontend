import React from 'react';
import './css/App.css';
import axios from 'axios'
import Header from './components/Header'
import VisibleTodoList from './containers/VisibleTodoList'
import AddTodo from './components/AddTodo'

export default class App extends React.Component {
  state = {
    todos: []
  }
  
  // Load todos on start-up
  componentDidMount() {
    // HTTP request
    /*axios.get('http://localhost:8080/todos')
         .then(res => {
           // local handling
           this.setState({ todos: [...res.data] });
         })
         .catch(function (error) {
           console.log(error);
         });*/
    
  }
  
  // Add new todo
  addNewTodo = text => {
    // HTTP request
    axios.post('http://localhost:8080/todos', {'text': text})
         .then(res => {
           // local handling
           this.setState({ todos: [...this.state.todos, res.data] });
         })
         .catch(function (error) {
           console.log(error);
         });
  }

  // Remove Todo
  removeTodo = id => {
    // HTTP request
    axios.delete(`http://localhost:8080/todos/${id}`)
         .then(res => {
           // local hangling
           this.setState({ todos: [...this.state.todos.filter(el => el.id !== id)] });
         })
         .catch(function (error) {
           console.log(error);
         });
  }

  // Mark todo completed or uncompleted
  toggleTodoCompleted = (id) => {
    // help str
    var str = this.state.todos.find(el => el.id === id).completed ? 'in' : '';

    // HTTP request
    axios.post('http://localhost:8080/todos/' + id + '/' + str + 'complete')
         .then(res => {
           // local handling
           this.setState({ todos: [...this.state.todos.map(el => {
             if (id === el.id) {
               el.completed = !el.completed;
             }
             return el;
           })] });
         })
         .catch(function (error) {
           console.log(error);
         });
  }

  render() {
    return (
      <div className='app-container'>
        <Header />
        <AddTodo />
        <VisibleTodoList />
      </div>
    );
  }
}
