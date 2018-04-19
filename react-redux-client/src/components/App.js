// ./react-redux-client/src/components/App.js
import React from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import ItemForm from './ItemForm'
import styled from 'styled-components'
import img from './sneakercloset.jpg'

const BackGround = styled.div`
    background-image: url(${img});
    height: 900px;
  	background-position: center center;
			background-repeat:  no-repeat;
			background-size:  cover;
			background-color: #999;
`

export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.toggleAddItem = this.toggleAddItem.bind(this)
    this.addItem = this.addItem.bind(this)
  }
  toggleAddItem (e) {
    e.preventDefault()
    this.props.mappedToggleAddItem()
  }
  addItem (e) {
    e.preventDefault()
    const form = document.getElementById('addItemForm')
    if (form.itemText.value !== '' && form.itemDesc.value !== '') {
      const data = new FormData()
      data.append('itemText', form.itemText.value)
      data.append('itemDesc', form.itemDesc.value)
      this.props.mappedAddItem(data)
    } else {

    }
  }
  render () {
    const appState = this.props.mappedAppState
    return (
      <div>
        <Navbar inverse collapseOnSelect className='customNav'>
          <Navbar.Header>
            <Navbar.Brand>
              <a href='/#'>Inventur</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <LinkContainer to={{ pathname: '/', query: {} }}>
                <NavItem eventKey={1}>Home</NavItem>
              </LinkContainer>
            </Nav>
            <Nav pullRight>
              <LinkContainer
                to={{ pathname: '/', query: {} }}
                onClick={this.toggleAddItem}
              >
                <NavItem eventKey={1}>Add Item</NavItem>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <BackGround>
          {appState.showAddItem && <ItemForm addItem={this.addItem} />}
          {/* Each Smaller Components */}
          {this.props.children}
        </BackGround>
      </div>
    )
  }
}
