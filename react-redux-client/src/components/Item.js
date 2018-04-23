// ./react-redux-client/src/components/Item.js
import React from 'react';
import styled from 'styled-components';
import img from './AJ3.jpg'

const ItemDetail = styled.div`
background-image: url(${img});
background-position: center;
background-repeat: no-repeat;
background-size: cover;
color: white;
min-height: 400px;
width:70%;
text-align: center;
margin-left: 19%;
a

`;

export default class Item extends React.Component {
  componentDidMount(){
    this.props.mappedfetchItemById(this.props.params.id);
  }


  render(){
    const itemState = this.props.mappedItemState;
    return(
      
      <ItemDetail>
       <h2>Sneaker Detail</h2>
         {!itemState.item && itemState.isFetching &&
           <div>
             <p>Sneaker Item....</p>
           </div>
         }
       {itemState.item && !itemState.isFetching &&
         <div>
           <h3>{itemState.item.itemText}</h3>
           <p>{itemState.item.itemDesc}</p>
         </div>
       }
      </ItemDetail>
      
    );
  }
}