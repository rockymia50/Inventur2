// ./react-redux-client/src/components/ItemForm.js
import React from 'react';
import { ControlLabel,FormControl,Button } from 'react-bootstrap';

import styled from 'styled-components';
import img from './goldie.jpg'

const AddFormStyle = styled.div`
background-image: url(${img});
background-position: center;
background-repeat: no-repeat;
background-size: cover;
color: white;
min-height: 400px;
width:70%;
text-align: center;
margin-left: 17%;

border-radius: 27px 27px 27px 27px;
-moz-border-radius: 27px 27px 27px 27px;
-webkit-border-radius: 27px 27px 27px 27px;
border: 0px solid #bd0009;

// COLOR ANIMATION
-webkit-animation: 5s infinite;

@-webkit-keyframes {
    from {background-color: red;}
    to {background-color: blue;}
}

// ANIMATION
-webkit-animation:bounce-in 1s ease-in-out 0s 1 normal;
-moz-animation:bounce-in 1s ease-in-out 0s 1 normal;
-ms-animation:bounce-in 1s ease-in-out 0s 1 normal;
animation:bounce-in 1s ease-in-out 0s 1 normal;


@-webkit-keyframes bounce-in {
0%{ opacity: 0; -webkit-transform: scale(.3); transform: scale(.3); }
50%{ opacity: 1; -webkit-transform: scale(1.0); transform: scale(1.0); }
70%{ -webkit-transform: scale(0.9); transform: scale(0.9); }
100%{ -webkit-transform: scale(1); transform: scale(1); }
}

@keyframes bounce-in {
0%{ opacity: 0; transform: scale(.3); }
50%{ opacity: 1; transform: scale(1.0); }
70%{ transform: scale(0.9); }
100%{ transform: scale(1); }
}
`;

const FormStyle = styled.div`
width:70%;
margin-left:15%;
`



const ItemForm = (props) => {
  return (
    <AddFormStyle>
    <form className="form form-horizontal" id="addItemForm" onSubmit={props.addItem}>
    <div className="row">
    <h3 className="centerAlign">Add Your Sneaker</h3>
    <div className="col-md-12">
    <FormStyle>
          <ControlLabel>Item: </ControlLabel>
            <FormControl
              type="text" placeholder="Enter item"
              name="itemText"
               />
        </FormStyle>
        </div>
        <div className="col-md-12">
        <FormStyle>
              <ControlLabel>Description: </ControlLabel>
                <FormControl
                  componentClass="textarea" placeholder="Enter description"
                  name="itemDesc"
                   />
            </FormStyle>
            </div>
          </div>
          <FormStyle>
              <Button type="submit" bsStyle="success" bsSize="large" block>Submit</Button>
          </FormStyle>
    </form>
    </AddFormStyle>
  );
}
export default ItemForm;