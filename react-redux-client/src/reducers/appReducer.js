// ./react-redux-client/src/reducers/appReducer.js
const INITIAL_STATE = {
    showAddItem: false
  }
  const appReducer = (currentState = INITIAL_STATE, action) => {
    switch (action.type) {
      case 'TOGGLE_ADD_ITEM':
            return {
              ...currentState,showAddItem: !currentState.showAddItem
            }
  default:
         return currentState;
  }
  }
  export default appReducer;
  