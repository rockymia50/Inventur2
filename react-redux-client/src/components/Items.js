// ./react-redux-client/src/components/Items.js
import React from 'react';
import { Alert,Glyphicon,Button,Modal } from 'react-bootstrap';
import { Link } from 'react-router';
import ItemEditForm from './ItemEditForm';
import styled from 'styled-components';


const Center = styled.div`
background: -webkit-linear-gradient(143deg, rgba(255,0,0,1) 0%, rgba(186,0,0,1) 27%, rgba(99,0,0,1) 61%, rgba(0,0,0,1) 100%); /* safari5.1+,chrome10+ */
background-position: center;
background-repeat: no-repeat;
background-size: cover;
color: white;
min-height: 400px;
width:70%;
text-align: center;
margin-left: 21%;
`;



export default class Items extends React.Component {
  constructor(props){
    super(props);
    this.hideEditModal = this.hideEditModal.bind(this);
    this.submitEditItem = this.submitEditItem.bind(this);
    this.hideDeleteModal = this.hideDeleteModal.bind(this);
    this.cofirmDeleteItem = this.cofirmDeleteItem.bind(this);
  }
componentWillMount(){
    this.props.fetchItems();
  }
showEditModal(itemToEdit){
     this.props.mappedshowEditModal(itemToEdit);
  }
hideEditModal(){
     this.props.mappedhideEditModal();
  }
submitEditItem(e){
    e.preventDefault();
    const editForm = document.getElementById('EditItemForm');
    if(editForm.itemText.value !== ""){
      const data = new FormData();
      data.append('id', editForm.id.value);
     data.append('itemText', editForm.itemText.value);
      data.append('itemDesc', editForm.itemDesc.value);
      this.props.mappedEditItem(data);
    }
    else{
      return;
    }
}
hideDeleteModal(){
    this.props.mappedhideDeleteModal();
  }
showDeleteModal(itemToDelete){
    this.props.mappedshowDeleteModal(itemToDelete);
  }
cofirmDeleteItem(){
 this.props.mappedDeleteItem(this.props.mappedItemState.itemToDelete);
  }
render(){
    const itemState = this.props.mappedItemState;
    const items = itemState.items;
    const editItem = itemState.itemToEdit;
    return(
      <Center>
      <div className="col-md-12">
      <h3 className="centerAlign">Items</h3>
      {!items && itemState.isFetching &&
        <p>Loading items....</p>
      }
      
      {items.length <= 0 && !itemState.isFetching &&
        <p>No Items Available. Add A Item to List here.</p>
      }
      {items && items.length > 0 && !itemState.isFetching &&
      <table className="table booksTable">
      <thead>
       <tr><th>Item</th><th className="textCenter">Edit</th><th className="textCenter">Delete</th><th className="textCenter">View</th></tr>
      </thead>
      <tbody>
        {items.map((item,i) => <tr key={i}>
        <td>{item.itemText}</td>
         <td className="textCenter"><Button onClick={() => this.showEditModal(item)} bsStyle="info" bsSize="xsmall"><Glyphicon glyph="pencil" /></Button></td>
         <td className="textCenter"><Button onClick={() => this.showDeleteModal(item)} bsStyle="danger" bsSize="xsmall"><Glyphicon glyph="trash" /></Button></td>
         <td className="textCenter"><Link to={`/${item._id}`}>View Details</Link> </td>
         </tr> )
      }
      </tbody>
      </table>
    }
{/* Modal for editing item */}
    <Modal
      show={itemState.showEditModal}
      onHide={this.hideEditModal}
      container={this}
      aria-labelledby="contained-modal-title"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title">Edit Your Item</Modal.Title>
      </Modal.Header>
      <Modal.Body>
    <div className="col-md-12">
    {editItem  &&
    <ItemEditForm itemData={editItem} editItem={this.submitEditItem} />
    }
    {editItem  && itemState.isFetching &&
      <Alert bsStyle="info">
  <strong>Updating...... </strong>
      </Alert>
    }
    {editItem  && !itemState.isFetching && itemState.error &&
      <Alert bsStyle="danger">
  <strong>Failed. {itemState.error} </strong>
      </Alert>
    }
    {editItem  && !itemState.isFetching && itemState.successMsg &&
      <Alert bsStyle="success">
  Book <strong> {editItem.itemText} </strong>{itemState.successMsg}
      </Alert>
    }
    </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={this.hideEditModal}>Close</Button>
      </Modal.Footer>
    </Modal>
{/* Modal for deleting item */}
    <Modal
    show={itemState.showDeleteModal}
    onHide={this.hideDeleteModal}
    container={this}
    aria-labelledby="contained-modal-title"
  >
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title">Delete Your Book</Modal.Title>
    </Modal.Header>
    <Modal.Body>
    {itemState.itemToDelete && !itemState.error && !itemState.isFetching &&
      <Alert bsStyle="warning">
 Are you sure you want to delete this item <strong>{itemState.itemToDelete.itemText} </strong> ?
</Alert>
    }
    {itemState.itemToDelete && itemState.error &&
      <Alert bsStyle="warning">
 Failed. <strong>{itemState.error} </strong>
</Alert>
    }
{itemState.itemToDelete && !itemState.error && itemState.isFetching &&
      <Alert bsStyle="success">
  <strong>Deleting.... </strong>
</Alert>
    }
{!itemState.itemToDelete && !itemState.error && !itemState.isFetching&&
      <Alert bsStyle="success">
 Item <strong>{itemState.successMsg} </strong>
</Alert>
    }
    </Modal.Body>
    <Modal.Footer>
     {!itemState.successMsg && !itemState.isFetching &&
       <div>
       <Button onClick={this.cofirmDeleteItem}>Yes</Button>
       <Button onClick={this.hideDeleteModal}>No</Button>
       </div>
    }
    {itemState.successMsg && !itemState.isFetching &&
      <Button onClick={this.hideDeleteModal}>Close</Button>
    }
    </Modal.Footer>
  </Modal>
      </div>
      </Center>
    );
  }
}
