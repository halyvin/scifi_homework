import React, { Component } from 'react';

export default class Status extends Component {
  render() {
    const {all, checked} = this.props;
    const checkedFlipped = checked.filter(i => i.flipped).length;
    const checkedUnflipped = checked.filter(i => !i.flipped).length;

    return (
      <fieldset className="status">
        <legend className="status__legend">&nbsp;Статус&nbsp;</legend>
        <ul className="status__list">
          <li className="status__item">Всего &mdash; <span className="status__itemCount">{all}</span></li>
          <li className="status__item">Отмеченных &mdash; <span className="status__itemCount">{checked.length}</span></li>
          <li className="status__item">
            <ul className="status__checked">
              <li className="status__checkedItem">
                перевернутых &mdash; <span className="status__itemCount">{checkedFlipped}</span>
              </li>
            
              <li className="status__checkedItem">
                неперевернутых &mdash; <span className="status__itemCount">{checkedUnflipped}</span>
              </li>
            </ul>
          </li>
        </ul>
      </fieldset>
    );
  }
}
