// ./react-redux-client/src/components/ItemForm.js
import React from 'react';
import { FormGroup,ControlLabel,FormControl,Button } from 'react-bootstrap';
const ItemForm = (props) => {
  return (
    <form className="form form-horizontal" id="addItemForm" onSubmit={props.addItem}>
    <div className="row">
    <h3 className="centerAlign">Add Your Item</h3>
    <div className="col-md-12">
    <FormGroup>
          <ControlLabel>Item: </ControlLabel>
            <FormControl
              type="text" placeholder="Enter item"
              name="itemText"
               />
        </FormGroup>
        </div>
        <div className="col-md-12">
        <FormGroup>
              <ControlLabel>Description: </ControlLabel>
                <FormControl
                  componentClass="textarea" placeholder="Enter description"
                  name="itemDesc"
                   />
            </FormGroup>
            </div>
          </div>
          <FormGroup>
              <Button type="submit" bsStyle="success" bsSize="large" block>Submit</Button>
          </FormGroup>
    </form>
  );
}
export default ItemForm;