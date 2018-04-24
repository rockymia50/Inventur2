// ./react-redux-client/src/components/App.js
import React from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import ItemForm from './ItemForm'
import styled from 'styled-components'
import img from './sneakershelf.gif'
// import img2 from './goldie.jpg';
// import ChatBot from 'react-simple-chatbot';


const BackGround = styled.div`
    background-image: url(${img});
    height:100vh;
  	background-position: center center;
			background-repeat:  no-repeat;
			background-size:  cover;
			background-color: #999;
`

const NavAnimate = styled.div`
color:white;
animation: animation 1500ms linear both;
@keyframes animation { 
  0% { transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  2.87% { transform: matrix3d(0.589, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  5.74% { transform: matrix3d(0.297, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  8.61% { transform: matrix3d(0.158, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  11.48% { transform: matrix3d(0.125, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  18.89% { transform: matrix3d(0.183, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  26.29% { transform: matrix3d(0.205, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  33.23% { transform: matrix3d(0.201, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  33.33% { transform: matrix3d(0.201, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  36.2% { transform: matrix3d(0.612, 0, 0, 0, 0, 0.589, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  39.07% { transform: matrix3d(0.902, 0, 0, 0, 0, 0.297, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  41.11% { transform: matrix3d(1.013, 0, 0, 0, 0, 0.185, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  41.94% { transform: matrix3d(1.04, 0, 0, 0, 0, 0.158, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  44.81% { transform: matrix3d(1.073, 0, 0, 0, 0, 0.125, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  47.9% { transform: matrix3d(1.055, 0, 0, 0, 0, 0.144, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  48% { transform: matrix3d(1.054, 0, 0, 0, 0, 0.145, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  50.54% { transform: matrix3d(1.03, 0, 0, 0, 0, 0.534, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  51.8% { transform: matrix3d(1.02, 0, 0, 0, 0, 0.713, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  52.22% { transform: matrix3d(1.017, 0, 0, 0, 0, 0.765, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  53.04% { transform: matrix3d(1.011, 0, 0, 0, 0, 0.855, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  54.31% { transform: matrix3d(1.005, 0, 0, 0, 0, 0.962, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  55.57% { transform: matrix3d(1, 0, 0, 0, 0, 1.03, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  55.99% { transform: matrix3d(0.999, 0, 0, 0, 0, 1.046, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  58.08% { transform: matrix3d(0.996, 0, 0, 0, 0, 1.081, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  59.63% { transform: matrix3d(0.995, 0, 0, 0, 0, 1.078, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  64.75% { transform: matrix3d(0.998, 0, 0, 0, 0, 1.024, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  66.67% { transform: matrix3d(0.999, 0, 0, 0, 0, 1.01, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  71.42% { transform: matrix3d(1, 0, 0, 0, 0, 0.996, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  74.44% { transform: matrix3d(1, 0, 0, 0, 0, 0.996, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  81.33% { transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  89.32% { transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  100% { transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); } 
}`



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
        {/* <img id="test" src={img2}></img> */}
        <Navbar inverse collapseOnSelect className='customNav'>
          <Navbar.Header>
            <NavAnimate>
            <Navbar.Brand>
        <a href="/#">Inventur</a>
      </Navbar.Brand>
            </NavAnimate>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <LinkContainer to={{ pathname: '/', query: {} }}>
                <NavItem eventKey={1}>Home</NavItem>
              </LinkContainer>
            </Nav>
            <Nav>
              <LinkContainer to={{ pathname: '/charts', query: {} }}>
                <NavItem eventKey={1}>Charts</NavItem>
              </LinkContainer>
            </Nav>
            <Nav pullRight>
              <LinkContainer
                to={{ pathname: '/', query: {} }}
                onClick={this.toggleAddItem}
              >
                <NavItem eventKey={1}>Add Sneaker</NavItem>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <BackGround>
          {appState.showAddItem && <ItemForm addItem={this.addItem} />}
          {/* Each Smaller Components */}
          {this.props.children}
          
        </BackGround>
        {/* <ChatBot
  steps={[
    {
      id: 'hello-world',
      message: 'Hello World!',
      end: true,
    },
  ]}
/> */}
      </div>
    )
  }
}
