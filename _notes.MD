# Workflow
## First import the Provider to be render from react-redux
## Create reducers for the store
* create the mapper with recibe the state and and the action
* create an Static for an action
* return the state it self and the new value from the action.payload/data

## Create an Store using createStore from redux
  * create combineReducers to be pase of the createStore first parameter
  * pass the middleware as second parameter using applyMiddleware(thunk)
## Provider
* pass the store to the Provider as the store props
* encapsulate the main App as child

Note: to be more separately use the connect only where you'll need it

## Actions
### Create the Action Creators
* simple function which receive some customizable and return an object with  a Type for the action Type with he unique action name and another prop custom, like a data or payload
### Create the Action Dispatchers
* simple function with return a callback which will receive dispatch and will do something custom(optional) before to dispatch/call the correct action creator with the data that needed  

## Components
### Use Connect
* create mapStateToProps, which receive the state and return the prop objects to be receive from the store/state
* create mapDispatchToProps, which receive dispatch, and return the list of actions (action dispatchers) that are a bindActionCreatores and receive the Action and the dispatch like ({hello:world, save:save, etc...})
* import and use connect, from react redux, to get connected with the Store
* use connect which receive mapStateToProps and mapDispatchToProps and will return a callback which will receive the corresponding Component to manage the props pass coming from he store/state and from the dispatcher to be executed from the component
### Inside the component
* dispatch something by using the props.ACtionCreateName receiving its corresponding data and it will dispatch te corresponding
action dispatcher to modify the store

# NOTES

### Create a Python app to auto generate a new Reducer, with its constants, action creator and dispatcher



## Resources
* https://redux.js.org/basics/actions
* https://github.com/acdlite/flux-standard-action
* https://codesandbox.io/s/github/reactjs/redux/tree/master/examples/todomvc
