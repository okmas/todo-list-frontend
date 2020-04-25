import { connect } from 'react-redux'
import MainView from '../components/MainView'
import { 
  renameTodo_Remote, 
  deleteTodo_Remote,
  toggleTodo_Remote,
  checkTodo_Remote
} from '../app/actions'

const mapStateToProps = state => ({
  todos: state.todos,
  filter: state.filter
})

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo_Remote(id)),
  renameTodo: (id, text) => dispatch(renameTodo_Remote(id, text)),
  deleteTodo: id => dispatch(deleteTodo_Remote(id)),
  checkTodo: id => dispatch(checkTodo_Remote(id))
})

const MainViewContainer = connect(mapStateToProps, mapDispatchToProps)(MainView);

export default MainViewContainer;