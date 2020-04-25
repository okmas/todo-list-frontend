import React from 'react';
import './css/App.css';
import axios from 'axios'
import Header from './components/Header'
import AddTodo from './components/AddTodo'
import MainViewContainer from './containers/MainViewContainer'

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
  
  render() {
    return (
      <div className='app-container'>
        <Header />
        <AddTodo />
        <MainViewContainer />
      </div>
    );
  }
}
