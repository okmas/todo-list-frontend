import { connect } from 'react-redux'
import MainView from '../components/MainView'
import { 
  renameTodo, 
  deleteTodo,
  toggleTodo,
  checkTodo,
  uncheckTodo,
  toggleEditField
} from '../app/actions'

const mapStateToProps = state => ({
  todos: state.todos,
  filter: state.filter,
  idOfEdit: state.idOfEdit
})

const actionCreators = {
  renameTodo, 
  deleteTodo,
  toggleTodo,
  checkTodo,
  uncheckTodo,
  toggleEditField
}

const MainViewContainer = connect(mapStateToProps, actionCreators)(MainView);

export default MainViewContainer;