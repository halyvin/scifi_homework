import React, { Component } from 'react';
import Item from '../Item';

export default class List extends Component {

  render() {
    const { items=[] } = this.props;

    return (
      <div className="list">
        {items.map(({id, checked, flipped, handlers, pro}) => <Item 
          id={id}
          key={id}
          pro={pro}
          checked={checked}
          flipped={flipped} 
          handlers={handlers}
        />)}
      </div>
    );
  }
}
