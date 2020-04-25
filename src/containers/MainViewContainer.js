import { connect } from 'react-redux'
import { toggleTodo, renameTodo, deleteTodo, checkMultipleTodos, deleteMultipleTodos } from '../app/actions'
import MainView from '../components/MainView'

const mapStateToProps = state => ({
  todos: state.todos,
  filter: state.filter
})

const actionCreators = {
  toggleTodo, renameTodo, deleteTodo, checkMultipleTodos, deleteMultipleTodos
}

const MainViewContainer = connect(mapStateToProps, actionCreators)(MainView);

export default MainViewContainer;