// ./react-redux-client/src/components/Item.js
import React from 'react';

export default class Item extends React.Component {
  componentDidMount(){
    this.props.mappedfetchItemById(this.props.params.id);
  }


  render(){
    const itemState = this.props.mappedItemState;
    return(
      <div className="itemDetail">
       <h2>Item Detail</h2>
         {!itemState.item && itemState.isFetching &&
           <div>
             <p>Loading Item....</p>
           </div>
         }
       {itemState.item && !itemState.isFetching &&
         <div>
           <h3>{itemState.item.itemText}</h3>
           <p>{itemState.item.itemDesc}</p>
         </div>
       }
      </div>
    );
  }
}