// ./react-redux-client/src/actions/itemActions.js
const apiUrl = "http://localhost:3001/api/";
//apiUrl = '/api';
export const toggleAddBook = () => {
  return {
    type: 'TOGGLE_ADD_ITEM'
  }
}
export const addNewItem = (item) => {console.log(item)
  return (dispatch) => {
    dispatch(addNewItemRequest(item));
    return fetch(apiUrl, {
      method:'post',
      body: item,
    }).then(response => {
      if(response.ok){
        response.json().then(data => {console.log(data.item);
          dispatch(addNewItemRequestSuccess(data.item, data.message))
        })
      }
      else{
        response.json().then(error => {
          dispatch(addNewItemRequestFailed(error))
        })
      }
    })
  }
}
export const addNewItemRequest = (item) => {
  return {
    type: 'ADD_NEW_ITEM_REQUEST',
    item
  }
}
export const addNewItemRequestSuccess = (item,message) => {
  return {
    type: 'ADD_NEW_ITEM_REQUEST_SUCCESS',
    item:item,
    message:message
  }
}
export const addNewItemRequestFailed = (error) => {
  return {
    type: 'ADD_NEW_ITEM_REQUEST_FAILED',
    error
  }
}
//Async action
export const fetchItems = () => {
  // Returns a dispatcher function
  // that dispatches an action at later time
  return (dispatch) => {
dispatch(fetchItemsRequest());
    // Returns a promise
    return fetch(apiUrl)
                .then(response => {
                  // ITEM handle no data scenario
                  if(response.ok){
                    response.json().then(data => {
                      dispatch(fetchItemsSuccess(data.items,data.message));
                    })
                    .catch(error => {
                      // ITEM
                      console.error(error);
                    })
                  }
                  else{
                    response.json().then(error => {
                      dispatch(fetchItemsFailed(error));
                    })
                    .catch(error => {
                      // ITEM
                      console.error(error);
                    })                    
                  }
                })
}
}
export const fetchItemsRequest = () => {
  return {
    type:'FETCH_ITEMS_REQUEST'
  }
}
//Sync action
export const fetchItemsSuccess = (items,message) => {
  return {
    type: 'FETCH_ITEMS_SUCCESS',
    items: items,
    message: message,
    receivedAt: Date.now
  }
}
export const fetchItemsFailed = (error) => {
  return {
    type:'FETCH_ITEMS_FAILED',
    error
  }
}
export const fetchItemById = (itemId) => {
  return (dispatch) => {
    dispatch(fetchItemRequest());
      // Returns a promise
      return fetch(apiUrl + itemId)
             .then(response => {console.log(response)
               if(response.ok){
                 response.json().then(data => {
                   dispatch(fetchItemSuccess(data.item[0], data.message));
                 })
               }
               else{
                 response.json().then(error => {
                   dispatch(fetchItemFailed(error));
                 })
               }
             })
}
}
export const fetchItemRequest = () => {
  return {
    type:'FETCH_ITEM_REQUEST'
  }
}
//Sync action
export const fetchItemSuccess = (item,message) => {
  return {
    type: 'FETCH_ITEM_SUCCESS',
    item: item,
    message: message,
    receivedAt: Date.now
  }
}
export const fetchItemFailed = (error) => {
  return {
    type:'FETCH_ITEM_FAILED',
    error
  }
}
export const showEditModal = (itemToEdit) => {
  return {
    type:'SHOW_EDIT_MODAL',
    item:itemToEdit
  }
}
export const hideEditModal = () => {
  return {
    type:'HIDE_EDIT_MODAL'
  }
}
export const editItem = (item) => {
    return (dispatch) => {
      dispatch(editItemRequest(item));
      return fetch(apiUrl, {
        method:'put',
        body:item
      }).then(response => {
        if(response.ok){
          response.json().then(data => {
            dispatch(editItemSuccess(data.item,data.message));
          })
          .catch(error => {
            // ITEM
            console.error(error);
          })
        }
        else{
          response.json().then(error => {
            dispatch(editItemFailed(error));
          })
          .catch(error => {
            // ITEM
            console.error(error);
          })              
        }
      })
    }
}
export const editItemRequest = (item) => {
   return {
     type:'EDIT_ITEM_REQUEST',
     item
   }
}
export const editItemSuccess = (item,message) => {
  return {
    type:'EDIT_ITEM_SUCCESS',
    item:item,
    message:message
  }
}
export const editItemFailed = (error) => {
  return {
    type:'EDIT_ITEM_FAILED',
    error
  }
}
export const deleteItem = (item) => {
  return (dispatch) => {
    dispatch(deleteItemRequest(item));
    return fetch(apiUrl + item._id ,{
      method:'delete'
    }).then(response => {
      if(response.ok){
        response.json().then(data => {
          dispatch(deleteItemSuccess(data.message));
        })
      }
      else{
        response.json().then(error => {
          dispatch(deleteItemFailed(error));
        })
      }
    })
}
}
export const deleteItemRequest = (item) => {
   return {
     type:'DELETE_ITEM_REQUEST',
     item
   }
}
export const deleteItemSuccess = (message) => {
  return {
    type:'DELETE_ITEM_SUCCESS',
    message:message
  }
}
export const deleteItemFailed = (error) => {
  return {
    type:'DELETE_ITEM_FAILED',
    error
  }
}
export const showDeleteModal = (itemToDelete) => {
  return {
    type:'SHOW_DELETE_MODAL',
    item:itemToDelete
  }
}
export const hideDeleteModal = () => {
  return {
    type:'HIDE_DELETE_MODAL'
  }
}
