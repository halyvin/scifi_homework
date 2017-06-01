import React, { Component } from 'react';

export default class Alarm extends Component {
  render() {
    const { cancel, accept } = this.props;

    return (
      <div className="alarm">
        <div className="alarm__body">
          <div className="alarm__text">
            Удалить элемент?
          </div>
          <button
            onClick={cancel}
            className="alarm__button _type_cancel">Отмена</button>
          <button
            onClick={accept}
            className="alarm__button _type_ok">OK</button>
        </div>
      </div>
    );
  }
}
