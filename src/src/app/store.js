import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import todoApp from './reducers'
import { enableBatching } from 'redux-batched-actions'

const loggerMiddleware = createLogger();

const store = createStore(
  enableBatching(todoApp),
  applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
    loggerMiddleware // middleware that logs actions
  )
);

export default store;
