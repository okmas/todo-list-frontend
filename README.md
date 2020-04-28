Short Description
-----------------
Implementation of the front end part a simple todo app. Developed using React & Redux and plain CSS for styling. It's main 
purpose is to showcase my proficiency in React.

There are two versions (each in its own branch): 
- `master` is an 'online' version, which uses AJAX to communicate with a server API on backend
- `offline-version` is there to showcase the functionality without the need of a backend

Installation
-----------------
- Checkout this repository
- `npm install`
- `npm start` will start server on `http://localhost:3000`

Comment on the app design (React)
-----------------
I decided to use a container-representational model, where containers are dedicated components, which only communicate with 
Redux (dispatch actions and set global state) and have no real representation in the DOM and representational components are 
implemented React components, which have no „clue” about React, meaning they can be much more easily reusable.
- Container components: MainViewContainer, FilterContainer
- Mixed component: AddTodo (I figured it wouldn't be elegant to split this one into a container and a representational, so 
this one is the only component that splits the pattern.)
- Representational: all the other ones

Frameworks and libraries used
-----------------
- `react`
- `react-redux` for managing state and information flow
- `axios` for AJAX
- `redux-thunk` for asynchronous action creators in Redux
- `redux-batched-actions` for dispatching actions in bundles instead of one by one