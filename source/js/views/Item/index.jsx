import React, { Component } from 'react';

export default class Item extends Component {
  render() {
    const {flipped, checked, id, pro, handlers={} } = this.props;
    const {flip_item=()=>{}, check_item=()=>{}, remove_item=()=>{}} = handlers;
    const className = `item${ checked ? ' _checked': ''}${ flipped ? ' _flipped': ''}`;

    return (
      <div
        onDoubleClick={flip_item}
        onClick={check_item}
        className={className}>
        <div className="item__body">
          <div 
            onClick={e => {
                e.stopPropagation();
                remove_item();
              }
            }  
            className="item__remove">+</div>
          <div className="item__text">
            {pro ? 'pro: ': 'simple: '}{id}
          </div>
        </div>
      </div>
    );
  }
}
