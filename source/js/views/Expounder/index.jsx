import React, { Component } from 'react';

export default class Expounder extends Component {

  render() {
    const { event } = this.props;

    return (
      <div className="expounder"> {event} </div>
    );
  }
}
