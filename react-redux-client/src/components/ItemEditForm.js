// ./react-redux-client/src/components/ItemEditForm.js
import React from 'react';
import { FormGroup,ControlLabel,FormControl,Button } from 'react-bootstrap';
import styled from 'styled-components';
import img from './yeezy.jpeg'

const FormStyle = styled.div`
background-image: url(${img});
background-position: center;
background-repeat: no-repeat;
background-size: cover;
color: white;
min-height: 400px;
width:70%;
text-align: center;
margin-left: 19%;
`;


const ItemEditForm = (props) => {
  return (
    <FormStyle>
    <form className="form form-horizontal" id="EditItemForm" onSubmit={props.editItem}>
    <div className="row">
    <div className="col-md-12">
    <FormGroup>
          <ControlLabel>Item: </ControlLabel>
          <input type="hidden" value={props.itemData._id} name="id"/>
            <FormControl
              type="text" placeholder="Enter item"
              name="itemText" defaultValue={props.itemData.itemText}
               />
        </FormGroup>
        </div>
        <div className="col-md-12">
        <FormGroup>
              <ControlLabel>Description: </ControlLabel>
                <FormControl
                  componentClass="textarea" placeholder="Enter description"
                  name="itemDesc" defaultValue={props.itemData.itemDesc}
                   />
            </FormGroup>
            </div>
          </div>
          <FormGroup>
              <Button type="submit" bsStyle="success" bsSize="large" block>Submit</Button>
          </FormGroup>
    </form>
    </FormStyle>
  );
}

export default ItemEditForm;