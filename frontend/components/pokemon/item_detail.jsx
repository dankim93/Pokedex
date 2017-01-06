import React from 'react';
import { withRouter } from 'react-router';

const ItemDetail = (props) => {
  console.log(props);
  return (
    <div>
      <li>Name: {props.item.name}</li>
      <li>Price: {props.item.price}</li>
      <li>Happiness: {props.item.happiness}</li>
    </div>
  );
};

export default withRouter(ItemDetail);
