import React from 'react';
import PropTypes from 'prop-types';
import RenameTodo from './RenameTodo';

class TodoItem extends React.Component {
  static propTypes = {
    id: PropTypes.number.isRequired, // string in online version
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
    this.setState({ renameToggleVisible: true });
  } 

  onMouseLeave = () => {
    this.setState({ renameToggleVisible: false });
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
      : <span style={{display: 'none'}}></span>;

    let renameToggle = (this.state.renameToggleVisible)
      ? <button 
          className='btn-edit'
          onClick={() => onEditButtonClicked(id)}>
          <i className="fas fa-pen"></i>
        </button>
        : <span style={{display: 'none'}}></span>;
    
    return (
      <div 
        className={'todo' + ((completed) ? ' todo-completed' : '')}
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
        <span>{text}</span>
        {renameToggle}
        {renameTodo}
        <button 
          className='btn-delete'
          onClick={() => onDeleteButtonClicked(id)}>
          <i className="fas fa-times-circle"></i>
        </button>
      </div>
    )
  }
}

export default TodoItem
