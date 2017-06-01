import React, { Component } from 'react';

export default class Controls extends Component {
  render() {
    const {addSimple, addPro} = this.props;

    return (
      <fieldset className="controls">
        <legend className="controls__legend">&nbsp;Панель управления&nbsp;</legend>
        <span className="controls__annotation">Добавить элемент:</span> 
        <nobr>
          <button 
            onClick={addSimple}
            className="controls__button">simple</button>
          <button
            onClick={addPro}
            className="controls__button">pro</button>
        </nobr>
      </fieldset>
    );
  }
}
