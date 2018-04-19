// ./react-redux-client/src/reducers/itemReducer.js
const INITIAL_STATE = {
  items: [],
  item: null,
  isFetching: false,
  error: null,
  successMsg: null,
  showDeleteModal: false,
  itemToDelete: null,
  showEditModal: false,
  itemToEdit: null,
  newItem: null
}
const itemReducer = (currentState = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FETCH_ITEMS_REQUEST':
      return {
        ...currentState,
        items: [],
        item: null,
        isFetching: true,
        error: null,
        successMsg: null,
        showDeleteModal: false,
        itemToDelete: null,
        showEditModal: false,
        itemToEdit: null
      }
    case 'FETCH_ITEMS_SUCCESS':
      return {
        ...currentState,
        items: action.items,
        item: null,
        isFetching: false,
        error: null,
        successMsg: action.message,
        showDeleteModal: false,
        itemToDelete: null,
        showEditModal: false,
        itemToEdit: null
      }
    case 'FETCH_ITEMS_FAILED':
      return {
        ...currentState,
        items: [],
        item: null,
        isFetching: false,
        error: action.error,
        successMsg: null,
        showDeleteModal: false,
        itemToDelete: null,
        showEditModal: false,
        itemToEdit: null
      }
    case 'FETCH_ITEM_REQUEST':
      return {
        ...currentState,
        items: currentState.items,
        item: null,
        isFetching: true,
        error: null,
        successMsg: null,
        showDeleteModal: false,
        itemToDelete: null,
        showEditModal: false,
        itemToEdit: null
      }
    case 'FETCH_ITEM_SUCCESS':
      return {
        ...currentState,
        items: currentState.items,
        item: action.item,
        isFetching: false,
        error: null,
        successMsg: action.message,
        showDeleteModal: false,
        itemToDelete: null,
        showEditModal: false,
        itemToEdit: null
      }
    case 'FETCH_ITEM_FAILED':
      return {
        ...currentState,
        items: [],
        item: null,
        isFetching: false,
        error: action.error,
        successMsg: null,
        showDeleteModal: false,
        itemToDelete: null,
        showEditModal: false,
        itemToEdit: null
      }
    case 'ADD_NEW_ITEM_REQUEST':
      return {
        ...currentState,
        items: currentState.items,
        item: null,
        isFetching: true,
        error: null,
        successMsg: null,
        showDeleteModal: false,
        itemToDelete: null,
        showEditModal: false,
        itemToEdit: null,
        newItem: action.item
      }
    case 'ADD_NEW_ITEM_REQUEST_FAILED':
      return {
        ...currentState,
        items: currentState.items,
        item: null,
        isFetching: true,
        error: action.error,
        successMsg: null,
        showDeleteModal: false,
        itemToDelete: null,
        showEditModal: false,
        itemToEdit: null,
        newItem: null
      }
    case 'ADD_NEW_ITEM_REQUEST_SUCCESS':
      const nextState = {
        ...currentState,
        items: [...currentState.items, action.item],
        item: null,
        isFetching: false,
        error: null,
        successMsg: action.message,
        showDeleteModal: false,
        itemToDelete: null,
        showEditModal: false,
        itemToEdit: null,
        newItem: action.item
      }
      return nextState
    case 'SHOW_EDIT_MODAL':
      return {
        ...currentState,
        items: currentState.items,
        item: null,
        isFetching: false,
        error: null,
        successMsg: null,
        showDeleteModal: false,
        itemToDelete: null,
        showEditModal: true,
        itemToEdit: action.item,
        newItem: null
      }
    case 'HIDE_EDIT_MODAL':
      return {
        ...currentState,
        items: currentState.items,
        item: null,
        isFetching: false,
        error: null,
        successMsg: null,
        showDeleteModal: false,
        itemToDelete: null,
        showEditModal: false,
        itemToEdit: null,
        newItem: null
      }
    case 'EDIT_ITEM_REQUEST':
      return {
        ...currentState,
        items: currentState.items,
        item: null,
        isFetching: true,
        error: null,
        successMsg: null,
        showDeleteModal: false,
        itemToDelete: null,
        showEditModal: true,
        itemToEdit: action.item,
        newItem: null
      }
    case 'EDIT_ITEM_SUCCESS':
      const updatedItems = currentState.items.map(item => {
        if (item._id !== action.item._id) {
          // This is not the item we care about, keep it as is
          return item
        }
        // Otherwise, this is the one we want to return an updated value
        return { ...item, ...action.item }
      })
      return {
        ...currentState,
        items: updatedItems,
        item: null,
        isFetching: false,
        error: null,
        successMsg: action.message,
        showDeleteModal: false,
        itemToDelete: null,
        showEditModal: true,
        itemToEdit: action.item,
        newItem: null
      }
    case 'EDIT_ITEM_FAILED':
      return {
        ...currentState,
        items: currentState.items,
        item: null,
        isFetching: false,
        error: action.error,
        successMsg: null,
        showDeleteModal: false,
        itemToDelete: null,
        showEditModal: true,
        itemToEdit: currentState.itemToEdit,
        newItem: null
      }
    case 'DELETE_ITEM_REQUEST':
      return {
        ...currentState,
        items: currentState.items,
        item: null,
        isFetching: true,
        error: null,
        successMsg: null,
        showDeleteModal: true,
        itemToDelete: action.item,
        showEditModal: false,
        itemToEdit: null,
        newItem: null
      }
    case 'DELETE_ITEM_SUCCESS':
      const filteredItems = currentState.items.filter(
        item => item._id !== currentState.itemToDelete._id
      )
      return {
        ...currentState,
        items: filteredItems,
        item: null,
        isFetching: false,
        error: null,
        successMsg: action.message,
        showDeleteModal: true,
        itemToDelete: null,
        showEditModal: false,
        itemToEdit: null,
        newItem: null
      }
    case 'DELETE_ITEM_FAILED':
      return {
        ...currentState,
        items: currentState.items,
        item: null,
        isFetching: false,
        error: action.error,
        successMsg: null,
        showDeleteModal: true,
        itemToDelete: null,
        showEditModal: false,
        itemToEdit: null,
        newItem: null
      }
    case 'SHOW_DELETE_MODAL':
      return {
        ...currentState,
        items: currentState.items,
        item: null,
        isFetching: false,
        error: null,
        successMsg: null,
        showDeleteModal: true,
        itemToDelete: action.item,
        showEditModal: false,
        itemToEdit: null,
        newItem: null
      }
    case 'HIDE_DELETE_MODAL':
      return {
        ...currentState,
        items: currentState.items,
        item: null,
        isFetching: false,
        error: null,
        successMsg: null,
        showDeleteModal: false,
        itemToDelete: null,
        showEditModal: false,
        itemToEdit: null,
        newItem: null
      }

    default:
      return currentState
  }
}

export default itemReducer
