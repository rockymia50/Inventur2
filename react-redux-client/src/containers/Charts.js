// ./react-redux-client/src/containers/Charts.js
import { connect } from 'react-redux';
import * as itemActions from '../actions/itemActions';
import Charts from '../components/Charts';
// map state from store to props
const mapStateToProps = (state,ownProps) => {
  return {
    //you can now say this.props.mappedAppSate
    mappedItemState: state.itemState
  }
}
// map actions to props
const mapDispatchToProps = (dispatch) => {
  return {
    //you can now say this.props.mappedAppActions
    fetchItems: () => dispatch(itemActions.fetchItems()),
    mappedEditItem: itemToEdit => dispatch(itemActions.editItem(itemToEdit)),
    mappedshowEditModal: itemToEdit => dispatch(itemActions.showEditModal(itemToEdit)),
    mappedhideEditModal: () => dispatch(itemActions.hideEditModal()),
    mappedDeleteItem: itemToDelete => dispatch(itemActions.deleteItem(itemToDelete)),
    mappedshowDeleteModal: itemToDelete => dispatch(itemActions.showDeleteModal(itemToDelete)),
    mappedhideDeleteModal: () => dispatch(itemActions.hideDeleteModal())
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Charts);