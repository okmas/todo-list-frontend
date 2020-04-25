import React from 'react';
import PropTypes from 'prop-types';
import RenameTodo from './RenameTodo';

class TodoItem extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    onCheckmarkToggled: PropTypes.func.isRequired,
    onRenameButtonClicked: PropTypes.func.isRequired,
    onDeleteButtonClicked: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      renameTodo: <span></span>,
      renameButtonVisible: false
    }
  }

  hideRenameTodo = () => {
    this.setState({ renameTodo: <span></span> });
  }

  showRenameTodo = (id, onRenameButtonClicked) => {
    this.setState({ renameTodo: 
      <span id={`rename-${id}`}>
        <RenameTodo id={id} 
                    onSubmit={onRenameButtonClicked}
                    destroySelf={this.hideRenameTodo}
        />
      </span> 
    });
  }
  
  toggleRenameButton = (id, onRenameButtonClicked) => {
    if (!document.getElementById(`rename-${id}`)) {
      this.showRenameTodo(id, onRenameButtonClicked);
    } else {
      this.hideRenameTodo();
    }
  }

  onMouseEnter = () => {
    this.setState({ renameButtonVisible: true });
  } 

  onMouseLeave = () => {
    this.setState({ 
      renameTodo: <span></span>,
      renameButtonVisible: false
    });
  } 

  getRenameButton = (id, onRenameButtonClicked) => {
    return (this.state.renameButtonVisible)
      ? <button className='button-rename'
                onClick={() => this.toggleRenameButton(id, onRenameButtonClicked)}
        >{'<-'}</button>
      : <span></span>
  }

  render() {
    const { id, text, completed, 
            onCheckmarkToggled, 
            onRenameButtonClicked, 
            onDeleteButtonClicked} = this.props;
    
    return (
      <div className={'todo-item-container' + ((completed) ? ' completed' : '')}
           onMouseEnter={this.onMouseEnter}
           onMouseLeave={this.onMouseLeave}>
        <label className='checkbox-container'>
          <input type='checkbox' 
                  checked={(completed) ? 'checked' : ''} 
                  onChange={() => onCheckmarkToggled(id)}
          />
          <span className='checkmark'></span>
        </label>
        <p>{text}</p>
        {this.getRenameButton(id, onRenameButtonClicked)}
        {this.state.renameTodo}
        <button className='button-delete'
                onClick={() => onDeleteButtonClicked(id)}
        >X</button>
      </div>
    )
  }
}

export default TodoItem
