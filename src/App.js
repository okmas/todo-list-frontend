import React from 'react';
import './css/styles.css';
import Header from './components/Header'
import AddTodo from './components/AddTodo'
import MainViewContainer from './containers/MainViewContainer'

class App extends React.Component {
  render() {
    return (
      <div id='app'>
        <Header />
        <AddTodo />
        <MainViewContainer />
      </div>
    );
  }
}

export default App;
