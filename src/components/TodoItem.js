import React from 'react';
import PropTypes from 'prop-types';
import RenameTodo from './RenameTodo';

export class TodoItem extends React.Component {
  static propTypes = {
    id: PropTypes.number.isRequired, //string
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    onToggleTodo: PropTypes.func.isRequired,
    onRenameTodo: PropTypes.func.isRequired,
    onDeleteTodo: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      renameTodo: <div style={{display: 'inline'}}></div>
    }
  }

  state = {
    renameTodo: <div style={{display: 'inline'}}></div>
  }

  hideRenameTodo = (id) => {
    if (document.getElementById(`rename-${id}`)) {
      this.setState({ renameTodo: <div style={{display: 'inline'}}></div> });
    }
  }

  toggleRenameTodo = (id, onRenameTodo) => {
    if (!document.getElementById(`rename-${id}`)) {
      this.setState({ renameTodo: 
        <div id={`rename-${id}`} style={{display: 'inline'}}>
          <RenameTodo id={id} 
                      onRenameTodo={onRenameTodo}
                      onSubmit={this.hideRenameTodo}/>
        </div> });
    } else {
      this.setState({ renameTodo: <div style={{display: 'inline'}}></div> });
    }
  }

  render() {
    const { id, text, completed, 
            onToggleTodo, 
            onRenameTodo, 
            onDeleteTodo} = this.props;
    
    return (
      <div className={'todo-item-container' + ((completed) ? ' completed' : '')}>
        <label className='checkbox-container'>
          <input type='checkbox' 
                  defaultChecked={(completed) ? 'checked' : ''} 
                  onChange={() => onToggleTodo(id)}
          />
          <span className='checkmark'></span>
        </label>
        <p>{text}</p>
        <button className='button-rename'
                onClick={() => this.toggleRenameTodo(id, onRenameTodo)}
        >{'<-'}</button>
        {this.state.renameTodo}
        <button className='button-delete'
                onClick={() => onDeleteTodo(id)}
        >X</button>
      </div>
    )
  }
}

export default TodoItem
