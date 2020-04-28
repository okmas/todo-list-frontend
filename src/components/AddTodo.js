import React from 'react'
import { addTodo } from '../app/actions' 
import { connect } from 'react-redux';

const placeholders = [
  `What needs to get done?`,
  `Tell me the next thing to do...`,
  `What's on your mind?`,
  `Let's get this going...`,
  `Next task to do is...`
]

let textInput = null;

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      placeholder: placeholders[Math.floor(Math.random() * placeholders.length)]
    }
  }

  onSubmit(event) {
    event.preventDefault();
    if (textInput.value.trim() !== '') {
      this.props.dispatch(addTodo(textInput.value));
      textInput.value = '';
      textInput.focus();
      this.setState({
        placeholder: placeholders[Math.floor(Math.random() * placeholders.length)]
      });
    }
  }

  render = () => (
    <form onSubmit={(event) => {this.onSubmit(event)}} id='add-todo'>
      <input 
        type='text'
        placeholder={this.state.placeholder}
        ref={el => {textInput = el}}
      />
      <input 
        id='btn-add-todo'
        type='submit'
        value='Add'
      />
    </form>
  )
}

AddTodo = connect()(AddTodo);

export default AddTodo;
