// ./react-redux-client/src/components/Charts.js
import React from 'react';
import styled from 'styled-components';
import {Doughnut} from 'react-chartjs-2';

const Center = styled.div`
align-items: center;
justify-content: space-around;
display: flex;
float: none;
background-color: white;
bottom:10%;
`;

const data = {
    labels: [
        'Jordans',
        'Adidas',
        'Other'
    ],
    datasets: [{
        data: [150, 57,32 ],
        backgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56'
        ],
        hoverBackgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56'
        ]
    }]
};
export default class Charts extends React.Component {
    componentWillMount(){
    this.props.fetchItems();
  }
  render() {
        const itemState = this.props.mappedItemState;
    const items = itemState.items;
        // console.log(this.props);
    return (
      <div>
        <h2>Shoe Inventory</h2>
        <Doughnut data={data} />
                <h1>Count: {items.length}</h1>
      </div>
    );
  }
}