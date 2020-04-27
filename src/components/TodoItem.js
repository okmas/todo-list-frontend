import React from 'react';
import PropTypes from 'prop-types';
import RenameTodo from './RenameTodo';

class TodoItem extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    showRenameTodo: PropTypes.bool.isRequired,
    onCheckmarkToggled: PropTypes.func.isRequired,
    onRenameButtonClicked: PropTypes.func.isRequired,
    onDeleteButtonClicked: PropTypes.func.isRequired,
    onEditButtonClicked: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      renameButtonVisible: false
    }
  }
  
  onMouseEnter = () => {
    this.setState({ renameButtonVisible: true });
  } 

  onMouseLeave = () => {
    this.setState({
      renameButtonVisible: false
    });
  } 

  render() {
    const { 
      id, text, completed, 
      showRenameTodo,
      onCheckmarkToggled, 
      onRenameButtonClicked, 
      onDeleteButtonClicked,
      onEditButtonClicked
    } = this.props;
    
    let renameTodo = (showRenameTodo)
      ? <RenameTodo 
          id={id} 
          onSubmit={onRenameButtonClicked}
          destroySelf={() => onEditButtonClicked(id)}
        />
      : <span></span> 

    let renameToggle = (this.state.renameButtonVisible)
      ? <button 
          className='btn-edit'
          onClick={() => onEditButtonClicked(id)}>
          {'<-'}
        </button>
      : <span></span>
    
    return (
      <div 
        className={'todo-container' + ((completed) ? ' todo-completed' : '')}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
      >
        <label className='checkbox-container'>
          <input 
            type='checkbox'
            checked={(completed) ? 'checked' : ''}
            onChange={() => onCheckmarkToggled(id)}
          />
          <span className='checkmark'></span>
        </label>
        <p>{text}</p>
        {renameToggle}
        {renameTodo}
        <button 
          className='btn-delete'
          onClick={() => onDeleteButtonClicked(id)}>
          X
        </button>
      </div>
    )
  }
}

export default TodoItem
