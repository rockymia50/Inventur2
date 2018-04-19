// ./react-redux-client/src/containers/Item.js
import { connect } from 'react-redux';
import * as itemActions from '../actions/itemActions';
import Item from '../components/Item';


// map state from store to props
const mapStateToProps = (state) => {
  return {
    //you can now say this.props.mappedAppSate
    mappedItemState: state.itemState
  }
}


// map actions to props
const mapDispatchToProps = (dispatch) => {
  return {
    //you can now say this.props.mappedAppActions
    mappedfetchItemById: itemId => dispatch(itemActions.fetchItemById(itemId))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Item);